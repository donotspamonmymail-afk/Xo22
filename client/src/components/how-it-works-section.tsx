import { motion } from "framer-motion";
import { staggerContainerSlow, fadeUpItem } from "@/lib/motion";
import { HOW_IT_WORKS_STEPS } from "@/lib/site-data";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32" data-testid="section-how-it-works" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-4">
            How It Works
          </p>
          <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-5" data-testid="text-how-heading">
            Four Simple Steps
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Getting legal help shouldn't be complicated. Here's how easy it is to work with us.
          </p>
        </div>

        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeUpItem}
              className="relative text-center"
              data-testid={`step-${step.number}`}
            >
              {index < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-primary/20" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5 mb-5 border border-primary/10">
                <step.icon className="w-8 h-8 text-primary" />
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2f44a0, #4a62c4)", boxShadow: "0 4px 12px rgba(47,68,160,0.3)" }}>
                  <span className="text-xs font-bold text-white">{step.number}</span>
                </div>
              </div>
              <h3 className="text-base font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
