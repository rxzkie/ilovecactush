"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/products/product-1.png", alt: "Cactus San Pedro crestado" },
  { src: "/products/product-4.png", alt: "Mammillaria con flores amarillas" },
  { src: "/products/product-7.png", alt: "Cactus con flores naranjas" },
  { src: "/products/product-6.png", alt: "Cactus epifilo flor naranja" },
  { src: "/products/product-9.png", alt: "Sempervivum telaraña" },
  { src: "/products/product-8.png", alt: "Suculenta medusa" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-sage sm:text-sm">
            Galería
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-forest sm:mt-3 sm:text-5xl">
            Inspiración verde
          </h2>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-3">
          {images.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 aspect-[16/10] sm:aspect-[2/1]" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
