'use client'
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { FiSun, FiMoon } from "react-icons/fi"

const SwitchButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-12 h-6 rounded-full bg-primaryLow dark:bg-slate-700" aria-hidden />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex items-center w-12 h-6 rounded-full bg-primaryLow dark:bg-slate-700 transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
    >
      <span
        className={`flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary text-slate-50 shadow-md transform transition-transform duration-300 ${isDark ? 'translate-x-6' : 'translate-x-1'}`}
      >
        {isDark ? <FiMoon className="h-3 w-3" /> : <FiSun className="h-3 w-3" />}
      </span>
    </button>
  );
};

export default SwitchButton;