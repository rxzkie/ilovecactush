"use client";

import { ShoppingBag } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="border-t border-terracotta/20 bg-terracotta/10 px-4 py-1.5 text-center backdrop-blur-md">
        <p className="text-[11px] font-semibold tracking-wide text-terracotta">
          🔥 Compra hoy · Respuesta inmediata por WhatsApp
        </p>
      </div>
      <div className="border-t border-sand/40 bg-cream/95 backdrop-blur-xl">
        <div
          className="mx-auto flex max-w-sm items-center gap-2 px-4 py-2"
          style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
        >
          <a
            href="#catalogo"
            className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-forest/20 bg-forest/10 px-3 text-xs font-semibold text-forest active:scale-[0.98]"
          >
            <ShoppingBag className="h-4 w-4 shrink-0" />
            Catálogo
          </a>
          <a
            href={whatsappLink(
              "Hola! Quiero comprar cactus o suculentas ahora. ¿Me ayudas?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex h-11 flex-[1.2] items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 text-xs font-bold text-white shadow-md shadow-[#25D366]/30 active:scale-[0.98]"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30" />
            <WhatsAppIcon className="relative h-4 w-4 shrink-0" />
            <span className="relative">Comprar ya</span>
          </a>
        </div>
      </div>
    </div>
  );
}
