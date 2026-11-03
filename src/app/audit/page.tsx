import type { Metadata } from "next";
import AuditForm from "@/components/audit-form";

export const metadata: Metadata = {
  title: "Free Website Audit",
  description:
    "Request a free website audit: performance, SEO and UX feedback delivered to your email with clear next steps.",
  alternates: {
    canonical: "/audit",
  },
};

const benefits = [
  {
    title: "Performance and search",
    text: "Speed and crawlability.",
  },
  {
    title: "User experience",
    text: "Where visitors leave.",
  },
  {
    title: "A clear report",
    text: "Ranked by impact, in plain language.",
  },
];

export default function AuditPage() {
  return (
    <div className="shell page-wrap">
      <header className="page-head">
        <div className="page-head-grid">
          <h1 className="page-title">Get a free audit of your website</h1>
          <p className="page-lede">
            I review speed, search, accessibility and the path to your main action.
          </p>
        </div>
      </header>

      <section className="audit-grid">
        <h2 className="index-title">What you get</h2>

        <div>
          <ol className="audit-benefits">
            {benefits.map(({ title, text }, index) => (
              <li key={title} className="audit-benefit">
                <span className="audit-benefit-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="audit-benefit-title">{title}</span>
                  <span className="audit-benefit-note">{text}</span>
                </span>
              </li>
            ))}
          </ol>

          <p className="audit-note">
            One site per request. Email only for the report.
          </p>
        </div>

        <div className="form-sheet">
          <h3 className="form-title">Request the audit</h3>
          <AuditForm />
        </div>
      </section>
    </div>
  );
}
