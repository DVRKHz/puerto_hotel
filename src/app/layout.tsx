import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Puerto Hotel & Suites - Lujo & Naturaleza en Chiapas",
  description:
    "Descubre la magia de Chiapas hospedándote en Puerto Hotel. Suites exclusivas en Puerto Arista, Puerto Chiapas, San Cristóbal, Palenque y Cañón del Sumidero.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased font-sans selection:bg-gold-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
