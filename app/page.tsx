import Hero from "@/components/hero/Hero";
import Footer from "@/components/layout/Footer";
import Booking from "@/components/sections/Booking";
import Gallery from "@/components/sections/Gallery";
import Marquee from "@/components/ui/Marquee";

const MARQUEE_ITEMS = [
  "VINICIUS JR",
  "MEMPHIS DEPAY",
  "XAVI SIMONS",
  "DAVID ALABA",
  "MALUMA",
  "HADES66",
  "ELITE BRAIDS",
  "MADRID",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-main">
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Gallery />
      <Booking />
      <Footer />
    </main>
  );
}
