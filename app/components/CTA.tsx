"use client";

import { motion } from "framer-motion";
import { MessageCircle, Truck } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";

export function CTA() {
  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sage/30 via-cream to-blush/40 p-10 sm:p-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-sage/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-terracotta/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-forest/60">
              Contacto
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-forest sm:text-5xl">
              ¿Lista tu próxima planta?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-forest/70">
              Escríbenos por Instagram para consultar disponibilidad, precios y
              coordinar tu envío a cualquier parte de Chile.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-forest/60">
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/80 px-4 py-2">
                <Truck className="h-4 w-4 text-sage" />
                Envíos a todo Chile
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/80 px-4 py-2">
                📍 Rancagua
              </span>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://www.instagram.com/ilovecactusch/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-forest px-8 py-4 text-base font-semibold text-cream shadow-lg shadow-forest/20 transition-all hover:bg-forest/90 hover:shadow-xl"
              >
                <InstagramIcon className="h-5 w-5" />
                @ilovecactusch
              </a>
              <a
                href="https://www.instagram.com/ilovecactusch/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-forest/20 bg-cream/80 px-8 py-4 text-base font-semibold text-forest transition-all hover:border-sage hover:bg-sage/10"
              >
                <MessageCircle className="h-5 w-5" />
                Enviar mensaje
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
