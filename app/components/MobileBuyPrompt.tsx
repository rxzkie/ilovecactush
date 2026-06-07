"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { instagramUrl } from "@/lib/contact";
import { InstagramIcon } from "./InstagramIcon";

const STORAGE_KEY = "ilovecactus-buy-prompt";

export function MobileBuyPrompt() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Oferta de compra"
        >
          <div
            className="absolute inset-0 bg-forest/60 backdrop-blur-sm"
            onClick={close}
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="absolute inset-x-0 bottom-0 rounded-t-[1.75rem] bg-cream shadow-2xl"
            style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-sand/60 text-forest/60"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="px-5 pt-6">
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-terracotta/15 px-3 py-1 text-xs font-semibold text-terracotta">
                <Sparkles className="h-3.5 w-3.5" />
                Oferta de bienvenida
              </div>

              <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src="/products/product-2.png"
                  alt="Suculentas ilovecactus"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-lg font-semibold text-cream">
                  Compra tu planta hoy · Envío a todo Chile
                </p>
              </div>

              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-forest">
                ¿Lista para llevarte una suculenta?
              </h2>
              <p className="mt-1 text-sm text-forest/65">
                Escríbenos por Instagram y te respondemos con precios y stock
                disponible.
              </p>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="mt-5 flex h-14 w-full animate-pulse items-center justify-center gap-2 rounded-2xl bg-forest text-base font-bold text-cream shadow-lg shadow-forest/40 active:scale-[0.98]"
              >
                <InstagramIcon className="h-5 w-5" />
                Comprar por Instagram
              </a>

              <a
                href="#catalogo"
                onClick={close}
                className="mt-3 flex h-12 w-full items-center justify-center rounded-2xl border-2 border-forest/20 bg-cream text-sm font-semibold text-forest active:scale-[0.98]"
              >
                Ver catálogo completo
              </a>

              <button
                type="button"
                onClick={close}
                className="mt-4 w-full py-2 text-center text-xs text-forest/45"
              >
                Seguir navegando
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
