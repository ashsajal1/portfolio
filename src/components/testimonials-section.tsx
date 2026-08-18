import React from "react";
import { FaStar } from "react-icons/fa6";
import { FiQuote } from "react-icons/fi";

const testimonials = [
  {
    name: "Rahman Ahmed",
    role: "Founder, MiniCourse",
    quote:
      "Sajal turned our vague idea into a polished product fast. The MVP he shipped validated our concept within weeks — exactly what we needed before raising.",
    initials: "RA",
  },
  {
    name: "Ayesha Karim",
    role: "Operations Lead, Sohojboi",
    quote:
      "The automation he built removed hours of manual work every week. Communication was clear and he actually understood our business, not just the code.",
    initials: "AK",
  },
  {
    name: "Tanvir Hasan",
    role: "Indie Maker, Calorie Tracker",
    quote:
      "Clean, fast, and reliable. He delivered on time and the post-launch support was genuine. I'd hire him again without a second thought.",
    initials: "TH",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-12 px-4 sm:px-12">
      <div className="container w-full mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold gradient-text">
            What Clients Say
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Real results from founders and teams who trusted me with their products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, quote, initials }) => (
            <figure
              key={name}
              className="group relative flex flex-col rounded-2xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
            >
              <FiQuote className="text-3xl text-primary/30 dark:text-secondary/30 mb-3" />
              <div className="flex gap-0.5 mb-3 text-secondary dark:text-secondaryLow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary text-slate-50 font-bold text-sm">
                  {initials}
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-800 dark:text-slate-100">
                    {name}
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400">
                    {role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
