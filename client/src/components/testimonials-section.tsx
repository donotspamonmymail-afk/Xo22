import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import { TESTIMONIALS_CONFIG } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32"
      data-testid="section-testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-4">
            Client Reviews
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-5"
            data-testid="text-testimonials-heading"
          >
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Real feedback from verified clients who trusted us with their legal needs.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {TESTIMONIALS_CONFIG.map((testimonial, index) => (
            <motion.div key={index} variants={fadeUpItem}>
              <Card
                className="h-full"
                data-testid={`card-testimonial-${index}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        style={{
                          fill: i < testimonial.rating ? "#d4a434" : "transparent",
                          color: i < testimonial.rating ? "#d4a434" : "hsl(var(--muted-foreground))",
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative mb-4 flex-1">
                    <Quote
                      className="absolute -top-1 -left-1 w-6 h-6 opacity-10"
                      style={{ color: "#2f44a0" }}
                    />
                    <p
                      className="text-sm leading-relaxed pl-5"
                      data-testid={`text-testimonial-${index}`}
                    >
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="border-t border-border pt-4 mt-auto">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div>
                        <p
                          className="text-sm font-semibold"
                          data-testid={`text-testimonial-name-${index}`}
                        >
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.service}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
