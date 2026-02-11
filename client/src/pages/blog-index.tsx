import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { BLOG_POSTS_CONFIG } from "@/lib/site-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { sectionVariants, staggerContainer, fadeUpItem } from "@/lib/motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export default function BlogIndex() {
  useEffect(() => {
    document.title = "Legal Guides & Insights | LegalApex";
  }, []);

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
                `radial-gradient(ellipse 50% 50% at 50% 30%, var(--hero-glow-primary), transparent 70%)`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <Badge
                className="mb-5 px-3 py-1 text-xs"
                style={{
                  backgroundColor: "var(--hero-badge-bg)",
                  borderColor: "var(--hero-badge-border)",
                  color: "var(--hero-badge-text)",
                }}
              >
                LegalApex Blog
              </Badge>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-4 text-white"
                data-testid="text-blog-heading"
              >
                Legal Insights & Guides
              </h1>
              <p
                className="text-base sm:text-lg max-w-2xl mx-auto"
                style={{ color: "var(--hero-text-muted)" }}
                data-testid="text-blog-description"
              >
                Helpful guides and expert insights on Indian legal services —
                from name change procedures to company registration, GST filing,
                and more.
              </p>
            </motion.div>
          </div>
        </div>

        <section className="py-16 md:py-20" data-testid="section-blog-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {BLOG_POSTS_CONFIG.map((post) => (
                <motion.div key={post.slug} variants={fadeUpItem}>
                  <Card
                    className="hover-elevate h-full overflow-visible"
                    data-testid={`card-blog-${post.slug}`}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 flex-wrap mb-3">
                        <Badge
                          variant="secondary"
                          data-testid={`badge-category-${post.slug}`}
                        >
                          {post.category}
                        </Badge>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <h2
                          className="text-xl font-semibold mb-2 leading-snug"
                          data-testid={`text-title-${post.slug}`}
                        >
                          {post.title}
                        </h2>
                      </Link>

                      <p
                        className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1"
                        data-testid={`text-excerpt-${post.slug}`}
                      >
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between gap-4 flex-wrap mt-auto">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span
                            className="flex items-center gap-1"
                            data-testid={`text-readtime-${post.slug}`}
                          >
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                          <span
                            className="flex items-center gap-1"
                            data-testid={`text-date-${post.slug}`}
                          >
                            <Calendar className="w-3 h-3" />
                            {new Date(post.publishDate).toLocaleDateString(
                              "en-IN",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-sm font-medium text-primary flex items-center gap-1"
                          data-testid={`link-read-more-${post.slug}`}
                        >
                          Read More
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
