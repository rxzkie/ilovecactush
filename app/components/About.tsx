"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, MapPin } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Naturaleza viva",
    description:
      "Cada planta es elegida a mano para llevar frescura y serenidad a tu hogar u oficina.",
  },
  {
    icon: Heart,
    title: "Hecho con amor",
    description:
      "Un emprendimiento familiar desde Rancagua que cuida cada detalle con dedicación.",
  },
  {
    icon: MapPin,
    title: "Desde el corazón de Chile",
    description:
      "Ubicados en Rancagua, con envíos cuidadosos a todas las regiones del país.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            Nosotros
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-forest sm:text-5xl">
            Decorar con vida es nuestro arte
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest/70">
            En ilovecactus creemos que las plantas transforman espacios y
            emociones. Ofrecemos cactus y suculentas únicas para quienes buscan
            belleza natural, bajo mantenimiento y mucho estilo.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl border border-sand/80 bg-cream p-8 transition-all hover:border-sage/40 hover:shadow-lg hover:shadow-sage/10"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-sage/15 p-3 text-sage transition-colors group-hover:bg-sage/25">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-forest">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-forest/65">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
