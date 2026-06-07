const PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "";

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  if (PHONE) return `https://wa.me/${PHONE}?text=${text}`;
  return `https://wa.me/?text=${text}`;
}
