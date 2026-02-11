import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { CONTACT_PAGE_CONFIG, SERVICES } from "@/lib/site-data";
import { SITE_CONFIG } from "@shared/site-config";
import { getWhatsAppLink, getServiceWhatsAppLink } from "@/lib/whatsapp";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { sectionVariants, staggerContainer, fadeUpItem } from "@/lib/motion";
import {
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = CONTACT_PAGE_CONFIG.metaTitle;
  }, []);

  const config = CONTACT_PAGE_CONFIG;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <motion.section
          className="py-24 md:py-32"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          data-testid="section-contact-hero"
          aria-labelledby="contact-hero-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1
                id="contact-hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-6"
                data-testid="text-contact-hero-title"
              >
                {config.heroTitle}
              </h1>
              <p
                className="text-lg text-muted-foreground leading-relaxed"
                data-testid="text-contact-hero-description"
              >
                {config.heroDescription}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Methods */}
        <motion.section
          className="py-24 md:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-contact-methods"
          aria-labelledby="contact-methods-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="contact-methods-heading"
              className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-8"
              data-testid="text-contact-methods-heading"
            >
              Reach Out to Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* WhatsApp */}
              <a
                href={getWhatsAppLink("Hi, I need help with a legal service. Please assist me.")}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-contact-whatsapp"
              >
                <Card className="h-full hover-elevate" data-testid="card-contact-whatsapp">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 mx-auto mb-4">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1" data-testid="text-contact-whatsapp-title">
                      WhatsApp
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">Fastest way to reach us</p>
                    <Button size="sm" data-testid="button-contact-whatsapp">
                      Chat Now
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </CardContent>
                </Card>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                data-testid="link-contact-email"
              >
                <Card className="h-full hover-elevate" data-testid="card-contact-email">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 mx-auto mb-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1" data-testid="text-contact-email-title">
                      Email
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3" data-testid="text-contact-email-value">
                      {SITE_CONFIG.email}
                    </p>
                    <Button size="sm" variant="outline" data-testid="button-contact-email">
                      Send Email
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </CardContent>
                </Card>
              </a>

              {/* Phone */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                data-testid="link-contact-phone"
              >
                <Card className="h-full hover-elevate" data-testid="card-contact-phone">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 mx-auto mb-4">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1" data-testid="text-contact-phone-title">
                      Phone
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3" data-testid="text-contact-phone-value">
                      {SITE_CONFIG.phoneDisplay}
                    </p>
                    <Button size="sm" variant="outline" data-testid="button-contact-phone">
                      Call Now
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Office Hours & Response Time */}
        <motion.section
          className="py-24 md:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-office-info"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card data-testid="card-office-hours">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" data-testid="text-office-hours-title">
                      Office Hours
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid="text-office-hours-value">
                      {config.officeHours}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card data-testid="card-response-time">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" data-testid="text-response-time-title">
                      Response Time
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid="text-response-time-value">
                      {config.responseTime}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Quick Service Selection */}
        <motion.section
          className="py-24 md:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-quick-services"
          aria-labelledby="quick-services-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="quick-services-heading"
              className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-3"
              data-testid="text-quick-services-heading"
            >
              Need Help With a Specific Service?
            </h2>
            <p className="text-muted-foreground mb-8">
              Select a service below to start a conversation with our expert on WhatsApp.
            </p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {SERVICES.map((service) => (
                <motion.div key={service.slug} variants={fadeUpItem}>
                  <a
                    href={getServiceWhatsAppLink(service.title, service.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-quick-service-${service.slug}`}
                  >
                    <Card className="h-full hover-elevate" data-testid={`card-quick-service-${service.slug}`}>
                      <CardContent className="p-5 flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 flex-shrink-0">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm mb-1" data-testid={`text-quick-service-title-${service.slug}`}>
                            {service.title}
                          </h3>
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <Badge variant="secondary">
                              From {"\u20B9"}{service.price}
                            </Badge>
                            <span className="text-xs text-primary font-medium flex items-center gap-1">
                              Chat <MessageCircle className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>

      <FooterSection />
    </div>
  );
}
