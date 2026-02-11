import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Check, Sparkles, Zap, Crown } from "lucide-react";
import { getPricingWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import { PRICING_PLANS, PRICING_DISCLAIMER } from "@/lib/site-data";

const planIcons = [Sparkles, Zap, Crown];

export function PricingSection() {
  return (
    <section id="pricing" className="py-14 sm:py-24 md:py-32 relative overflow-hidden" data-testid="section-pricing" aria-labelledby="pricing-heading">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(var(--muted)/0.3), hsl(var(--background)), hsl(var(--muted)/0.3))" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <Badge variant="secondary" className="mb-3 sm:mb-4" data-testid="badge-pricing">
            <Sparkles className="w-3 h-3 mr-1" />
            Simple Pricing
          </Badge>
          <h2 id="pricing-heading" className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] mb-3 sm:mb-5" data-testid="text-pricing-heading">
            Transparent Plans, No Surprises
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Choose a plan that fits your needs. All plans include expert support
            and a dedicated point of contact via WhatsApp.
          </p>
        </div>

        <div className="sm:hidden flex flex-col gap-3 pb-4">
          {PRICING_PLANS.map((plan, idx) => {
            const PlanIcon = planIcons[idx] || Sparkles;
            return (
              <div key={plan.name}>
                {plan.popular ? (
                  <div
                    className="relative rounded-xl overflow-visible"
                    style={{
                      background: "var(--pricing-popular-bg)",
                      boxShadow: "0 8px 32px rgba(79,70,229,0.25)"
                    }}
                    data-testid={`card-pricing-${plan.name.toLowerCase()}`}
                  >
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="px-2.5 py-0.5 text-[10px] text-white bg-primary border-primary shadow-md">
                        <Zap className="w-2.5 h-2.5 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                    <div className="rounded-xl p-4 pt-5">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/15">
                            <PlanIcon className="w-3.5 h-3.5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-white">{plan.name}</h3>
                            <p className="text-[10px] text-white/50 leading-tight">{plan.description}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-xl font-extrabold text-white">{"\u20B9"}{plan.price}</span>
                          <span className="text-[10px] ml-0.5 text-white/40">+</span>
                        </div>
                      </div>
                      <ul className="grid grid-cols-2 gap-x-2 gap-y-1 mb-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-1.5 text-[11px] text-white/80">
                            <Check className="w-3 h-3 flex-shrink-0 text-white/60" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={getPricingWhatsAppLink(plan.name, plan.price)} target="_blank" rel="noopener noreferrer" className="block" data-testid={`link-pricing-mobile-${plan.name.toLowerCase()}`}>
                        <Button className="w-full bg-white text-primary border-white/80 font-semibold" size="sm" data-testid={`button-pricing-mobile-popular-${plan.name.toLowerCase()}`}>
                          <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                          Get Started
                        </Button>
                      </a>
                    </div>
                  </div>
                ) : (
                  <Card className="rounded-xl" data-testid={`card-pricing-${plan.name.toLowerCase()}`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/8">
                            <PlanIcon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold">{plan.name}</h3>
                            <p className="text-[10px] text-muted-foreground leading-tight">{plan.description}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-xl font-extrabold">{"\u20B9"}{plan.price}</span>
                          <span className="text-muted-foreground text-[10px] ml-0.5">+</span>
                        </div>
                      </div>
                      <ul className="grid grid-cols-2 gap-x-2 gap-y-1 mb-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-1.5 text-[11px]">
                            <Check className="w-3 h-3 flex-shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={getPricingWhatsAppLink(plan.name, plan.price)} target="_blank" rel="noopener noreferrer" className="block" data-testid={`link-pricing-mobile-${plan.name.toLowerCase()}`}>
                        <Button className="w-full font-semibold" size="sm" variant="outline" data-testid={`button-pricing-mobile-${plan.name.toLowerCase()}`}>
                          <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                          Get Started
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden sm:grid grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto items-stretch"
        >
          {PRICING_PLANS.map((plan, idx) => {
            const PlanIcon = planIcons[idx] || Sparkles;
            return (
              <motion.div key={plan.name} variants={fadeUpItem} className={plan.popular ? "md:-mt-4 md:mb-[-16px]" : ""}>
                {plan.popular ? (
                  <div
                    className="relative rounded-2xl overflow-visible"
                    style={{
                      background: "var(--pricing-popular-bg)",
                      boxShadow: "0 12px 40px rgba(79,70,229,0.3)"
                    }}
                    data-testid={`card-pricing-${plan.name.toLowerCase()}`}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="px-4 py-1 text-xs text-white bg-primary border-primary shadow-md">
                        <Zap className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                    <div className="rounded-2xl p-6 md:p-8 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15">
                          <PlanIcon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      </div>
                      <p className="text-sm mb-5 text-white/60">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-extrabold text-white">{"\u20B9"}{plan.price}</span>
                        <span className="text-sm ml-1 text-white/50">+ onwards</span>
                      </div>
                      <div className="border-t border-white/10 pt-5 mb-6 flex-1">
                        <ul className="space-y-3">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2.5 text-sm text-white/90">
                              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/15 flex-shrink-0">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a href={getPricingWhatsAppLink(plan.name, plan.price)} target="_blank" rel="noopener noreferrer" className="block">
                        <Button className="w-full bg-white text-primary border-white/80 font-semibold" data-testid={`button-pricing-${plan.name.toLowerCase()}`}>
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Get Started
                        </Button>
                      </a>
                    </div>
                  </div>
                ) : (
                  <Card className="h-full rounded-2xl" data-testid={`card-pricing-${plan.name.toLowerCase()}`}>
                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8">
                          <PlanIcon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-5">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-extrabold">{"\u20B9"}{plan.price}</span>
                        <span className="text-muted-foreground text-sm ml-1">+ onwards</span>
                      </div>
                      <div className="border-t pt-5 mb-6 flex-1">
                        <ul className="space-y-3">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2.5 text-sm">
                              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 flex-shrink-0">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a href={getPricingWhatsAppLink(plan.name, plan.price)} target="_blank" rel="noopener noreferrer" className="block">
                        <Button className="w-full font-semibold" variant="outline" data-testid={`button-pricing-${plan.name.toLowerCase()}`}>
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Get Started
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-[10px] sm:text-xs text-muted-foreground mt-6 sm:mt-10 max-w-lg mx-auto"
          data-testid="text-pricing-disclaimer"
        >
          {PRICING_DISCLAIMER}
        </motion.p>
      </div>
    </section>
  );
}
