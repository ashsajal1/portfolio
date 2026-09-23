import React from "react";
import { FiSearch, FiList, FiTool, FiCheckCircle } from "react-icons/fi";

const steps = [
    {
        number: "01",
        title: "Audit",
        description:
            "I scan your website and identify technical and user-facing issues.",
        icon: <FiSearch />,
    },
    {
        number: "02",
        title: "Prioritize",
        description:
            "Issues are organized by severity and potential impact, so you know what actually needs attention.",
        icon: <FiList />,
    },
    {
        number: "03",
        title: "Fix",
        description:
            "I implement the necessary improvements in your website instead of leaving you with a long checklist.",
        icon: <FiTool />,
    },
    {
        number: "04",
        title: "Verify",
        description:
            "I re-test the website after the fixes to make sure the improvements actually worked.",
        icon: <FiCheckCircle />,
    },
];

export default function ProcessSection() {
    return (
        <section id="process" className="relative py-12 px-4 sm:px-12 scroll-mt-20">
            <div className="container w-full mx-auto">
                <div className="text-center mb-10">
                    <span className="text-sm font-semibold uppercase tracking-wide text-secondary dark:text-secondaryLow">
                        How it works
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold gradient-text mt-2">
                        Find. Fix. Verify.
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                        I don&apos;t stop at a report. Every engagement follows the same
                        proven process — from discovery to verified results.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map(({ number, title, description, icon }) => (
                        <div
                            key={number}
                            className="group relative rounded-2xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300"
                        >
                            <span className="absolute top-4 right-5 text-4xl font-extrabold text-primary/10 dark:text-secondary/10 select-none">
                                {number}
                            </span>
                            <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-slate-50 text-2xl shadow-md shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                                {icon}
                            </div>
                            <p className="text-xs font-bold uppercase tracking-wide text-secondary dark:text-secondaryLow">
                                {number} — {title}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
