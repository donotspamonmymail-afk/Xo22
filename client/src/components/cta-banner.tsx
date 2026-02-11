import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { CTA_BANNER } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="py-14 sm:py-24 md:py-32" data-testid="section-cta-banner" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-xl sm:rounded-2xl px-5 py-10 sm:px-14 sm:py-20 text-center"
          style={{ backgroundColor: "var(--hero-bg)" }}
        >
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 50% 80% at 20% 40%, var(--hero-glow-strong), transparent 60%)` }} />
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 40% 60% at 80% 80%, var(--hero-glow-accent), transparent 50%)` }} />
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 60% 40% at 60% 0%, var(--hero-glow-primary), transparent 50%)` }} />
          <div className="relative z-10">
            <h2 id="cta-heading" className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] mb-3 sm:mb-5" data-testid="text-cta-heading">
              {CTA_BANNER.heading}
            </h2>
            <p className="text-sm sm:text-lg max-w-xl mx-auto mb-6 sm:mb-10 leading-relaxed" style={{ color: "var(--hero-text-faint)" }} data-testid="text-cta-subheading">
              {CTA_BANNER.subheading}
            </p>
            <a
              href={getWhatsAppLink(CTA_BANNER.message)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-cta-whatsapp"
              className="inline-block"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto"
                style={{ backgroundColor: "var(--gold)", borderColor: "var(--gold-dark)", color: "#fff" }}
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
