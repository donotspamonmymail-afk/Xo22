import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, UserCheck, Receipt, Award, Building2, ShieldCheck, FileText } from "lucide-react";
import { getServiceWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

const services = [
  {
    title: "Name Change",
    description: "Legal name change through gazette notification, affidavit drafting, and newspaper publication assistance.",
    price: "1,499",
    icon: UserCheck,
  },
  {
    title: "GST Registration",
    description: "Complete GST registration with document preparation, application filing, and GSTIN procurement.",
    price: "999",
    icon: Receipt,
  },
  {
    title: "Trademark Filing",
    description: "Protect your brand with trademark search, application filing, and registration support.",
    price: "2,499",
    icon: Award,
  },
  {
    title: "Company Registration",
    description: "End-to-end Pvt Ltd, LLP, or OPC registration with MCA filing and compliance setup.",
    price: "4,999",
    icon: Building2,
  },
  {
    title: "ISO Certification",
    description: "ISO 9001, 14001, 27001 certification guidance with documentation and audit preparation.",
    price: "5,999",
    icon: ShieldCheck,
  },
  {
    title: "ITR Filing",
    description: "Hassle-free income tax return filing for individuals, HUFs, and businesses with expert review.",
    price: "499",
    icon: FileText,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-services-heading">
            Legal Solutions, Simplified
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            From individuals to growing businesses, we provide end-to-end legal assistance
            with transparent pricing and fast turnaround.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full hover-elevate" data-testid={`card-service-${service.title.toLowerCase().replace(/\s/g, "-")}`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between gap-3 flex-wrap pt-2 border-t border-border">
                    <span className="text-sm font-medium">
                      Starting from <span className="text-primary font-bold">{"\u20B9"}{service.price}</span>
                    </span>
                    <a
                      href={getServiceWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" data-testid={`button-service-whatsapp-${service.title.toLowerCase().replace(/\s/g, "-")}`}>
                        <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                        Get on WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
