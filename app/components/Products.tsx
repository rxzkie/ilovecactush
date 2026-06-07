"use client";

import { motion } from "framer-motion";
import { Flower2, Package, Sun } from "lucide-react";

const products = [
  {
    icon: Sun,
    emoji: "🌵",
    title: "Cactus",
    description:
      "Variedades resistentes y escultóricas, perfectas para interiores luminosos y exteriores protegidos.",
    tag: "Bajo mantenimiento",
  },
  {
    icon: Flower2,
    emoji: "🪴",
    title: "Suculentas",
    description:
      "Formas delicadas y colores suaves ideales para terrarios, repisas y rincones minimalistas.",
    tag: "Decoración versátil",
  },
  {
    icon: Package,
    emoji: "📦",
    title: "Arreglos & combos",
    description:
      "Sets curados para regalar o renovar tu espacio. Empaque seguro para envío a todo Chile.",
    tag: "Envío nacional",
  },
];

export function Products() {
  return (
    <section id="productos" className="relative bg-forest py-24 text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-sage blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-terracotta blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            Productos
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-semibold sm:text-5xl">
            Cactus & suculentas para cada rincón
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/70">
            Desde piezas statement hasta pequeños detalles verdes, tenemos la
            planta perfecta para tu estilo de vida.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-cream/10 bg-cream/5 p-8 backdrop-blur transition-all hover:border-sage/40 hover:bg-cream/10"
            >
              <span className="text-4xl">{product.emoji}</span>
              <div className="mt-4 inline-flex rounded-full bg-sage/20 px-3 py-1 text-xs font-semibold text-sage">
                {product.tag}
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-semibold">
                {product.title}
              </h3>
              <p className="mt-3 leading-relaxed text-cream/70">
                {product.description}
              </p>
              <product.icon className="absolute -bottom-4 -right-4 h-24 w-24 text-cream/5 transition-transform group-hover:scale-110" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
