import {
  validateContactForm,
  ContactFormValues,
} from "../../lib/contactValidation";

export interface Env {
  SUPABASE_URL?: string;
  NEXT_PUBLIC_SUPABASE_URL?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  SUPABASE_ANON_KEY?: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const JSON_HEADERS = {
  "Content-Type": "application/json",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function onRequestPost(context: PagesContext): Promise<Response> {
  const { request, env } = context;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid JSON request body." }),
      { status: 400, headers: JSON_HEADERS }
    );
  }

  if (!body || typeof body !== "object") {
    return new Response(
      JSON.stringify({ error: "Request body must be a JSON object." }),
      { status: 400, headers: JSON_HEADERS }
    );
  }

  const result = validateContactForm(body as Partial<ContactFormValues>);

  if (!result.isValid) {
    return new Response(
      JSON.stringify({
        error: "Validation failed.",
        errors: result.errors,
      }),
      { status: 400, headers: JSON_HEADERS }
    );
  }

  const { sanitized } = result;

  if (sanitized.honeypot) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: JSON_HEADERS,
    });
  }

  const supabaseUrl = env.SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    env.SUPABASE_SERVICE_ROLE_KEY ||
    env.SUPABASE_ANON_KEY ||
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase environment variables.");
    return new Response(
      JSON.stringify({ error: "Supabase configuration missing." }),
      { status: 500, headers: JSON_HEADERS }
    );
  }

  const contactData = {
    first_name: sanitized.firstName,
    last_name: sanitized.lastName,
    company: sanitized.company || null,
    email: sanitized.email || null,
    phone: sanitized.phone || null,
    service: sanitized.service,
    engagement_model: sanitized.engagementModel || null,
    requirement: sanitized.requirement,
    preferred_date: sanitized.preferredDate || null,
    preferred_time: sanitized.preferredTime || null,
    timezone: sanitized.timezone || null,
  };

  const supabaseResponse = await fetch(
    `${supabaseUrl}/rest/v1/contact_inquiries`,
    {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(contactData),
    }
  );

  if (!supabaseResponse.ok) {
    const errorText = await supabaseResponse.text();
    console.error("Supabase insert failed:", supabaseResponse.status, errorText);
    return new Response(
      JSON.stringify({ error: "Supabase insert failed", details: errorText }),
      { status: 500, headers: JSON_HEADERS }
    );
  }

  if (!env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return new Response(
      JSON.stringify({ error: "Server email configuration missing." }),
      { status: 500, headers: JSON_HEADERS }
    );
  }

  const toEmail = env.CONTACT_TO_EMAIL || "thadipoosa69@gmail.com";
  const fromEmail =
    env.CONTACT_FROM_EMAIL || "Vectra Solutions <onboarding@resend.dev>";

  const fullName = `${sanitized.firstName} ${sanitized.lastName}`;
  const scheduleSummary =
    sanitized.preferredDate || sanitized.preferredTime
      ? `${sanitized.preferredDate || "Date flexible"} at ${
          sanitized.preferredTime || "Time flexible"
        } (${sanitized.timezone || "Timezone not detected"})`
      : "Not requested";

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a;">
      <h2 style="color: #0284c7; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">
        New Vectra Solutions Project Inquiry
      </h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 6px 0; font-weight: 600; width: 160px;">Client:</td><td>${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: 600;">Company / Web:</td><td>${escapeHtml(sanitized.company || "N/A")}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: 600;">Email:</td><td>${escapeHtml(sanitized.email || "Not provided")}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: 600;">Mobile:</td><td>${escapeHtml(sanitized.phone || "Not provided")}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: 600;">Service Needed:</td><td>${escapeHtml(sanitized.service)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: 600;">Engagement Model:</td><td>${escapeHtml(sanitized.engagementModel || "Not specified")}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: 600;">Discovery Slot:</td><td>${escapeHtml(scheduleSummary)}</td></tr>
      </table>
      <div style="margin-top: 16px; padding: 14px; background: #f8fafc; border-left: 4px solid #06b6d4; border-radius: 4px;">
        <p style="margin: 0 0 6px; font-weight: 600; font-size: 13px; color: #334155;">Requirement Brief:</p>
        <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.5;">${escapeHtml(sanitized.requirement)}</p>
      </div>
    </div>
  `;

  const emailPayload: Record<string, unknown> = {
    from: fromEmail,
    to: [toEmail],
    subject: `New Project Inquiry: ${sanitized.service} — ${fullName}`,
    html: htmlBody,
  };

  if (sanitized.email) {
    emailPayload.reply_to = sanitized.email;
  }

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });

  if (!emailResponse.ok) {
    const emailError = await emailResponse.text();
    console.error("Resend email failed:", emailResponse.status, emailError);
    return new Response(
      JSON.stringify({ error: "Inquiry saved, but email notification failed." }),
      { status: 502, headers: JSON_HEADERS }
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: JSON_HEADERS,
  });
}