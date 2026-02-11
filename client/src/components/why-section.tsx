import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import { WHY_REASONS } from "@/lib/site-data";

const ICON_GRADIENTS = [
  "var(--gradient-1)",
  "var(--gradient-2)",
  "var(--gradient-3)",
  "var(--gradient-4)",
  "var(--gradient-5)",
];

export function WhySection() {
  return (
    <section id="why-us" className="py-14 sm:py-24 md:py-32 bg-muted/40" data-testid="section-why-us" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-3 sm:mb-4">
            Why LegalApex
          </p>
          <h2 id="why-us-heading" className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] mb-3 sm:mb-5" data-testid="text-why-heading">
            Built on Trust, Driven by Results
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            We believe legal services should be accessible, affordable, and honest.
            Here's what sets us apart.
          </p>
        </div>

        <div className="sm:hidden space-y-3">
          {WHY_REASONS.map((reason, index) => (
            <div
              key={reason.title}
              className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border"
              data-testid={`card-why-${reason.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
                style={{ background: ICON_GRADIENTS[index % ICON_GRADIENTS.length] }}
              >
                <reason.icon className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-0.5">{reason.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto"
        >
          {WHY_REASONS.map((reason, index) => (
            <motion.div key={reason.title} variants={fadeUpItem}>
              <Card className="h-full hover-elevate overflow-visible" data-testid={`card-why-${reason.title.toLowerCase().replace(/\s/g, "-")}`}>
                <CardContent className="p-6">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-lg mb-4"
                    style={{ background: ICON_GRADIENTS[index % ICON_GRADIENTS.length] }}
                  >
                    <reason.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
