import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowDown, Shield, BadgeCheck, Globe, Star, FileCheck, ThumbsUp, Zap, MapPin } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { HERO, STATS } from "@/lib/site-data";

const trustIcons: Record<string, typeof Shield> = {
  confidential: Shield,
  verified: BadgeCheck,
  "india-wide": Globe,
};

const statIcons: Record<string, typeof Star> = {
  clients: FileCheck,
  rating: ThumbsUp,
  experts: Zap,
  years: MapPin,
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
      className="relative overflow-hidden bg-background"
      data-testid="section-hero"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-60" style={{ background: "var(--hero-glow-1)", filter: "blur(120px)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-50" style={{ background: "var(--hero-glow-2)", filter: "blur(100px)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pt-36 sm:pb-24 md:pt-44 md:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 sm:mb-8 px-4 py-1.5 text-xs font-medium tracking-wider uppercase" data-testid="badge-hero">
              {HERO.badge}
            </Badge>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 sm:mb-8"
            data-testid="text-hero-heading"
          >
            {HERO.headingStart}{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">{HERO.headingHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-12 leading-relaxed text-muted-foreground"
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
              <Button size="lg" className="w-full sm:w-auto" data-testid="button-hero-whatsapp">
                <MessageCircle className="w-4 h-4 mr-2" />
                {HERO.ctaPrimary}
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="w-full sm:w-auto"
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
                  className="flex flex-col items-center gap-1 p-2 sm:p-4 rounded-md bg-card border border-border"
                  data-testid={`stat-${stat.key}`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 hidden sm:block text-primary" />
                  <span className="text-lg sm:text-3xl font-extrabold tracking-tight">{stat.value}</span>
                  <span className="text-[9px] sm:text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</span>
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
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                  data-testid={`badge-${badge.key}`}
                >
                  <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-primary/5 dark:bg-primary/10">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
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
