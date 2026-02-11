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
import { sectionVariants } from "@/lib/motion";
import {
  Check,
  FileText,
  MessageCircle,
  ChevronRight,
  Clock,
  ArrowRight,
  BookOpen,
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

  const whatsappLink = getServiceWhatsAppLink(serviceConfig.title, serviceConfig.price);
  const relatedBlogs = BLOG_POSTS_CONFIG.filter((b) =>
    detail.relatedBlogSlugs.includes(b.slug)
  );
  const ServiceIcon = serviceItem?.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav aria-label="Breadcrumb" data-testid="nav-breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
              <li>
                <Link href="/" data-testid="link-breadcrumb-home">
                  <Button variant="ghost" size="sm" className="text-muted-foreground font-normal">
                    Home
                  </Button>
                </Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li>
                <Link href="/#services" data-testid="link-breadcrumb-services">
                  <Button variant="ghost" size="sm" className="text-muted-foreground font-normal">
                    Services
                  </Button>
                </Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li>
                <span className="font-medium text-foreground px-3 py-1" data-testid="text-breadcrumb-current">
                  {serviceConfig.title}
                </span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <motion.section
          className="py-24 md:py-32"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          data-testid="section-service-hero"
          aria-labelledby="service-hero-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {ServiceIcon && (
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 mb-6">
                  <ServiceIcon className="w-6 h-6 text-primary" />
                </div>
              )}
              <h1
                id="service-hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-6"
                data-testid="text-service-hero-title"
              >
                {detail.heroTitle}
              </h1>
              <p
                className="text-lg text-muted-foreground leading-relaxed mb-8"
                data-testid="text-service-hero-description"
              >
                {detail.heroDescription}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-2xl font-bold" data-testid="text-service-price">
                  Starting from <span className="text-primary">{"\u20B9"}{serviceConfig.price}</span>
                </span>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-service-hero-whatsapp"
                >
                  <Button data-testid="button-service-hero-cta">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get Free Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What's Included */}
        <motion.section
          className="py-24 md:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-whats-included"
          aria-labelledby="whats-included-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="whats-included-heading"
              className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-8"
              data-testid="text-whats-included-heading"
            >
              What's Included
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {detail.whatsIncluded.map((item, i) => (
                <Card key={i} className="hover-elevate" data-testid={`card-included-${i}`}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed" data-testid={`text-included-${i}`}>
                      {item}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Documents Required */}
        <motion.section
          className="py-24 md:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-documents-required"
          aria-labelledby="documents-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="documents-heading"
              className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-8"
              data-testid="text-documents-heading"
            >
              Documents Required
            </h2>
            <Card data-testid="card-documents">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {detail.documentsRequired.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3" data-testid={`text-document-${i}`}>
                      <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm leading-relaxed">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Process Steps */}
        <motion.section
          className="py-24 md:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-process-steps"
          aria-labelledby="process-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
              <h2
                id="process-heading"
                className="text-2xl sm:text-3xl font-bold tracking-[-0.02em]"
                data-testid="text-process-heading"
              >
                How It Works
              </h2>
              <Badge variant="secondary" data-testid="badge-timeline">
                <Clock className="w-3.5 h-3.5 mr-1.5" />
                {detail.timeline}
              </Badge>
            </div>
            <div className="space-y-4">
              {detail.processSteps.map((step, i) => (
                <Card key={i} data-testid={`card-step-${i}`}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" data-testid={`text-step-title-${i}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-step-desc-${i}`}>
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        {detail.faqs.length > 0 && (
          <motion.section
            className="py-24 md:py-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
            data-testid="section-service-faq"
            aria-labelledby="service-faq-heading"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                id="service-faq-heading"
                className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-8"
                data-testid="text-service-faq-heading"
              >
                Frequently Asked Questions
              </h2>
              <Card data-testid="card-service-faq">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible>
                    {detail.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`} data-testid={`accordion-faq-${i}`}>
                        <AccordionTrigger
                          className="text-left text-sm"
                          data-testid={`button-faq-trigger-${i}`}
                        >
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent data-testid={`text-faq-answer-${i}`}>
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        )}

        {/* Related Blog Posts */}
        {relatedBlogs.length > 0 && (
          <motion.section
            className="py-24 md:py-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
            data-testid="section-related-blogs"
            aria-labelledby="related-blogs-heading"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                id="related-blogs-heading"
                className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-8"
                data-testid="text-related-blogs-heading"
              >
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedBlogs.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    data-testid={`link-related-blog-${blog.slug}`}
                  >
                    <Card className="h-full hover-elevate" data-testid={`card-related-blog-${blog.slug}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <Badge variant="secondary">{blog.category}</Badge>
                        </div>
                        <h3 className="font-semibold mb-2 text-sm" data-testid={`text-related-blog-title-${blog.slug}`}>
                          {blog.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center gap-1 mt-3 text-primary text-xs font-medium">
                          Read More <ArrowRight className="w-3 h-3" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          className="py-24 md:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          data-testid="section-service-cta"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card data-testid="card-service-cta">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-4" data-testid="text-service-cta-heading">
                  Ready to Get Started with {serviceConfig.title}?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Get expert assistance today. Talk to our team on WhatsApp and get a free consultation.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-service-cta-whatsapp"
                >
                  <Button size="lg" data-testid="button-service-cta">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get Free Consultation
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>

      <FooterSection />

      {/* Sticky bottom CTA bar (mobile) */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-border bg-background/95 backdrop-blur-xl p-3"
        data-testid="sticky-mobile-cta"
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          data-testid="link-sticky-whatsapp"
        >
          <Button className="w-full" data-testid="button-sticky-cta">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get Free Consultation
          </Button>
        </a>
      </div>
    </div>
  );
}
