import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Check } from "lucide-react";
import { getPricingWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "999",
    description: "Perfect for simple legal tasks with guided assistance.",
    popular: false,
    features: [
      "Document checklist",
      "Format guidance",
      "WhatsApp support",
      "3\u20135 day turnaround",
    ],
  },
  {
    name: "Standard",
    price: "1,999",
    description: "Ideal for individuals needing hands-on legal support.",
    popular: true,
    features: [
      "Drafting + filing guidance",
      "2 revisions included",
      "Priority WhatsApp support",
      "2\u20134 day turnaround",
    ],
  },
  {
    name: "Premium",
    price: "2,999",
    description: "For urgent matters requiring dedicated attention.",
    popular: false,
    features: [
      "Fast-track handling",
      "Dedicated case manager",
      "4 revisions included",
      "24\u201348 hour turnaround",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/30" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-pricing-heading">
            Transparent Plans, No Surprises
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Choose a plan that fits your needs. All plans include expert support 
            and a dedicated point of contact via WhatsApp.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={itemVariants}>
              <Card
                className={`h-full relative ${plan.popular ? "border-primary border-2" : ""}`}
                data-testid={`card-pricing-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-3 py-0.5 text-xs">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{"\u20B9"}{plan.price}</span>
                    <span className="text-muted-foreground text-sm">+ onwards</span>
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
                    href={getPricingWhatsAppLink(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      data-testid={`button-pricing-${plan.name.toLowerCase()}`}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Get Started
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-8 max-w-lg mx-auto"
          data-testid="text-pricing-disclaimer"
        >
          Government fees, stamp duty, notary, and courier charges are extra. 
          Final pricing is confirmed after reviewing your specific requirements.
        </motion.p>
      </div>
    </section>
  );
}
