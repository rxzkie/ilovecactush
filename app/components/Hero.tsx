"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-[calc(4.5rem+env(safe-area-inset-top))] lg:min-h-screen lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-sage/20 blur-3xl" />
        <div className="absolute -left-20 bottom-32 h-80 w-80 rounded-full bg-terracotta/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative aspect-[4/5] max-h-[70vh] overflow-hidden rounded-3xl shadow-xl shadow-forest/15 sm:rounded-[2rem] lg:max-h-none">
            <Image
              src="/products/product-2.png"
              alt="Comprar suculentas online en Chile"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/75 via-forest/25 to-transparent lg:from-forest/50 lg:via-transparent" />

            <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center gap-2.5 p-3 pb-3.5 lg:bottom-4 lg:left-4 lg:right-4 lg:items-stretch lg:p-0">
              <a
                href="#catalogo"
                className="inline-flex items-center gap-1.5 rounded-full border border-cream/80 bg-cream/90 px-4 py-2 text-sm font-semibold text-forest shadow-md backdrop-blur-md ring-2 ring-cream/50 active:scale-[0.98] lg:hidden"
              >
                Ver catálogo →
              </a>
              <div className="flex justify-center gap-2 lg:hidden">
                <div className="rounded-full border border-cream/50 bg-cream/75 px-3 py-1.5 backdrop-blur-md">
                  <p className="text-[11px] font-medium text-forest/80">
                    100% con cariño
                  </p>
                </div>
                <div className="flex items-center rounded-full border border-cream/50 bg-cream/75 px-3 py-1.5 backdrop-blur-md">
                  <p className="text-[11px] font-medium text-forest/80">
                    📦 Envío Chile
                  </p>
                </div>
              </div>
              <div className="hidden w-full justify-between gap-2 lg:flex">
                <div className="rounded-2xl border border-sand/60 bg-cream/95 px-4 py-3 shadow-lg backdrop-blur">
                  <p className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-forest">
                    100%
                  </p>
                  <p className="text-xs text-forest/60">con cariño</p>
                </div>
                <div className="flex items-center rounded-2xl border border-sand/60 bg-cream/95 px-4 py-3 shadow-lg backdrop-blur">
                  <p className="text-sm font-semibold text-forest">📦 Envío Chile</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-4 py-2 text-sm font-medium text-forest">
            <Sparkles className="h-4 w-4 shrink-0 text-sage" />
            Rancagua · Envío nacional
          </div>

          <h1 className="font-[family-name:var(--font-cormorant)] text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-forest sm:text-5xl lg:text-6xl">
            Compra cactus y suculentas online
          </h1>

          <p className="mt-3 font-[family-name:var(--font-cormorant)] text-xl text-sage sm:text-3xl">
            El arte de decorar con vida
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-forest/70 sm:text-lg">
            Plantas seleccionadas en Rancagua con envío a todo Chile. Ideal
            para regalar o decorar tu hogar.
          </p>

          <div className="mt-8 hidden w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row lg:flex lg:max-w-lg">
            <a
              href="#catalogo"
              className="flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-forest px-6 text-base font-semibold text-cream shadow-lg shadow-forest/20 active:scale-[0.98] sm:rounded-full"
            >
              Ver catálogo
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={whatsappLink(
                "Hola! Quiero comprar plantas. ¿Me ayudas?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 text-base font-semibold text-white active:scale-[0.98] sm:rounded-full"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <a
            href="https://www.instagram.com/ilovecactusch/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-base font-medium text-forest/70 active:text-forest"
          >
            @ilovecactusch · cactus & suculentas 🌱
          </a>
        </motion.div>
      </div>
    </section>
  );
}
