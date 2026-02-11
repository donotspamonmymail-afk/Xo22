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
    <footer className="text-white" style={{ backgroundColor: "var(--footer-bg)" }} data-testid="section-footer" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="sm:hidden">
          <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-home" aria-label={`${SITE.name} - Go to homepage`}>
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-blue-500">
              <Scale className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-[-0.02em] text-white">
              Legal<span className="text-indigo-400">Apex</span>
            </span>
          </Link>
          <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--footer-text-dim)" }}>
            {SITE.tagline} {SITE.description.split(".")[0]}.
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-6">
            <div>
              <h4 className="text-xs font-semibold mb-2" style={{ color: "var(--footer-text)" }}>Services</h4>
              <ul className="space-y-1.5">
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-xs hover:text-white transition-colors" style={{ color: "var(--footer-text-dim)" }} data-testid={`link-footer-service-${service.slug}`}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold mb-2" style={{ color: "var(--footer-text)" }}>Company</h4>
              <ul className="space-y-1.5">
                {COMPANY_LINKS.filter(l => l.href.startsWith("/")).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs hover:text-white transition-colors" style={{ color: "var(--footer-text-dim)" }} data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-xs font-semibold mb-2 mt-4" style={{ color: "var(--footer-text)" }}>Legal</h4>
              <ul className="space-y-1.5">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs hover:text-white transition-colors" style={{ color: "var(--footer-text-dim)" }} data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--footer-border)" }}>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1.5" style={{ color: "var(--footer-text-dim)" }} data-testid="link-footer-mobile-whatsapp">
              <MessageCircle className="w-3.5 h-3.5" /> Chat
            </a>
            <span style={{ color: "var(--footer-border)" }}>|</span>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-xs flex items-center gap-1.5" style={{ color: "var(--footer-text-dim)" }} data-testid="link-footer-mobile-phone">
              <Phone className="w-3.5 h-3.5" /> Call
            </a>
            <span style={{ color: "var(--footer-border)" }}>|</span>
            <a href={`mailto:${SITE.email}`} className="text-xs flex items-center gap-1.5" style={{ color: "var(--footer-text-dim)" }} data-testid="link-footer-mobile-email">
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-home" aria-label={`${SITE.name} - Go to homepage`}>
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-blue-500">
                <Scale className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-[-0.02em] text-white">
                Legal<span className="text-indigo-400">Apex</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4 max-w-xs" style={{ color: "var(--footer-text-dim)" }}>
              {SITE.tagline} {SITE.description.split(".")[0]}.
            </p>
            <div className="flex flex-col gap-1">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" data-testid="link-footer-whatsapp">
                <Button variant="ghost" size="sm" className="justify-start font-normal no-default-hover-elevate hover:text-white" style={{ color: "var(--footer-text-dim)" }}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat with Us
                </Button>
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} data-testid="link-footer-phone">
                <Button variant="ghost" size="sm" className="justify-start font-normal no-default-hover-elevate hover:text-white" style={{ color: "var(--footer-text-dim)" }}>
                  <Phone className="w-4 h-4 mr-2" />
                  {SITE.phone}
                </Button>
              </a>
              <a href={`mailto:${SITE.email}`} data-testid="link-footer-email">
                <Button variant="ghost" size="sm" className="justify-start font-normal no-default-hover-elevate hover:text-white" style={{ color: "var(--footer-text-dim)" }}>
                  <Mail className="w-4 h-4 mr-2" />
                  {SITE.email}
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: "var(--footer-text)" }}>Services</h4>
            <ul className="space-y-1">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="ghost" size="sm" className="justify-start font-normal no-default-hover-elevate hover:text-white" style={{ color: "var(--footer-text-dim)" }} data-testid={`link-footer-service-${service.slug}`}>
                      {service.title}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: "var(--footer-text)" }}>Company</h4>
            <ul className="space-y-1">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href}>
                      <Button variant="ghost" size="sm" className="justify-start font-normal no-default-hover-elevate hover:text-white" style={{ color: "var(--footer-text-dim)" }} data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                        {link.label}
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="ghost" size="sm" className="justify-start font-normal no-default-hover-elevate hover:text-white" style={{ color: "var(--footer-text-dim)" }} onClick={() => handleHashClick(link.href)} data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                      {link.label}
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: "var(--footer-text)" }}>Legal</h4>
            <ul className="space-y-1">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <Button variant="ghost" size="sm" className="justify-start font-normal no-default-hover-elevate hover:text-white" style={{ color: "var(--footer-text-dim)" }} data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                      {link.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-10 pt-4 sm:pt-6" style={{ borderTop: "1px solid var(--footer-border)" }}>
          <p className="text-[10px] sm:text-xs leading-relaxed text-center max-w-3xl mx-auto" style={{ color: "var(--footer-text-dim)" }} data-testid="text-disclaimer">
            {SITE.disclaimer}
          </p>
          <p className="text-[10px] sm:text-xs text-center mt-2 sm:mt-3" style={{ color: "var(--footer-text-dim)" }} data-testid="text-copyright">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
