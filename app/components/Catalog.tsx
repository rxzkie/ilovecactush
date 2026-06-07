"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { catalog, formatPrice } from "@/lib/products";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Catalog() {
  return (
    <section id="catalogo" className="py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-sage sm:text-sm">
            Catálogo
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-forest sm:mt-3 sm:text-5xl">
            Compra suculentas y cactus
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-forest/70 sm:mt-5 sm:max-w-2xl sm:text-lg">
            Toca WhatsApp en cualquier planta para comprar. Precios en pesos
            chilenos con envío a todo Chile.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {catalog.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="flex overflow-hidden rounded-2xl border border-sand/80 bg-cream sm:flex-col sm:rounded-3xl"
            >
              <div className="relative h-32 w-32 shrink-0 bg-sand/30 sm:h-auto sm:w-full sm:aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 128px, 33vw"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
                <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold leading-tight text-forest sm:text-2xl">
                  {product.name}
                </h3>
                <p className="mt-1 text-xl font-bold text-terracotta sm:mt-2 sm:text-2xl">
                  {formatPrice(product.price)}
                </p>
                <a
                  href={whatsappLink(
                    `Hola! Me interesa ${product.name} (${formatPrice(product.price)}). ¿Está disponible?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex h-9 items-center justify-center gap-1.5 self-start rounded-full bg-[#3dba6a]/90 px-4 text-xs font-medium text-white shadow-sm active:scale-[0.98] sm:mt-5 sm:h-12 sm:self-stretch sm:px-5 sm:text-sm sm:font-semibold"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 sm:h-5 sm:w-5" />
                  <span className="sm:hidden">WhatsApp</span>
                  <span className="hidden sm:inline">Comprar por WhatsApp</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
