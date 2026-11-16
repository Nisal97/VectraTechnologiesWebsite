"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle, Monitor, Play } from "lucide-react";
import Link from "next/link";
import { cn } from "cn";

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

type TerminalLine = {
  type: "cmd" | "log" | "pass" | "success";
  text: string;
};

const TERMINAL_LINES: TerminalLine[] = [
  { type: "cmd", text: "$ npx playwright test --project=chromium --reporter=list" },
  { type: "log", text: "Running 12 tests across 4 spec files" },
  { type: "pass", text: "login.spec.ts › authenticates with valid credentials" },
  { type: "pass", text: "login.spec.ts › locks account after 3 failed attempts" },
  { type: "pass", text: "checkout.spec.ts › completes end-to-end order flow" },
  { type: "pass", text: "checkout.spec.ts › applies coupon and computes tax" },
  { type: "pass", text: "api.spec.ts › returns 200 on /health" },
  { type: "pass", text: "api.spec.ts › verifies webhook signature" },
  { type: "success", text: "Tests: 12 passed, 12 total, 0 flaky" },
  { type: "cmd", text: "$ next build" },
  { type: "log", text: "Compiled successfully in 2.1s" },
  { type: "log", text: "Collecting page data" },
  { type: "log", text: "   ✓ /  (root)" },
  { type: "log", text: "   ✓ /services" },
  { type: "log", text: "   ✓ /contact" },
  { type: "log", text: "Build optimization completed" },
  { type: "success", text: "Build completed in 3.4s — ready for deployment" },
  { type: "log", text: "[ok] SRE: cloud infrastructure healthy (us-east-1)" },
  { type: "log", text: "[ok] Zero defects detected in production" },
];

const lineStyles: Record<TerminalLine["type"], string> = {
  cmd: "text-cyan-400",
  log: "text-zinc-400",
  pass: "text-emerald-400",
  success: "text-emerald-300 font-semibold",
};

const prefixByType: Record<TerminalLine["type"], React.ReactNode> = {
  cmd: <span className="text-zinc-500 pr-1">$</span>,
  pass: <span className="text-emerald-400">✓</span>,
  log: <span className="text-zinc-500 pr-1">›</span>,
  success: <span className="text-emerald-500 pr-1">➜</span>,
};

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <span className="text-[10px] text-emerald-400" aria-hidden="true">
                ▸
              </span>
              <span className="text-xs font-medium text-zinc-300 tracking-wider uppercase">
                Vectra Solutions
              </span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
              Engineering{" "}
              <span
                className="relative inline-block bg-gradient-to-r from-cyan-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]"
              >
                Scalable Apps.
              </span>{" "}
              Automating{" "}
              <span
                className="relative inline-block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(16,185,129,0.35)]"
              >
                Zero-Defect Quality.
              </span>
            </h1>

            <p className="text-sm sm:text-lg leading-relaxed text-slate-400 max-w-xl">
              Full-Stack Web &amp; Mobile MVPs • Playwright &amp; Selenium E2E
              Automation • SRE &amp; Cloud Infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all px-4 py-3 text-sm font-medium">
                Explore Services <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg backdrop-blur-md bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all px-4 py-3 text-sm font-medium">
                Get a Free Quote <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

            <div className="flex items-center gap-6 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-emerald-500" aria-hidden="true" />
                Zero-Defect QA
              </span>
              <span className="h-4 w-px bg-white/10" />
              <span className="flex items-center gap-1.5">
                <Monitor className="size-4 text-cyan-400" aria-hidden="true" />
                24/7 SRE Support
              </span>
              <span className="h-4 w-px bg-white/10" />
              <span className="flex items-center gap-1.5">
                <Play className="size-4 text-zinc-400" aria-hidden="true" />
                Playwright Certified
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-emerald-500/10 to-blue-500/20 blur-xl rounded-2xl -z-10" />
            <div className="relative overflow-x-auto max-w-full rounded-2xl border border-white/10 bg-[#0b1020]/60 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/3">
                <div className="flex items-center gap-2">
                  <span className="flex flex-row gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/90" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/90" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    terminal.session-01
                  </span>
                </div>
                <button className="p-1 hover:bg-white/10 rounded transition-colors" aria-label="Copy terminal output">
                  <span aria-hidden="true">⎌</span>
                </button>
              </div>
              <div className="p-3 sm:p-5 font-mono text-xs sm:text-sm whitespace-pre-wrap break-all leading-relaxed">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2"
                >
                  {TERMINAL_LINES.map((line, i) => (
                    <motion.div
                      key={i}
                      variants={lineVariants}
                      className={cn("flex items-start gap-2", lineStyles[line.type])}
                    >
                      {prefixByType[line.type]}
                      <span className="whitespace-pre-wrap break-all">{line.text}</span>
                    </motion.div>
                  ))}
                  <span className="text-emerald-400 animate-pulse">_</span>
                </motion.div>
              </div>
            </div>
            <p className="mt-4 text-xs text-zinc-500 text-center">
              Simulated CI/QA telemetry — animated with framer-motion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}