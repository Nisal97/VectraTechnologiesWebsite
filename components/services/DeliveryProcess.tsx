"use client";

export default function DeliveryProcess() {
  const STEPS = [
    {
      num: "01",
      color: "text-cyan-400 bg-cyan-950/80 border-cyan-500/30",
      title: "Discovery & Architecture Blueprint",
      business: "Align on product scope, timeline, and key performance goals with weekly status updates.",
      tech: "Schema design, tech stack selection (Next.js/Supabase/Playwright), and architecture mapping.",
    },
    {
      num: "02",
      color: "text-emerald-400 bg-emerald-950/80 border-emerald-500/30",
      title: "Rapid Sprint & Test-Driven Build",
      business: "Fast iterative releases so you can test live features early and give continuous feedback.",
      tech: "Component-driven UI development, API integrations, and parallel automated unit/integration tests.",
    },
    {
      num: "03",
      color: "text-purple-400 bg-purple-950/80 border-purple-500/30",
      title: "Automated QA & Stress Testing",
      business: "100% bug verification across desktop & mobile devices before going live.",
      tech: "Playwright/Selenium E2E suite execution, multi-browser regression runs, and CI/CD pipeline verification.",
    },
    {
      num: "04",
      color: "text-amber-400 bg-amber-950/80 border-amber-500/30",
      title: "Production Launch & Handover",
      business: "Smooth, zero-downtime deployment with complete ownership handover and post-launch support.",
      tech: "Vercel/Cloud deployment, DNS routing, automated test reporting docs, and repository transfer.",
    },
  ];

  return (
    <section id="delivery-process" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-mono text-emerald-400 text-xs tracking-widest uppercase mb-2 block">
          06 // HOW WE EXECUTE
        </span>
        <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white mb-4">
          Our 4-Step Engineering Delivery Process
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          A transparent, milestone-driven workflow designed to eliminate unexpected delays, ensure zero-defect code, and deliver measurable business value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step) => (
          <div
            key={step.num}
            className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className={step.color}>{step.num}</div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">{step.title}</h3>
              <div className="space-y-3 text-xs">
                <div>
                  <p className="text-slate-400 font-semibold mb-1">Business Impact:</p>
                  <p className="text-slate-300 leading-relaxed">{step.business}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-semibold mb-1">Technical Execution:</p>
                  <p className="text-slate-500 font-mono leading-relaxed">{step.tech}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}