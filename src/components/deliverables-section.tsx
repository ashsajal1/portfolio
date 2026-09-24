import React from "react";
import Link from "next/link";
import Button from "./button";
import { FiFileText, FiTool, FiCheckCircle, FiSearch } from "react-icons/fi";

const plans = [
    {
        title: "One-Time Audit",
        description:
            "A clear breakdown of your website's issues, their impact, and the fixes required — without unnecessary technical jargon.",
        features: [
            "Full 10-point website audit",
            "Issues ranked by severity & impact",
            "Plain-language fix recommendations",
            "Delivered to your inbox",
        ],
        icon: <FiFileText aria-hidden="true" />,
        cta: "Get a Free Sample Audit",
    },
    {
        title: "Audit & Fix",
        description:
            "Everything in the audit, plus hands-on implementation. I work directly with your existing website and codebase.",
        features: [
            "Everything in the one-time audit",
            "Fixes implemented for you",
            "Re-tested & verified after fixes",
            "Works with your existing codebase",
        ],
        icon: <FiTool aria-hidden="true" />,
        cta: "Start With a Free Audit",
        featured: true,
    },
];

export default function DeliverablesSection() {
    return (
        <section id="services" className="relative py-12 px-4 sm:px-12 scroll-mt-20">
            <div className="container w-full mx-auto">
                <div className="text-center mb-10">
                    <span className="text-sm font-semibold uppercase tracking-wide text-secondary dark:text-secondaryLow">
                        Engagement
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold gradient-text mt-2">
                        What You Get
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                        Whether you need a one-time audit or want someone to audit and fix
                        the issues — pick the option that fits.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {plans.map(({ title, description, features, icon, cta, featured }) => (
                        <div
                            key={title}
                            className={`relative rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
                                featured
                                    ? "bg-gradient-to-br from-primary to-secondary text-slate-50 dark:text-slate-900 shadow-xl shadow-primary/20"
                                    : "border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50"
                            }`}
                        >
                            {featured && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 dark:bg-slate-50 px-4 py-1 text-xs font-bold text-slate-50 dark:text-slate-900">
                                    Most Popular
                                </span>
                            )}
                            <div
                                className={`mb-4 inline-flex items-center justify-center h-12 w-12 rounded-xl text-2xl ${
                                    featured
                                        ? "bg-white/20 dark:bg-slate-900/10 text-slate-50 dark:text-slate-900"
                                        : "bg-gradient-to-br from-primary to-secondary text-slate-50 dark:text-slate-900 shadow-md shadow-primary/20"
                                }`}
                            >
                                {icon}
                            </div>
                            <h3
                                className={`text-xl font-extrabold mb-2 ${
                                    featured ? "text-slate-50 dark:text-slate-900" : "text-slate-800 dark:text-slate-100"
                                }`}
                            >
                                {title}
                            </h3>
                            <p
                                className={`text-sm leading-relaxed mb-6 ${
                                    featured ? "text-slate-100/90 dark:text-slate-900/80" : "text-slate-600 dark:text-slate-400"
                                }`}
                            >
                                {description}
                            </p>
                            <ul className="space-y-2.5 mb-8">
                                {features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2 text-sm">
                                        <FiCheckCircle aria-hidden="true"
                                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                                                featured ? "text-slate-50 dark:text-slate-900" : "text-primary"
                                            }`}
                                        />
                                        <span className={featured ? "text-slate-50 dark:text-slate-900" : "text-slate-600 dark:text-slate-400"}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/audit">
                                <Button
                                    label={cta}
                                    icon={<FiSearch aria-hidden="true" />}
                                    variant={featured ? "light" : "primary"}
                                    className="w-full"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
