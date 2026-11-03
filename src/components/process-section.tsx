import React from "react";

const steps = [
    {
        title: "Audit",
        description:
            "I scan for technical and user-facing issues.",
    },
    {
        title: "Prioritize",
        description:
            "Sorted by severity and impact.",
    },
    {
        title: "Fix",
        description:
            "I make the fixes in your codebase.",
    },
    {
        title: "Verify",
        description:
            "I re-test after the fixes.",
    },
];

const stats = [
    { value: "7", label: "Audit areas" },
    { value: "10", label: "Checkpoints" },
    { value: "4", label: "Step process" },
    { value: "100%", label: "Jargon-free" },
];

export default function ProcessSection() {
    return (
        <section id="process" className="section section--rule scroll-mt-20">
            <div className="shell">
                <div className="section-head">
                    <h2 className="section-title">Four steps</h2>
                    <p className="section-intro">
                        The same path from discovery to verified results.
                    </p>
                </div>

                <ol className="steps">
                    {steps.map(({ title, description }) => (
                        <li key={title} className="step">
                            <h3 className="step-title">{title}</h3>
                            <p className="step-text">{description}</p>
                        </li>
                    ))}
                </ol>

                <div className="figures">
                    {stats.map(({ value, label }) => (
                        <div key={label} className="figure-item">
                            <p className="figure-value">{value}</p>
                            <p className="figure-label">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
