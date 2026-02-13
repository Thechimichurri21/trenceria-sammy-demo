"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const GALLERY_ITEMS = [
  { id: "1", label: "STYLE 01", image: "/images/braid1.jpg" },
  { id: "2", label: "STYLE 02", image: "/images/braid2.jpg" },
  { id: "3", label: "STYLE 03", image: "/images/braid3.jpg" },
  { id: "4", label: "STYLE 04", image: "/images/braid4.jpg" },
  { id: "5", label: "STYLE 05", image: "/images/braid5.jpg" },
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

function GalleryCard({
  label,
  image,
  className = "",
}: {
  label: string;
  image: string;
  className?: string;
}) {
  const [imageError, setImageError] = useState(false);
  const imageSrc = image.trim();

  return (
    <div
      className={`group relative flex min-h-[200px] overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:border-chrome-light/50 hover:bg-white/10 md:min-h-0 ${className}`}
    >
      {!imageError ? (
        <Image
          src={imageSrc}
          alt={label}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-[#1a1a1a]" aria-hidden />
      )}
      {/* Overlay para legibilidad del texto */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
        aria-hidden
      />
      <span className="absolute bottom-4 left-4 z-10 font-syne text-xs tracking-widest text-chrome-light/90">
        {label}
      </span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="bg-main py-24" aria-labelledby="gallery-heading">
      <h2
        id="gallery-heading"
        className="text-center text-xs uppercase tracking-[0.5em] text-chrome-dark"
      >
        SELECTED WORKS
      </h2>

      <motion.div
        className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-4 px-4 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <motion.div variants={cardVariants}>
          <GalleryCard
            label={GALLERY_ITEMS[0].label}
            image={GALLERY_ITEMS[0].image}
            className="aspect-square md:col-span-2 md:row-span-2 md:aspect-video"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <GalleryCard
            label={GALLERY_ITEMS[1].label}
            image={GALLERY_ITEMS[1].image}
            className="aspect-[4/5] md:col-span-1 md:row-span-2 md:aspect-auto"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <GalleryCard label={GALLERY_ITEMS[2].label} image={GALLERY_ITEMS[2].image} />
        </motion.div>
        <motion.div variants={cardVariants}>
          <GalleryCard label={GALLERY_ITEMS[3].label} image={GALLERY_ITEMS[3].image} />
        </motion.div>
        <motion.div variants={cardVariants}>
          <GalleryCard label={GALLERY_ITEMS[4].label} image={GALLERY_ITEMS[4].image} />
        </motion.div>
      </motion.div>
    </section>
  );
}