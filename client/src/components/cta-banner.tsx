import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { CTA_BANNER } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-28" data-testid="section-cta-banner" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 px-8 py-14 sm:px-12 sm:py-16 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
          <div className="relative z-10">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4" data-testid="text-cta-heading">
              {CTA_BANNER.heading}
            </h2>
            <p className="text-primary-foreground/80 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed" data-testid="text-cta-subheading">
              {CTA_BANNER.subheading}
            </p>
            <a
              href={getWhatsAppLink(CTA_BANNER.message)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-cta-whatsapp"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-primary-foreground"
                data-testid="button-cta-whatsapp"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {CTA_BANNER.buttonText}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
