import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Terminal, GitBranch, Cpu, XCircle, Lock, CalendarCheck, FileCode2, KeyRound, ArrowRight } from "lucide-react";
import Link from "next/link";

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
      <section
        id="why-us-comparison"
        data-testid="why-us-comparison"
        className="py-12 sm:py-16 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-2 monospace uppercase text-xs text-cyan-400 tracking-wider">
              // THE COMPARISON
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold leading-tight">
              How Vectra Compares to <span className="relative inline-block bg-gradient-to-r from-cyan-500 to-emerald-600 bg-clip-text text-transparent">
                Traditional Options
              </span>
            </h2>
          </div>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60">
            <table className="w-full text-xs align-middle">
              <thead>
                <tr>
                  <th className="text-left text-slate-400 font-mono uppercase border-b border-white/10">Criteria</th>
                  <th className="text-left bg-cyan-500/5 border-x border-cyan-500/20 text-white font-semibold min-w-48"><div className="flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> Vectra Solutions</div></th>
                  <th className="text-left text-slate-400 min-w-48"><div className="flex items-center gap-2"><XCircle className="w-3 h-3 text-slate-500" /> Freelance Marketplaces</div></th>
                  <th className="text-left text-slate-400 min-w-48"><div className="flex items-center gap-2"><XCircle className="w-3 h-3 text-slate-500" /> Traditional Agencies</div></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10"><td className="p-2 text-slate-400 font-mono">Automated QA & E2E</td><td className="p-2 bg-cyan-500/5 border-x border-cyan-500/20 text-white font-semibold">Built-in Playwright & API from day one</td><td className="p-2 text-slate-400">Rarely included; manual checks</td><td className="p-2 text-slate-400">Billed separately as add-on</td></tr>
                <tr className="border-b border-white/10"><td className="p-2 text-slate-400 font-mono">Communication</td><td className="p-2 bg-cyan-500/5 border-x border-cyan-500/20 text-white font-semibold">Direct with engineers building product</td><td className="p-2 text-slate-400">Timezone & availability bottlenecks</td><td className="p-2 text-slate-400">Filtered through managers</td></tr>
                <tr className="border-b border-white/10"><td className="p-2 text-slate-400 font-mono">CI/CD Quality Gates</td><td className="p-2 bg-cyan-500/5 border-x border-cyan-500/20 text-white font-semibold">Automated GitHub Actions blocking bad deploys</td><td className="p-2 text-slate-400">Manual deployments with regression risk</td><td className="p-2 text-slate-400">Slow, heavy release cycles</td></tr>
                <tr className="border-b border-white/10"><td className="p-2 text-slate-400 font-mono">Code & IP Ownership</td><td className="p-2 bg-cyan-500/5 border-x border-cyan-500/20 text-white font-semibold">100% yours in GitHub org from commit #1</td><td className="p-2 text-slate-400">Varies; often handed over at end</td><td className="p-2 text-slate-400">Locked until final invoice sign-off</td></tr>
                <tr className="border-b border-white/10"><td className="p-2 text-slate-400 font-mono">Delivery Velocity</td><td className="p-2 bg-cyan-500/5 border-x border-cyan-500/20 text-white font-semibold">Weekly working builds & transparent PRs</td><td className="p-2 text-slate-400">Unpredictable bandwidth</td><td className="p-2 text-slate-400">Weeks of discovery before writing code</td></tr>
                <tr className="border-b border-white/10"><td className="p-2 text-slate-400 font-mono">Cost Efficiency</td><td className="p-2 bg-cyan-500/5 border-x border-cyan-500/20 text-white font-semibold">Lean, senior-level output without agency bloat</td><td className="p-2 text-slate-400">Low upfront rate, high bug-fix rework cost</td><td className="p-2 text-slate-400">High retainers covering overhead & layers</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section
        id="why-us-guarantees"
        data-testid="why-us-guarantees"
        className="py-12 sm:py-16 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-2 monospace uppercase text-xs text-cyan-400 tracking-wider">
              // ENGINEERING GUARANTEES
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold leading-tight">
              Built on Transparency. <span className="relative inline-block bg-gradient-to-r from-cyan-500 to-emerald-600 bg-clip-text text-transparent">
                Zero Risk or Lock-In.
              </span>
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">Strict Mutual NDA</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your product specs, data models, and proprietary workflows are protected under a mutual NDA before kickoff. All code is developed directly inside your private repositories.
              </p>
            </div>
            <div
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <CalendarCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">Weekly Working Demos</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No black-box development cycles. You receive weekly live preview builds, transparent GitHub PRs, and passing CI/CD test reports at every milestone.
              </p>
            </div>
            <div
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileCode2 className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">Clean Docs & Handoff</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We deliver clear architecture READMEs, `.env` templates, and structured Playwright test suites so your internal engineers can onboard and extend the codebase without friction.
              </p>
            </div>
            <div
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <KeyRound className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">Zero Vendor Lock-In</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We build exclusively on open, industry-standard stacks—Next.js, TypeScript, Playwright, and PostgreSQL—with full account ownership retained by your team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="why-us-cta"
        data-testid="why-us-cta"
        className="py-12 sm:py-20 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden bg-gradient-to-r from-slate-900/90 via-cyan-950/40 to-slate-900/90 border border-cyan-500/20 rounded-3xl p-8 sm:p-14 text-center shadow-2xl backdrop-blur-xl"
          >
            {/* Eyebrow pill */}
            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-4 inline-block px-3 py-1 bg-cyan-950/80 border border-cyan-500/30 rounded-full">
              // READY TO SHIP
            </span>

            {/* Title */}
            <h2
              className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-6 tracking-tight"
            >
              Ship Faster Without Compromising Quality
            </h2>

            {/* Subheadline */}
            <p
              className="text-white/90 max-w-2xl mx-auto mb-10 text-lg sm:text-xl leading-relaxed"
            >
              Whether you're launching a greenfield MVP or hardening an existing codebase with Playwright automation, let's map out a zero-defect roadmap for your team.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg transition-all shadow-lg hover:shadow-cyan-500/25 inline-block m-2"
              >
                Start a Technical Conversation<span className="inline-block arrowRight:rotate-90 inline mr-1"><ArrowRight className="w-4 h-4 text-white" /></span>
              </Link>
              <Link
                href="/services"
                className="bg-slate-950/80 hover:bg-slate-900 text-slate-300 border border-white/10 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold transition-all inline-block m-2"
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