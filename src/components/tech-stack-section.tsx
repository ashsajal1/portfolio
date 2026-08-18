import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiRust,
  SiGo,
  SiNodedotjs,
  SiHtml5,
  SiCss,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Vue.js", icon: <SiVuedotjs className="text-[#42B883]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
];

export default function TechStackSection() {
  return (
    <section className="relative py-12 px-4 sm:px-12">
      <div className="container w-full mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold gradient-text">
            Tools & Technologies I Use
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            A reliable, modern stack for building fast, scalable, and maintainable web products.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {technologies.map(({ name, icon }) => (
            <div
              key={name}
              className="group inline-flex items-center gap-2 sm:gap-3 rounded-xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 px-4 py-3 shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 hover:border-primary/40 transition-all duration-300"
            >
              <span className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110">
                {icon}
              </span>
              <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
