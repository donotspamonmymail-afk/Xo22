import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { FAQS } from "@/lib/site-data";

export function FaqSection() {
  return (
    <section id="faq" className="py-14 sm:py-24 md:py-32" data-testid="section-faq" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
          <div className="lg:w-1/3 text-center lg:text-left lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-3 sm:mb-4">
              FAQ
            </p>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] mb-3 sm:mb-5" data-testid="text-faq-heading">
              Common Questions
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Everything you need to know before getting started. Can't find your answer?
              Reach out on WhatsApp.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-md px-4 sm:px-5 data-[state=open]:bg-card data-[state=open]:shadow-sm"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger
                    className="text-xs sm:text-sm font-medium text-left hover:no-underline py-3 sm:py-4"
                    data-testid={`faq-trigger-${index}`}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-3 sm:pb-4" data-testid={`faq-content-${index}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
