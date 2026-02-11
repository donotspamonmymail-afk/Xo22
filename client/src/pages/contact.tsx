import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { CONTACT_PAGE_CONFIG, SERVICES } from "@/lib/site-data";
import { SITE_CONFIG } from "@shared/site-config";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { sectionVariants, staggerContainer, fadeUpItem } from "@/lib/motion";
import {
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Zap,
  ArrowRight,
  Send,
  User,
  ChevronDown,
} from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = CONTACT_PAGE_CONFIG.metaTitle;
  }, []);

  const config = CONTACT_PAGE_CONFIG;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi, I'd like to inquire about your services.`,
      ``,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      formData.service ? `Service: ${formData.service}` : "",
      formData.message ? `Message: ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const link = getWhatsAppLink(lines);
    window.open(link, "_blank", "noopener,noreferrer");
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-20">
        <div
          className="relative py-20 md:py-28"
          style={{
            backgroundColor: "var(--hero-bg)",
            background:
              `linear-gradient(135deg, var(--hero-bg) 0%, var(--hero-bg-alt) 50%, var(--hero-bg) 100%)`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                `radial-gradient(ellipse 50% 50% at 50% 50%, var(--hero-glow-primary), transparent 70%)`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="max-w-2xl"
            >
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4 text-white"
                data-testid="text-contact-hero-title"
              >
                {config.heroTitle}
              </h1>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "var(--hero-text-muted)" }}
                data-testid="text-contact-hero-description"
              >
                {config.heroDescription}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
            <div className="lg:col-span-3">
              <Card data-testid="card-inquiry-form">
                <CardContent className="p-6 md:p-8">
                  <h2
                    className="text-xl font-bold mb-1"
                    data-testid="text-form-heading"
                  >
                    Send Us an Inquiry
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Fill in your details and we'll get back to you within 30
                    minutes on WhatsApp.
                  </p>

                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                      data-testid="form-success"
                    >
                      <div
                        className="flex items-center justify-center w-14 h-14 rounded-full mx-auto mb-4"
                        style={{
                          backgroundColor: "var(--green-bg)",
                          border: "1px solid var(--green-border)",
                        }}
                      >
                        <MessageCircle
                          className="w-6 h-6"
                          style={{ color: "var(--green)" }}
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        Inquiry Sent!
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 max-w-sm mx-auto">
                        Your message has been sent via WhatsApp. Our team will
                        respond within 30 minutes during business hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            name: "",
                            phone: "",
                            service: "",
                            message: "",
                          });
                        }}
                        data-testid="button-send-another"
                      >
                        Send Another Inquiry
                      </Button>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      data-testid="form-inquiry"
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-1.5"
                        >
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Enter your full name"
                            className="w-full pl-10 pr-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            data-testid="input-name"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-1.5"
                        >
                          Phone Number{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full pl-10 pr-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            data-testid="input-phone"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium mb-1.5"
                        >
                          Service Needed
                        </label>
                        <div className="relative">
                          <select
                            id="service"
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                service: e.target.value,
                              })
                            }
                            className="w-full pl-4 pr-10 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                            data-testid="select-service"
                          >
                            <option value="">Select a service (optional)</option>
                            {SERVICES.map((s) => (
                              <option key={s.slug} value={s.title}>
                                {s.title} - From {"\u20B9"}
                                {s.price}
                              </option>
                            ))}
                            <option value="Other">Other / Not Sure</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-1.5"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          rows={4}
                          placeholder="Tell us about your requirement (optional)"
                          className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                          data-testid="textarea-message"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        data-testid="button-submit-inquiry"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Inquiry via WhatsApp
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Your details are sent securely via WhatsApp. We never
                        share your information.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <a
                href={getWhatsAppLink(
                  "Hi, I need help with a legal service. Please assist me."
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-contact-whatsapp"
              >
                <Card
                  className="hover-elevate overflow-visible"
                  data-testid="card-contact-whatsapp"
                >
                  <CardContent className="p-5 flex items-start gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                      style={{
                        background: "var(--gradient-whatsapp)",
                      }}
                    >
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-sm font-semibold mb-0.5"
                        data-testid="text-contact-whatsapp-title"
                      >
                        WhatsApp
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Fastest way to reach us
                      </p>
                      <span className="text-xs text-primary font-medium flex items-center gap-1 mt-1.5">
                        Chat Now <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                data-testid="link-contact-email"
              >
                <Card
                  className="hover-elevate overflow-visible"
                  data-testid="card-contact-email"
                >
                  <CardContent className="p-5 flex items-start gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                      style={{
                        background: "var(--gradient-blue)",
                      }}
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-sm font-semibold mb-0.5"
                        data-testid="text-contact-email-title"
                      >
                        Email
                      </h3>
                      <p
                        className="text-xs text-muted-foreground"
                        data-testid="text-contact-email-value"
                      >
                        {SITE_CONFIG.email}
                      </p>
                      <span className="text-xs text-primary font-medium flex items-center gap-1 mt-1.5">
                        Send Email <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                data-testid="link-contact-phone"
              >
                <Card
                  className="hover-elevate overflow-visible"
                  data-testid="card-contact-phone"
                >
                  <CardContent className="p-5 flex items-start gap-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                      style={{
                        background: "var(--gradient-gold)",
                      }}
                    >
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-sm font-semibold mb-0.5"
                        data-testid="text-contact-phone-title"
                      >
                        Phone
                      </h3>
                      <p
                        className="text-xs text-muted-foreground"
                        data-testid="text-contact-phone-value"
                      >
                        {SITE_CONFIG.phoneDisplay}
                      </p>
                      <span className="text-xs text-primary font-medium flex items-center gap-1 mt-1.5">
                        Call Now <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <Card data-testid="card-office-hours">
                  <CardContent className="p-4">
                    <Clock
                      className="w-4 h-4 mb-2"
                      style={{ color: "var(--blue)" }}
                    />
                    <p
                      className="text-xs font-semibold mb-0.5"
                      data-testid="text-office-hours-title"
                    >
                      Office Hours
                    </p>
                    <p
                      className="text-xs text-muted-foreground"
                      data-testid="text-office-hours-value"
                    >
                      {config.officeHours}
                    </p>
                  </CardContent>
                </Card>
                <Card data-testid="card-response-time">
                  <CardContent className="p-4">
                    <Zap
                      className="w-4 h-4 mb-2"
                      style={{ color: "var(--gold)" }}
                    />
                    <p
                      className="text-xs font-semibold mb-0.5"
                      data-testid="text-response-time-title"
                    >
                      Response Time
                    </p>
                    <p
                      className="text-xs text-muted-foreground"
                      data-testid="text-response-time-value"
                    >
                      {config.responseTime}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <motion.section
          className="py-20 md:py-28"
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
              Select a service below to start a conversation with our expert on
              WhatsApp.
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
                    href={`/services/${service.slug}`}
                    data-testid={`link-quick-service-${service.slug}`}
                  >
                    <Card
                      className="h-full hover-elevate overflow-visible"
                      data-testid={`card-quick-service-${service.slug}`}
                    >
                      <CardContent className="p-5 flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 flex-shrink-0">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3
                            className="font-semibold text-sm mb-1"
                            data-testid={`text-quick-service-title-${service.slug}`}
                          >
                            {service.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            From {"\u20B9"}
                            {service.price}
                          </p>
                          <span className="text-xs text-primary font-medium flex items-center gap-1 mt-1.5">
                            Learn More <ArrowRight className="w-3 h-3" />
                          </span>
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
