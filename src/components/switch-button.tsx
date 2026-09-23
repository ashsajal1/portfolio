'use client'
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { FiSun, FiMoon } from "react-icons/fi"

const SwitchButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex items-center justify-center h-9 w-9 rounded-lg text-slate-500 dark:text-slate-300 transition-all duration-200 hover:text-primary dark:hover:text-secondary hover:bg-primary/10 dark:hover:bg-secondary/20 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
    >
      {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  );
};

export default SwitchButton;
