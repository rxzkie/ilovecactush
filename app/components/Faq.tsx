"use client";

import { motion } from "framer-motion";
import { faqs } from "@/lib/faq";

export function Faq() {
  return (
    <section id="preguntas" className="bg-cream py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-forest sm:text-5xl">
            Comprar suculentas y cactus en Chile
          </h2>
          <p className="mt-5 text-lg text-forest/70">
            Resolvemos las dudas más comunes sobre cómo comprar plantas online
            con envío desde Rancagua.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-sand/80 bg-background open:border-sage/40 open:shadow-md open:shadow-sage/10"
            >
              <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-forest marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-sage transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-sand/60 px-6 pb-5 pt-4 leading-relaxed text-forest/70">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
