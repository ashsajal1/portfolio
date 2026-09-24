import type { Metadata } from "next";
import AuditForm from "@/components/audit-form";
import { FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Free Website Audit",
  description:
    "Request a free website audit — performance, SEO and UX feedback delivered to your email with clear next steps.",
  alternates: {
    canonical: "/audit",
  },
};

const benefits = [
  {
    title: "Performance & SEO",
    text: "Discover what's slowing your site down and hurting your rankings.",
  },
  {
    title: "UX & Conversions",
    text: "Find friction points that cost you visitors and customers.",
  },
  {
    title: "Fast Turnaround",
    text: "Get a clear, actionable report sent to your inbox.",
  },
];

export default function AuditPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 sm:flex-row sm:items-start">
        {/* Form: top on mobile, right on desktop */}
        <div className="order-1 w-full sm:order-2 sm:w-1/2">
          <div className="rounded-3xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl shadow-primary/5">
            <AuditForm />
          </div>
        </div>

        {/* Content: bottom on mobile, left on desktop */}
        <div className="order-2 w-full sm:order-1 sm:w-1/2">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Free website audit
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold gradient-text">
            Get a Free Audit of Your Website
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Enter your details and I&apos;ll personally review your site for
            performance, SEO, and user experience — then send the full report
            to your email.
          </p>

          <ul className="mt-6 space-y-4">
            {benefits.map(({ title, text }) => (
              <li key={title} className="flex items-start gap-2.5">
                <FiCheckCircle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <span className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {title}
                  </span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">
                    {text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
