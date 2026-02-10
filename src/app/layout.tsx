import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://niazjano.github.io/Amanda"),
  title: "Amanda Städ Kristianstad – Professionell städning i Kristianstad",
  description:
    "Lokalt städbolag i Kristianstad. Hemstädning, flyttstädning, storstädning, fönsterputs. RUT-avdrag. Nöjd-kund-garanti. Boka enkelt och tryggt.",
  keywords: [
    "städning Kristianstad",
    "städbolag Kristianstad",
    "hemstädning",
    "flyttstädning",
    "RUT-avdrag",
    "Amanda Städ",
  ],
  openGraph: {
    title: "Amanda Städ Kristianstad – Professionell städning",
    description:
      "Lokalt städbolag i Kristianstad. Tryggt, enkelt och prisvärt. RUT-avdrag och nöjd-kund-garanti.",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Hoppa till innehåll
        </a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
