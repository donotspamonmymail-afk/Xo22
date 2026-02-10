import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { ABOUT_PAGE_CONFIG } from "@/lib/site-data";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Target,
  Eye,
  ShieldCheck,
  Heart,
  Users,
} from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const valueIcons = [Eye, Target, ShieldCheck, Heart];

export default function About() {
  useEffect(() => {
    document.title = ABOUT_PAGE_CONFIG.metaTitle;
  }, []);

  const config = ABOUT_PAGE_CONFIG;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-16">
        {/* Hero */}
        <motion.section
          className="py-20 md:py-28"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          data-testid="section-about-hero"
          aria-labelledby="about-hero-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1
                id="about-hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
                data-testid="text-about-hero-title"
              >
                {config.heroTitle}
              </h1>
              <p
                className="text-lg text-muted-foreground leading-relaxed"
                data-testid="text-about-hero-description"
              >
                {config.heroDescription}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Mission */}
        <motion.section
          className="py-20 md:py-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-about-mission"
          aria-labelledby="mission-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card data-testid="card-mission">
              <CardContent className="p-8 md:p-12">
                <h2
                  id="mission-heading"
                  className="text-2xl sm:text-3xl font-bold tracking-tight mb-6"
                  data-testid="text-mission-heading"
                >
                  Our Mission
                </h2>
                <p
                  className="text-muted-foreground leading-relaxed text-base"
                  data-testid="text-mission-content"
                >
                  {config.mission}
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          className="py-20 md:py-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-about-values"
          aria-labelledby="values-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="values-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-8"
              data-testid="text-values-heading"
            >
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {config.values.map((value, i) => {
                const Icon = valueIcons[i] || Target;
                return (
                  <Card key={i} className="hover-elevate" data-testid={`card-value-${i}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 mb-4">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2" data-testid={`text-value-title-${i}`}>
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-value-desc-${i}`}>
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          className="py-20 md:py-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-about-team"
          aria-labelledby="team-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card data-testid="card-team">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2
                  id="team-heading"
                  className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
                  data-testid="text-team-heading"
                >
                  {config.team.title}
                </h2>
                <p
                  className="text-muted-foreground leading-relaxed text-base"
                  data-testid="text-team-description"
                >
                  {config.team.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="py-20 md:py-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-about-cta"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card data-testid="card-about-cta">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" data-testid="text-about-cta-heading">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Get expert legal assistance today. Talk to our team on WhatsApp and get a free consultation on your legal needs.
                </p>
                <a
                  href={getWhatsAppLink("Hi, I'd like to learn more about LegalApex and your services. Please help me get started.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-about-cta-whatsapp"
                >
                  <Button size="lg" data-testid="button-about-cta">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get in Touch
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  );
}
