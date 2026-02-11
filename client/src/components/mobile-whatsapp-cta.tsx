import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { HERO } from "@/lib/site-data";

export function MobileWhatsAppCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-all duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={getWhatsAppLink(HERO.defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white shadow-lg"
        style={{ backgroundColor: "#25d366" }}
        data-testid="link-mobile-sticky-whatsapp"
        aria-label="Get Free Consultation on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        Get Free Consultation
      </a>
    </div>
  );
}
