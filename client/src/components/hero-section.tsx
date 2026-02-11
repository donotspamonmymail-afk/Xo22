import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowDown, Shield, BadgeCheck, Globe, Star, Briefcase, Award, Clock } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { HERO, STATS } from "@/lib/site-data";

const trustIcons: Record<string, typeof Shield> = {
  confidential: Shield,
  verified: BadgeCheck,
  "india-wide": Globe,
};

const statIcons: Record<string, typeof Star> = {
  clients: Briefcase,
  rating: Star,
  experts: Award,
  years: Clock,
};

export function HeroSection() {
  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--hero-bg)" }}
      data-testid="section-hero"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, var(--hero-glow-primary), transparent 70%)` }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 40% 60% at 80% 60%, var(--hero-glow-accent), transparent 60%)` }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 50% 40% at 10% 80%, var(--hero-glow-primary), transparent 60%)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 sm:mb-8 px-4 py-1.5 text-xs font-medium tracking-wider uppercase" style={{ backgroundColor: "var(--hero-badge-bg)", borderColor: "var(--hero-badge-border)", color: "var(--hero-badge-text)" }}>
              {HERO.badge}
            </Badge>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 sm:mb-8 text-white"
            data-testid="text-hero-heading"
          >
            {HERO.headingStart}{" "}
            <span style={{ background: `linear-gradient(to right, var(--gold), var(--gold-light))`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{HERO.headingHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-12 leading-relaxed"
            style={{ color: "var(--hero-text-muted)" }}
            data-testid="text-hero-subheading"
          >
            {HERO.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-14"
          >
            <a
              href={getWhatsAppLink(HERO.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto" style={{ backgroundColor: "var(--gold)", borderColor: "var(--gold-dark)", color: "#fff" }} data-testid="button-hero-whatsapp">
                <MessageCircle className="w-4 h-4 mr-2" />
                {HERO.ctaPrimary}
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="text-white w-full sm:w-auto"
              style={{ backgroundColor: "var(--hero-glass)", borderColor: "var(--hero-glass-border)" }}
              data-testid="button-hero-services"
            >
              {HERO.ctaSecondary}
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto mb-8 sm:mb-14"
            data-testid="stats-bar"
          >
            {STATS.map((stat) => {
              const Icon = statIcons[stat.key] || Star;
              return (
                <div
                  key={stat.key}
                  className="flex flex-col items-center gap-1 p-2 sm:p-4 rounded-md"
                  style={{ backgroundColor: "var(--hero-glass)", border: "1px solid var(--hero-glass-border)" }}
                  data-testid={`stat-${stat.key}`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 hidden sm:block" style={{ color: "var(--gold)" }} />
                  <span className="text-lg sm:text-3xl font-extrabold tracking-tight text-white">{stat.value}</span>
                  <span className="text-[9px] sm:text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--hero-text-faint)" }}>{stat.label}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden sm:flex flex-wrap items-center justify-center gap-4 sm:gap-8"
          >
            {HERO.trustBadges.map((badge) => {
              const Icon = trustIcons[badge.key] || Shield;
              return (
                <div
                  key={badge.key}
                  className="flex items-center gap-2 text-xs sm:text-sm"
                  style={{ color: "var(--hero-text-faint)" }}
                  data-testid={`badge-${badge.key}`}
                >
                  <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-md" style={{ backgroundColor: "var(--hero-glass)" }}>
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "var(--gold)" }} />
                  </div>
                  <span className="font-medium">{badge.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
