import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowRight, Layers } from "lucide-react";
import { getServiceWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import { SERVICES } from "@/lib/site-data";

const ACCENT_GRADIENTS = [
  "var(--gradient-1)",
  "var(--gradient-2)",
  "var(--gradient-3)",
  "var(--gradient-4)",
  "var(--gradient-5)",
  "var(--gradient-6)",
];

export function ServicesSection() {
  return (
    <section id="services" className="py-14 sm:py-24 md:py-32" data-testid="section-services" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <Badge variant="secondary" className="mb-3 sm:mb-4">
            <Layers className="w-3 h-3 mr-1" />
            Our Services
          </Badge>
          <h2 id="services-heading" className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] mb-3 sm:mb-5" data-testid="text-services-heading">
            Legal Solutions, Simplified
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            From individuals to growing businesses, we provide end-to-end legal assistance
            with transparent pricing and fast turnaround across India.
          </p>
        </div>

        <div className="sm:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-3" style={{ width: "max-content" }}>
            {SERVICES.map((service, index) => (
              <div key={service.slug} className="w-[280px] flex-shrink-0">
                <Card className="h-full overflow-visible" data-testid={`card-service-${service.slug}`}>
                  <div className="h-1 rounded-t-md" style={{ background: ACCENT_GRADIENTS[index % ACCENT_GRADIENTS.length] }} />
                  <CardContent className="p-4 flex flex-col h-full">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg mb-3"
                      style={{ background: ACCENT_GRADIENTS[index % ACCENT_GRADIENTS.length] }}
                    >
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <Link href={`/services/${service.slug}`} data-testid={`link-service-title-${service.slug}`}>
                      <h3 className="text-base font-semibold mb-1.5">{service.title}</h3>
                    </Link>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
                      <span className="text-sm font-medium">
                        From <span className="text-primary font-bold">{"\u20B9"}{service.price}</span>
                      </span>
                      <Link href={`/services/${service.slug}`} data-testid={`link-service-mobile-${service.slug}`}>
                        <Button size="sm" variant="ghost" data-testid={`button-service-mobile-${service.slug}`}>
                          Details
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Button>
                      </Link>
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
          {SERVICES.map((service, index) => (
            <motion.div key={service.slug} variants={fadeUpItem}>
              <Card className="h-full hover-elevate overflow-visible group" data-testid={`card-service-${service.slug}`}>
                <div className="h-1 rounded-t-md" style={{ background: ACCENT_GRADIENTS[index % ACCENT_GRADIENTS.length] }} />
                <CardContent className="p-6 flex flex-col h-full">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-lg mb-4"
                    style={{ background: ACCENT_GRADIENTS[index % ACCENT_GRADIENTS.length] }}
                  >
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <Link href={`/services/${service.slug}`} data-testid={`link-service-title-${service.slug}`}>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between gap-3 flex-wrap pt-3 border-t border-border">
                    <span className="text-sm font-medium">
                      From <span className="text-primary font-bold text-base">{"\u20B9"}{service.price}</span>
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
