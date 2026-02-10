import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { PricingSection } from "@/components/pricing-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { WhySection } from "@/components/why-section";
import { FaqSection } from "@/components/faq-section";
import { FooterSection } from "@/components/footer-section";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <HowItWorksSection />
        <WhySection />
        <FaqSection />
      </main>
      <FooterSection />
      <WhatsAppFab />
    </div>
  );
}
