import { describe, it, expect } from "vitest";
import { validateContactForm } from "@/lib/contactValidation";

describe("validateContactForm", () => {
  it("validates a valid full payload with both email and mobile", () => {
    const result = validateContactForm({
      firstName: "  Alex  ",
      lastName: "  Rivera  ",
      email: "  alex@example.com  ",
      phone: "  +1 (555) 234-5678  ",
      company: "  Acme Corp  ",
      service: "Web & Mobile MVPs",
      engagementModel: "Monthly Retainer",
      preferredDate: "2026-12-01",
      preferredTime: "10:00 AM",
      timezone: "America/New_York",
      requirement: "  We need end-to-end tests wired into GitHub Actions.  ",
      honeypot: "",
    });

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
    expect(result.sanitized.firstName).toBe("Alex");
    expect(result.sanitized.lastName).toBe("Rivera");
    expect(result.sanitized.email).toBe("alex@example.com");
    expect(result.sanitized.phone).toBe("+1 (555) 234-5678");
    expect(result.sanitized.company).toBe("Acme Corp");
    expect(result.sanitized.requirement).toBe(
      "We need end-to-end tests wired into GitHub Actions."
    );
  });

  it("validates a valid email-only contact without mobile", () => {
    const result = validateContactForm({
      firstName: "Samira",
      lastName: "Perera",
      email: "samira@startup.io",
      phone: "",
      service: "Web & Mobile MVPs",
      requirement: "Looking for a Next.js MVP build.",
    });

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it("validates a valid mobile-only contact without email", () => {
    const result = validateContactForm({
      firstName: "Kasun",
      lastName: "Silva",
      email: "",
      phone: "+94 77 123 4567",
      service: "E2E Test Automation",
      requirement: "Need QA audit and CI/CD pipeline setup.",
    });

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it("fails with required field errors when firstName, lastName, service, or requirement is empty", () => {
    const result = validateContactForm({
      firstName: "   ",
      lastName: "",
      email: "founder@company.com",
      service: "",
      requirement: "   ",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.firstName).toBeTruthy();
    expect(result.errors.lastName).toBeTruthy();
    expect(result.errors.service).toBeTruthy();
    expect(result.errors.requirement).toBeTruthy();
  });

  it("fails with contactMethod error when neither email nor mobile is supplied", () => {
    const result = validateContactForm({
      firstName: "Jordan",
      lastName: "Lee",
      email: "   ",
      phone: "",
      service: "Cloud & SRE DevOps",
      requirement: "Interested in a monthly QA retainer.",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.contactMethod).toBeTruthy();
  });

  it("rejects invalid email format", () => {
    const missingDomain = validateContactForm({
      firstName: "Taylor",
      lastName: "Chen",
      email: "taylor@",
      service: "E2E Test Automation",
      requirement: "Scoping an automation framework.",
    });

    expect(missingDomain.isValid).toBe(false);
    expect(missingDomain.errors.email).toBeTruthy();

    const missingAtSymbol = validateContactForm({
      firstName: "Taylor",
      lastName: "Chen",
      email: "taylor.chen.example.com",
      service: "E2E Test Automation",
      requirement: "Scoping an automation framework.",
    });

    expect(missingAtSymbol.isValid).toBe(false);
    expect(missingAtSymbol.errors.email).toBeTruthy();
  });

  it("rejects invalid mobile format", () => {
    const tooShort = validateContactForm({
      firstName: "Morgan",
      lastName: "Blake",
      phone: "12345",
      service: "E2E Test Automation",
      requirement: "Need help with Playwright.",
    });

    expect(tooShort.isValid).toBe(false);
    expect(tooShort.errors.phone).toBeTruthy();

    const tooLong = validateContactForm({
      firstName: "Morgan",
      lastName: "Blake",
      phone: "123456789012345678901",
      service: "E2E Test Automation",
      requirement: "Need help with Playwright.",
    });

    expect(tooLong.isValid).toBe(false);
    expect(tooLong.errors.phone).toBeTruthy();

    const containsLetters = validateContactForm({
      firstName: "Morgan",
      lastName: "Blake",
      phone: "555-CALL-NOW",
      service: "E2E Test Automation",
      requirement: "Need help with Playwright.",
    });

    expect(containsLetters.isValid).toBe(false);
    expect(containsLetters.errors.phone).toBeTruthy();
  });

  it("handles non-string safety and populated honeypot field", () => {
    const result = validateContactForm({
      firstName: 12345 as unknown as string,
      lastName: false as unknown as string,
      email: null as unknown as string,
      phone: { number: "1234567" } as unknown as string,
      service: 99 as unknown as string,
      requirement: ["array-not-string"] as unknown as string,
      honeypot: "https://spam-bot.example.com",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.firstName).toBeTruthy();
    expect(result.errors.lastName).toBeTruthy();
    expect(result.errors.contactMethod).toBeTruthy();
    expect(result.errors.service).toBeTruthy();
    expect(result.errors.requirement).toBeTruthy();
    expect(result.sanitized.honeypot).toBe("https://spam-bot.example.com");
  });
});