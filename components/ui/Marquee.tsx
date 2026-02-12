"use client";

import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

const SEPARATOR = " • ";
const DURATION_DESKTOP = 20;
const DURATION_MOBILE = 32;

type MarqueeProps = {
  items: string[];
};

function useReducedMotion() {
  const [duration, setDuration] = useState(DURATION_DESKTOP);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    setDuration(isMobile ? DURATION_MOBILE : DURATION_DESKTOP);

    const onResize = () => {
      setDuration(window.innerWidth < 768 ? DURATION_MOBILE : DURATION_DESKTOP);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return duration;
}

export default function Marquee({ items }: MarqueeProps) {
  const duration = useReducedMotion();
  const text = useMemo(
    () => items.join(SEPARATOR) + SEPARATOR,
    [items]
  );

  return (
    <div
      className="overflow-hidden whitespace-nowrap border-y border-white/5 bg-main py-6"
      aria-hidden
    >
      <motion.div
        className="inline-flex w-max font-syne text-4xl text-transparent md:text-6xl"
        style={{
          WebkitTextStroke: "2px rgba(255, 255, 255, 0.2)",
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
        }}
      >
        <span className="inline-block shrink-0 pr-[0.25em]">{text}</span>
        <span className="inline-block shrink-0 pr-[0.25em]">{text}</span>
      </motion.div>
    </div>
  );
}
