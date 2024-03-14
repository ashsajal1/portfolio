import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio : Project list of Ashfiquzzaman Sajal.",
  description: "Ashfiquzzaman Sajal is a seasoned web developer renowned for his unparalleled mastery of the JavaScript/TypeScript ecosystem, particularly in React.js and Next.js, alongside Django and Laravel. His GitHub repository is a treasure trove of meticulously crafted micro projects, showcasing robust and scalable solutions in web development. Sajal's expertise extends to modern CSS methodologies, seamlessly integrating Tailwind CSS and SCSS into his projects to deliver visually stunning and responsive user interfaces. With an unwavering commitment to excellence and a passion for innovation, Sajal continually pushes the boundaries of web development, leaving an indelible mark on the digital landscape with every creation. Explore his portfolio to witness firsthand the fusion of creativity and technical brilliance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
