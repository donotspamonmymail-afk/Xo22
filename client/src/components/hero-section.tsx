import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowDown, Shield, BadgeCheck, Globe } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

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
              Trusted Legal Services Across India
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
            data-testid="text-hero-heading"
          >
            Simple. Legal.{" "}
            <span className="text-primary">Done Right.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            data-testid="text-hero-subheading"
          >
            Expert legal assistance for individuals and businesses. 
            From name changes to company registration &mdash; we handle the paperwork 
            so you can focus on what matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
          >
            <a
              href={getWhatsAppLink("Hi, I need legal assistance. Please help me get started.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" data-testid="button-hero-whatsapp">
                <MessageCircle className="w-4 h-4 mr-2" />
                Talk on WhatsApp
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              data-testid="button-hero-services"
            >
              View Services
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="badge-confidential">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium">100% Confidential</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="badge-verified">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                <BadgeCheck className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium">Expert Verified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="badge-india-wide">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium">India-wide Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
