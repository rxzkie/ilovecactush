"use client";

import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import { instagramUrl } from "@/lib/contact";
import { InstagramIcon } from "./InstagramIcon";

export function CTA() {
  return (
    <section id="contacto" className="py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sage/30 via-cream to-blush/40 p-6 sm:rounded-[2.5rem] sm:p-16"
        >
          <div className="relative text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-forest/60 sm:text-sm">
              Contacto
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-forest sm:mt-3 sm:text-5xl">
              ¿Lista tu próxima planta?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-forest/70 sm:mt-5 sm:text-lg">
              Escríbenos por Instagram para consultar stock, precios y envío a
              tu comuna.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-forest/60">
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/80 px-4 py-2">
                <Truck className="h-4 w-4 text-sage" />
                Envío nacional
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/80 px-4 py-2">
                📍 Rancagua
              </span>
            </div>

            <div className="mt-8 flex flex-col items-center gap-2.5 sm:items-stretch sm:gap-3">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-forest px-5 text-sm font-medium text-cream shadow-sm active:scale-[0.98] sm:h-14 sm:w-full sm:text-base sm:font-semibold"
              >
                <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                Escribir por Instagram
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-forest/15 bg-cream/80 px-5 text-sm font-medium text-forest active:scale-[0.98] sm:h-14 sm:w-full sm:border-2 sm:text-base sm:font-semibold"
              >
                <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                @ilovecactusch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
