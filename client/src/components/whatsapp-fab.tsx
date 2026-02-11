import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { HERO } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 hidden sm:block"
    >
      <a
        href={getWhatsAppLink(HERO.defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-whatsapp-fab"
      >
        <Button
          size="icon"
          data-testid="button-whatsapp-fab"
          aria-label="Chat on WhatsApp"
          className="rounded-full w-12 h-12 shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
        </Button>
      </a>
    </motion.div>
  );
}
