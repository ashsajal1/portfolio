import HeroSection from "@/components/hero-section";
import ProcessSection from "@/components/process-section";
import ChecksSection from "@/components/checks-section";
import DeliverablesSection from "@/components/deliverables-section";
import ExpertiseSection from "@/components/expertise-section";
import TestimonialsSection from "@/components/testimonials-section";
import CalBooking from "@/components/cal-booking";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ProcessSection />
      <ChecksSection />
      <DeliverablesSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <CalBooking />
      <CTASection />
    </main>
  );
}
