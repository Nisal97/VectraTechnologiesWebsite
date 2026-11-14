"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  SERVICE_OPTIONS,
  ENGAGEMENT_MODEL_OPTIONS,
  ContactFormValues,
  ContactFormErrors,
  validateContactForm,
} from "@/lib/contactValidation";

const TIME_SLOTS: string[] = Array.from({ length: 48 }, (_, index) => {
  const totalMinutes = index * 30;
  const hours24 = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? "00" : "30";
  const period = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  return `${String(hours12).padStart(2, "0")}:${minutes} ${period}`;
});

const INITIAL_VALUES: ContactFormValues = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  engagementModel: "",
  requirement: "",
  preferredDate: "",
  preferredTime: "",
  timezone: "",
  honeypot: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [minDate, setMinDate] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    try {
      const detectedTimezone =
        Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (detectedTimezone) {
        setValues((prev) => ({ ...prev, timezone: detectedTimezone }));
      }
    } catch {
      // Ignore if Intl API is restricted
    }

    // Set minimum selectable date to today in local time (YYYY-MM-DD)
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    setMinDate(`${year}-${month}-${day}`);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const field = name as keyof ContactFormValues;

    setValues((prev) => ({ ...prev, [field]: value }));
    if (submitStatus !== "idle") setSubmitStatus("idle");

    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      if (field === "email" || field === "phone") {
        delete next.contactMethod;
      }
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setErrorMessage("");

    const result = validateContactForm(values);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    if (values.honeypot) {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setValues(INITIAL_VALUES);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.sanitized),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry.");
      }

      setSubmitStatus("success");
      setValues((prev) => ({ ...INITIAL_VALUES, timezone: prev.timezone }));
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitStatus("error");
      setErrorMessage(
        "Network error: Unable to submit your inquiry. Please email us directly at contact@vectrasolutions.dev"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div
        data-testid="contact-success-state"
        className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-xl p-8 sm:p-12 text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 mb-6">
          <svg
            className="h-8 w-8 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
          // TRANSMISSION CONFIRMED
        </span>
        <h2 className="text-2xl font-bold text-white mb-3">
          Request Sent to the Vectra Team
        </h2>
        <p className="text-slate-300 mb-8 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. Your project inquiry has been logged and
          sent to our engineering team—we&apos;ll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitStatus("idle")}
          className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-colors cursor-pointer"
        >
          Send another inquiry &rarr;
        </button>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      data-testid="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6 sm:p-8 space-y-6"
    >
      {/* Invisible Anti-Spam Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          id="honeypot"
          name="honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.honeypot ?? ""}
          onChange={handleChange}
        />
      </div>

      {/* Form Header */}
      <div className="border-b border-white/10 pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          // PROJECT INQUIRY
        </span>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mt-1">
          Tell Us About Your Project
        </h2>
      </div>

      {/* Section 1: Identity */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
            >
              First Name <span className="text-rose-400">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              data-testid="input-first-name"
              type="text"
              required
              placeholder="Nisal"
              value={values.firstName}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
            {errors.firstName && (
              <p
                data-testid="error-first-name"
                className="mt-1.5 text-xs text-rose-400"
              >
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
            >
              Last Name <span className="text-rose-400">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              data-testid="input-last-name"
              type="text"
              required
              placeholder="Muthugala"
              value={values.lastName}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
            {errors.lastName && (
              <p
                data-testid="error-last-name"
                className="mt-1.5 text-xs text-rose-400"
              >
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Company / Website (Optional) */}
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
          >
            Company or Website{" "}
            <span className="text-slate-500 normal-case font-sans">
              (Optional)
            </span>
          </label>
          <input
            id="company"
            name="company"
            data-testid="input-company"
            type="text"
            placeholder="Acme Labs or https://example.com"
            value={values.company}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
          />
        </div>
      </div>

      {/* Section 2: Contact Info (At Least One Required) */}
      <div className="space-y-3 pt-2 border-t border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
            Contact Information <span className="text-rose-400">*</span>
          </span>
          <span
            data-testid="contact-method-hint"
            className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2.5 py-0.5"
          >
            Email or Mobile (at least 1 required)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              data-testid="input-email"
              type="email"
              placeholder="you@company.com"
              value={values.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
            {errors.email && (
              <p
                data-testid="error-email"
                className="mt-1.5 text-xs text-rose-400"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2"
            >
              Mobile Number
            </label>
            <input
              id="phone"
              name="phone"
              data-testid="input-phone"
              type="tel"
              placeholder="+94 77 123 4567"
              value={values.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
            {errors.phone && (
              <p
                data-testid="error-phone"
                className="mt-1.5 text-xs text-rose-400"
              >
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {errors.contactMethod && (
          <p
            data-testid="error-contact-method"
            className="text-xs text-rose-400"
          >
            {errors.contactMethod}
          </p>
        )}
      </div>

      {/* Section 3: Services & Engagement Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
        {/* Service Dropdown */}
        <div>
          <label
            htmlFor="service"
            className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
          >
            Service Needed <span className="text-rose-400">*</span>
          </label>
          <select
            id="service"
            name="service"
            data-testid="select-service"
            required
            value={values.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
          >
            <option value="" disabled className="bg-slate-900 text-slate-400">
              Select a service...
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-slate-900 text-white"
              >
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p
              data-testid="error-service"
              className="mt-1.5 text-xs text-rose-400"
            >
              {errors.service}
            </p>
          )}
        </div>

        {/* Engagement Model Dropdown (Optional) */}
        <div>
          <label
            htmlFor="engagementModel"
            className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
          >
            Engagement Model{" "}
            <span className="text-slate-500 normal-case font-sans">
              (Optional)
            </span>
          </label>
          <select
            id="engagementModel"
            name="engagementModel"
            data-testid="select-engagement-model"
            value={values.engagementModel}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
          >
            <option value="" className="bg-slate-900 text-slate-400">
              Select model (optional)...
            </option>
            {ENGAGEMENT_MODEL_OPTIONS.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-slate-900 text-white"
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Section 4: Requirement Brief */}
      <div className="pt-2 border-t border-white/10">
        <div className="flex items-center justify-between mb-2">
          <label
            htmlFor="requirement"
            className="block text-xs font-mono uppercase tracking-wider text-slate-300"
          >
            Project / Requirement Brief{" "}
            <span className="text-rose-400">*</span>
          </label>
          <span className="text-[11px] font-mono text-slate-500">
            {values.requirement.trim().length} chars
          </span>
        </div>
        <textarea
          id="requirement"
          name="requirement"
          data-testid="textarea-requirement"
          rows={4}
          required
          placeholder="Describe your product goals, tech stack, QA bottlenecks, or target timeline..."
          value={values.requirement}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors resize-y"
        />
        {errors.requirement && (
          <p
            data-testid="error-requirement"
            className="mt-1.5 text-xs text-rose-400"
          >
            {errors.requirement}
          </p>
        )}
      </div>

      {/* Section 5: Suggest a Meeting Date & Time (Optional) */}
      <div className="space-y-3 pt-2 border-t border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
            Suggest a Discovery Call Slot{" "}
            <span className="text-slate-500 normal-case font-sans">
              (Optional)
            </span>
          </span>
          {values.timezone && (
            <span
              data-testid="detected-timezone"
              className="text-[11px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-0.5"
            >
              Timezone: {values.timezone}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Preferred Date */}
          <div>
            <label
              htmlFor="preferredDate"
              className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2"
            >
              Preferred Date
            </label>
            <input
              id="preferredDate"
              name="preferredDate"
              data-testid="input-preferred-date"
              type="date"
              min={minDate}
              value={values.preferredDate}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white [color-scheme:dark] focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
          </div>

          {/* Preferred Time */}
          <div>
            <label
              htmlFor="preferredTime"
              className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2"
            >
              Preferred Time
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              data-testid="input-preferred-time"
              value={values.preferredTime}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
            >
              <option value="" className="bg-slate-900 text-slate-400">
                Select a 30-min slot (optional)...
              </option>
              {TIME_SLOTS.map((slot) => (
                <option
                  key={slot}
                  value={slot}
                  className="bg-slate-900 text-white"
                >
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Submission Error Banner */}
      {submitStatus === "error" && (
        <div
          data-testid="contact-error-banner"
          className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs text-rose-300"
        >
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <button
          id="submit-contact-btn"
          data-testid="submit-contact-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-emerald-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-slate-950"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send Project Inquiry"
          )}
        </button>
      </div>
    </form>
  );
}