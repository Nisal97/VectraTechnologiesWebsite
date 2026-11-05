"use client";

import { CheckCircle2 } from "lucide-react";

export default function AutomationAudit() {
  return (
    <section id="automation-audit" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="lg:col-span-7">
          <span className="font-mono text-purple-400 text-xs tracking-widest uppercase mb-2 block">
            03 // QA ARCHITECTURE & AUDIT
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white mb-4">
            Playwright & Selenium Automation Audit & Sanity Setup
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            We audit your existing codebase, fix slow or flaky tests, and install a lightweight automated sanity suite that verifies app health before every release.
          </p>

          <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
            {["Playwright", "Selenium", "Framework Refactoring", "CI/CD Pipeline", "Flakiness Reduction"].map((badge) => (
              <span key={badge} className="px-2.5 py-1 rounded-md bg-purple-950/60 text-purple-300 border border-purple-500/30">
                {badge}
              </span>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="font-heading font-semibold text-white text-sm">Key Business Outcomes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5"/>
                <span><strong>5-Min Sanity Checks:</strong> Instant health checks on critical user paths.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5"/>
                <span><strong>Eliminate False Alarms:</strong> Fix flaky tests to rebuild team trust.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5"/>
                <span><strong>Visual Dashboards:</strong> Instant HTML & Allure test status reports.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5"/>
                <span><strong>Prevent Outages:</strong> Stop broken code builds before production.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-950 border border-purple-500/30 rounded-2xl p-6 font-mono text-xs text-slate-300 shadow-2xl">
          <div className="text-purple-400 border-b border-white/10 pb-2 mb-4 font-bold">
            // audit-report.sanity-check.log
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-slate-400">Suite Execution Time:</p>
              <p className="text-emerald-400 font-bold">25 min ➔ 3.5 min ⚡</p>
            </div>
            <div>
              <p className="text-slate-400">Test Flakiness Rate:</p>
              <p className="text-purple-300 font-bold">42% ➔ 0% (Clean deterministic runs)</p>
            </div>
            <div>
              <p className="text-slate-400">CI Pipeline Blocking:</p>
              <p className="text-cyan-400 font-bold">Active in GitHub Actions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
