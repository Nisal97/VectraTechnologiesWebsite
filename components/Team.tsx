"use client";

import { motion, type Variants } from "framer-motion";
import { Layers, Laptop, Code } from "lucide-react";
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

type TeamMember = {
  name: string;
  role: string;
  description: string;
  badges: string[];
  icon: React.ReactNode;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Lead QA & Automation Engineer",
    role: "Quality Assurance",
    description:
      "End-to-end automation architecture, Playwright/Selenium frameworks, and performance testing.",
    badges: ["Playwright", "Selenium", "Performance Testing"],
    icon: <Layers className="text-emerald-400" aria-hidden="true" />,
  },
  {
    name: "Site Reliability & Cloud Engineer",
    role: "SRE & Infrastructure",
    description:
      "CI/CD pipeline automation, Docker containerization, server monitoring, and zero-downtime infrastructure.",
    badges: ["CI/CD", "Docker", "Server Monitoring"],
    icon: <Laptop className="text-cyan-400" aria-hidden="true" />,
  },
  {
    name: "Full-Stack & Mobile Software Engineer",
    role: "Full-Stack & Mobile",
    description:
      "Next.js, Flutter, scalable REST APIs, and responsive UI engineering.",
    badges: ["Next.js", "Flutter", "REST APIs"],
    icon: <Code className="text-purple-400" aria-hidden="true" />,
  },
];

const METRIC_BADGES = [
  "100% Test Coverage Focus",
  "Modern Tech Stack",
  "Zero-Downtime Deployments",
];

export default function Team() {
  return (
    <section id="team" className="relative pt-20 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-xs font-medium text-emerald-400 tracking-wider uppercase">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              The Engineering Collective
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg">
              A boutique engineering studio collective focused on quality,
              reliability, and modern full-stack delivery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {METRIC_BADGES.map((badge) => (
                <div
                  key={badge}
                  className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-center"
                >
                  <span className="text-2xl font-bold text-emerald-400">✦</span>
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium leading-tight">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={cn(
                  "relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300",
                  "hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                )}
              >
                <div className="flex items-center gap-2 mb-5 w-fit">
                  {member.icon}
                  <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">
                    {member.role}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {member.name}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  {member.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-zinc-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
