/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF first, WebP fallback — next/image negotiates via
    // Accept header so audit tools must check Content-Type, not the URL.
    formats: ["image/avif", "image/webp"],
    // Keep generated variants tight; avoids w=3840 oversized payloads.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    // Cal.com booking embed + Web3Forms submissions must keep working.
    // Next.js dev uses eval for HMR, so allow 'unsafe-eval' outside production.
    const scriptSrc = [
      "'self'",
      "'unsafe-inline'",
      ...(process.env.NODE_ENV === "production"
        ? []
        : ["'unsafe-eval'"]),
      "https://cal.com",
      "https://*.cal.com",
    ].join(" ");
    const csp = [
      "default-src 'self'",
      `script-src ${scriptSrc}`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://api.web3forms.com https://cal.com https://*.cal.com",
      "frame-src https://cal.com https://*.cal.com",
      "form-action 'self' https://api.web3forms.com",
      "object-src 'none'",
      "base-uri 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; ");

    const securityHeaders = [
      { key: "Content-Security-Policy", value: csp },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value:
          "camera=(), microphone=(), geolocation=(), payment=(), usb=(), fullscreen=(self)",
      },
      { key: "X-Content-Type-Options", value: "nosniff" },
    ];

    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
