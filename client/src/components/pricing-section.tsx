import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Check } from "lucide-react";
import { getPricingWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import { PRICING_PLANS, PRICING_DISCLAIMER } from "@/lib/site-data";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-muted/40" data-testid="section-pricing" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-4">
            Pricing
          </p>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-5" data-testid="text-pricing-heading">
            Transparent Plans, No Surprises
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Choose a plan that fits your needs. All plans include expert support
            and a dedicated point of contact via WhatsApp.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto items-stretch"
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div key={plan.name} variants={fadeUpItem} className={plan.popular ? "md:-mt-4 md:mb-[-16px]" : ""}>
              {plan.popular ? (
                <div
                  className="relative rounded-xl overflow-visible p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, #2f44a0, #1e2d6e)",
                    boxShadow: "0 16px 40px -8px rgba(47,68,160,0.25)"
                  }}
                  data-testid={`card-pricing-${plan.name.toLowerCase()}`}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="px-4 py-1 text-xs text-white" style={{ backgroundColor: "#d4a434", borderColor: "#b88d2a" }}>Most Popular</Badge>
                  </div>
                  <div
                    className="rounded-xl p-6 flex flex-col h-full"
                    style={{ background: "linear-gradient(135deg, rgba(47,68,160,0.97), #1a2556)" }}
                  >
                    <h3 className="text-lg font-semibold mb-1 text-white">{plan.name}</h3>
                    <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{"\u20B9"}{plan.price}</span>
                      <span className="text-sm ml-1" style={{ color: "rgba(255,255,255,0.5)" }}>+ onwards</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                          <div className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                            <Check className="w-3 h-3" style={{ color: "#d4a434" }} />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={getPricingWhatsAppLink(plan.name, plan.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        className="w-full"
                        style={{ backgroundColor: "#ffffff", color: "#2f44a0", borderColor: "rgba(255,255,255,0.8)" }}
                        data-testid={`button-pricing-${plan.name.toLowerCase()}`}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Get Started
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <Card className="h-full" data-testid={`card-pricing-${plan.name.toLowerCase()}`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{"\u20B9"}{plan.price}</span>
                      <span className="text-muted-foreground text-sm ml-1">+ onwards</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={getPricingWhatsAppLink(plan.name, plan.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        className="w-full"
                        variant="outline"
                        data-testid={`button-pricing-${plan.name.toLowerCase()}`}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Get Started
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-10 max-w-lg mx-auto"
          data-testid="text-pricing-disclaimer"
        >
          {PRICING_DISCLAIMER}
        </motion.p>
      </div>
    </section>
  );
}
