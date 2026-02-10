import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { BLOG_POSTS_CONFIG } from "@/lib/site-data";
import { SERVICES_CONFIG } from "@shared/site-config";
import { getServiceWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Clock, Calendar, ChevronRight, ArrowLeft, MessageCircle } from "lucide-react";
import NotFound from "@/pages/not-found";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

      <article className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <nav
              className="flex items-center gap-1 text-sm text-muted-foreground mb-8 flex-wrap"
              aria-label="Breadcrumb"
              data-testid="nav-breadcrumb"
            >
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
                data-testid="link-breadcrumb-home"
              >
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                href="/blog"
                className="hover:text-foreground transition-colors"
                data-testid="link-breadcrumb-blog"
              >
                Blog
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span
                className="text-foreground truncate max-w-xs"
                data-testid="text-breadcrumb-current"
              >
                {post.title}
              </span>
            </nav>

            <div className="mb-6">
              <Badge
                variant="secondary"
                className="mb-4"
                data-testid="badge-post-category"
              >
                {post.category}
              </Badge>
              <h1
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
                data-testid="text-blog-post-heading"
              >
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
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

          <div className="mt-10 space-y-10" data-testid="section-post-content">
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
              className="mt-16 p-6 rounded-md border border-border bg-card"
              data-testid="section-related-cta"
            >
              <h3
                className="text-lg font-semibold mb-2"
                data-testid="text-related-heading"
              >
                Need help with {relatedService.title}?
              </h3>
              <p
                className="text-muted-foreground text-sm mb-4"
                data-testid="text-related-description"
              >
                Get expert assistance from verified legal professionals.
                Starting at just ₹{relatedService.price}.
              </p>
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

      <FooterSection />
    </div>
  );
}
