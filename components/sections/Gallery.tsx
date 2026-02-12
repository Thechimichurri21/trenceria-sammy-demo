"use client";

const GALLERY_ITEMS = [
  { id: "1", label: "STYLE 01" },
  { id: "2", label: "STYLE 02" },
  { id: "3", label: "STYLE 03" },
  { id: "4", label: "STYLE 04" },
  { id: "5", label: "STYLE 05" },
];

function GalleryCard({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative flex min-h-[200px] border border-white/10 bg-white/5 transition-all duration-500 hover:border-chrome-light/50 hover:bg-white/10 md:min-h-0 ${className}`}
    >
      {/* Placeholder: gradiente oscuro */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent"
        aria-hidden
      />
      <span className="absolute bottom-4 left-4 font-syne text-xs tracking-widest text-chrome-light/70">
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

      {/* AQUÍ FALTABA CERRAR EL DIV AL FINAL */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-4 px-4 md:grid-cols-3">
        {/* Caja 1: Grande (2x2) */}
        <GalleryCard
          label={GALLERY_ITEMS[0].label}
          className="aspect-square md:col-span-2 md:row-span-2 md:aspect-video"
        />
        {/* Caja 2: Vertical (1x2) */}
        <GalleryCard
          label={GALLERY_ITEMS[1].label}
          className="aspect-[4/5] md:col-span-1 md:row-span-2 md:aspect-auto"
        />
        {/* Cajas 3, 4, 5: Fila inferior */}
        <GalleryCard label={GALLERY_ITEMS[2].label} />
        <GalleryCard label={GALLERY_ITEMS[3].label} />
        <GalleryCard label={GALLERY_ITEMS[4].label} />
      </div> 
      {/* ^^^ ESTE DIV DE CIERRE FALTABA ANTES DE CERRAR SECTION */}
    </section>
  );
}