"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "/products/product-1.png",
    alt: "Cactus San Pedro crestado",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/products/product-4.png",
    alt: "Mammillaria con flores amarillas",
    span: "",
  },
  {
    src: "/products/product-7.png",
    alt: "Cactus con flores naranjas",
    span: "",
  },
  {
    src: "/products/product-6.png",
    alt: "Cactus epifilo flor naranja",
    span: "col-span-2",
  },
  {
    src: "/products/product-9.png",
    alt: "Sempervivum telaraña",
    span: "",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            Galería
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-forest sm:text-5xl">
            Inspiración verde
          </h2>
          <p className="mt-5 text-lg text-forest/70">
            Cada rincón puede florecer. Mira cómo nuestras plantas dan vida a
            los espacios.
          </p>
        </motion.div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] lg:grid-cols-4">
          {images.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-forest/0 transition-colors group-hover:bg-forest/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
