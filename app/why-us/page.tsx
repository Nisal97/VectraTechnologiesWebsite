import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why Us | Vectra Solutions",
  description: "Full-stack engineering and automated QE — embedding Playwright E2E automation, clean architecture, and CI/CD guardrails from day one so products ship fast without breaking in production.",
};

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-[#090d16] text-white">
      <Navbar />
      <section
        id="why-us-hero"
        data-testid="why-us-hero"
        className="py-24 md:py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-6 monospace uppercase text-sm text-cyan-400 tracking-wider">
            // WHY VECTRA SOLUTIONS
          </p>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
            Built-In Quality.<span className="relative inline-block bg-gradient-to-r from-cyan-500 to-emerald-600 bg-clip-text text-transparent">
              Zero-Defect Velocity.
            </span>
          </h1>
          <p className="mb-10 text-lg text-slate-400 max-w-2xl leading-relaxed">
            Most teams treat QA as an afterthought—Vectra Solutions embeds Playwright E2E automation, clean architecture, and CI/CD guardrails from day one so products ship fast without breaking in production.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
            <div className="flex items-center gap-3 text-emerald-400">
              <span className="font-mono font-bold text-3xl">100%</span>
              <span>Code & IP Ownership from Day One</span>
            </div>
            <div className="flex items-center gap-3 text-emerald-400">
              <span className="font-mono font-bold text-3xl">24h</span>
              <span>Direct Engineering Response SLA</span>
            </div>
            <div className="flex items-center gap-3 text-emerald-400">
              <span className="font-mono font-bold text-3xl">CI-Gated</span>
              <span>Automated Regression Before Every Deploy</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}