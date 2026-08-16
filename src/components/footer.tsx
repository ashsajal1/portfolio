import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";
import { projects } from '@/lib/projectsList';

const socialLinks = [
  { href: "https://github.com/ashsajal1", label: "GitHub", icon: <FaGithub /> },
  { href: "https://linkedin.com/in/ashsajal", label: "LinkedIn", icon: <FaLinkedin /> },
  { href: "https://x.com/ashsajal1", label: "X (Twitter)", icon: <RiTwitterXLine /> },
  { href: "https://instagram.com/ashsajal1", label: "Instagram", icon: <FaInstagram /> },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-primaryLow to-secondaryLow py-8 px-4 sm:px-12 text-primary border-t border-secondaryLow/50">
            <div className="container w-full mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-2 gradient-text">Contact</h3>
                    <p className="text-sm">
                        Email:{" "}
                        <Link href="mailto:ashsajal@yahoo.com" className="hover:text-secondary transition-colors">
                            ashsajal@yahoo.com
                        </Link>
                    </p>
                    <p className="text-sm">Phone: +8801608478333</p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-2 gradient-text">Social Media</h3>
                    <div className="flex items-center space-x-4 text-xl">
                        {socialLinks.map(({ href, label, icon }) => (
                            <Link
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="transition-all duration-200 hover:text-secondary hover:scale-110"
                            >
                                {icon}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-2 gradient-text">Projects</h3>
                    <ul className="text-sm space-y-1">
                        {projects.slice(0, 3).map(({ title, url }) => (
                            <li key={url}>
                                <Link href={url} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                                    {title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/projects" className="text-secondary text-sm font-medium hover:underline">
                                See more...
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-8 pt-4 border-t border-secondaryLow/50 text-sm">
                <p>&copy; {year} ashsajal. All rights reserved.</p>
            </div>
        </footer>
    );
}