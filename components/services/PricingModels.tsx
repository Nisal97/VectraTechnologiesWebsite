 
"use client";

import { Check, ArrowRight } from "lucide-react";

interface BusinessOutcome {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

interface TechnicalScope {
  title: string;
  description: string;
}

interface PricingModel {
  id: string;
  badgeText: string;
  badgeColor: string;
  badgeBgColor: string;
  badgeBorderColor: string;
  badgeTextColor: string;
  title: string;
  subtitle: string;
  description: string;
  businessOutcomes: BusinessOutcome[];
  technicalScope: TechnicalScope;
  ctaText: string;
  ctaHref: string;
  ctaBgColor?: string;
  ctaGradient?: string;
}

const pricingModels = [
  {
    id: "fixed-price",
    badgeText: "BEST FOR MVPS & AUDITS",
    badgeColor: "text-cyan-400",
    badgeBgColor: "bg-cyan-950/80",
    badgeBorderColor: "border border-cyan-500/30",
    badgeTextColor: "text-cyan-300",
    title: "Fixed-Price Scope",
    subtitle: "Predictable budgeting.",
    description: "Select a collaboration model.",
    businessOutcomes: [
      { icon: Check, label: "Cost cap." },
      { icon: Check, label: "Milestone timelines." },
    ],
    technicalScope: {
      title: "Technical Scope",
      description: "Sprint deliverables.",
    },
    ctaText: "Request Proposal",
    ctaHref: "mailto:contact@vectrasolutions.dev",
    ctaBgColor: "bg-slate-950",
  },
  {
    id: "monthly-retainer",
    badgeText: "MOST POPULAR",
    badgeColor: "text-slate-950",
    badgeBgColor: "bg-cyan-400",
    badgeBorderColor: "border border-cyan-500/30",
    badgeTextColor: "text-slate-950",
    title: "Monthly Retainer",
    subtitle: "Fixed monthly investment.",
    description: "Fixed monthly investment.",
    businessOutcomes: [
      { icon: Check, label: "Scale capacity." },
      { icon: Check, label: "Flexible priorities." },
    ],
    technicalScope: {
      title: "Technical Scope",
      description: "Sprint hours & CI/CD.",
    },
    ctaText: "Reserve ⚡",
    ctaHref: "mailto:contact@vectrasolutions.dev",
    ctaBgColor: "from-cyan-400 to-emerald-400",
    ctaGradient: "gradient-to-r",
  },
  {
    id: "on-demand",
    badgeText: "FLEXIBLE ADVISORY",
    badgeColor: "text-purple-400",
    badgeBgColor: "bg-purple-950/80",
    badgeBorderColor: "border border-purple-500/30",
    badgeTextColor: "text-purple-300",
    title: "On-Demand",
    subtitle: "Targeted troubleshooting.",
    description: "Targeted troubleshooting.",
    businessOutcomes: [
      { icon: Check, label: "Senior advice." },
      { icon: Check, label: "Architecture bottlenecks." },
    ],
    technicalScope: {
      title: "Technical Scope",
      description: "Audit & coaching.",
    },
    ctaText: "Book Session",
    ctaHref: "mailto:contact@vectrasolutions.dev",
    ctaBgColor: "bg-slate-950",
  },
];

const BusinessOutcomeItem = ({ icon: Icon, label }: BusinessOutcome) => (
  <li className="flex items-start gap-2">
    <Icon aria-hidden="true" className="w-4 h-4 text-current shrink-0 mt-0.5" />
    <span>{label}</span>
  </li>
);

const TechnicalScopeRender = ({ title, description }: TechnicalScope) => (
  <div>
    <p className="text-xs font-mono text-slate-400 uppercase font-bold mb-2">{title}</p>
    <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const ModelColumn = ({
  model,
}: {
  model: PricingModel;
}) => (
  <div
    className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
  >
    <div>
      <span
        className={`font-mono text-[11px] font-semibold px-3 py-1 rounded-full ${model.badgeBgColor} ${model.badgeColor} ${model.badgeBorderColor} inline-block mb-4`}
      >
        {model.badgeText}
      </span>
      <h3 className="font-heading font-bold text-xl text-white mb-2">
        {model.title}
      </h3>
      <p className="text-slate-300 text-xs leading-relaxed mb-6">
        {model.subtitle}
      </p>
      <div className="space-y-4 border-t border-white/10 pt-4">
        <div>
          <p className="text-xs font-mono text-cyan-400 uppercase font-bold mb-2">
            Business Outcomes
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            {model.businessOutcomes.map((outcome, i) => (
              <BusinessOutcomeItem key={i} icon={outcome.icon} label={outcome.label} />
            ))}
          </ul>
        </div>
        <TechnicalScopeRender
          title={model.technicalScope.title}
          description={model.technicalScope.description}
        />
      </div>
      <a
        href={model.ctaHref}
        className={`mt-8 w-full py-3 px-4 rounded-xl text-xs font-mono font-semibold text-slate-200 ${model.ctaBgColor ?? "bg-slate-950"} ${
          model.ctaGradient ?? ""
        } hover:${model.ctaGradient ? "opacity-90" : "bg-slate-900"} border border-white/10 hover:border-cyan-500/40 transition-all text-center flex items-center justify-center gap-2`}
      >
        {model.ctaText}{" "}
        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
      </a>
    </div>
  </div>
);

export default function PricingModels() {
  return (
    <section id="pricing-models" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-6">
        <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase block">
          07 // FLEXIBLE COLLABORATION
        </span>
        <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white mb-4">
          Transparent Engagement Models
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Select a collaboration model.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {pricingModels.map((model) => (
          <ModelColumn key={model.id} model={model} />
        ))}
      </div>
    </section>
  );
}
