import React from "react";
import { FiBriefcase, FiBook } from "react-icons/fi";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {experiences.map(({ type, period, title, org, description }) => (
            <div
              key={title}
              className="relative flex flex-col rounded-2xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-slate-50 text-xl shadow-md shadow-primary/20">
                {type === "education" ? (
                  <FiBook className="h-5 w-5" />
                ) : (
                  <FiBriefcase className="h-5 w-5" />
                )}
              </div>

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
          ))}
        </div>
      </div>
    </section>
  );
}
