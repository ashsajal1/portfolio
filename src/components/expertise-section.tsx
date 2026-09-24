import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import {
    FiCode,
    FiZap,
    FiSearch,
    FiEye,
    FiShield,
    FiLayout,
    FiArrowRight,
} from "react-icons/fi";

const expertise = [
    {
        title: "Full-Stack Development",
        text: "React, Next.js, TypeScript, Node.js — I read your real codebase, not just the homepage.",
        icon: <FiCode aria-hidden="true" />,
    },
    {
        title: "Performance",
        text: "Core Web Vitals, load times, and asset optimization that visitors can feel.",
        icon: <FiZap aria-hidden="true" />,
    },
    {
        title: "Technical SEO",
        text: "Site structure, metadata, and crawlability so search engines rank you higher.",
        icon: <FiSearch aria-hidden="true" />,
    },
    {
        title: "Accessibility",
        text: "WCAG-minded reviews covering contrast, keyboard use, and screen readers.",
        icon: <FiEye aria-hidden="true" />,
    },
    {
        title: "Security Fundamentals",
        text: "HTTPS, headers, and safe defaults that protect your visitors and data.",
        icon: <FiShield aria-hidden="true" />,
    },
    {
        title: "UX & Conversions",
        text: "Friction-free user journeys that turn more visitors into customers.",
        icon: <FiLayout aria-hidden="true" />,
    },
];

export default function ExpertiseSection() {
    return (
        <section id="expertise" className="relative py-12 px-4 sm:px-12 scroll-mt-20">
            <div className="container w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 items-center">
                    <div className="order-1 flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl" />
                            <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-3xl overflow-hidden shadow-xl shadow-primary/20">
                                <Image
                                    src="/profile.png"
                                    alt="Sajal — website audit and optimization specialist"
                                    fill
                                    sizes="(max-width: 640px) 256px, 288px"
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="order-2">
                        <span className="text-sm font-semibold uppercase tracking-wide text-secondary dark:text-secondaryLow">
                            Why me
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold gradient-text mt-2">
                            A Developer&apos;s Eye on Your Website
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed max-w-2xl">
                            I&apos;m Sajal, a full-stack developer. Most audits stop at
                            automated scores — I go further, digging into your code,
                            content, and user flows to find what actually holds your
                            website back, then fixing it.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {expertise.map(({ title, text, icon }) => (
                                <div
                                    key={title}
                                    className="flex items-start gap-3 rounded-2xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 p-4 shadow-sm"
                                >
                                    <span className="flex items-center justify-center h-10 w-10 shrink-0 rounded-xl bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary text-xl">
                                        {icon}
                                    </span>
                                    <span>
                                        <span className="block text-sm font-bold text-slate-800 dark:text-slate-100">
                                            {title}
                                        </span>
                                        <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                            {text}
                                        </span>
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6">
                            <Link href="/audit">
                                <Button label="Get My Free Audit" icon={<FiArrowRight aria-hidden="true" />} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
