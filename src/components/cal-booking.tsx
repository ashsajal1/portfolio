"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function CalBooking() {
  useEffect(() => {
    if (window.Cal) return;

    const bootstrap = `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ar); } else { p(cal, ar); } return; } p(cal, ar); }; })(window, "https://cal.com/embed/embed.js", "init");`;

    const script = document.createElement("script");
    script.innerHTML = bootstrap;
    document.head.appendChild(script);

    window.Cal("init", { origin: "https://cal.com" });
    window.Cal("inline", {
      elementOrSelector: "#my-cal-inline",
      calLink: "ashsajal",
    });

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const openCal = () => {
    if (window.Cal) {
      window.Cal("modal", { calLink: "ashsajal" });
    } else {
      window.open("https://cal.com/ashsajal", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-12 px-4 sm:px-12">
      <div className="container w-full mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold gradient-text">
            Book a Free Consultation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Pick a time that works for you. We&apos;ll talk through your project, goals, and how the right software can grow your business.
          </p>
          <button
            type="button"
            onClick={openCal}
            className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md text-sm font-medium bg-gradient-to-br from-primary to-secondary text-slate-50 hover:to-secondaryHigh transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Open booking calendar
          </button>
        </div>

        <div
          id="my-cal-inline"
          className="mx-auto rounded-2xl border border-secondaryLow/50 dark:border-secondaryLow/20 overflow-hidden bg-white/50 dark:bg-slate-900/50 shadow-sm"
          style={{ minWidth: "320px", height: "720px" }}
        />
      </div>
    </section>
  );
}
