import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { LEGAL_PAGES_CONFIG } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/motion";

const PAGE_TITLES: Record<keyof typeof LEGAL_PAGES_CONFIG, string> = {
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  refund: "Refund Policy",
};

interface LegalPageLayoutProps {
  pageKey: keyof typeof LEGAL_PAGES_CONFIG;
}

export function LegalPageLayout({ pageKey }: LegalPageLayoutProps) {
  const config = LEGAL_PAGES_CONFIG[pageKey];
  const title = PAGE_TITLES[pageKey];

  useEffect(() => {
    document.title = config.metaTitle;
  }, [config]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-20">
        <div
          className="relative py-16 md:py-24 bg-muted/50"
          data-testid={`section-${pageKey}-hero`}
        >
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-3"
                data-testid={`text-${pageKey}-heading`}
              >
                {title}
              </h1>
              <Badge
                variant="secondary"
                className="text-xs"
                data-testid={`text-${pageKey}-updated`}
              >
                Last Updated: {config.lastUpdated}
              </Badge>
            </motion.div>
          </div>
        </div>

        <section
          className="py-12 md:py-16"
          data-testid={`section-${pageKey}-content`}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {config.sections.map((section, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
              >
                <h2
                  className="text-2xl font-semibold mb-4"
                  data-testid={`text-${pageKey}-section-heading-${index}`}
                >
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.content.split("\n\n").map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-muted-foreground leading-relaxed"
                      data-testid={`text-${pageKey}-paragraph-${index}-${pIndex}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
