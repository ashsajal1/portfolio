import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/app/providers";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ashsajal.netlify.app"),
  title: {
    default: "Website Audit & Optimization — Find. Fix. Verify.",
    template: "%s | Website Audit & Optimization",
  },
  description:
    "Your website might look great and still have problems under the hood. Get a website audit across performance, SEO, accessibility, security, mobile experience, technical quality, and UX — then get the issues fixed and verified.",
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
    url: "https://ashsajal.netlify.app",
    siteName: "Website Audit & Optimization",
    title: "Website Audit & Optimization — Find. Fix. Verify.",
    description:
      "Uncover what's holding your website back — performance, SEO, accessibility, security, UX — and get it fixed and verified.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Audit & Optimization — Find. Fix. Verify.",
    description:
      "Uncover what's holding your website back — performance, SEO, accessibility, security, UX — and get it fixed and verified.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

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
