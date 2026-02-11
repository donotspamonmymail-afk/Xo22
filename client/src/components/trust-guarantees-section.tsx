import { ShieldCheck, Lock, Building, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
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
      className="py-8 sm:py-16 md:py-20 border-y border-border"
      data-testid="section-trust-guarantees"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {TRUST_GUARANTEES_CONFIG.map((guarantee) => {
            const Icon = GUARANTEE_ICONS[guarantee.key] || ShieldCheck;
            return (
              <div
                key={guarantee.key}
                className="flex flex-col items-center text-center"
                data-testid={`trust-guarantee-${guarantee.key}`}
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-2 sm:mb-4 bg-primary/5 dark:bg-primary/10 border border-primary/10">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <h3
                  className="text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1"
                  data-testid={`text-guarantee-title-${guarantee.key}`}
                >
                  {guarantee.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed max-w-[220px] hidden sm:block">
                  {guarantee.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
