import Hero from "@/components/hero/Hero";
import Gallery from "@/components/sections/Gallery";
import Marquee from "@/components/ui/Marquee";

const MARQUEE_ITEMS = [
  "VINICIUS JR",
  "MEMPHIS DEPAY",
  "XAVI SIMONS",
  "DAVID ALABA",
  "ELITE BRAIDS",
  "MADRID",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-main">
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Gallery />
    </main>
  );
}
