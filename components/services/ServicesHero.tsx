"use client";

import { cn } from "cn";

export default function ServicesHero() {
  return (
    <div className="relative overflow-hidden pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto text-center">
      <div className="font-mono text-xs text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 rounded-full px-3 py-1 inline-flex items-center gap-2 mb-6">
        <span>🟢</span>
        <span>STUDIO CAPABILITIES & SERVICES</span>
      </div>

      <h1 className="font-heading font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
        <span className="from-cyan-400 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
          Enterprise Quality Engineering & Scalable App Architecture
        </span>
      </h1>

      <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        From zero-defect automated test frameworks to high-performance web & mobile MVPs. We build production-ready solutions tailored for growth.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        <div>
          <span className="text-3xl font-bold text-cyan-400">⚡</span>
          <h3 className="text-white font-medium mb-2">Web & Mobile MVPs</h3>
          <p className="text-slate-300 text-sm">Next.js 15 + Flutter</p>
        </div>
        <div>
          <span className="text-3xl font-bold text-cyan-400">🛡️</span>
          <h3 className="text-white font-medium mb-2">E2E Test Automation</h3>
          <p className="text-slate-300 text-sm">Playwright & Selenium</p>
        </div>
        <div>
          <span className="text-3xl font-bold text-cyan-400">☁️</span>
          <h3 className="text-white font-medium mb-2">Cloud & SRE DevOps</h3>
          <p className="text-slate-300 text-sm">CI/CD & Infrastructure</p>
        </div>
      </div>
    </div>
  );
}