import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { ABOUT_PAGE_CONFIG, TESTIMONIALS_CONFIG } from "@/lib/site-data";
import { STATS_CONFIG } from "@shared/site-config";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { sectionVariants, staggerContainer, fadeUpItem } from "@/lib/motion";
import {
  MessageCircle,
  Target,
  Eye,
  ShieldCheck,
  Heart,
  Users,
  Briefcase,
  Star,
  Award,
  Clock,
  ArrowRight,
  MapPin,
  Quote,
} from "lucide-react";

const valueIcons = [Eye, Target, ShieldCheck, Heart];
const VALUE_GRADIENTS = [
  "var(--gradient-blue)",
  "var(--gradient-gold)",
  "var(--gradient-teal)",
  "var(--gradient-green)",
];

const statIcons = [Briefcase, Star, Award, Clock];

export default function About() {
  useEffect(() => {
    document.title = ABOUT_PAGE_CONFIG.metaTitle;
  }, []);

  const config = ABOUT_PAGE_CONFIG;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-20">
        <div
          className="relative py-20 md:py-28"
          style={{
            backgroundColor: "var(--hero-bg)",
            background:
              `linear-gradient(135deg, var(--hero-bg) 0%, var(--hero-bg-alt) 50%, var(--hero-bg) 100%)`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                `radial-gradient(ellipse 50% 50% at 70% 50%, var(--hero-glow-primary), transparent 70%)`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="max-w-3xl"
              data-testid="section-about-hero"
            >
              <Badge
                className="mb-5 px-3 py-1 text-xs"
                style={{
                  backgroundColor: "var(--hero-badge-bg)",
                  borderColor: "var(--hero-badge-border)",
                  color: "var(--hero-badge-text)",
                }}
              >
                About LegalApex
              </Badge>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-5 text-white"
                data-testid="text-about-hero-title"
              >
                {config.heroTitle}
              </h1>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "var(--hero-text-muted)" }}
                data-testid="text-about-hero-description"
              >
                {config.heroDescription}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
          >
            {STATS_CONFIG.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div key={stat.key} variants={fadeUpItem}>
                  <Card data-testid={`card-stat-${stat.key}`}>
                    <CardContent className="p-5 text-center">
                      <Icon className="w-5 h-5 mx-auto mb-2" style={{ color: "var(--blue)" }} />
                      <p className="text-2xl sm:text-3xl font-bold mb-0.5">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.section
          className="py-16 md:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-about-mission"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-3">
                  Our Mission
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-5"
                  data-testid="text-mission-heading"
                >
                  Making Legal Services Accessible to Every Indian
                </h2>
                <p
                  className="text-muted-foreground leading-relaxed text-base"
                  data-testid="text-mission-content"
                >
                  {config.mission}
                </p>
              </div>
              <Card data-testid="card-team">
                <CardContent className="p-6">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg mb-4"
                    style={{
                      background: "var(--gradient-blue)",
                    }}
                  >
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    data-testid="text-team-heading"
                  >
                    {config.team.title}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed"
                    data-testid="text-team-description"
                  >
                    {config.team.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-16 md:py-20 bg-muted/40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-about-values"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-3">
                Our Values
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold tracking-[-0.02em]"
                data-testid="text-values-heading"
              >
                What We Stand For
              </h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {config.values.map((value, i) => {
                const Icon = valueIcons[i] || Target;
                return (
                  <motion.div key={i} variants={fadeUpItem}>
                    <Card
                      className="h-full"
                      data-testid={`card-value-${i}`}
                    >
                      <CardContent className="p-6">
                        <div
                          className="flex items-center justify-center w-10 h-10 rounded-lg mb-4"
                          style={{
                            background: VALUE_GRADIENTS[i % VALUE_GRADIENTS.length],
                          }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3
                          className="font-semibold mb-2"
                          data-testid={`text-value-title-${i}`}
                        >
                          {value.title}
                        </h3>
                        <p
                          className="text-sm text-muted-foreground leading-relaxed"
                          data-testid={`text-value-desc-${i}`}
                        >
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        <section className="py-16 md:py-20" data-testid="section-about-testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-3">
                Client Reviews
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em]">
                Trusted by Clients Across India
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TESTIMONIALS_CONFIG.slice(0, 3).map((testimonial, index) => (
                <Card key={index} data-testid={`card-about-testimonial-${index}`}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5"
                          style={{
                            fill:
                              i < testimonial.rating ? "var(--gold)" : "transparent",
                            color:
                              i < testimonial.rating
                                ? "var(--gold)"
                                : "hsl(var(--muted-foreground))",
                          }}
                        />
                      ))}
                    </div>
                    <div className="relative mb-3">
                      <Quote
                        className="absolute -top-0.5 -left-0.5 w-5 h-5 opacity-10"
                        style={{ color: "var(--blue)" }}
                      />
                      <p className="text-sm leading-relaxed pl-4 line-clamp-3">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="border-t border-border pt-3">
                      <p className="text-sm font-semibold">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          className="py-16 md:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-about-cta"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-xl p-8 md:p-12 text-center"
              style={{
                backgroundColor: "var(--hero-bg)",
                background:
                  `linear-gradient(135deg, var(--hero-bg), var(--hero-bg-alt))`,
              }}
            >
              <h2
                className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-4 text-white"
                data-testid="text-about-cta-heading"
              >
                Ready to Get Started?
              </h2>
              <p
                className="mb-6 max-w-xl mx-auto text-sm"
                style={{ color: "var(--hero-text-muted)" }}
              >
                Get expert legal assistance today. Talk to our team on WhatsApp
                or fill out our inquiry form.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppLink(
                    "Hi, I'd like to learn more about LegalApex and your services. Please help me get started."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-about-cta-whatsapp"
                >
                  <Button
                    style={{
                      backgroundColor: "var(--gold)",
                      borderColor: "var(--gold-dark)",
                      color: "#fff",
                    }}
                    data-testid="button-about-cta"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get in Touch
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="text-white"
                    style={{
                      backgroundColor: "var(--hero-glass)",
                      borderColor: "var(--hero-glass-border)",
                    }}
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  );
}
