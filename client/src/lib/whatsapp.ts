const WHATSAPP_NUMBER = "917302617785";

export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export function getServiceWhatsAppLink(serviceName: string): string {
  return getWhatsAppLink(`Hi, I'm interested in ${serviceName} service. Please share more details.`);
}

export function getPricingWhatsAppLink(planName: string): string {
  return getWhatsAppLink(`Hi, I'd like to know more about the ${planName} plan. Please share the details.`);
}
