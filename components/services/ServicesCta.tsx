"use client";

export default function ServicesCta() {
  return (
    <section id="services-cta" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div
        className="relative overflow-hidden bg-gradient-to-r from-slate-900/90 via-cyan-950/40 to-slate-900/90 border border-cyan-500/30 rounded-3xl p-8 sm:p-14 text-center shadow-2xl backdrop-blur-xl"
      >
        {/* Header Tag */}
        <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-4 inline-block px-3 py-1 bg-cyan-950/80 border border-cyan-500/30 rounded-full">
          08 // GET STARTED
        </span>

        {/* Title */}
        <h2
          className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-6 tracking-tight"
        >
          Ready to Build Your Product or Audit Your QA Suite?
        </h2>

        {/* Dual-Audience Subtitle */}
        <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg sm:text-xl leading-relaxed">
          Whether you need a full-stack MVP delivered in weeks or automated test coverage that eliminates bugs, we're ready to engineer your solution.
        </p>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
          <div className="font-mono text-xs text-slate-300 bg-slate-950/80 border border-white/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 m-1.5">
            ⏱️ 24-Hour Response SLA
          </div>
          <div className="font-mono text-xs text-slate-300 bg-slate-950/80 border border-white/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 m-1.5">
            🛡️ Strict Mutual NDA Protection
          </div>
          <div className="font-mono text-xs text-slate-300 bg-slate-950/80 border border-white/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 m-1.5">
            ⚡ Direct Senior Engineering Lead
          </div>
          <div className="font-mono text-xs text-slate-300 bg-slate-950/80 border border-white/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 m-1.5">
            {/* Placeholder for 4th guarantee if needed */}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-16 space-x-4">
          <a
            href="mailto:contact@vectrasolutions.dev"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg transition-all shadow-lg hover:shadow-cyan-500/25 inline-block m-2"
          >
            Schedule a Technical Consult ⚡
          </a>
          <a
            href="#pricing-models"
            className="bg-slate-950/80 hover:bg-slate-900 text-slate-300 border border-white/10 px-8 py-4 rounded-xl text-base sm:text-lg font-semibold transition-all inline-block m-2"
          >
            View Engagement Models ↑
          </a>
        </div>
      </div>
    </section>
  );
}