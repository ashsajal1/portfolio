import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <CTASection />
    </main>
  );
}
