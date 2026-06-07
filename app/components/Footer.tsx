import { Logo } from "./Logo";
import { InstagramIcon } from "./InstagramIcon";

export function Footer() {
  return (
    <footer
      aria-label="Pie de página"
      className="border-t border-sand/60 bg-cream py-10 sm:py-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <div className="flex items-center gap-3">
          <Logo className="h-12 w-12 sm:h-14 sm:w-14" />
          <div>
            <p className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-forest">
              ilovecactusch
            </p>
            <p className="text-sm text-forest/50">
              el arte de decorar con vida
            </p>
          </div>
        </div>

        <a
          href="https://www.instagram.com/ilovecactusch/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-2 text-base font-medium text-forest/70 active:text-forest"
        >
          <InstagramIcon className="h-5 w-5" />
          @ilovecactusch
        </a>

        <p className="text-sm text-forest/40">
          © 2026 · Rancagua, Chile
        </p>
      </div>
    </footer>
  );
}
