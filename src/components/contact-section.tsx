"use client";
import React, { useState } from "react";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

type Errors = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    else if (form.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:ashsajal@yahoo.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <section id="contact" className="relative py-12 px-4 sm:px-12 scroll-mt-20">
      <div className="container w-full mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold gradient-text">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            Send a message and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {sent ? (
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 p-10 text-center shadow-sm">
            <FiCheckCircle className="text-4xl text-secondary dark:text-secondaryLow" />
            <p className="text-slate-700 dark:text-slate-200 font-medium">
              Your email client should be opening with your message.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              If nothing happened, email me directly at ashsajal@yahoo.com.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 p-6 sm:p-8 shadow-sm space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
                className="w-full rounded-lg border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-800 dark:text-slate-100 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
              />
              {errors.name && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                  <FiAlertCircle /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-800 dark:text-slate-100 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
              />
              {errors.email && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                  <FiAlertCircle /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me about your project..."
                className="w-full rounded-lg border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-800 dark:text-slate-100 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors resize-none"
              />
              {errors.message && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                  <FiAlertCircle /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md text-sm font-medium bg-gradient-to-br from-primary to-secondary text-slate-50 hover:to-secondaryHigh transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <FiSend /> Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
