import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { HERO } from "@/lib/site-data";

export function WhatsAppFab() {
  const handleClick = () => {
    window.open(
      getWhatsAppLink(HERO.defaultWhatsAppMessage),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        onClick={handleClick}
        className="rounded-full shadow-lg"
        data-testid="button-whatsapp-fab"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </Button>
    </motion.div>
  );
}
