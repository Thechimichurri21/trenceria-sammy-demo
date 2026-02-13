"use client";

import { motion } from "framer-motion";

const BOOKSY_URL = "https://booksy.com/es-es/37470_trenceria-sammy_peluqueria_53009_madrid";

export default function Booking() {
  return (
    <section className="relative overflow-hidden bg-main py-32 text-center" aria-labelledby="booking-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_50%)]" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4">
        <motion.h2
          id="booking-heading"
          className="font-syne text-4xl font-bold text-chrome md:text-6xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          ¿LISTO PARA ELEVAR TU ESTILO?
        </motion.h2>
        <p className="mt-6 font-sans text-chrome-dark">
          Plazas limitadas. Se recomienda reserva anticipada.
        </p>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block bg-white px-12 py-5 font-syne text-xl font-bold uppercase tracking-wider text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-transform duration-300 hover:scale-105"
        >
          RESERVAR EN BOOKSY
        </a>
      </div>
    </section>
  );
}