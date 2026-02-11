import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { BLOG_POSTS_CONFIG } from "@/lib/site-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export default function BlogIndex() {
  useEffect(() => {
    document.title = "Legal Guides & Insights | LegalApex";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-24 md:py-32" data-testid="section-blog-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-4"
              data-testid="text-blog-heading"
            >
              Legal Insights & Guides
            </h1>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="text-blog-description"
            >
              Helpful guides and expert insights on Indian legal services — from
              name change procedures to company registration, GST filing, and
              more.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32" data-testid="section-blog-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_POSTS_CONFIG.map((post, index) => (
              <motion.div
                key={post.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="hover-elevate h-full"
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
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
