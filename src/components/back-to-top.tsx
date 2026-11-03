"use client";
import React from "react";

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
      className="text-link"
    >
      Back to top
    </a>
  );
}
