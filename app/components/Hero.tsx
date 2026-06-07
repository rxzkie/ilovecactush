"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-sage/20 blur-3xl" />
        <div className="absolute -left-20 bottom-32 h-80 w-80 rounded-full bg-terracotta/15 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-blush/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-4 py-1.5 text-sm font-medium text-forest"
          >
            <Sparkles className="h-4 w-4 text-sage" />
            Rancagua · Envíos a todo Chile
          </motion.div>

          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-[1.1] tracking-tight text-forest sm:text-5xl lg:text-6xl">
            Compra cactus y suculentas online en Chile
          </h1>

          <p className="mt-4 font-[family-name:var(--font-cormorant)] text-2xl text-sage sm:text-3xl">
            El arte de decorar con vida
          </p>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-forest/70">
            Tienda en Rancagua con venta de cactus y suculentas seleccionadas
            con amor. Envío a todo Chile para transformar tu hogar u oficina en
            un rincón verde.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.instagram.com/ilovecactusch/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 text-base font-semibold text-cream shadow-lg shadow-forest/20 transition-all hover:bg-forest/90 hover:shadow-xl"
            >
              Ver catálogo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border-2 border-forest/20 bg-cream/80 px-8 py-4 text-base font-semibold text-forest backdrop-blur transition-all hover:border-sage hover:bg-sage/10"
            >
              Escríbenos
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <Logo className="h-28 w-28 sm:h-36 sm:w-36" />
            <div className="text-left">
              <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-forest">
                @ilovecactusch
              </p>
              <p className="text-sm text-forest/60">cactus & suculentas 🌱❤️</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/15">
            <Image
              src="/products/product-2.png"
              alt="Comprar suculentas online en Chile - pack variado en macetas de terracota"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -left-6 rounded-2xl border border-sand/60 bg-cream/95 p-5 shadow-xl backdrop-blur"
          >
            <p className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-forest">
              100%
            </p>
            <p className="text-sm text-forest/60">plantas con cariño</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-4 top-8 rounded-2xl border border-sand/60 bg-cream/95 px-5 py-3 shadow-xl backdrop-blur"
          >
            <p className="text-sm font-semibold text-forest">📦 Envío nacional</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
