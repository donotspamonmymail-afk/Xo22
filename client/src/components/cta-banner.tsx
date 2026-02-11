import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { CTA_BANNER } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="py-24 md:py-32" data-testid="section-cta-banner" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl px-6 py-14 sm:px-14 sm:py-20 text-center"
          style={{ backgroundColor: "#0d1020" }}
        >
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 80% at 20% 40%, rgba(47,68,160,0.35), transparent 60%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 60% at 80% 80%, rgba(210,155,40,0.15), transparent 50%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 60% 0%, rgba(47,68,160,0.18), transparent 50%)" }} />
          <div className="relative z-10">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] mb-5" data-testid="text-cta-heading">
              {CTA_BANNER.heading}
            </h2>
            <p className="text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }} data-testid="text-cta-subheading">
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
                style={{ backgroundColor: "#d4a434", borderColor: "#b88d2a", color: "#fff" }}
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
