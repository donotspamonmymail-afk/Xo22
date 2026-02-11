import { motion } from "framer-motion";
import { staggerContainerSlow, fadeUpItem } from "@/lib/motion";
import { HOW_IT_WORKS_STEPS } from "@/lib/site-data";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-14 sm:py-24 md:py-32" data-testid="section-how-it-works" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-3 sm:mb-4">
            How It Works
          </p>
          <h2 id="how-it-works-heading" className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] mb-3 sm:mb-5" data-testid="text-how-heading">
            Four Simple Steps
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Getting legal help shouldn't be complicated. Here's how easy it is to work with us.
          </p>
        </div>

        <div className="sm:hidden space-y-4">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="flex items-start gap-4"
              data-testid={`step-${step.number}`}
            >
              <div className="flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--gradient-blue)" }}
                >
                  <span className="text-sm font-bold text-white">{step.number}</span>
                </div>
                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="w-px h-4 mx-auto bg-border mt-2" />
                )}
              </div>
              <div className="pt-1.5">
                <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
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
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center shadow-md" style={{ background: "var(--gradient-blue)" }}>
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
