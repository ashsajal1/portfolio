import React from "react";

const testimonials = [
  {
    name: "Rahman Ahmed",
    role: "Founder, MiniCourse",
    quote:
      "Sajal turned our vague idea into a polished product fast. The MVP validated our concept within weeks.",
  },
  {
    name: "Ayesha Karim",
    role: "Operations Lead, Sohojboi",
    quote:
      "The automation he built removed hours of manual work every week. He understood our business, not just the code.",
  },
  {
    name: "Tanvir Hasan",
    role: "Indie Maker, Calorie Tracker",
    quote:
      "Clean, fast, and reliable. He delivered on time and the post-launch support was genuine. I'd hire him again.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <h2 className="section-title">Three clients, in their words</h2>
        </div>

        <div className="quotes">
          {testimonials.map(({ name, role, quote }) => (
            <figure key={name} className="quote-row">
              <figcaption>
                <p className="quote-name">{name}</p>
                <p className="quote-role">{role}</p>
              </figcaption>
              <blockquote className="quote-text">&ldquo;{quote}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
