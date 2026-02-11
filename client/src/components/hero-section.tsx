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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      data-testid="section-hero"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-background dark:from-primary/[0.08] dark:via-transparent dark:to-background" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-primary/[0.03] dark:bg-primary/[0.06] rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-accent/[0.04] dark:bg-accent/[0.06] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-8 px-4 py-1.5 text-xs font-medium tracking-wider uppercase">
              {HERO.badge}
            </Badge>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] mb-8"
            data-testid="text-hero-heading"
          >
            {HERO.headingStart}{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{HERO.headingHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            data-testid="text-hero-subheading"
          >
            {HERO.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
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
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-14"
            data-testid="stats-bar"
          >
            {STATS.map((stat) => {
              const Icon = statIcons[stat.key] || Star;
              return (
                <div
                  key={stat.key}
                  className="flex flex-col items-center gap-1.5 p-4 rounded-md bg-card border border-border"
                  data-testid={`stat-${stat.key}`}
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">{stat.value}</span>
                  <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          >
            {HERO.trustBadges.map((badge) => {
              const Icon = trustIcons[badge.key] || Shield;
              return (
                <div
                  key={badge.key}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  data-testid={`badge-${badge.key}`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/8 dark:bg-primary/15">
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
