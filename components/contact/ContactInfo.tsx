export default function ContactInfo() {
  return (
    <aside
      id="contact-info-panel"
      data-testid="contact-info-panel"
      className="space-y-6"
    >
      {/* Studio Direct Channels Card */}
      <div className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            // STUDIO CHANNELS
          </span>
          <span
            data-testid="sla-badge"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            &lt; 24h Response SLA
          </span>
        </div>

        <div className="space-y-4">
          {/* Direct Email */}
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Direct Studio Email
              </p>
              <a
                href="mailto:contact@vectrasolutions.dev"
                data-testid="contact-direct-email"
                className="text-sm sm:text-base font-medium text-white hover:text-cyan-400 transition-colors"
              >
                contact@vectrasolutions.dev
              </a>
            </div>
          </div>

          {/* Operating Region */}
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Engineering Base
              </p>
              <p className="text-sm sm:text-base font-medium text-white">
                Sri Lanka (UTC+5:30) — Serving Global Teams
              </p>
            </div>
          </div>

          {/* Discovery Call Window */}
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Discovery Calls
              </p>
              <p className="text-sm sm:text-base font-medium text-white">
                Mon – Sat • Flexible Async &amp; Live Slots
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Happens Next Card */}
      <div
        data-testid="contact-process-card"
        className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6 sm:p-8"
      >
        <h2 className="text-sm font-mono uppercase tracking-widest text-slate-300 mb-5">
          // WHAT HAPPENS NEXT
        </h2>
        <ol className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-500/30 font-mono text-xs text-cyan-300">
              01
            </span>
            <div>
              <p className="font-medium text-white">Technical Triage</p>
              <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                We review your scope, stack, and QA/MVP goals before our first chat.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 font-mono text-xs text-emerald-300">
              02
            </span>
            <div>
              <p className="font-medium text-white">Discovery Call</p>
              <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                We confirm your suggested date &amp; time or propose the closest slot.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 border border-blue-500/30 font-mono text-xs text-blue-300">
              03
            </span>
            <div>
              <p className="font-medium text-white">Actionable Proposal</p>
              <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                Receive a clear milestone roadmap, timeline, and transparent quote.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </aside>
  );
}