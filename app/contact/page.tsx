import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Studio",
  description:
    "Start a project with Vectra Solutions. Request a quote for Full-Stack Web & Mobile MVPs, Playwright E2E Automation, or SRE Infrastructure.",
};

export default function ContactPage() {
  return (
    <div
      id="contact-page"
      data-testid="contact-page"
      className="min-h-screen bg-[#090d16] text-white flex flex-col"
    >
      <Navbar />
      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6">
        <section
          id="contact-hero"
          data-testid="contact-hero"
          className="max-w-7xl mx-auto mb-12"
        >
          <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase mb-2 block">
            // START A CONVERSATION
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Let's Engineer Your Next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500">
              Zero-Defect Product.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Tell us about your MVP, test automation goals, or infrastructure needs—and pick a convenient time for a discovery call.
          </p>
        </section>

        <div
          id="contact-grid"
          data-testid="contact-grid"
          className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          <div className="lg:col-span-5">
            <div
              id="contact-info-slot"
              data-testid="contact-info-slot"
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 text-slate-400 text-sm"
            >
              Contact Info Panel (Step 4)
            </div>
          </div>
          <div className="lg:col-span-7">
            <div
              id="contact-form-slot"
              data-testid="contact-form-slot"
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 text-slate-400 text-sm"
            >
              Contact Form Panel (Steps 5–7)
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
