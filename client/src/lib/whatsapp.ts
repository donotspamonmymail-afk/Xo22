import { SITE_CONFIG } from "@shared/site-config";

export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export function getServiceWhatsAppLink(serviceName: string, price?: string): string {
  const priceText = price ? ` (starting from \u20B9${price})` : "";
  return getWhatsAppLink(
    `Hi, I'm interested in ${serviceName}${priceText}. Please share the next steps and requirements.`
  );
}

export function getPricingWhatsAppLink(planName: string, planPrice?: string): string {
  const priceText = planPrice ? ` (\u20B9${planPrice}+)` : "";
  return getWhatsAppLink(
    `Hi, I'd like to get started with the ${planName} plan${priceText}. Please share the details and next steps.`
  );
}
