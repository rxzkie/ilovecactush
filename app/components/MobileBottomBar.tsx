"use client";

import { ShoppingBag } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-sand/40 bg-cream/80 backdrop-blur-xl md:hidden">
      <div
        className="mx-auto flex max-w-sm items-center justify-center gap-2 px-4 pt-2"
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href="#catalogo"
          className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-forest/90 px-3 text-xs font-medium text-cream shadow-sm active:scale-[0.98]"
        >
          <ShoppingBag className="h-3.5 w-3.5 shrink-0 opacity-90" />
          Catálogo
        </a>
        <a
          href={whatsappLink(
            "Hola! Quiero comprar cactus o suculentas. ¿Me ayudas?"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#3dba6a]/90 px-3 text-xs font-medium text-white shadow-sm active:scale-[0.98]"
        >
          <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 opacity-90" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
