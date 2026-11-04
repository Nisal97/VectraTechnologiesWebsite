"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, Monitor, Terminal, ShieldCheck } from "lucide-react";
import { cn } from "cn";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 18, stiffness: 110 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

type ServiceCard = {
  title: string;
  badges: string[];
  description: string;
  icon: React.ReactNode;
};

const SERVICES: ServiceCard[] = [
  {
    title: "Full-Stack Web & Mobile MVP Development",
    badges: ["Next.js 15", "React", "Flutter", "Supabase", "Tailwind CSS"],
    description:
      "Scalable responsive web apps and cross-platform mobile MVPs built for rapid execution.",
    icon: <Code2 className="text-cyan-400" aria-hidden="true" />,
  },
  {
    title: "End-to-End UI & API Test Automation",
    badges: ["Playwright", "Selenium", "TypeScript", "Python", "REST API"],
    description:
      "Automated regression suites, parallel test execution, and continuous multi-browser validation.",
    icon: <Monitor className="text-emerald-400" aria-hidden="true" />,
  },
  {
    title: "Playwright & Selenium Automation Audit & Sanity Setup",
    badges: ["GitHub Actions", "CI/CD", "Docker", "Allure Reports"],
    description:
      "Refactoring fragile test suites, establishing headless CI runners, and instant smoke testing pipelines.",
    icon: <Terminal className="text-blue-400" aria-hidden="true" />,
  },
  {
    title: "Comprehensive QA Strategy & Bug Execution",
    badges: [
      "Manual Test Strategy",
      "Exploratory Testing",
      "Matrix Execution",
      "JIRA",
    ],
    description:
      "Structural test case design, cross-platform matrix testing, boundary analysis, and structured bug tracking.",
    icon: <ShieldCheck className="text-purple-400" aria-hidden="true" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative pt-20 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[600px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-xs font-medium text-emerald-400 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            Our Services
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            What We Deliver
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            End-to-end delivery from MVP to production — engineered for quality,
            automated at every layer.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={cn(
                "relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 transition-all duration-300",
                "hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
              )}
            >
              <div className="flex items-center gap-2 mb-5 w-fit">
                {service.icon}
                <span className="text-[10px] sm:text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Service
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-5">
                {service.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs text-zinc-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
