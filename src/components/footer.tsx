import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";
import { FiMail, FiPhone, FiHome, FiFolder, FiSearch, FiDownload } from "react-icons/fi";
import { projects } from '@/lib/projectsList';
import BackToTop from './back-to-top';

const socialLinks = [
  { href: "https://github.com/ashsajal1", label: "GitHub", icon: <FaGithub /> },
  { href: "https://linkedin.com/in/ashsajal", label: "LinkedIn", icon: <FaLinkedin /> },
  { href: "https://x.com/ashsajal1", label: "X (Twitter)", icon: <RiTwitterXLine /> },
  { href: "https://instagram.com/ashsajal1", label: "Instagram", icon: <FaInstagram /> },
];

const quickLinks = [
  { href: "/", label: "Home", icon: <FiHome /> },
  { href: "/projects", label: "Projects", icon: <FiFolder /> },
  { href: "/resume.pdf", label: "Resume", icon: <FiDownload />, download: true },
  { href: "/audit", label: "Free Audit", icon: <FiSearch /> },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-br from-primaryLow/40 via-transparent to-secondaryLow/40 dark:from-blue-900/20 dark:via-transparent dark:to-violet-900/20 pt-12 pb-6 px-4 sm:px-12 text-slate-600 dark:text-slate-400">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />

            <div className="container w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <h3 className="text-2xl font-bold mb-3 gradient-text">Sajal</h3>
                    <p className="text-sm leading-relaxed">
                        Website audit &amp; optimization — find the issues holding your
                        site back, get them fixed, and verify the results.
                    </p>
                    <div className="flex items-center space-x-3 mt-5">
                        {socialLinks.map(({ href, label, icon }) => (
                            <Link
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                title={label}
                                className="flex items-center justify-center h-9 w-9 rounded-full bg-white/70 dark:bg-slate-800/70 border border-secondaryLow/40 dark:border-secondaryLow/20 text-primary dark:text-secondary shadow-sm transition-all duration-200 hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:border-transparent hover:-translate-y-1"
                            >
                                {icon}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4 gradient-text">Quick Links</h3>
                    <ul className="space-y-2.5 text-sm">
                        {quickLinks.map(({ href, label, icon, download }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    {...(download ? { download: true } : {})}
                                    className="inline-flex items-center gap-2 transition-all duration-200 hover:text-primary dark:hover:text-secondary hover:translate-x-1"
                                >
                                    <span className="text-secondary dark:text-secondaryLow">{icon}</span>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4 gradient-text">Projects</h3>
                    <ul className="space-y-2.5 text-sm">
                        {projects.slice(0, 3).map(({ title, url, repo }) => (
                            <li key={repo}>
                                <Link
                                    href={url ?? repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 transition-all duration-200 hover:text-primary dark:hover:text-secondary hover:translate-x-1"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary shrink-0" />
                                    {title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/projects" className="inline-flex items-center gap-1 text-secondary dark:text-secondaryLow text-sm font-medium hover:gap-2 transition-all duration-200">
                                See more...
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4 gradient-text">Get in Touch</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <a
                                href="mailto:ashsajal@yahoo.com"
                                className="inline-flex items-start gap-2.5 transition-all duration-200 hover:text-primary dark:hover:text-secondary"
                            >
                                <span className="mt-0.5 text-secondary dark:text-secondaryLow"><FiMail /></span>
                                <span>
                                    <span className="block text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">Email</span>
                                    ashsajal@yahoo.com
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+8801608478333"
                                className="inline-flex items-start gap-2.5 transition-all duration-200 hover:text-primary dark:hover:text-secondary"
                            >
                                <span className="mt-0.5 text-secondary dark:text-secondaryLow"><FiPhone /></span>
                                <span>
                                    <span className="block text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">Phone</span>
                                    +8801608478333
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container w-full mx-auto mt-10 pt-5 border-t border-secondaryLow/40 dark:border-secondaryLow/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
                <p>
                    &copy; {year} ashsajal. All rights reserved.
                </p>
                <p className="inline-flex items-center gap-1">
                    Built with <span className="text-secondary dark:text-secondaryLow">&#10084;</span> using Next.js
                </p>
                <BackToTop />
            </div>
        </footer>
    );
}
