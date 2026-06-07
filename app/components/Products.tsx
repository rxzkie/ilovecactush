"use client";

import { motion } from "framer-motion";
import { Flower2, Package, Sun } from "lucide-react";

const products = [
  {
    icon: Sun,
    emoji: "🌵",
    title: "Cactus",
    description: "Resistentes y escultóricos para interiores luminosos.",
    tag: "Bajo mantenimiento",
  },
  {
    icon: Flower2,
    emoji: "🪴",
    title: "Suculentas",
    description: "Ideales para terrarios, repisas y rincones minimalistas.",
    tag: "Decoración versátil",
  },
  {
    icon: Package,
    emoji: "📦",
    title: "Arreglos & combos",
    description: "Sets para regalar con empaque seguro y envío nacional.",
    tag: "Envío Chile",
  },
];

export function Products() {
  return (
    <section id="productos" className="relative bg-forest py-14 text-cream sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-sage sm:text-sm">
            Productos
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl font-semibold sm:mt-3 sm:text-5xl">
            Cactus & suculentas
          </h2>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 sm:mt-16 sm:grid sm:grid-cols-3 sm:gap-6">
          {products.map((product, i) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-5 sm:block sm:rounded-3xl sm:p-8"
            >
              <span className="text-3xl sm:text-4xl">{product.emoji}</span>
              <div className="min-w-0 flex-1">
                <div className="inline-flex rounded-full bg-sage/20 px-3 py-1 text-xs font-semibold text-sage">
                  {product.tag}
                </div>
                <h3 className="mt-2 font-[family-name:var(--font-cormorant)] text-xl font-semibold sm:mt-4 sm:text-3xl">
                  {product.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-cream/70 sm:mt-3 sm:text-base">
                  {product.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
