import React from 'react'
import { FiCheckCircle } from "react-icons/fi";
import Link from 'next/link';

const sampleFindings = [
    { issue: "Largest Contentful Paint 4.2 s", severity: "High", tone: "sev-high" },
    { issue: "Hero image weighs 2.1 MB", severity: "High", tone: "sev-high" },
    { issue: "Missing meta descriptions", severity: "Medium", tone: "sev-medium" },
    { issue: "Low-contrast buttons", severity: "Medium", tone: "sev-medium" },
    { issue: "No feedback after form submit", severity: "Low", tone: "sev-low" },
];

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="shell stage-grid">
                <div className="stage-copy">
                    <h1 className="stage-title">Find what&apos;s holding your website back</h1>

                    <p className="stage-lede">
                        A personal audit of speed, search visibility, accessibility and
                        user experience.
                    </p>

                    <div className="stage-actions">
                        <Link href="/audit" className="btn btn--primary">
                            Get a free audit
                        </Link>
                        <Link href="/#process" className="text-link">
                            How the audit runs
                        </Link>
                    </div>

                </div>

                <div className="stage-visual">
                    <div className="report">
                        <div className="report-head">
                            <h3 className="report-title">Sample audit report</h3>
                            <span className="report-domain">example.com</span>
                        </div>

                        <ul className="report-list">
                            {sampleFindings.map(({ issue, severity, tone }) => (
                                <li className="report-row" key={issue}>
                                    <span className={`sev-bar ${tone}`} />
                                    <span className="report-finding">{issue}</span>
                                    <span className="report-severity">{severity}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="report-foot">
                            <FiCheckCircle aria-hidden="true" className="h-4 w-4" />
                            Fixed and verified after implementation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
