"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, MapPin } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Naturaleza viva",
    description:
      "Cada planta elegida a mano para tu hogar u oficina.",
  },
  {
    icon: Heart,
    title: "Hecho con amor",
    description:
      "Emprendimiento familiar desde Rancagua con dedicación en cada detalle.",
  },
  {
    icon: MapPin,
    title: "Envío nacional",
    description:
      "Despachamos cactus y suculentas a todas las regiones de Chile.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="relative py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-sage sm:text-sm">
            Nosotros
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-forest sm:mt-3 sm:text-5xl">
            Decorar con vida es nuestro arte
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-forest/70 sm:mt-5 sm:text-lg">
            Cactus y suculentas únicas con belleza natural y bajo
            mantenimiento.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 sm:mt-16 sm:grid sm:grid-cols-3 sm:gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-sand/80 bg-cream p-5 sm:block sm:rounded-3xl sm:p-8"
            >
              <div className="inline-flex shrink-0 rounded-xl bg-sage/15 p-3 text-sage sm:mb-5 sm:rounded-2xl">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-forest sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-forest/65 sm:mt-3 sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
