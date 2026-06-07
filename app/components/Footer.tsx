import { Logo } from "./Logo";
import { InstagramIcon } from "./InstagramIcon";

export function Footer() {
  return (
    <footer
      aria-label="Pie de página"
      className="border-t border-sand/60 bg-cream py-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo className="h-14 w-14" />
          <div>
            <p className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-forest">
              ilovecactusch
            </p>
            <p className="text-sm text-forest/50">
              el arte de decorar con vida ..
            </p>
          </div>
        </div>

        <a
          href="https://www.instagram.com/ilovecactusch/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-forest/70 transition-colors hover:text-forest"
        >
          <InstagramIcon className="h-4 w-4" />
          @ilovecactusch
        </a>

        <p className="text-sm text-forest/40">
          © 2026 ilovecactus · Rancagua, Chile
        </p>
      </div>
    </footer>
  );
}
