const BOOKSY_URL =
  "https://booksy.com/es-es/37470_trenceria-sammy_peluqueria_53009_madrid";
const INSTAGRAM_URL = "https://www.instagram.com/trenceriasammy/";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-main py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 md:flex-row md:items-end">
        <span className="order-2 text-chrome-dark md:order-1">
          SAMMY © 2026
        </span>
        <span className="order-1 text-center text-sm text-chrome-dark/80 md:order-2">
          MADRID • ESTRECHO
        </span>
        <nav
          className="order-3 flex gap-6 text-xs uppercase tracking-widest text-chrome-dark"
          aria-label="Redes sociales y reservas"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            INSTAGRAM
          </a>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            RESERVAS
          </a>
        </nav>
      </div>
    </footer>
  );
}
