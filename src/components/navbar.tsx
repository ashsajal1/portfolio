'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiHome, FiFolder, FiFileText, FiMenu, FiX, FiSearch } from "react-icons/fi";
import SwitchButton from "./switch-button";
import Button from "./button";

const navLinks = [
  { href: "/", label: "Home", icon: <FiHome /> },
  { href: "/projects", label: "Projects", icon: <FiFolder /> },
  { href: "/blog", label: "Blog", icon: <FiFileText /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md shadow-primary/5" : "bg-transparent"}`}>
      <div className={`flex items-center justify-between px-4 sm:px-12 py-2 h-[60px]`}>
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
            <SwitchButton />

            <Link href="/audit" className="block">
              <Button label="Audit" icon={<FiSearch />} className="px-2.5 sm:px-4 py-1.5 text-sm" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="sm:hidden flex items-center justify-center h-9 w-9 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-primary/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              {menuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden border-t border-secondaryLow/40 dark:border-secondaryLow/20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-4 space-y-1">
          {navLinks.map(({ href, label, icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary"
                    : "text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-secondary/20 dark:hover:text-secondary"
                }`}
              >
                {icon}
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
