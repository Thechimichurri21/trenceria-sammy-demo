import { MessageCircle, Mail } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Calle+de+Castilla+29+28039+Madrid";
const WHATSAPP_URL = "https://wa.me/34631068828";
const EMAIL = "sammy-_rd@hotmail.es";

export default function Studio() {
  return (
    <section className="bg-main px-4 py-24" aria-labelledby="studio-heading">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        {/* Izquierda: Ubicación */}
        <div>
          <h2
            id="studio-heading"
            className="font-syne text-4xl text-chrome"
          >
            EL ESTUDIO
          </h2>
          <p className="mt-4 font-sans text-chrome-light/90">
            Calle de Castilla, 29, 28039, Madrid
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block border border-white/20 px-6 py-3 text-xs uppercase tracking-widest text-chrome-light transition-colors hover:border-chrome-light/50 hover:text-white"
          >
            CÓMO LLEGAR
          </a>
        </div>

        {/* Derecha: Horarios + Contacto */}
        <div>
          <h3 className="font-syne text-xl text-chrome-light/90">
            Horarios
          </h3>
          <ul className="mt-3 space-y-1 font-sans text-sm text-chrome-dark">
            <li>LUNES – VIERNES: 10:00 – 18:30</li>
            <li>SÁBADO – DOMINGO: CERRADO</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs uppercase tracking-widest text-chrome-light transition-colors hover:border-chrome-light/50 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs uppercase tracking-widest text-chrome-light transition-colors hover:border-chrome-light/50 hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
