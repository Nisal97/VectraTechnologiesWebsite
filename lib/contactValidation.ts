export const SERVICE_OPTIONS = [
  "Full-Stack Web & Mobile MVP",
  "E2E Test Automation (Playwright / Selenium)",
  "QA Audit & Zero-Defect Consulting",
  "SRE & Cloud Infrastructure",
  "Dedicated Engineering Retainer",
  "Other",
] as const;

export const ENGAGEMENT_MODEL_OPTIONS = [
  "Fixed-Price Proposal",
  "Monthly Retainer",
  "Advisory & Audit",
  "Not Sure Yet",
] as const;

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  engagementModel: string;
  requirement: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  /** Hidden anti-spam honeypot field — must remain empty for real users */
  honeypot?: string;
}

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues | "contactMethod", string>
>;

export interface ValidationResult {
  isValid: boolean;
  errors: ContactFormErrors;
  sanitized: ContactFormValues;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s().-]{7,20}$/;

const toTrimmed = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

export function validateContactForm(
  raw: Partial<ContactFormValues>
): ValidationResult {
  const sanitized: ContactFormValues = {
    firstName: toTrimmed(raw.firstName),
    lastName: toTrimmed(raw.lastName),
    company: toTrimmed(raw.company),
    email: toTrimmed(raw.email),
    phone: toTrimmed(raw.phone),
    service: toTrimmed(raw.service),
    engagementModel: toTrimmed(raw.engagementModel),
    requirement: toTrimmed(raw.requirement),
    preferredDate: toTrimmed(raw.preferredDate),
    preferredTime: toTrimmed(raw.preferredTime),
    timezone: toTrimmed(raw.timezone),
    honeypot: toTrimmed(raw.honeypot),
  };

  const errors: ContactFormErrors = {};

  if (!sanitized.firstName) {
    errors.firstName = "First name is required.";
  } else if (sanitized.firstName.length < 2) {
    errors.firstName = "First name must be at least 2 characters.";
  }

  if (!sanitized.lastName) {
    errors.lastName = "Last name is required.";
  } else if (sanitized.lastName.length < 2) {
    errors.lastName = "Last name must be at least 2 characters.";
  }

  const hasEmail = sanitized.email.length > 0;
  const hasPhone = sanitized.phone.length > 0;

  if (!hasEmail && !hasPhone) {
    errors.contactMethod =
      "Please provide either an email address or a mobile number.";
  }

  if (hasEmail && !EMAIL_REGEX.test(sanitized.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (hasPhone && !PHONE_REGEX.test(sanitized.phone)) {
    errors.phone = "Please enter a valid mobile number (7–20 digits).";
  }

  if (!sanitized.service) {
    errors.service = "Please select a service.";
  }

  if (!sanitized.requirement) {
    errors.requirement = "Please briefly describe your project or requirement.";
  } else if (sanitized.requirement.length < 10) {
    errors.requirement =
      "Please provide at least 10 characters so we understand your needs.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized,
  };
}