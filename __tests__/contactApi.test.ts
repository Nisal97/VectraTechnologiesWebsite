import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { onRequestPost } from "@/functions/api/contact";

const mockEnv: Record<string, string> = {
  SUPABASE_URL: "https://example.supabase.co",
  SUPABASE_SERVICE_ROLE_KEY: "test-service-role-key",
  RESEND_API_KEY: "re_test_123456789",
  CONTACT_TO_EMAIL: "hello@vectrasolutions.net",
  CONTACT_FROM_EMAIL: "Vectra Solutions <noreply@vectrasolutions.net>",
};

function createRequest(body: unknown, rawBody?: string): Request {
  return new Request("https://vectrasolutions.net/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: rawBody !== undefined ? rawBody : JSON.stringify(body),
  });
}

function invokePost(
  request: Request,
  env: Record<string, string | undefined> = mockEnv
) {
  const context = {
    request,
    env,
  } as unknown as Parameters<typeof onRequestPost>[0];

  return onRequestPost(context);
}

describe("POST /api/contact (Cloudflare Pages Function)", () => {
  const fetchMock = vi.fn();

  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns 400 for malformed JSON without calling external APIs", async () => {
    const req = createRequest(null, "{ invalid-json");
    const res = await invokePost(req);
    const data = (await res.json()) as { error?: string };

    expect(res.status).toBe(400);
    expect(data.error).toBe("Invalid JSON request body.");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns 400 with field errors when validation fails", async () => {
    const req = createRequest({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      requirement: "",
    });
    const res = await invokePost(req);
    const data = (await res.json()) as {
      error?: string;
      errors?: Record<string, string>;
    };

    expect(res.status).toBe(400);
    expect(data.error).toBe("Validation failed.");
    expect(data.errors?.firstName).toBeTruthy();
    expect(data.errors?.lastName).toBeTruthy();
    expect(data.errors?.contactMethod).toBeTruthy();
    expect(data.errors?.service).toBeTruthy();
    expect(data.errors?.requirement).toBeTruthy();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("silently returns 200 without calling Supabase or Resend when honeypot is filled", async () => {
    const req = createRequest({
      firstName: "Spam",
      lastName: "Bot",
      email: "bot@spam.example.com",
      service: "Web & Mobile MVPs",
      requirement: "Buy cheap traffic now!",
      honeypot: "https://spam.example.com",
    });
    const res = await invokePost(req);
    const data = (await res.json()) as { success?: boolean };

    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns 500 when Supabase or Resend environment variables are missing", async () => {
    // 1. Missing Supabase credentials
    const missingSupabaseRes = await invokePost(
      createRequest({
        firstName: "Alex",
        lastName: "Rivera",
        email: "alex@example.com",
        service: "Web & Mobile MVPs",
        requirement: "Looking to build a Next.js MVP with Playwright tests.",
      }),
      {}
    );

    expect(missingSupabaseRes.status).toBe(500);
    expect(fetchMock).not.toHaveBeenCalled();

    // 2. Missing RESEND_API_KEY after Supabase insert succeeds
    fetchMock.mockResolvedValueOnce(new Response("[]", { status: 201 }));

    const missingResendRes = await invokePost(
      createRequest({
        firstName: "Alex",
        lastName: "Rivera",
        email: "alex@example.com",
        service: "Web & Mobile MVPs",
        requirement: "Looking to build a Next.js MVP with Playwright tests.",
      }),
      {
        SUPABASE_URL: "https://example.supabase.co",
        SUPABASE_SERVICE_ROLE_KEY: "test-service-role-key",
      }
    );

    expect(missingResendRes.status).toBe(500);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("inserts sanitized data into Supabase (with null optional fields) and sends Resend email", async () => {
    fetchMock
      .mockResolvedValueOnce(
        new Response(JSON.stringify([{ id: "row_1" }]), { status: 201 })
      )
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ id: "email_1" }), { status: 200 })
      );

    const req = createRequest({
      firstName: "  Alex  ",
      lastName: "  Rivera  ",
      email: "  alex@example.com  ",
      phone: "",
      company: "   ",
      service: "Web & Mobile MVPs",
      engagementModel: "",
      preferredDate: "",
      preferredTime: "",
      timezone: "America/New_York",
      requirement: "  Need automated E2E coverage in CI/CD.  ",
      honeypot: "",
    });

    const res = await invokePost(req);
    const data = (await res.json()) as { success?: boolean };

    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(2);

    const [supabaseUrl, supabaseInit] = fetchMock.mock.calls[0] as [
      string,
      RequestInit,
    ];
    expect(supabaseUrl).toBe(
      "https://example.supabase.co/rest/v1/contact_submissions"
    );

    const supabasePayload = JSON.parse(String(supabaseInit.body)) as Record<
      string,
      unknown
    >;
    expect(supabasePayload).toEqual({
      first_name: "Alex",
      last_name: "Rivera",
      company: null,
      email: "alex@example.com",
      phone: null,
      service: "Web & Mobile MVPs",
      engagement_model: null,
      requirement: "Need automated E2E coverage in CI/CD.",
      preferred_date: null,
      preferred_time: null,
      timezone: "America/New_York",
    });

    const [resendUrl] = fetchMock.mock.calls[1] as [string, RequestInit];
    expect(resendUrl).toBe("https://api.resend.com/emails");
  });

  it("sets reply_to when email is provided and omits it for mobile-only inquiries", async () => {
    // 1. Email provided -> reply_to set
    fetchMock
      .mockResolvedValueOnce(new Response("[]", { status: 201 }))
      .mockResolvedValueOnce(new Response('{"id":"1"}', { status: 200 }));

    await invokePost(
      createRequest({
        firstName: "Samira",
        lastName: "Perera",
        email: "samira@startup.io",
        service: "Web & Mobile MVPs",
        requirement: "Scoping a web application.",
      })
    );

    const emailCallBody = JSON.parse(
      String((fetchMock.mock.calls[1] as [string, RequestInit])[1].body)
    ) as Record<string, unknown>;
    expect(emailCallBody.reply_to).toBe("samira@startup.io");

    // 2. Mobile-only -> reply_to omitted
    fetchMock.mockReset();
    fetchMock
      .mockResolvedValueOnce(new Response("[]", { status: 201 }))
      .mockResolvedValueOnce(new Response('{"id":"2"}', { status: 200 }));

    await invokePost(
      createRequest({
        firstName: "Kasun",
        lastName: "Silva",
        phone: "+94 77 123 4567",
        service: "E2E Test Automation",
        requirement: "Call me regarding QA automation.",
      })
    );

    const mobileCallBody = JSON.parse(
      String((fetchMock.mock.calls[1] as [string, RequestInit])[1].body)
    ) as Record<string, unknown>;
    expect(mobileCallBody.reply_to).toBeUndefined();
  });

  it("escapes HTML tags in user input before rendering the Resend email body", async () => {
    fetchMock
      .mockResolvedValueOnce(new Response("[]", { status: 201 }))
      .mockResolvedValueOnce(new Response('{"id":"3"}', { status: 200 }));

    const res = await invokePost(
      createRequest({
        firstName: '<script>alert("xss")</script>',
        lastName: "Tester",
        email: "security@test.dev",
        service: "E2E Test Automation",
        requirement: '<img src=x onerror="stealCookies()">',
      })
    );

    expect(res.status).toBe(200);

    const resendBody = JSON.parse(
      String((fetchMock.mock.calls[1] as [string, RequestInit])[1].body)
    ) as { html?: string };

    expect(resendBody.html).toBeDefined();
    expect(resendBody.html).not.toContain("<script>");
    expect(resendBody.html).not.toContain("<img");
    expect(resendBody.html).toContain("&lt;script&gt;");
    expect(resendBody.html).toContain("&lt;img");
  });

  it("returns 500 when Supabase fails and 502 when Resend fails", async () => {
    // 1. Supabase failure -> stops before calling Resend
    fetchMock.mockResolvedValueOnce(
      new Response(JSON.stringify({ message: "DB error" }), { status: 500 })
    );

    const dbFailRes = await invokePost(
      createRequest({
        firstName: "Jordan",
        lastName: "Lee",
        email: "jordan@example.com",
        service: "Cloud & SRE DevOps",
        requirement: "Testing database failure path.",
      })
    );

    expect(dbFailRes.status).toBe(500);
    expect(fetchMock).toHaveBeenCalledTimes(1);

    // 2. Resend failure after Supabase succeeds -> returns 502
    fetchMock.mockReset();
    fetchMock
      .mockResolvedValueOnce(new Response("[]", { status: 201 }))
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ message: "Resend error" }), {
          status: 502,
        })
      );

    const emailFailRes = await invokePost(
      createRequest({
        firstName: "Jordan",
        lastName: "Lee",
        email: "jordan@example.com",
        service: "Cloud & SRE DevOps",
        requirement: "Testing email failure path.",
      })
    );

    expect(emailFailRes.status).toBe(502);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});