import React from "react";
import Image from "next/image";
import { FiAward, FiBriefcase, FiCode, FiCoffee } from "react-icons/fi";

const highlights = [
  { icon: <FiBriefcase />, label: "5+ Projects Delivered", sub: "For clients & products" },
  { icon: <FiCode />, label: "Full-Stack Focus", sub: "React, Next.js, Node" },
  { icon: <FiAward />, label: "AI-Powered Builds", sub: "Automation & insights" },
  { icon: <FiCoffee />, label: "Open to Collaborations", sub: "Freelance & full-time" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-12 px-4 sm:px-12 scroll-mt-20">
      <div className="container w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 items-center">
          <div className="order-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl" />
              <div className="relative h-56 w-56 rounded-3xl overflow-hidden shadow-xl shadow-primary/20">
                <Image
                  src="/profile.png"
                  alt="Ashfiquzzaman Sajal"
                  fill
                  sizes="224px"
                  className="object-cover"
                  priority
                />
                <span className="absolute bottom-3 right-3 h-4 w-4 rounded-full bg-green-500 ring-4 ring-white dark:ring-slate-900" />
              </div>
            </div>
          </div>

          <div className="order-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-secondary dark:text-secondaryLow">
              About Me
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold gradient-text mt-2">
              Turning Ideas Into Reliable Software
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              I&apos;m Ashfiquzzaman Sajal, a full-stack developer who builds modern,
              AI-powered web experiences with React, Next.js, TypeScript, and Node.
              I care about clean architecture, fast delivery, and software that actually
              moves a business forward.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              From high-converting websites to automation that removes busywork, I help
              founders and teams ship products they can trust — and keep them running smoothly.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {highlights.map(({ icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-2xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 p-4 shadow-sm"
                >
                  <span className="flex items-center justify-center h-10 w-10 shrink-0 rounded-xl bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary text-xl">
                    {icon}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-slate-800 dark:text-slate-100">
                      {label}
                    </span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">
                      {sub}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
