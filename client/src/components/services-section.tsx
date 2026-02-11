import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { getServiceWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import { SERVICES } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32" data-testid="section-services" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-4">
            Our Services
          </p>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-5" data-testid="text-services-heading">
            Legal Solutions, Simplified
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            From individuals to growing businesses, we provide end-to-end legal assistance
            with transparent pricing and fast turnaround across India.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.slug} variants={fadeUpItem}>
              <Card className="h-full hover-elevate" data-testid={`card-service-${service.slug}`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <Link href={`/services/${service.slug}`} data-testid={`link-service-title-${service.slug}`}>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between gap-3 flex-wrap pt-2 border-t border-border">
                    <span className="text-sm font-medium">
                      Starting from <span className="text-primary font-bold">{"\u20B9"}{service.price}</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={getServiceWhatsAppLink(service.title, service.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="outline" data-testid={`button-service-whatsapp-${service.slug}`}>
                          <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                          Get Quote
                        </Button>
                      </a>
                      <Link href={`/services/${service.slug}`} data-testid={`link-service-learn-more-${service.slug}`}>
                        <Button size="sm" variant="ghost">
                          Learn More
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Button>
                      </Link>
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
