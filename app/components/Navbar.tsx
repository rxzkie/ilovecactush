"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { InstagramIcon } from "./InstagramIcon";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#preguntas", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-sand/40 bg-cream/90 backdrop-blur-xl"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
          <Logo className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
          <span className="truncate font-[family-name:var(--font-cormorant)] text-lg font-semibold tracking-tight text-forest sm:text-2xl">
            ilovecactus
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
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
            className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream"
          >
            <InstagramIcon className="h-4 w-4" />
            Instagram
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="touch-target flex items-center justify-center rounded-xl text-forest active:bg-sand/50 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[calc(4.5rem+env(safe-area-inset-top))] z-40 bg-forest/20 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="border-b border-sand/60 bg-cream px-4 py-3 shadow-lg"
              aria-label="Menú móvil"
            >
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-14 items-center rounded-2xl px-4 text-lg font-medium text-forest active:bg-sand/60"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://www.instagram.com/ilovecactusch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-forest text-base font-semibold text-cream active:scale-[0.98]"
                >
                  <InstagramIcon className="h-5 w-5" />
                  Seguir en Instagram
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
