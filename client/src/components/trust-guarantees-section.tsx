import { ShieldCheck, Lock, Building, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import { TRUST_GUARANTEES_CONFIG } from "@/lib/site-data";

const GUARANTEE_ICONS: Record<string, typeof ShieldCheck> = {
  "money-back": ShieldCheck,
  secure: Lock,
  registered: Building,
  verified: BadgeCheck,
};

export function TrustGuaranteesSection() {
  return (
    <section
      className="py-16 md:py-20 border-y border-border"
      data-testid="section-trust-guarantees"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {TRUST_GUARANTEES_CONFIG.map((guarantee, index) => {
            const Icon = GUARANTEE_ICONS[guarantee.key] || ShieldCheck;
            return (
              <motion.div
                key={guarantee.key}
                variants={fadeUpItem}
                className="flex flex-col items-center text-center"
                data-testid={`trust-guarantee-${guarantee.key}`}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full mb-4"
                  style={{
                    backgroundColor: "rgba(47,68,160,0.08)",
                    border: "1px solid rgba(47,68,160,0.12)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#2f44a0" }} />
                </div>
                <h3
                  className="text-sm font-semibold mb-1"
                  data-testid={`text-guarantee-title-${guarantee.key}`}
                >
                  {guarantee.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
                  {guarantee.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
