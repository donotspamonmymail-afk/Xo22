import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Scale, MessageCircle, Phone, Mail } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { SITE, SERVICES } from "@/lib/site-data";

const COMPANY_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Refund Policy", href: "/refund-policy" },
] as const;

export function FooterSection() {
  const [location] = useLocation();

  const handleHashClick = (href: string) => {
    if (location === "/") {
      const el = document.querySelector(href);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <footer className="border-t border-border bg-card" data-testid="section-footer" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-home" aria-label={`${SITE.name} - Go to homepage`}>
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary">
                <Scale className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-[-0.02em]">
                Legal<span className="text-primary">Apex</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs">
              {SITE.tagline} {SITE.description.split(".")[0]}.
            </p>
            <div className="flex flex-col gap-1">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-whatsapp"
              >
                <Button variant="ghost" size="sm" className="justify-start text-muted-foreground">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat with Us
                </Button>
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} data-testid="link-footer-phone">
                <Button variant="ghost" size="sm" className="justify-start text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  {SITE.phone}
                </Button>
              </a>
              <a href={`mailto:${SITE.email}`} data-testid="link-footer-email">
                <Button variant="ghost" size="sm" className="justify-start text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  {SITE.email}
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-1">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="justify-start text-muted-foreground font-normal"
                      data-testid={`link-footer-service-${service.slug}`}
                    >
                      {service.title}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-1">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="justify-start text-muted-foreground font-normal"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                      >
                        {link.label}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="justify-start text-muted-foreground font-normal"
                      onClick={() => handleHashClick(link.href)}
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {link.label}
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-1">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="justify-start text-muted-foreground font-normal"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {link.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto" data-testid="text-disclaimer">
            {SITE.disclaimer}
          </p>
          <p className="text-xs text-muted-foreground text-center mt-3" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
