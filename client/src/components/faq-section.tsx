import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is LegalApex a law firm?",
    answer:
      "LegalApex is a legal services platform that connects you with verified legal professionals. We are not a law firm or a government body. We facilitate legal service assistance through our network of trusted experts.",
  },
  {
    question: "Are government fees included in the pricing?",
    answer:
      "No, government fees, stamp duty, notary charges, and courier charges are separate and vary by service and state. Our listed prices cover professional service charges only. The exact government fees will be communicated to you before you proceed.",
  },
  {
    question: "How do I send my documents?",
    answer:
      "You can securely share your documents directly via WhatsApp. Simply click any 'WhatsApp' button on our site, and our team will guide you through the exact documents required for your service. All documents are handled with strict confidentiality.",
  },
  {
    question: "How fast is the service?",
    answer:
      "Turnaround time depends on the plan you choose. Basic plans take 3\u20135 working days, Standard plans take 2\u20134 working days, and Premium plans offer fast-track handling within 24\u201348 hours. Government processing timelines are additional.",
  },
  {
    question: "Is my data safe with LegalApex?",
    answer:
      "Absolutely. We treat every piece of information with the highest level of confidentiality. Documents are only shared with the assigned legal professional handling your case. We do not store, sell, or share your personal data with third parties.",
  },
  {
    question: "What are the accepted payment methods?",
    answer:
      "We accept UPI, bank transfers (NEFT/IMPS), and all major digital wallets. Payment details are shared after your requirements are confirmed by our expert. We do not charge anything upfront without your approval.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28" data-testid="section-faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-faq-heading">
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
            {faqs.map((faq, index) => (
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
