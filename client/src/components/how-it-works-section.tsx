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
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
              )}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-5">
                <step.icon className="w-7 h-7 text-primary" />
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary-foreground">{step.number}</span>
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
