"use client";
import React from "react";
import { RiArrowUpLine } from "react-icons/ri";

export default function BackToTop() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#top"
      onClick={handleClick}
      aria-label="Back to top"
      className="inline-flex items-center gap-1.5 text-primary dark:text-secondary transition-all duration-200 hover:gap-2.5 cursor-pointer"
    >
      Back to top <RiArrowUpLine aria-hidden="true" />
    </a>
  );
}
