"use client";

import { CheckCircle2 } from "lucide-react";

export default function TestAutomation() {
  return (
    <section
      id="test-automation"
      className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
      >
        {/* Left Column - Header & Content */}
        <div className="lg:col-span-7">
          {/* Header Tag */}
          <div className="font-mono text-emerald-400 text-xs tracking-widest uppercase mb-2 block">
            02 // AUTOMATED QUALITY ENGINEERING
          </div>

          {/* Title */}
          <h1
            className="font-heading font-bold text-2xl sm:text-4xl text-white mb-4"
          >
            End-to-End UI & API Test Automation
          </h1>

          {/* Client-Friendly Summary */}
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Tired of unexpected software bugs reaching your customers after an update?
            We build automated testing bots that simulate real users across web browsers
            and verify backend APIs 24/7—ensuring your app works flawlessly on every release.
          </p>

          {/* Key Business Outcomes - 2 Column Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <CheckCircle2
                className="w-5 h-5 text-emerald-400 mb-3 inline-block"
                aria-hidden="true"
              />
              <span className="text-slate-300 text-sm">
                <strong>Zero-Defect Releases:</strong> Catch software glitches before users hit them.
              </span>
            </div>
            <div>
              <CheckCircle2
                className="w-5 h-5 text-emerald-400 mb-3 inline-block"
                aria-hidden="true"
              />
              <span className="text-slate-300 text-sm">
                <strong>Save QA Hours:</strong> Replace manual testing with automated scripts executing in minutes.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <CheckCircle2
                className="w-5 h-5 text-emerald-400 mb-3 inline-block"
                aria-hidden="true"
              />
              <span className="text-slate-300 text-sm">
                <strong>Protect Revenue:</strong> Keep checkout and signup flows fully operational.
              </span>
            </div>
            <div>
              <CheckCircle2
                className="w-5 h-5 text-emerald-400 mb-3 inline-block"
                aria-hidden="true"
              />
              <span className="text-slate-300 text-sm">
                <strong>Ship Fast:</strong> Deploy code anytime with total confidence.
              </span>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-8 space-y-2">
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-500/30"
            >
              Playwright
            </span>
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-500/30"
            >
              Selenium
            </span>
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-500/30"
            >
              TypeScript
            </span>
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-500/30"
            >
              Python
            </span>
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-500/30"
            >
              REST API
            </span>
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-500/30"
            >
              Page Object Model
            </span>
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-500/30"
            >
              Parallel Execution
            </span>
          </div>
        </div>

        {/* Right Column - Visual Card */}
        <div
          className="lg:col-span-5 bg-slate-950 border border-emerald-500/30 rounded-2xl p-6 font-mono text-xs text-slate-300 shadow-2xl"
        >
          {/* Terminal Log Header */}
          <div className="mb-6 text-emerald-400 text-xs tracking-widest uppercase">
            // playwright.test-runner.log
          </div>

          {/* Test Execution Passes */}
          <div>
            ✓ [PASS] Auth: User Login & Session Token (1.2s)
          </div>
          <div>
            ✓ [PASS] Checkout: Stripe Payment Flow (2.4s)
          </div>
          <div>
            ✓ [PASS] API: GET /api/v1/orders HTTP 200 OK (310ms)
          </div>

          {/* Suite Verification Complete */}
          <div className="mt-4 text-emerald-400/60">
            // 100% End-to-End Suite Verification Complete
          </div>
        </div>
      </div>
    </section>
  );
}