'use client'
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { FiSun, FiMoon } from "react-icons/fi"

const SwitchButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="theme-toggle" aria-hidden />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="theme-toggle"
    >
      {isDark ? <FiSun aria-hidden="true" className="h-5 w-5" /> : <FiMoon aria-hidden="true" className="h-5 w-5" />}
    </button>
  );
};

export default SwitchButton;
