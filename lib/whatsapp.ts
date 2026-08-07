export const WHATSAPP_NUMBER = "212662020419";

export function getWhatsAppUrl(product?: string) {
  const message = product
    ? `Bonjour PawBowl, je souhaite commander ${product}.`
    : "Bonjour PawBowl, je souhaite passer une commande.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(product?: string) {
  const popup = window.open(
    getWhatsAppUrl(product),
    "_blank",
    "noopener,noreferrer",
  );

  if (popup) {
    popup.opener = null;
  }
}
