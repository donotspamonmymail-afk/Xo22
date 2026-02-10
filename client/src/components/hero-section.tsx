import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowDown, Shield, BadgeCheck, Globe, Star, Briefcase, Award, Clock } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { HERO, STATS, SITE } from "@/lib/site-data";

const trustIcons: Record<string, typeof Shield> = {
  confidential: Shield,
  verified: BadgeCheck,
  "india-wide": Globe,
};

const statIcons: Record<string, typeof Star> = {
  cases: Briefcase,
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      data-testid="section-hero"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 dark:from-primary/10 dark:via-transparent dark:to-primary/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 dark:bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-xs font-medium tracking-wide">
              {HERO.badge}
            </Badge>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
            data-testid="text-hero-heading"
          >
            {HERO.headingStart}{" "}
            <span className="text-primary">{HERO.headingHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            data-testid="text-hero-subheading"
          >
            {HERO.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
          >
            <a
              href={getWhatsAppLink(HERO.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" data-testid="button-hero-whatsapp">
                <MessageCircle className="w-4 h-4 mr-2" />
                {HERO.ctaPrimary}
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
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
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mb-10"
            data-testid="stats-bar"
          >
            {STATS.map((stat) => {
              const Icon = statIcons[stat.key] || Star;
              return (
                <div
                  key={stat.key}
                  className="flex flex-col items-center gap-1 p-3 rounded-lg bg-card border border-border"
                  data-testid={`stat-${stat.key}`}
                >
                  <Icon className="w-4 h-4 text-primary mb-1" />
                  <span className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
          >
            {HERO.trustBadges.map((badge) => {
              const Icon = trustIcons[badge.key] || Shield;
              return (
                <div
                  key={badge.key}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  data-testid={`badge-${badge.key}`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                    <Icon className="w-4 h-4 text-primary" />
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
