import React from "react";
import {
    FiZap,
    FiSearch,
    FiEye,
    FiSmartphone,
    FiShield,
    FiCode,
    FiImage,
    FiLayout,
    FiCheckSquare,
    FiLayers,
} from "react-icons/fi";

const checks = [
    {
        title: "Performance & Core Web Vitals",
        description: "Load speed, responsiveness, and visual stability measured the way Google ranks you.",
        icon: <FiZap />,
    },
    {
        title: "Technical SEO",
        description: "Meta tags, headings, sitemaps, and crawlability that decide whether you get found.",
        icon: <FiSearch />,
    },
    {
        title: "Accessibility",
        description: "Contrast, keyboard navigation, and screen-reader support so nobody is locked out.",
        icon: <FiEye />,
    },
    {
        title: "Mobile Responsiveness",
        description: "How your site holds up on real phones — layout, touch targets, and readability.",
        icon: <FiSmartphone />,
    },
    {
        title: "Security Fundamentals",
        description: "HTTPS, headers, and common exposures that put your visitors and data at risk.",
        icon: <FiShield />,
    },
    {
        title: "HTML & Technical Implementation",
        description: "Semantic markup, valid structure, and under-the-hood issues hurting quality.",
        icon: <FiCode />,
    },
    {
        title: "Images, Scripts & Assets",
        description: "Oversized files and render-blocking resources slowing every page down.",
        icon: <FiImage />,
    },
    {
        title: "UX & Usability",
        description: "Navigation, clarity, and friction points that confuse visitors or kill trust.",
        icon: <FiLayout />,
    },
    {
        title: "Forms & Interactive Elements",
        description: "Contact forms, buttons, and flows tested to make sure they actually work.",
        icon: <FiCheckSquare />,
    },
    {
        title: "Structure & Best Practices",
        description: "Site architecture, URLs, and standards compliance for long-term maintainability.",
        icon: <FiLayers />,
    },
];

export default function ChecksSection() {
    return (
        <section id="checks" className="relative py-12 px-4 sm:px-12 scroll-mt-20">
            <div className="container w-full mx-auto">
                <div className="text-center mb-10">
                    <span className="text-sm font-semibold uppercase tracking-wide text-secondary dark:text-secondaryLow">
                        Coverage
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold gradient-text mt-2">
                        What I Check
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                        Ten checkpoints across everything that affects your speed, search
                        visibility, usability, and conversions.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {checks.map(({ title, description, icon }) => (
                        <div
                            key={title}
                            className="group rounded-2xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300"
                        >
                            <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-slate-50 text-2xl shadow-md shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                                {icon}
                            </div>
                            <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-2">
                                {title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
