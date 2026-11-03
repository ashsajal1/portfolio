import React from "react";
import Image from "next/image";
import Link from "next/link";

const expertise = [
    {
        title: "Full-stack development",
        text: "React, Next.js, TypeScript",
    },
    {
        title: "Performance",
        text: "Core Web Vitals",
    },
    {
        title: "Technical SEO",
        text: "Structure and metadata",
    },
    {
        title: "Accessibility",
        text: "Contrast and keyboard use",
    },
    {
        title: "Security",
        text: "Headers and safe defaults",
    },
    {
        title: "UX and conversions",
        text: "Fewer steps to act",
    },
];

export default function ExpertiseSection() {
    return (
        <section id="expertise" className="section section--rule scroll-mt-20">
            <div className="shell">
                <div className="split">
                    <figure className="portrait">
                        <Image
                            src="/profile.png"
                            alt="Sajal, website audit and optimization specialist"
                            width={448}
                            height={448}
                            sizes="(max-width: 960px) 80vw, 440px"
                        />
                    </figure>

                    <div>
                        <h2 className="about-title">A developer&apos;s eye on your site</h2>
                        <p className="about-lede">
                            I&apos;m Sajal, a full-stack developer. I read the code and
                            flows, then fix what holds the site back.
                        </p>

                        <div className="expertise">
                            {expertise.map(({ title, text }) => (
                                <div key={title} className="expertise-item">
                                    <h3 className="expertise-title">{title}</h3>
                                    <p className="expertise-note">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="expertise-cta">
                            <Link href="/audit" className="text-link">
                                Get my free audit
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
