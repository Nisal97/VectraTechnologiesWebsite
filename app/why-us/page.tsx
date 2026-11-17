import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Terminal,
  GitBranch,
  Cpu,
  XCircle,
  Lock,
  CalendarCheck,
  FileCode2,
  KeyRound,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Us | Vectra Solutions",
  description:
    "Full-stack engineering and automated QA — embedding Playwright E2E automation, clean architecture, and CI/CD guardrails from day one so products ship fast without breaking in production.",
};

const comparisons = [
  {
    criteria: "Automated QA & E2E Testing",
    vectra: "Built-in Playwright & API suites from day one",
    freelancers: "Rarely included; manual ad-hoc checks",
    agencies: "Billed separately as an expensive add-on",
  },
  {
    criteria: "Communication",
    vectra: "Direct with the engineers building your product",
    freelancers: "Timezone & availability bottlenecks",
    agencies: "Filtered through account & project managers",
  },
  {
    criteria: "CI/CD Quality Gates",
    vectra: "Automated GitHub Actions blocking bad deploys",
    freelancers: "Manual deployments with regression risk",
    agencies: "Slow, heavy release cycles",
  },
  {
    criteria: "Code & IP Ownership",
    vectra: "100% yours in your GitHub org from commit #1",
    freelancers: "Varies; often handed over at the very end",
    agencies: "Locked down until final invoice sign-off",
  },
  {
    criteria: "Delivery Velocity",
    vectra: "Weekly working builds & transparent PRs",
    freelancers: "Unpredictable bandwidth",
    agencies: "Weeks of discovery before writing code",
  },
  {
    criteria: "Cost Efficiency",
    vectra: "Lean, senior-level output without agency bloat",
    freelancers: "Low upfront rate, high bug-fix rework cost",
    agencies: "High retainers covering overhead & layers",
  },
];

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-[#090d16] text-white">
      <Navbar />

      {/* Section 1: Hero */}
      <section
        id="why-us-hero"
        data-testid="why-us-hero"
        className="pt-28 pb-16 md:pt-36 md:pb-24 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-6 font-mono uppercase text-sm text-cyan-400 tracking-wider">
            // WHY VECTRA SOLUTIONS
          </p>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
            Built-In Quality.{" "}
            <span className="relative inline-block bg-gradient-to-r from-cyan-500 to-emerald-600 bg-clip-text text-transparent">
              Zero-Defect Velocity.
            </span>
          </h1>
          <p className="mb-10 text-lg text-slate-400 max-w-2xl leading-relaxed">
            Most teams treat QA as an afterthought—Vectra Solutions embeds
            Playwright E2E automation, clean architecture, and CI/CD guardrails
            from day one so products ship fast without breaking in production.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
            <div className="flex items-center gap-3 text-emerald-400">
              <span className="font-mono font-bold text-3xl shrink-0">100%</span>
              <span className="text-sm text-slate-300">
                Code &amp; IP Ownership from Day One
              </span>
            </div>
            <div className="flex items-center gap-3 text-emerald-400">
              <span className="font-mono font-bold text-3xl shrink-0">
                &lt; 24h
              </span>
              <span className="text-sm text-slate-300">
                Direct Engineering Response SLA
              </span>
            </div>
            <div className="flex items-center gap-3 text-emerald-400">
              <span className="font-mono font-bold text-3xl shrink-0">
                CI-Gated
              </span>
              <span className="text-sm text-slate-300">
                Automated Regression Before Every Deploy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Differentiators */}
      <section
        id="why-us-differentiators"
        data-testid="why-us-differentiators"
        className="py-12 sm:py-16 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-4 font-mono uppercase text-sm text-cyan-400 tracking-wider">
              // CORE DIFFERENTIATORS
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold leading-tight">
              Engineered for Speed,{" "}
              <span className="relative inline-block bg-gradient-to-r from-cyan-500 to-emerald-600 bg-clip-text text-transparent">
                Backed by Automated QA
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Shift-Left Automated QA
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We embed Playwright E2E and API test coverage directly into your
                development sprint—not as a last-minute scramble before launch.
                Every feature ships with automated regression protection from day
                one.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Direct Engineer-to-Founder Access
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Skip account managers and slow handoff chains. You collaborate
                directly with the engineers architecting your application,
                reviewing pull requests, and tuning your test pipelines.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Flake-Free CI/CD Quality Gates
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We wire deterministic, parallelized test suites into your GitHub
                Actions workflow so broken builds are blocked
                automatically—eliminating manual release checklists and
                midnight hotfixes.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Lean, Production-Ready Stack
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We build on modern, high-leverage technologies—Next.js,
                TypeScript, Flutter, Supabase, and Cloudflare Edge—giving you
                fast global performance without bloated monthly cloud bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Comparison Matrix */}
      <section
        id="why-us-comparison"
        data-testid="why-us-comparison"
        className="py-12 sm:py-16 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-2 font-mono uppercase text-xs text-cyan-400 tracking-wider">
              // THE COMPARISON
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold leading-tight">
              How Vectra Compares to{" "}
              <span className="relative inline-block bg-gradient-to-r from-cyan-500 to-emerald-600 bg-clip-text text-transparent">
                Traditional Options
              </span>
            </h2>
          </div>

          {/* Mobile Stacked Cards */}
          <div className="md:hidden space-y-4 mt-6">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 space-y-3"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  {item.criteria}
                </p>
                <div className="bg-cyan-500/10 border border-cyan-500/25 rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Vectra Solutions</span>
                  </div>
                  <p className="text-white font-semibold text-sm leading-snug">
                    {item.vectra}
                  </p>
                </div>
                <div className="text-xs text-slate-400 space-y-2 pt-1">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <p>
                      <span className="text-slate-300 font-medium">
                        Freelance Marketplaces:
                      </span>{" "}
                      {item.freelancers}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <p>
                      <span className="text-slate-300 font-medium">
                        Traditional Agencies:
                      </span>{" "}
                      {item.agencies}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Comparison Table */}
          <div className="hidden md:block mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60">
            <table className="w-full text-sm align-middle">
              <thead>
                <tr>
                  <th className="p-4 text-left text-slate-400 font-mono text-xs uppercase border-b border-white/10">
                    Criteria
                  </th>
                  <th className="p-4 text-left bg-cyan-500/5 border-x border-b border-cyan-500/20 text-white font-semibold min-w-52">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Vectra Solutions</span>
                    </div>
                  </th>
                  <th className="p-4 text-left text-slate-400 border-b border-white/10 min-w-52">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-slate-500 shrink-0" />
                      <span>Freelance Marketplaces</span>
                    </div>
                  </th>
                  <th className="p-4 text-left text-slate-400 border-b border-white/10 min-w-52">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-slate-500 shrink-0" />
                      <span>Traditional Agencies</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 last:border-none"
                  >
                    <td className="p-4 text-slate-400 font-mono text-xs">
                      {item.criteria}
                    </td>
                    <td className="p-4 bg-cyan-500/5 border-x border-cyan-500/20 text-white font-semibold">
                      {item.vectra}
                    </td>
                    <td className="p-4 text-slate-400">{item.freelancers}</td>
                    <td className="p-4 text-slate-400">{item.agencies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Engineering Guarantees */}
      <section
        id="why-us-guarantees"
        data-testid="why-us-guarantees"
        className="py-12 sm:py-16 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-2 font-mono uppercase text-xs text-cyan-400 tracking-wider">
              // ENGINEERING GUARANTEES
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold leading-tight">
              Built on Transparency.{" "}
              <span className="relative inline-block bg-gradient-to-r from-cyan-500 to-emerald-600 bg-clip-text text-transparent">
                Zero Risk or Lock-In.
              </span>
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Strict Mutual NDA
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your product specs, data models, and proprietary workflows are
                protected under a mutual NDA before kickoff. All code is
                developed directly inside your private repositories.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <CalendarCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Weekly Working Demos
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No black-box development cycles. You receive weekly live
                preview builds, transparent GitHub PRs, and passing CI/CD test
                reports at every milestone.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <FileCode2 className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Clean Docs &amp; Handoff
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We deliver clear architecture READMEs, `.env` templates, and
                structured Playwright test suites so your internal engineers can
                onboard and extend the codebase without friction.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <KeyRound className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Zero Vendor Lock-In
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We build exclusively on open, industry-standard stacks—Next.js,
                TypeScript, Playwright, and PostgreSQL—with full account
                ownership retained by your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Conversion CTA Banner */}
      <section
        id="why-us-cta"
        data-testid="why-us-cta"
        className="py-12 sm:py-20 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-r from-slate-900/90 via-cyan-950/40 to-slate-900/90 border border-cyan-500/20 rounded-3xl p-8 sm:p-14 text-center shadow-2xl backdrop-blur-xl">
            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-4 inline-block px-3 py-1 bg-cyan-950/80 border border-cyan-500/30 rounded-full">
              // READY TO SHIP
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-6 tracking-tight">
              Ship Faster Without Compromising Quality
            </h2>

            <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg sm:text-xl leading-relaxed">
              Whether you&apos;re launching a greenfield MVP or hardening an
              existing codebase with Playwright automation, let&apos;s map out a
              zero-defect roadmap for your team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg transition-all shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center gap-2"
              >
                <span>Start a Technical Conversation</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="bg-slate-950/80 hover:bg-slate-900 text-slate-300 border border-white/10 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold transition-all inline-flex items-center justify-center"
              >
                Explore Engineering Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}