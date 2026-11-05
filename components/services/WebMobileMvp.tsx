"use client";

import { CheckCircle2 } from "lucide-react";

export default function WebMobileMvp() {
  return (
    <section
      id="web-mobile-mvp"
      className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      <div
        className="
          grid grid-cols-1 lg:grid-cols-12 gap-8 items-center
          bg-slate-900/40 backdrop-blur-xl border border-white/10
          rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden
        "
      >
        {/* Left Column - Business Value & Tech Badges */}
        <div className="lg:col-span-7">

          {/* Header Tag */}
          <div className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-2 block">
            01 // FULL-STACK ENGINEERING & MVPs
          </div>

          {/* Title */}
          <h1
            className="
              font-heading font-bold text-2xl sm:text-4xl text-white mb-4
            "
          >
            Full-Stack Web & Mobile MVP Development
          </h1>

          {/* Client-Friendly Summary */}
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            We transform your raw product idea into a fast, polished web application
            and mobile app. Built cleanly from day one so you can launch to market in
            weeks, attract early users, and scale without rebuilding.
          </p>

          {/* Key Business Outcomes - 2 Column Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <CheckCircle2
                className="w-5 h-5 text-cyan-400 mb-3 inline-block"
                aria-hidden="true"
              />
              <span className="text-slate-300 text-sm">
                <strong>Fast Time-to-Market:</strong> Launch web & mobile apps in weeks.
              </span>
            </div>
            <div>
              <CheckCircle2
                className="w-5 h-5 text-cyan-400 mb-3 inline-block"
                aria-hidden="true"
              />
              <span className="text-slate-300 text-sm">
                <strong>Cross-Platform:</strong> Seamless iOS & Android experience.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <CheckCircle2
                className="w-5 h-5 text-cyan-400 mb-3 inline-block"
                aria-hidden="true"
              />
              <span className="text-slate-300 text-sm">
                <strong>Bank-Grade Security:</strong> Built-in authentication & RLS
                database protection.
              </span>
            </div>
            <div>
              <CheckCircle2
                className="w-5 h-5 text-cyan-400 mb-3 inline-block"
                aria-hidden="true"
              />
              <span className="text-slate-300 text-sm">
                <strong>Built to Scale:</strong> Handle growth without costly system
                overhauls.
              </span>
            </div>
          </div>

          {/* Tech Stack Badges - for technical reviewers */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span
              className="
                font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-950/60
                text-cyan-300 border border-cyan-500/30
              "
            >
              Next.js 15
            </span>
            <span
              className="
                font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-950/60
                text-cyan-300 border border-cyan-500/30
              "
            >
              React
            </span>
            <span
              className="
                font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-950/60
                text-cyan-300 border border-cyan-500/30
              "
            >
              Flutter
            </span>
            <span
              className="
                font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-950/60
                text-cyan-300 border border-cyan-500/30
              "
            >
              Supabase
            </span>
            <span
              className="
                font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-950/60
                text-cyan-300 border border-cyan-500/30
              "
            >
              Tailwind CSS
            </span>
            <span
              className="
                font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-950/60
                text-cyan-300 border border-cyan-500/30
              "
            >
              TypeScript
            </span>
            <span
              className="
                font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-950/60
                text-cyan-300 border border-cyan-500/30
              "
            >
              REST / GraphQL APIs
            </span>
          </div>
        </div>

        {/* Right Column - Solution Architecture Visual Card */}
        <div
          className="lg:col-span-5 bg-slate-950 border border-cyan-500/30 rounded-2xl p-6 font-mono text-xs text-slate-300 shadow-2xl"
        >
          {/* Business View Header */}
          <div className="mb-6 text-cyan-400 text-xs tracking-widest uppercase">
            // Solution Architecture Overview
          </div>

          {/* Business View - Idea to App */}
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            <strong>Business View:</strong> Idea ➔ Web/Mobile App ➔ Secure Database ➔
            Analytics. Smooth customer onboarding.
          </p>

          {/* Tech View - Architecture */}
          <p className="text-slate-400 text-sm leading-relaxed">
            <strong>Tech View:</strong> Next.js 15 App Router + Supabase DB. Pre-configured
            auth flows, RLS, and REST/GraphQL API endpoints.
          </p>
        </div>
      </div>
    </section>
  );
}