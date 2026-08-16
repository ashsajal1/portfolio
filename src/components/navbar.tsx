'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiTwitterXLine, RiGithubFill } from "react-icons/ri";
import { FiHome, FiFolder, FiSend } from "react-icons/fi";
import SwitchButton from "./switch-button";
import Button from "./button";

const navLinks = [
  { href: "/", label: "Home", icon: <FiHome /> },
  { href: "/projects", label: "Projects", icon: <FiFolder /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 sm:px-12 py-2 h-[60px] border-b border-secondaryLow/50 dark:border-secondaryLow/20">
      <Link href="/" className="text-2xl font-bold gradient-text">
        Sajal
      </Link>

      <div className="flex items-center gap-3 sm:gap-6">
        <ul className="hidden sm:flex items-center gap-1">
          {navLinks.map(({ href, label, icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary"
                      : "text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/20 dark:hover:text-secondary"
                  }`}
                >
                  {icon}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/ashsajal1"
            className="text-slate-500 dark:text-slate-400 transition-all duration-200 hover:text-primary dark:hover:text-secondary hover:scale-110"
            aria-label="X (Twitter) profile"
          >
            <RiTwitterXLine className="h-5 w-5" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ashsajal1"
            className="text-slate-500 dark:text-slate-400 transition-all duration-200 hover:text-primary dark:hover:text-secondary hover:scale-110"
            aria-label="GitHub profile"
          >
            <RiGithubFill className="h-5 w-5" />
          </Link>

          <SwitchButton />

          <Link href="mailto:ashsajal@yahoo.com">
            <Button label="Hire Me" icon={<FiSend />} className="px-4 py-1.5 text-sm" />
          </Link>
        </div>
      </div>
    </nav>
  );
}