"use client";
import React, { useState } from "react";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setDone(true);
  };

  return (
    <section className="py-12 px-4 sm:px-12">
      <div className="container w-full mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 p-8 sm:p-12 text-center shadow-sm">
          <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

          <h2 className="relative text-2xl sm:text-3xl font-extrabold gradient-text">
            Get Practical Dev &amp; Business Tips
          </h2>
          <p className="relative text-slate-600 dark:text-slate-400 mt-3 max-w-lg mx-auto text-sm sm:text-base">
            Occasional emails on profitability, automation, and building software that grows your business. No spam.
          </p>

          {done ? (
            <p className="relative mt-6 inline-flex items-center gap-2 text-secondary dark:text-secondaryLow font-medium">
              <FiCheckCircle /> Thanks! You&apos;re on the list.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <div className="w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                  }}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-800 dark:text-slate-100 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
                />
                {error && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 justify-center sm:justify-start">
                    <FiAlertCircle /> {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md text-sm font-medium bg-gradient-to-br from-primary to-secondary text-slate-50 hover:to-secondaryHigh transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <FiSend /> Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
