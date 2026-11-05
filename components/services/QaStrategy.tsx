"use client";

import { CheckCircle2 } from "lucide-react";

export default function QaStrategy() {
  return (
    <section
      id="qa-strategy"
      className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
      >
        <div className="lg:col-span-7">
          {/* Header Tag */}
          <span className="font-mono text-amber-400 text-xs tracking-widest uppercase mb-2 block">
            04 // QUALITY STRATEGY & BUG EXECUTION
          </span>

          {/* Title */}
          <h2
            className="font-heading font-bold text-2xl sm:text-4xl text-white mb-4"
          >
            Comprehensive QA Strategy & Manual Bug Execution
          </h2>

          {/* Client-Friendly Summary */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Human intuition catches what bots miss. We design full-coverage test plans
            and perform rigorous exploratory testing to uncover subtle usability issues,
            weird edge-case glitches, and layout flaws before your customers do.
          </p>

          {/* Key Business Outcomes - 2 Column Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <CheckCircle2
                className="w-5 h-5 text-amber-400 mb-3 inline-block"
                aria-hidden="true"
              />
              <span className="text-slate-300 text-sm">
                <strong>Catch Edge Cases:</strong> Thorough human testing on complex user
                actions & payment flows.
              </span>
            </div>
            <div>
              <CheckCircle2
                className="w-5 h-5 text-amber-400 mb-3 inline-block"
                aria-hidden="true"
              />
              <span className="text-slate-300 text-sm">
                <strong>Real Device Testing:</strong> Verified across physical iPhones,
                Androids, Mac, and Windows browsers.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <CheckCircle2
                className="w-5 h-5 text-amber-400 mb-3 inline-block"
                aria-hidden="true"
              />
              <span className="text-slate-300 text-sm">
                <strong>Turnkey QA Blueprints:</strong> Customized matrix scenarios tailored
                to your business logic.
              </span>
            </div>
            <div>
              <CheckCircle2
                className="w-5 h-5 text-amber-400 mb-3 inline-block"
                aria-hidden="true"
              />
              <span className="text-slate-300 text-sm">
                <strong>Actionable Bug Reports:</strong> Step-by-step reproduction videos &
                logs for developers.
              </span>
            </div>
          </div>

          {/* Tech Stack & Tools */}
          <div className="mt-8 space-y-2">
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-amber-950/60 text-amber-300 border border-amber-500/30"
            >
              Jira / Xray
            </span>
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-amber-950/60 text-amber-300 border border-amber-500/30"
            >
              TestRail
            </span>
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-amber-950/60 text-amber-300 border border-amber-500/30"
            >
              Cross-Browser Testing
            </span>
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-amber-950/60 text-amber-300 border border-amber-500/30"
            >
              Exploratory QA
            </span>
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-amber-950/60 text-amber-300 border border-amber-500/30"
            >
              Boundary Testing
            </span>
          </div>
        </div>

        {/* Right Column - Visual Card */}
        <div
          className="lg:col-span-5 bg-slate-950 border border-amber-500/30 rounded-2xl p-6 font-mono text-xs text-slate-300 shadow-2xl"
        >
          {/* QA Coverage Matrix Header */}
          <div className="mb-6 text-amber-400 text-xs tracking-widest uppercase">
            // qa-coverage-matrix.spec.ts
          </div>

          {/* Status Indicators */}
          <div className="space-y-3">
            <div>
              <p className="text-slate-400">Test Case Coverage:</p>
              <p className="text-amber-300 font-bold">100% Core Scenarios</p>
            </div>
            <div>
              <p className="text-slate-400">Critical Bug Triage:</p>
              <p className="text-amber-300 font-bold">0 Open Showstoppers</p>
            </div>
            <div>
              <p className="text-slate-400">Verified Platforms:</p>
              <p className="text-amber-300 font-bold">
                iOS 18, Android 15, Chrome, Safari, Edge
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}