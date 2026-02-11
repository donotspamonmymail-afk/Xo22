import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { PricingSection } from "@/components/pricing-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { WhySection } from "@/components/why-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrustGuaranteesSection } from "@/components/trust-guarantees-section";
import { FaqSection } from "@/components/faq-section";
import { CitiesBar } from "@/components/cities-bar";
import { CtaBanner } from "@/components/cta-banner";
import { FooterSection } from "@/components/footer-section";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { BackToTop } from "@/components/back-to-top";


export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:text-sm focus:font-medium"
        data-testid="link-skip-to-content"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustGuaranteesSection />
        <ServicesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <WhySection />
        <FaqSection />
        <CitiesBar />
        <CtaBanner />
      </main>
      <FooterSection />
      <WhatsAppFab />
      <BackToTop />
    </div>
  );
}
