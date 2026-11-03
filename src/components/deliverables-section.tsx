import React from "react";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

const plans = [
    {
        title: "One-Time Audit",
        description:
            "Issues ranked by impact.",
        features: [
            "10-point audit",
            "By severity",
            "Plain language",
            "Email report",
        ],
        cta: "Sample audit",
        featured: false,
    },
    {
        title: "Audit & Fix",
        description:
            "The audit plus hands-on fixes.",
        features: [
            "Full audit",
            "Fixes included",
            "Re-tested",
            "Your codebase",
        ],
        cta: "Start free",
        featured: true,
    },
];

export default function DeliverablesSection() {
    return (
        <section id="services" className="section scroll-mt-20">
            <div className="shell">
                <div className="section-head">
                    <h2 className="section-title">One audit, or audit and fix</h2>
                </div>

                <div className="offers">
                    {plans.map(({ title, description, features, cta, featured }) => (
                        <div
                            key={title}
                            className={`offer${featured ? " offer--featured" : ""}`}
                        >
                            <h3 className="offer-title">{title}</h3>
                            <p className="offer-lede">{description}</p>

                            <ul className="offer-features">
                                {features.map((feature) => (
                                    <li key={feature}>
                                        <FiCheck aria-hidden="true" className="h-4 w-4" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="offer-cta">
                                <Link
                                    href="/audit"
                                    className={`btn ${featured ? "btn--primary" : "btn--outline"}`}
                                >
                                    {cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
