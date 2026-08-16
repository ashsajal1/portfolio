import Link from "next/link";
import { RiTwitterXLine, RiGithubFill } from "react-icons/ri";
import SwitchButton from "./switch-button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-gradient-to-br from-primaryLow to-secondaryLow px-4 py-2 backdrop-blur-sm sm:px-12 h-[60px] border-b border-secondaryLow/50">
      <Link href="/" className="text-2xl font-bold gradient-text">
        Sajal
      </Link>

      <div className="flex items-center gap-4 sm:gap-6">
        <ul className="hidden sm:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/ashsajal1"
            className="text-primary transition-transform hover:scale-110"
            aria-label="X (Twitter) profile"
          >
            <RiTwitterXLine className="h-5 w-5" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ashsajal1"
            className="text-primary transition-transform hover:scale-110"
            aria-label="GitHub profile"
          >
            <RiGithubFill className="h-5 w-5" />
          </Link>

          <SwitchButton />
        </div>
      </div>
    </nav>
  );
}