import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";
import BackToTop from './back-to-top';

const socialLinks = [
  { href: "https://github.com/ashsajal1", label: "GitHub", icon: <FaGithub aria-hidden="true" /> },
  { href: "https://linkedin.com/in/ashsajal", label: "LinkedIn", icon: <FaLinkedin aria-hidden="true" /> },
  { href: "https://x.com/ashsajal1", label: "X (Twitter)", icon: <RiTwitterXLine aria-hidden="true" /> },
  { href: "https://instagram.com/ashsajal1", label: "Instagram", icon: <FaInstagram aria-hidden="true" /> },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/audit", label: "Free audit" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="shell">
                <div className="footer-mast">
                    <div>
                        <Link href="/" className="footer-wordmark" aria-label="Sajal, home">
                            Sajal
                        </Link>
                        <p className="footer-tag">
                            Website audit and optimization. Find the issues, fix them, and
                            verify the result.
                        </p>
                    </div>

                    <div className="footer-contact">
                        <a href="mailto:ashsajal@yahoo.com">ashsajal@yahoo.com</a>
                        <a href="tel:+8801608478333">+8801608478333</a>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <p className="footer-col-title">Pages</p>
                        <ul className="footer-list">
                            {quickLinks.map(({ href, label }) => (
                                <li key={href}>
                                    <Link href={href}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="footer-col-title">Elsewhere</p>
                        <ul className="footer-list footer-social">
                            {socialLinks.map(({ href, label, icon }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                    >
                                        {icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {year} ashsajal.</p>
                    <p>Built with Next.js.</p>
                    <BackToTop />
                </div>
            </div>
        </footer>
    );
}
