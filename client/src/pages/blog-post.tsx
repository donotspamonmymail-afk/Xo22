import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { BLOG_POSTS_CONFIG } from "@/lib/site-data";
import { SERVICES_CONFIG } from "@shared/site-config";
import { getServiceWhatsAppLink } from "@/lib/whatsapp";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/motion";
import {
  Clock,
  Calendar,
  ChevronRight,
  ArrowLeft,
  MessageCircle,
  Shield,
  Check,
} from "lucide-react";
import NotFound from "@/pages/not-found";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS_CONFIG.find((p) => p.slug === slug);
  const relatedService = post
    ? SERVICES_CONFIG.find((s) => s.slug === post.relatedServiceSlug)
    : undefined;

  useEffect(() => {
    if (post) {
      document.title = post.metaTitle;
    }
  }, [post]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-20">
        <div
          className="relative py-16 md:py-24"
          style={{
            backgroundColor: "#0d1020",
            background:
              "linear-gradient(135deg, #0d1020 0%, #1a2040 50%, #0d1020 100%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(47,68,160,0.15), transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <nav
                className="flex items-center gap-1.5 text-sm mb-6 flex-wrap"
                style={{ color: "rgba(255,255,255,0.5)" }}
                aria-label="Breadcrumb"
                data-testid="nav-breadcrumb"
              >
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                  data-testid="link-breadcrumb-home"
                >
                  Home
                </Link>
                <ChevronRight className="w-3 h-3" />
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                  data-testid="link-breadcrumb-blog"
                >
                  Blog
                </Link>
                <ChevronRight className="w-3 h-3" />
                <span
                  className="text-white truncate max-w-xs font-medium"
                  data-testid="text-breadcrumb-current"
                >
                  {post.title}
                </span>
              </nav>

              <div>
                <Badge
                  className="mb-4 text-xs"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.8)",
                  }}
                  data-testid="badge-post-category"
                >
                  {post.category}
                </Badge>
                <h1
                  className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-4 text-white"
                  data-testid="text-blog-post-heading"
                >
                  {post.title}
                </h1>
                <div
                  className="flex items-center gap-4 text-sm flex-wrap"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  <span
                    className="flex items-center gap-1"
                    data-testid="text-post-readtime"
                  >
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <span
                    className="flex items-center gap-1"
                    data-testid="text-post-date"
                  >
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishDate).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <article className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10" data-testid="section-post-content">
              {post.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={sectionVariants}
                >
                  <h2
                    className="text-2xl font-semibold mb-4"
                    data-testid={`text-section-heading-${index}`}
                  >
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.content.split("\n\n").map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-muted-foreground leading-relaxed"
                        data-testid={`text-paragraph-${index}-${pIndex}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {relatedService && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                className="mt-16"
                data-testid="section-related-cta"
              >
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 flex-wrap">
                      <div
                        className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #2f44a0, #4a62c4)",
                        }}
                      >
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-lg font-semibold mb-1"
                          data-testid="text-related-heading"
                        >
                          Need help with {relatedService.title}?
                        </h3>
                        <p
                          className="text-sm text-muted-foreground mb-3"
                          data-testid="text-related-description"
                        >
                          Get expert assistance from verified legal
                          professionals. Starting at just {"\u20B9"}
                          {relatedService.price}.
                        </p>
                        <ul className="flex items-center gap-4 text-xs text-muted-foreground mb-4 flex-wrap">
                          <li className="flex items-center gap-1">
                            <Check
                              className="w-3 h-3"
                              style={{ color: "#2d9968" }}
                            />
                            Money-back guarantee
                          </li>
                          <li className="flex items-center gap-1">
                            <Check
                              className="w-3 h-3"
                              style={{ color: "#2d9968" }}
                            />
                            Verified experts
                          </li>
                        </ul>
                        <div className="flex items-center gap-3 flex-wrap">
                          <a
                            href={getServiceWhatsAppLink(
                              relatedService.title,
                              relatedService.price
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="link-related-whatsapp"
                          >
                            <Button data-testid="button-related-whatsapp">
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Get Expert Assistance
                            </Button>
                          </a>
                          <Link href={`/services/${relatedService.slug}`}>
                            <Button variant="outline">Learn More</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            <div className="mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                data-testid="link-back-to-blog"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </div>
        </article>
      </main>

      <FooterSection />
    </div>
  );
}
