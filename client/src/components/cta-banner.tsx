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
          className="relative overflow-hidden rounded-xl sm:rounded-2xl px-5 py-10 sm:px-14 sm:py-20 text-center text-white"
          style={{ background: "var(--cta-bg)" }}
        >
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
          </div>
          <div className="relative z-10">
            <h2 id="cta-heading" className="text-xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-3 sm:mb-5" data-testid="text-cta-heading">
              {CTA_BANNER.heading}
            </h2>
            <p className="text-sm sm:text-lg max-w-xl mx-auto mb-6 sm:mb-10 leading-relaxed text-white/70" data-testid="text-cta-subheading">
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
                className="w-full sm:w-auto bg-white text-primary border-white/80"
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
