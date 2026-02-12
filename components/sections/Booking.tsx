"use client";

const BOOKSY_URL = "https://booksy.com/es-es/37470_trenceria-sammy_peluqueria_53009_madrid";

export default function Booking() {
  return (
    <section className="relative overflow-hidden bg-main py-32 text-center" aria-labelledby="booking-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_50%)]" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4">
        <h2 id="booking-heading" className="font-syne text-4xl font-bold text-chrome md:text-6xl">
          READY TO ELEVATE YOUR STYLE?
        </h2>
        <p className="mt-6 font-sans text-chrome-dark">
          Slots are limited. Advance booking recommended.
        </p>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block bg-white px-12 py-5 font-syne text-xl font-bold uppercase tracking-wider text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-transform duration-300 hover:scale-105"
        >
          Book with Booksy
        </a>
      </div>
    </section>
  );
}