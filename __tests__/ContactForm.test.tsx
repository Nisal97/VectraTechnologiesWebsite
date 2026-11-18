import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "@/components/contact/ContactForm";
import {
  SERVICE_OPTIONS,
  ENGAGEMENT_MODEL_OPTIONS,
} from "@/lib/contactValidation";

describe("ContactForm Component", () => {
  const fetchMock = vi.fn();

  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal("fetch", fetchMock);
    window.scrollTo = vi.fn();

    vi.spyOn(Intl, "DateTimeFormat").mockImplementation(
      () =>
        ({
          resolvedOptions: () => ({ timeZone: "Asia/Colombo" }),
        }) as unknown as Intl.DateTimeFormat
    );
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("renders all form controls, dropdown options, detected timezone, and today's min date", () => {
    render(<ContactForm />);

    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
    expect(screen.getByTestId("input-first-name")).toBeInTheDocument();
    expect(screen.getByTestId("input-last-name")).toBeInTheDocument();
    expect(screen.getByTestId("input-company")).toBeInTheDocument();
    expect(screen.getByTestId("input-email")).toBeInTheDocument();
    expect(screen.getByTestId("input-phone")).toBeInTheDocument();
    expect(screen.getByTestId("select-service")).toBeInTheDocument();
    expect(screen.getByTestId("select-engagement-model")).toBeInTheDocument();
    expect(screen.getByTestId("textarea-requirement")).toBeInTheDocument();

    // Dropdown options rendered from validation constants
    for (const service of SERVICE_OPTIONS) {
      expect(
        screen.getByRole("option", { name: service })
      ).toBeInTheDocument();
    }
    for (const model of ENGAGEMENT_MODEL_OPTIONS) {
      expect(screen.getByRole("option", { name: model })).toBeInTheDocument();
    }

    // Detected timezone badge
    expect(screen.getByTestId("detected-timezone")).toHaveTextContent(
      "Timezone: Asia/Colombo"
    );

    // Minimum date set to local YYYY-MM-DD
    const now = new Date();
    const expectedMinDate = `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    expect(screen.getByTestId("input-preferred-date")).toHaveAttribute(
      "min",
      expectedMinDate
    );
  });

  it("displays field validation errors on empty submit without calling fetch", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByTestId("submit-contact-btn"));

    expect(screen.getByTestId("error-first-name")).toBeInTheDocument();
    expect(screen.getByTestId("error-last-name")).toBeInTheDocument();
    expect(screen.getByTestId("error-contact-method")).toBeInTheDocument();
    expect(screen.getByTestId("error-service")).toBeInTheDocument();
    expect(screen.getByTestId("error-requirement")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("clears individual field errors and contactMethod error as the user types", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByTestId("submit-contact-btn"));
    expect(screen.getByTestId("error-first-name")).toBeInTheDocument();
    expect(screen.getByTestId("error-contact-method")).toBeInTheDocument();

    await user.type(screen.getByTestId("input-first-name"), "Nisal");
    expect(screen.queryByTestId("error-first-name")).not.toBeInTheDocument();

    await user.type(screen.getByTestId("input-phone"), "+94 77 123 4567");
    expect(
      screen.queryByTestId("error-contact-method")
    ).not.toBeInTheDocument();
  });

  it("updates the live trimmed character counter for the requirement brief", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    expect(screen.getByText("0 chars")).toBeInTheDocument();

    await user.type(
      screen.getByTestId("textarea-requirement"),
      "   Build Playwright suite   "
    );

    expect(screen.getByText("22 chars")).toBeInTheDocument();
  });

  it("disables the submit button and shows 'Sending...' while request is in flight", async () => {
    const user = userEvent.setup();
    let resolveFetch!: (value: Response) => void;
    fetchMock.mockImplementationOnce(
      () =>
        new Promise<Response>((resolve) => {
          resolveFetch = resolve;
        })
    );

    render(<ContactForm />);

    await user.type(screen.getByTestId("input-first-name"), "Alex");
    await user.type(screen.getByTestId("input-last-name"), "Rivera");
    await user.type(screen.getByTestId("input-email"), "alex@example.com");
    await user.selectOptions(
      screen.getByTestId("select-service"),
      SERVICE_OPTIONS[0]
    );
    await user.type(
      screen.getByTestId("textarea-requirement"),
      "Need end-to-end test automation."
    );

    await user.click(screen.getByTestId("submit-contact-btn"));

    const submitBtn = screen.getByTestId("submit-contact-btn");
    expect(submitBtn).toBeDisabled();
    expect(submitBtn).toHaveTextContent("Sending...");

    resolveFetch(
      new Response(JSON.stringify({ success: true }), { status: 200 })
    );

    expect(
      await screen.findByTestId("contact-success-state")
    ).toBeInTheDocument();
  });

  it("submits trimmed payload to /api/contact, shows success view, and resets on 'Send another inquiry'", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValueOnce(
      new Response(JSON.stringify({ success: true }), { status: 200 })
    );

    render(<ContactForm />);

    await user.type(screen.getByTestId("input-first-name"), "  Samira  ");
    await user.type(screen.getByTestId("input-last-name"), "  Perera  ");
    await user.type(screen.getByTestId("input-company"), "  Acme Labs  ");
    await user.type(
      screen.getByTestId("input-email"),
      "  samira@startup.io  "
    );
    await user.selectOptions(
      screen.getByTestId("select-service"),
      SERVICE_OPTIONS[0]
    );
    if (ENGAGEMENT_MODEL_OPTIONS[0]) {
      await user.selectOptions(
        screen.getByTestId("select-engagement-model"),
        ENGAGEMENT_MODEL_OPTIONS[0]
      );
    }
    await user.type(
      screen.getByTestId("textarea-requirement"),
      "  Scoping a Next.js MVP build.  "
    );
    fireEvent.change(screen.getByTestId("input-preferred-date"), {
      target: { value: "2026-12-15" },
    });
    await user.selectOptions(
      screen.getByTestId("input-preferred-time"),
      "10:00 AM"
    );

    await user.click(screen.getByTestId("submit-contact-btn"));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("/api/contact");
    expect(init.method).toBe("POST");

    const sentPayload = JSON.parse(String(init.body)) as Record<string, string>;
    expect(sentPayload.firstName).toBe("Samira");
    expect(sentPayload.lastName).toBe("Perera");
    expect(sentPayload.company).toBe("Acme Labs");
    expect(sentPayload.email).toBe("samira@startup.io");
    expect(sentPayload.service).toBe(SERVICE_OPTIONS[0]);
    expect(sentPayload.requirement).toBe("Scoping a Next.js MVP build.");
    expect(sentPayload.preferredDate).toBe("2026-12-15");
    expect(sentPayload.preferredTime).toBe("10:00 AM");
    expect(sentPayload.timezone).toBe("Asia/Colombo");

    expect(
      await screen.findByTestId("contact-success-state")
    ).toBeInTheDocument();
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });

    // Reset form back to idle state
    await user.click(
      screen.getByRole("button", { name: /send another inquiry/i })
    );

    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
    expect(screen.getByTestId("input-first-name")).toHaveValue("");
    expect(screen.getByTestId("detected-timezone")).toHaveTextContent(
      "Timezone: Asia/Colombo"
    );
  });

  it("short-circuits silently to success view without calling fetch when honeypot is populated", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByTestId("input-first-name"), "Bot");
    await user.type(screen.getByTestId("input-last-name"), "User");
    await user.type(screen.getByTestId("input-email"), "bot@spam.example.com");
    await user.selectOptions(
      screen.getByTestId("select-service"),
      SERVICE_OPTIONS[0]
    );
    await user.type(
      screen.getByTestId("textarea-requirement"),
      "Automated spam submission."
    );

    const honeypotInput = document.getElementById("honeypot") as HTMLInputElement;
    fireEvent.change(honeypotInput, {
      target: { value: "https://spam.example.com" },
    });

    await user.click(screen.getByTestId("submit-contact-btn"));

    expect(
      await screen.findByTestId("contact-success-state")
    ).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("displays an error banner on HTTP 500 or network failure while preserving user input", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValueOnce(
      new Response(JSON.stringify({ error: "Server error" }), { status: 500 })
    );

    render(<ContactForm />);

    await user.type(screen.getByTestId("input-first-name"), "Kasun");
    await user.type(screen.getByTestId("input-last-name"), "Silva");
    await user.type(screen.getByTestId("input-email"), "kasun@example.com");
    await user.selectOptions(
      screen.getByTestId("select-service"),
      SERVICE_OPTIONS[0]
    );
    await user.type(
      screen.getByTestId("textarea-requirement"),
      "Keep my draft intact if API fails."
    );

    await user.click(screen.getByTestId("submit-contact-btn"));

    const errorBanner = await screen.findByTestId("contact-error-banner");
    expect(errorBanner).toHaveTextContent(
      "Network error: Unable to submit your inquiry. Please email us directly at contact@vectrasolutions.dev"
    );

    // User's entered values remain preserved
    expect(screen.getByTestId("input-first-name")).toHaveValue("Kasun");
    expect(screen.getByTestId("textarea-requirement")).toHaveValue(
      "Keep my draft intact if API fails."
    );
  });
});