import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import { WHY_REASONS } from "@/lib/site-data";

export function WhySection() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-muted/40" data-testid="section-why-us" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-4">
            Why LegalApex
          </p>
          <h2 id="why-us-heading" className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-5" data-testid="text-why-heading">
            Built on Trust, Driven by Results
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            We believe legal services should be accessible, affordable, and honest.
            Here's what sets us apart.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto"
        >
          {WHY_REASONS.map((reason) => (
            <motion.div key={reason.title} variants={fadeUpItem}>
              <Card className="h-full hover-elevate" data-testid={`card-why-${reason.title.toLowerCase().replace(/\s/g, "-")}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 mb-4">
                    <reason.icon className="w-5 h-5 text-primary" />
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
