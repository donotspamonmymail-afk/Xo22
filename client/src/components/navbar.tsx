import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, Menu, X, Scale, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { SITE, NAV_LINKS } from "@/lib/site-data";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
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
    }
  };

  return (
    <nav
      data-testid="navbar"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
            data-testid="link-home"
            aria-label={`${SITE.name} - Go to homepage`}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary">
              <Scale className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Legal<span className="text-primary">Apex</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground font-medium"
                    data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={link.href}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground font-medium"
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.label}
                </Button>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
              data-testid="link-nav-whatsapp"
            >
              <Button data-testid="button-nav-whatsapp">
                <MessageCircle className="w-4 h-4 mr-2" />
                Free Consultation
              </Button>
            </a>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="button-mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl" role="menu">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-muted-foreground font-medium"
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    role="menuitem"
                  >
                    {link.label}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground font-medium"
                  onClick={() => handleNavClick(link.href)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  role="menuitem"
                >
                  {link.label}
                </Button>
              )
            )}
            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-testid="link-mobile-whatsapp"
              >
                <Button className="w-full" data-testid="button-mobile-whatsapp">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
