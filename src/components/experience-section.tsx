import React from "react";
import { FiBriefcase, FiGraduationCap } from "react-icons/fi";

const experiences = [
  {
    type: "work",
    period: "2021 — Present",
    title: "Freelance Full-Stack Developer",
    org: "Self-employed",
    description:
      "Design and build web apps, websites, and AI-powered automation for founders and small teams — from MVP to launch and beyond.",
  },
  {
    type: "work",
    period: "2020 — 2021",
    title: "Frontend Developer",
    org: "Web Agency",
    description:
      "Shipped responsive interfaces with React and Next.js, focused on performance and clean, reusable component systems.",
  },
  {
    type: "education",
    period: "2016 — 2020",
    title: "B.Sc. in Computer Science & Engineering",
    org: "University",
    description:
      "Built a strong foundation in algorithms, data structures, databases, and software engineering principles.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-12 px-4 sm:px-12 scroll-mt-20">
      <div className="container w-full mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold gradient-text">
            Experience &amp; Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            A short timeline of the work and learning that shaped how I build today.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-8">
            {experiences.map(({ type, period, title, org, description }) => (
              <div
                key={title}
                className="relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 items-center"
              >
                <span className="hidden sm:block" />
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-y-0 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary text-slate-50 flex items-center justify-center shadow-lg shadow-primary/20">
                  {type === "education" ? (
                    <FiGraduationCap className="h-4 w-4" />
                  ) : (
                    <FiBriefcase className="h-4 w-4" />
                  )}
                </div>

                <div className="rounded-2xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 p-5 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <span className="text-xs font-semibold uppercase tracking-wide text-secondary dark:text-secondaryLow">
                    {period}
                  </span>
                  <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mt-1">
                    {title}
                  </h3>
                  <p className="text-sm font-medium text-primary dark:text-secondary">
                    {org}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
