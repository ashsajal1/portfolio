"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function CalBooking() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let script: HTMLScriptElement | null = null;

    const initCal = () => {
      if (cancelled || window.Cal) return;

      const bootstrap = `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ar); } else { p(cal, ar); } return; } p(cal, ar); }; })(window, "https://cal.com/embed/embed.js", "init");`;

      script = document.createElement("script");
      script.innerHTML = bootstrap;
      document.head.appendChild(script);

      window.Cal("init", { origin: "https://cal.com" });
      window.Cal("inline", {
        elementOrSelector: "#my-cal-inline",
        calLink: "ashsajal",
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          initCal();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
      if (script && script.parentNode) script.parentNode.removeChild(script);
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
    <section className="section section--rule">
      <div className="shell booking-grid" ref={containerRef}>
        <div>
          <h2 className="booking-title">Book a call</h2>
          <p className="booking-lede">
            Pick a time. We&apos;ll talk through your site.
          </p>
          <div className="booking-actions">
            <button type="button" onClick={openCal} className="btn btn--primary">
              Open booking calendar
            </button>
          </div>
        </div>

        <div id="my-cal-inline" className="cal-frame" />
      </div>
    </section>
  );
}
