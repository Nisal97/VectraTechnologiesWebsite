"use client"

import { cn } from "cn"

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold text-cyan-400">⚡</span>
              <span className="text-3xl font-bold text-white">VECTRA SOLUTIONS</span>
            </div>
            <p className="text-slate-400 text-sm">
              Full-Stack Web & Mobile MVP Development · End-to-End UI & API Test Automation · SRE & Cloud Infrastructure
            </p>
          </div>

          <nav>
            <h5 className="text-sm font-medium text-slate-300 mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#team" className="text-slate-400 hover:text-cyan-400 transition-colors">Team</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="lg:col-span-2">
          <h5 className="text-sm font-medium text-slate-300 mb-4">Live Status</h5>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-300">All Systems Operational</span>
            <span className="text-slate-400 ml-4">• Open for New Projects</span>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="text-slate-400 text-sm mt-8">© 2026 Vectra Solutions. All rights reserved.</p>
        </div>
        </div>
    </footer>
  );
}
