import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Terminal, GitBranch, Cpu } from "lucide-react";

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
      <section
        id="why-us-differentiators"
        data-testid="why-us-differentiators"
        className="py-12 sm:py-16 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-4 monospace uppercase text-sm text-cyan-400 tracking-wider">
              // CORE DIFFERENTIATORS
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold leading-tight">
              Engineered for Speed, <span className="relative inline-block bg-gradient-to-r from-cyan-500 to-emerald-600 bg-clip-text text-transparent">
                Backed by Automated QA
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Shift-Left Automated QA
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We embed Playwright E2E and API test coverage directly into your development sprint—not as a last-minute scramble before launch. Every feature ships with automated regression protection from day one.
              </p>
            </div>
            <div
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Direct Engineer-to-Founder Access
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Skip account managers and slow handoff chains. You collaborate directly with the engineers architecting your application, reviewing pull requests, and tuning your test pipelines.
              </p>
            </div>
            <div
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Flake-Free CI/CD Quality Gates
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We wire deterministic, parallelized test suites into your GitHub Actions workflow so broken builds are blocked automatically—eliminating manual release checklists and midnight hotfixes.
              </p>
            </div>
            <div
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Lean, Production-Ready Stack
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We build on modern, high-leverage technologies—Next.js, TypeScript, Flutter, Supabase, and Cloudflare Edge—giving you fast global performance without bloated monthly cloud bills.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}