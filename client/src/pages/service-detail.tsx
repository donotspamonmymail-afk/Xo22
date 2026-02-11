import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { SERVICE_DETAIL_CONFIG, BLOG_POSTS_CONFIG } from "@/lib/site-data";
import { SERVICES_CONFIG } from "@shared/site-config";
import { SERVICES } from "@/lib/site-data";
import { getServiceWhatsAppLink } from "@/lib/whatsapp";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { sectionVariants, staggerContainer, fadeUpItem } from "@/lib/motion";
import {
  Check,
  FileText,
  MessageCircle,
  ChevronRight,
  Clock,
  ArrowRight,
  BookOpen,
  Shield,
  Phone,
} from "lucide-react";
import NotFound from "@/pages/not-found";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  const detail = SERVICE_DETAIL_CONFIG.find((s) => s.slug === slug);
  const serviceConfig = SERVICES_CONFIG.find((s) => s.slug === slug);
  const serviceItem = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    if (detail) {
      document.title = detail.metaTitle;
    }
  }, [detail]);

  if (!detail || !serviceConfig) {
    return <NotFound />;
  }

  const whatsappLink = getServiceWhatsAppLink(
    serviceConfig.title,
    serviceConfig.price
  );
  const relatedBlogs = BLOG_POSTS_CONFIG.filter((b) =>
    detail.relatedBlogSlugs.includes(b.slug)
  );
  const ServiceIcon = serviceItem?.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-20">
        <div
          className="relative py-16 md:py-24"
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
                `radial-gradient(ellipse 50% 50% at 30% 50%, var(--hero-glow-primary), transparent 70%)`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" data-testid="nav-breadcrumb" className="mb-6">
              <ol className="flex items-center gap-1.5 text-sm flex-wrap" style={{ color: "var(--hero-text-faint)" }}>
                <li>
                  <Link href="/" className="hover:text-white transition-colors" data-testid="link-breadcrumb-home">
                    Home
                  </Link>
                </li>
                <li><ChevronRight className="w-3 h-3" /></li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors" data-testid="link-breadcrumb-services">
                    Services
                  </Link>
                </li>
                <li><ChevronRight className="w-3 h-3" /></li>
                <li>
                  <span className="text-white font-medium" data-testid="text-breadcrumb-current">
                    {serviceConfig.title}
                  </span>
                </li>
              </ol>
            </nav>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="max-w-3xl"
              data-testid="section-service-hero"
            >
              {ServiceIcon && (
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-lg mb-5"
                  style={{
                    background: "var(--gradient-blue)",
                  }}
                >
                  <ServiceIcon className="w-6 h-6 text-white" />
                </div>
              )}
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4 text-white"
                data-testid="text-service-hero-title"
              >
                {detail.heroTitle}
              </h1>
              <p
                className="text-base sm:text-lg leading-relaxed mb-6"
                style={{ color: "var(--hero-text-muted)" }}
                data-testid="text-service-hero-description"
              >
                {detail.heroDescription}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white" data-testid="text-service-price">
                    {"\u20B9"}{serviceConfig.price}
                  </span>
                  <span className="text-sm" style={{ color: "var(--hero-text-dim)" }}>onwards</span>
                </div>
                <Badge className="text-xs" style={{ backgroundColor: "var(--hero-badge-bg)", borderColor: "var(--hero-badge-border)", color: "var(--hero-badge-text)" }}>
                  <Clock className="w-3 h-3 mr-1" />
                  {detail.timeline}
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card data-testid="section-whats-included">
                <CardContent className="p-6">
                  <h2
                    className="text-lg font-bold mb-4"
                    data-testid="text-whats-included-heading"
                  >
                    What's Included
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {detail.whatsIncluded.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5"
                        data-testid={`card-included-${i}`}
                      >
                        <div
                          className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 mt-0.5"
                          style={{
                            backgroundColor: "var(--green-bg)",
                          }}
                        >
                          <Check
                            className="w-3 h-3"
                            style={{ color: "var(--green)" }}
                          />
                        </div>
                        <span
                          className="text-sm leading-relaxed"
                          data-testid={`text-included-${i}`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="section-documents-required">
                <CardContent className="p-6">
                  <h2
                    className="text-lg font-bold mb-4"
                    data-testid="text-documents-heading"
                  >
                    Documents Required
                  </h2>
                  <ul className="space-y-2.5">
                    {detail.documentsRequired.map((doc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5"
                        data-testid={`text-document-${i}`}
                      >
                        <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card data-testid="section-process-steps">
                <CardContent className="p-6">
                  <h2
                    className="text-lg font-bold mb-4"
                    data-testid="text-process-heading"
                  >
                    How It Works
                  </h2>
                  <div className="space-y-0">
                    {detail.processSteps.map((step, i) => (
                      <div
                        key={i}
                        className="flex gap-4"
                        data-testid={`card-step-${i}`}
                      >
                        <div className="flex flex-col items-center">
                          <div
                            className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 text-xs font-bold text-white"
                            style={{
                              background: "var(--gradient-blue)",
                            }}
                          >
                            {i + 1}
                          </div>
                          {i < detail.processSteps.length - 1 && (
                            <div className="w-px flex-1 min-h-[24px] bg-border my-1" />
                          )}
                        </div>
                        <div className="pb-6">
                          <h3
                            className="font-semibold text-sm mb-1"
                            data-testid={`text-step-title-${i}`}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-sm text-muted-foreground leading-relaxed"
                            data-testid={`text-step-desc-${i}`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {detail.faqs.length > 0 && (
                <Card data-testid="section-service-faq">
                  <CardContent className="p-6">
                    <h2
                      className="text-lg font-bold mb-4"
                      data-testid="text-service-faq-heading"
                    >
                      Frequently Asked Questions
                    </h2>
                    <Accordion type="single" collapsible>
                      {detail.faqs.map((faq, i) => (
                        <AccordionItem
                          key={i}
                          value={`faq-${i}`}
                          data-testid={`accordion-faq-${i}`}
                        >
                          <AccordionTrigger
                            className="text-left text-sm"
                            data-testid={`button-faq-trigger-${i}`}
                          >
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent
                            data-testid={`text-faq-answer-${i}`}
                          >
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              )}

              {relatedBlogs.length > 0 && (
                <div data-testid="section-related-blogs">
                  <h2
                    className="text-lg font-bold mb-4"
                    data-testid="text-related-blogs-heading"
                  >
                    Related Articles
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedBlogs.map((blog) => (
                      <Link
                        key={blog.slug}
                        href={`/blog/${blog.slug}`}
                        data-testid={`link-related-blog-${blog.slug}`}
                      >
                        <Card
                          className="h-full hover-elevate overflow-visible"
                          data-testid={`card-related-blog-${blog.slug}`}
                        >
                          <CardContent className="p-5">
                            <div className="flex items-center gap-2 mb-2">
                              <BookOpen className="w-3.5 h-3.5 text-primary" />
                              <Badge variant="secondary" className="text-xs">
                                {blog.category}
                              </Badge>
                            </div>
                            <h3
                              className="font-semibold text-sm mb-1.5"
                              data-testid={`text-related-blog-title-${blog.slug}`}
                            >
                              {blog.title}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              {blog.excerpt}
                            </p>
                            <div className="flex items-center gap-1 mt-2 text-primary text-xs font-medium">
                              Read More <ArrowRight className="w-3 h-3" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4">
                <Card data-testid="card-pricing-sidebar">
                  <CardContent className="p-6">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Get Started
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">
                        {"\u20B9"}{serviceConfig.price}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">
                        onwards
                      </span>
                    </div>
                    <ul className="space-y-2.5 mb-5">
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4" style={{ color: "var(--green)" }} />
                        Expert legal assistance
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4" style={{ color: "var(--green)" }} />
                        Complete document handling
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        {detail.timeline}
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Shield className="w-4 h-4" style={{ color: "var(--gold)" }} />
                        Money-back guarantee
                      </li>
                    </ul>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      data-testid="link-service-hero-whatsapp"
                    >
                      <Button
                        className="w-full mb-2"
                        data-testid="button-service-hero-cta"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Get Free Consultation
                      </Button>
                    </a>
                    <a href="/contact" className="block">
                      <Button
                        variant="outline"
                        className="w-full"
                        data-testid="button-service-contact"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Us
                      </Button>
                    </a>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Free consultation. No obligation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-full"
                        style={{ backgroundColor: "var(--blue-bg)" }}
                      >
                        <Shield className="w-4 h-4" style={{ color: "var(--blue)" }} />
                      </div>
                      <h4 className="text-sm font-semibold">Our Guarantee</h4>
                    </div>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: "var(--green)" }} />
                        7-day money-back guarantee
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: "var(--green)" }} />
                        100% confidential handling
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: "var(--green)" }} />
                        Verified legal professionals
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: "var(--green)" }} />
                        Dedicated support via WhatsApp
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />

      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-border bg-background/95 backdrop-blur-xl p-3"
        data-testid="sticky-mobile-cta"
      >
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <span className="text-xs text-muted-foreground">Starting from</span>
            <p className="text-lg font-bold leading-tight">
              {"\u20B9"}{serviceConfig.price}
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
            data-testid="link-sticky-whatsapp"
          >
            <Button className="w-full" data-testid="button-sticky-cta">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
