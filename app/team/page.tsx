import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Team | Vectra Solutions",
  description:
    "Meet the engineering and QA automation team behind Vectra Solutions — focused, founder-led builders architecting your product and test pipelines.",
};

const teamMembers = [
  {
    initials: "NM",
    name: "Nisal Muthugala",
    role: "Founder & QA Automation Engineer",
    bio:
      "Software engineer specializing in enterprise quality engineering, flake-free Playwright and Selenium automation suites, and CI/CD release gates that keep production deployments reliable.",
    skills: ["Playwright", "Selenium", "CI/CD Pipelines", "TypeScript", "Next.js"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  // TODO: Replace with co-founder/partner details or remove if solo
  {
    initials: "VS",
    name: "Full-Stack & Cloud Partner",
    role: "Systems & Product Architect",
    bio:
      "Focused on rapid web and mobile MVP architecture, edge API performance, and scalable PostgreSQL data modeling built for zero-downtime growth.",
    skills: ["Next.js 15", "Flutter", "Supabase", "Cloudflare Edge", "PostgreSQL"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#090d16] text-white">
      <Navbar />

      {/* Section 1: Hero */}
      <section
        id="team-hero"
        data-testid="team-hero"
        className="pt-28 pb-16 md:pt-36 md:pb-24 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-6 font-mono uppercase text-sm text-cyan-400 tracking-wider">
            // THE ENGINEERING TEAM
          </p>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
            Small by Design.{" "}
            <span className="relative inline-block bg-gradient-to-r from-cyan-500 to-emerald-600 bg-clip-text text-transparent">
              High-Velocity Execution.
            </span>
          </h1>
          <p className="mb-10 text-lg text-slate-400 max-w-2xl leading-relaxed">
            Vectra Solutions operates as a focused, founder-led software and
            quality engineering unit—eliminating agency bloat so you collaborate
            directly with the builders architecting your product and test
            pipelines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
              <span className="font-mono font-bold text-xs uppercase tracking-wider text-cyan-400">
                01 // LEADERSHIP
              </span>
              <h3 className="font-heading font-semibold text-lg text-white mt-2 mb-1">
                Founder-Led
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Direct architectural &amp; QA oversight on every sprint
              </p>
            </div>
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
              <span className="font-mono font-bold text-xs uppercase tracking-wider text-emerald-400">
                02 // EXECUTION
              </span>
              <h3 className="font-heading font-semibold text-lg text-white mt-2 mb-1">
                Dev + QA
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Unified full-stack development &amp; test automation
              </p>
            </div>
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
              <span className="font-mono font-bold text-xs uppercase tracking-wider text-cyan-400">
                03 // VELOCITY
              </span>
              <h3 className="font-heading font-semibold text-lg text-white mt-2 mb-1">
                &lt; 24h SLA
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Async-first communication with the engineers building your app
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Leadership & Engineers */}
      <section
        id="team-leadership"
        data-testid="team-leadership"
        className="py-12 sm:py-16 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mb-6 font-mono uppercase text-sm text-cyan-400 tracking-wider">
              // CORE LEADERSHIP
            </p>
            <h2 className="mb-6 text-2xl md:text-3xl font-heading font-bold leading-tight">
              The Builders Behind{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-emerald-600 bg-clip-text text-transparent">
                Every Release
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-colors flex flex-col justify-between"
              >
                {/* Avatar badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-lg text-cyan-400 mb-4">
                  {member.initials}
                </div>

                {/* Name */}
                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-4">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer links */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex gap-2">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors">
                      GitHub
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                      LinkedIn
                    </a>
                  </div>
                  <Link
                    href="/contact"
                    className="font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Book a Call &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}