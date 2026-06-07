"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { InstagramIcon } from "./InstagramIcon";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#galeria", label: "Galería" },
  { href: "#preguntas", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sand/40 bg-cream/80 backdrop-blur-xl">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:py-4"
      >
        <a href="#inicio" className="flex items-center gap-3">
          <Logo className="h-14 w-14 sm:h-16 sm:w-16" />
          <span className="font-[family-name:var(--font-cormorant)] text-xl font-semibold tracking-tight text-forest sm:text-2xl">
            ilovecactus
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-forest/70 transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/ilovecactusch/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-forest/90 hover:shadow-lg hover:shadow-forest/20"
          >
            <InstagramIcon className="h-4 w-4" />
            Instagram
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-forest md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-sand/60 bg-cream/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium text-forest/80 transition-colors hover:bg-sand/50 hover:text-forest"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.instagram.com/ilovecactusch/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
