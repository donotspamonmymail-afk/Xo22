import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export function WhatsAppFab() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={getWhatsAppLink("Hi, I need legal assistance. Please help me get started.")}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-whatsapp-fab"
      >
        <Button
          size="icon"
          className="rounded-full w-14 h-14 bg-primary shadow-lg"
          data-testid="button-whatsapp-fab"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </a>
    </motion.div>
  );
}
