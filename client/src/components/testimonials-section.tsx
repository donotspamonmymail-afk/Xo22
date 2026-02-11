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
      className="py-14 sm:py-24 md:py-32"
      data-testid="section-testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <Badge variant="secondary" className="mb-3 sm:mb-4">
            <Star className="w-3 h-3 mr-1" />
            Client Reviews
          </Badge>
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] mb-3 sm:mb-5"
            data-testid="text-testimonials-heading"
          >
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Real feedback from verified clients who trusted us with their legal needs.
          </p>
        </div>

        <div className="sm:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-3" style={{ width: "max-content" }}>
            {TESTIMONIALS_CONFIG.map((testimonial, index) => (
              <div key={index} className="w-[300px] flex-shrink-0">
                <Card className="h-full" data-testid={`card-testimonial-${index}`}>
                  <CardContent className="p-4 flex flex-col h-full">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <p className="text-xs leading-relaxed mb-3 flex-1 line-clamp-4" data-testid={`text-testimonial-mobile-${index}`}>
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-border pt-3 mt-auto">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div>
                          <p className="text-xs font-semibold" data-testid={`text-testimonial-name-${index}`}>
                            {testimonial.name}
                          </p>
                          <p className="text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5">
                            <MapPin className="w-2.5 h-2.5" />
                            {testimonial.location}
                          </p>
                        </div>
                        <Badge variant="secondary" className="text-[10px]">
                          {testimonial.service}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {TESTIMONIALS_CONFIG.map((testimonial, index) => (
            <motion.div key={index} variants={fadeUpItem}>
              <Card className="h-full" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>

                  <div className="relative mb-4 flex-1">
                    <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary/10" />
                    <p className="text-sm leading-relaxed pl-5" data-testid={`text-testimonial-${index}`}>
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="border-t border-border pt-4 mt-auto">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div>
                        <p className="text-sm font-semibold" data-testid={`text-testimonial-name-${index}`}>
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
