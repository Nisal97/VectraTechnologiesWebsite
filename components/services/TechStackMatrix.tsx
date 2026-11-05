"use client";

import { Code2, TestTube2, Database, Cpu } from "lucide-react";

export default function TechStackMatrix() {
  return (
    <section
      id="tech-stack"
      className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Header & Title */}
      <div className="text-center mb-12">
        <h2 className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-2 block text-center">
          05 // BATTLE-TESTED TOOLING
        </h2>
        <h1 className="font-heading font-bold text-2xl sm:text-4xl text-white mb-3 text-center">
          Our Enterprise Technology Stack
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto text-center mb-12">
          Modern frameworks and testing software engineered for high reliability and fast development cycles.
        </p>
      </div>

      {/* Categorized Grid - 4 Glass Cards in 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Full-Stack Web & Mobile */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all shadow-xl">
          <div className="flex items-start gap-3">
            <Code2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-white mb-1">Full-Stack Web & Mobile</h3>
              <span className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-950/80 text-cyan-300 border border-cyan-500/20 hover:border-cyan-400 transition-colors">
                App Architecture
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-slate-300 text-sm">
            <span>Next.js 15</span>
            <span>React</span>
            <span>Flutter</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>REST/GraphQL</span>
          </div>
        </div>

        {/* 2. Test Automation & QA */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all shadow-xl">
          <div className="flex items-start gap-3">
            <TestTube2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-white mb-1">Test Automation & QA</h3>
              <span className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-950/80 text-emerald-300 border border-emerald-500/20 hover:border-emerald-400 transition-colors">
                Quality Engineering
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-slate-300 text-sm">
            <span>Playwright</span>
            <span>Selenium WebDriver</span>
            <span>Katalon Studio</span>
            <span>Python</span>
            <span>Jest / Vitest</span>
            <span>Page Object Model</span>
          </div>
        </div>

        {/* 3. Backend & Data Layer */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all shadow-xl">
          <div className="flex items-start gap-3">
            <Database className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-white mb-1">Backend & Data Layer</h3>
              <span className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-950/80 text-purple-300 border border-purple-500/20 hover:border-purple-400 transition-colors">
                Database & Cloud
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-slate-300 text-sm">
            <span>Supabase</span>
            <span>PostgreSQL</span>
            <span>Node.js</span>
            <span>Vercel Serverless</span>
            <span>RLS Security Policies</span>
          </div>
        </div>

        {/* 4. DevOps & Pipeline CI/CD */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all shadow-xl">
          <div className="flex items-start gap-3">
            <Cpu className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-white mb-1">DevOps & Pipeline CI/CD</h3>
              <span className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-950/80 text-amber-300 border border-amber-500/20 hover:border-amber-400 transition-colors">
                Infrastructure
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-slate-300 text-sm">
            <span>GitHub Actions</span>
            <span>Docker</span>
            <span>Postman API</span>
            <span>Jira / Xray</span>
            <span>Sentry Monitoring</span>
          </div>
        </div>
      </div>
    </section>
  );
}