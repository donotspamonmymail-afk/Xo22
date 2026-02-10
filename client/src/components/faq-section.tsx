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
    <section id="faq" className="py-20 md:py-28" data-testid="section-faq" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
            FAQ
          </p>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-faq-heading">
            Common Questions
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Everything you need to know before getting started. Can't find your answer?
            Reach out on WhatsApp.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-md px-5 data-[state=open]:bg-card"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger
                  className="text-sm font-medium text-left hover:no-underline"
                  data-testid={`faq-trigger-${index}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4" data-testid={`faq-content-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
