import React from "react";

const checks = [
    {
        title: "Performance & Core Web Vitals",
        note: "Speed, stability, responsiveness",
    },
    {
        title: "Technical SEO",
        note: "Metadata, sitemaps, crawlability",
    },
    {
        title: "Accessibility",
        note: "Contrast and keyboard use",
    },
    {
        title: "Mobile Responsiveness",
        note: "Touch targets, readability",
    },
    {
        title: "Security Fundamentals",
        note: "HTTPS and headers",
    },
    {
        title: "HTML & Technical Implementation",
        note: "Semantic markup, valid structure",
    },
    {
        title: "Images, Scripts & Assets",
        note: "Weight and blocking",
    },
    {
        title: "UX & Usability",
        note: "Navigation, clarity, friction",
    },
    {
        title: "Forms & Interactive Elements",
        note: "Forms, buttons, flows",
    },
    {
        title: "Structure & Best Practices",
        note: "URLs, architecture, standards",
    },
];

export default function ChecksSection() {
    return (
        <section id="checks" className="section scroll-mt-20">
            <div className="shell">
                <div className="section-head">
                    <h2 className="section-title">What the audit covers</h2>
                </div>

                <ol className="coverage-list">
                    {checks.map(({ title, note }, index) => (
                        <li key={title} className="coverage-row">
                            <span className="coverage-num" aria-hidden="true">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>
                                <span className="coverage-title">{title}</span>
                                <span className="coverage-note">{note}</span>
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
