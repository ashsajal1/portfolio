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
    default: "Ashfiquzzaman Sajal — Full-Stack Developer Portfolio",
    template: "%s | Ashfiquzzaman Sajal",
  },
  description:
    "Ashfiquzzaman Sajal is a full-stack developer building modern, AI-powered web experiences with React, Next.js, TypeScript, and Node.js. Explore projects, blog insights, and services.",
  keywords: [
    "Ashfiquzzaman Sajal",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashsajal.netlify.app",
    siteName: "Ashfiquzzaman Sajal Portfolio",
    title: "Ashfiquzzaman Sajal — Full-Stack Developer Portfolio",
    description:
      "Modern, AI-powered web experiences built with React, Next.js, and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashfiquzzaman Sajal — Full-Stack Developer Portfolio",
    description:
      "Modern, AI-powered web experiences built with React, Next.js, and TypeScript.",
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
