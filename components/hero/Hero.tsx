"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-main">
      {/* Video Background */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
        poster="/images/hero-poster.jpg"
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay: suaviza el corte inferior */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-main"
        aria-hidden
      />

      {/* Contenido */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="font-syne text-5xl font-bold uppercase text-chrome md:text-8xl lg:text-9xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          LA ARTISTA DE LAS ESTRELLAS
        </motion.h1>

        <motion.h2
          className="mt-4 font-sans text-xs font-medium uppercase tracking-[0.5em] text-chrome-light/80 md:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          SAMMY • MADRID • SERVICIOS DE ÉLITE
        </motion.h2>

        <motion.button
          type="button"
          className="mt-12 border border-white/20 px-8 py-3 text-xs uppercase tracking-widest backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-black"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: [1, 1.02, 1],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.8, ease: "easeOut" },
            scale: {
              delay: 1.4,
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5,
            },
          }}
        >
          SOLICITAR CITA
        </motion.button>
      </div>
    </section>
  );
}
