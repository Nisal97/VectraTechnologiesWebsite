"use client"

import Link from "next/link";
import { Zap, Terminal, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060911] text-slate-400 border-t border-white/10 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Brand & Status (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link className="inline-flex items-center gap-2 group" href="/">
              <div className="p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 transition-colors">
                <Zap className="w-5 h-5 fill-cyan-400"/>
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                VECTRA SOLUTIONS
              </span>
            </Link>
            
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Enterprise Quality Engineering & Full-Stack Application Architecture. Building production-ready software with automated confidence.
            </p>

            {/* Live Status Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-white/10 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-slate-300">All Systems Operational</span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-400 font-semibold">Open for Q4 Projects</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link className="hover:text-cyan-400 transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-cyan-400 transition-colors" href="/services">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-cyan-400 transition-colors" href="/#why-us">
                  Why Work With Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-cyan-400 transition-colors" href="/#team">
                  Our Team
                </Link>
              </li>
              <li>
                <a href="mailto:contact@vectrasolutions.dev" className="hover:text-cyan-400 transition-colors">
                  Contact Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <ul className="space-y-2.5 text-xs text-slate-400 font-mono">
              <li className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0"/>
                <span>Full-Stack Web & Mobile MVPs (Next.js/Flutter)</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0"/>
                <span>E2E Test Automation (Playwright / Selenium)</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-purple-400 shrink-0"/>
                <span>QA Framework Audits & Flakiness Reduction</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-amber-400 shrink-0"/>
                <span>CI/CD Pipeline Setup & SRE DevOps</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Vectra Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
