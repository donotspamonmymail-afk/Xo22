import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer-section";
import { LEGAL_PAGES_CONFIG } from "@/lib/site-data";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

      <section className="py-20 md:py-28" data-testid={`section-${pageKey}-hero`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
              data-testid={`text-${pageKey}-heading`}
            >
              {title}
            </h1>
            <p
              className="text-sm text-muted-foreground"
              data-testid={`text-${pageKey}-updated`}
            >
              Last Updated: {config.lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-28" data-testid={`section-${pageKey}-content`}>
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

      <FooterSection />
    </div>
  );
}
