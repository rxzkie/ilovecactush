"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { catalog, formatPrice } from "@/lib/products";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Catalog() {
  return (
    <section id="catalogo" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            Catálogo
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-forest sm:text-5xl">
            Catálogo para comprar suculentas y cactus
          </h2>
          <p className="mt-5 text-lg text-forest/70">
            Precios en pesos chilenos. Elige tu planta y compra por WhatsApp con
            envío a todo Chile.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-sand/80 bg-cream transition-all hover:border-sage/40 hover:shadow-xl hover:shadow-sage/10"
            >
              <div className="relative aspect-square overflow-hidden bg-sand/30">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-forest">
                  {product.name}
                </h3>
                <p className="mt-2 text-2xl font-bold text-terracotta">
                  {formatPrice(product.price)}
                </p>
                <a
                  href={whatsappLink(
                    `Hola! Me interesa ${product.name} (${formatPrice(product.price)}). ¿Está disponible?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1fb855] hover:shadow-lg hover:shadow-[#25D366]/30"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
