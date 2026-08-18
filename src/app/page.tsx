import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TechStackSection from "@/components/tech-stack-section";
import BlogPreviewSection from "@/components/blog-preview-section";
import CalBooking from "@/components/cal-booking";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <BlogPreviewSection />
      <CalBooking />
      <CTASection />
    </main>
  );
}
