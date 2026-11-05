"use client";

export default function PricingModels() {
  return (
    <section id="pricing-models" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <header className="mb-12">
        <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-2 text-center block">07 // FLEXIBLE COLLABORATION</span>
        <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white mb-4 text-center">
          Transparent Engagement Models
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto text-center mb-12">
          Select a collaboration model tailored to your product stage, budget requirements, and development velocity.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

        {/* Card 1: Fixed-Price Project Scope */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300">
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 w-fit mb-4">BEST FOR MVPs & AUDITS</span>
          <h3 className="font-heading font-bold text-xl text-white mb-2">Fixed-Price Scope</h3>
          <p className="text-slate-400 text-sm mb-6">
            Predictable budgeting for clearly defined projects, MVPs, and automated testing suite setups.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div>
              <strong className="text-slate-300">Business Outcomes:</strong>
              <span>Guaranteed cost cap, strict milestone timelines, zero budget surprises.</span>
            </div>
            <div>
              <strong className="text-slate-300">Technical Scope:</strong>
              <span>Defined sprint deliverables, repository handover, comprehensive automated suite & documentation.</span>
            </div>
          </div>
          <a
            href="#"
            className="border border-white/10 hover:border-cyan-500/50 py-2.5 px-4 rounded-xl text-xs font-mono text-slate-300 text-center mt-6 block"
          >
            Request Fixed Proposal →
          </a>
        </div>

        {/* Card 2: Dedicated Monthly Retainer (Featured) */}
        <div
          className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/60 bg-gradient-to-b from-cyan-950/30 to-slate-900/60 shadow-[0_0_30px_rgba(0,240,255,0.15)] relative scale-105"
        >
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-cyan-500 text-black font-bold w-fit mb-4">
            MOST POPULAR FOR GROWTH
          </span>
          <h3 className="font-heading font-bold text-xl text-white mb-2">
            Monthly Dedicated Retainer
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Ongoing quality engineering and development capacity embedded directly into your core team.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div>
              <strong className="text-slate-300">Business Outcomes:</strong>
              <span>
                Scale dev/QA capacity instantly without full-time hiring overhead or long-term contracts.
              </span>
            </div>
            <div>
              <strong className="text-slate-300">Technical Scope:</strong>
              <span>
                Dedicated sprint hours, automated CI/CD pipeline monitoring, rapid bug execution & direct Slack/WhatsApp comms.
              </span>
            </div>
          </div>
          <a
            href="#"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2.5 px-4 rounded-xl text-xs font-mono text-center mt-6 block"
          >
            Reserve Monthly Capacity ⚡
          </a>
        </div>

        {/* Card 3: On-Demand Advisory & Audit */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300">
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/30 w-fit mb-4">
            FLEXIBLE ADVISORY
          </span>
          <h3 className="font-heading font-bold text-xl text-white mb-2">
            On-Demand & Advisory
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Targeted troubleshooting, test framework refactoring, and quality strategy consulting.
          </p>
          <div className="space-y-2 text-xs text-slate-300">
            <div>
              <strong className="text-slate-300">Business Outcomes:</strong>
              <span>
                Pay-as-you-go expertise for urgent bug triage or architectural bottleneck resolution.
              </span>
            </div>
            <div>
              <strong className="text-slate-300">Technical Scope:</strong>
              <span>
                Codebase security/performance audit, test suite speed optimization, and developer 1-on-1 coaching.
              </span>
            </div>
          </div>
          <a
            href="#"
            className="border border-white/10 hover:border-purple-500/50 py-2.5 px-4 rounded-xl text-xs font-mono text-slate-300 text-center mt-6 block"
          >
            Book Advisory Session →
          </a>
        </div>

      </div>
    </section>
  );
}