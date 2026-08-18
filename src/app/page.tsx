import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ServicesSection from "@/components/services-section";
import TechStackSection from "@/components/tech-stack-section";
import BlogPreviewSection from "@/components/blog-preview-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import NewsletterSection from "@/components/newsletter-section";
import CalBooking from "@/components/cal-booking";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <TechStackSection />
      <BlogPreviewSection />
      <TestimonialsSection />
      <ContactSection />
      <NewsletterSection />
      <CalBooking />
      <CTASection />
    </main>
  );
}
