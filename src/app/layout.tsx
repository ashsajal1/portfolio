import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/app/providers";

const inter = Urbanist({ subsets: ["latin"] });

const SITE_URL = "https://ashsajal.netlify.app";
// 147 chars — inside the 120–160 display range.
const SITE_DESCRIPTION =
  "Get a free website audit across performance, SEO, accessibility, security and UX — then get the issues fixed and verified.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Website Audit & Optimization — Find. Fix. Verify.",
    template: "%s | Website Audit & Optimization",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Website Audit",
    "Website Optimization",
    "Core Web Vitals",
    "Technical SEO",
    "Website Accessibility",
    "Site Speed Optimization",
    "UX Audit",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Website Audit & Optimization",
    title: "Website Audit & Optimization — Find. Fix. Verify.",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Audit & Optimization — Find. Fix. Verify.",
    description: SITE_DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Ashfiquzzaman Sajal",
      url: SITE_URL,
      jobTitle: "Full-Stack Developer",
      knowsAbout: [
        "Website Audits",
        "Performance Optimization",
        "Technical SEO",
        "Web Accessibility",
        "React",
        "Next.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Website Audit & Optimization",
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      author: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
