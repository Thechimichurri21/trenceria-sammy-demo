import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sammy · Elite Braids",
  description:
    "La Trencería #1 en Madrid. Especialistas en trenzas exclusivas y servicio VIP para deportistas de élite. Vive la experiencia de la artista de las estrellas.",
  icons: { icon: "/logo.jpg" },
  appleWebApp: {
    title: "Sammy",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "Trencería Sammy · La Artista de las Estrellas",
    description:
      "Reserva tu cita en la trencería más exclusiva de Madrid. Estilo VIP para quienes no aceptan menos.",
    images: ["/logo.jpg"],
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
