"use client";

import { motion } from "framer-motion";
import { faqs } from "@/lib/faq";

export function Faq() {
  return (
    <section id="preguntas" className="bg-cream py-14 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-sage sm:text-sm">
            Preguntas frecuentes
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-forest sm:mt-3 sm:text-5xl">
            Comprar plantas en Chile
          </h2>
        </motion.div>

        <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group rounded-2xl border border-sand/80 bg-background open:border-sage/40"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center px-4 py-4 text-base font-semibold text-forest marker:content-none sm:px-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex flex-1 items-center justify-between gap-3">
                  <span className="text-left leading-snug">{faq.question}</span>
                  <span className="shrink-0 text-2xl text-sage transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-sand/60 px-4 pb-4 pt-3 text-base leading-relaxed text-forest/70 sm:px-6 sm:pb-5 sm:pt-4">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
