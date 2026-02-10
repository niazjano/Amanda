import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";

const trustSignals = [
  { label: "Lokalt städbolag i Kristianstad", icon: "📍" },
  { label: "RUT-avdrag", icon: "✓" },
  { label: "Nöjd-kund-garanti", icon: "★" },
];

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt="Professionella städare från Amanda Städ Kristianstad i ett hem"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" aria-hidden />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl drop-shadow-lg animate-fade-in-up">
          Professionell städning i Kristianstad – tryggt, enkelt och prisvärt
        </h1>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white/95 max-w-2xl drop-shadow-md animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Lokalt företag. Pålitlig service. Ingen krångel. Boka städning när det passar dig – med RUT-avdrag och nöjd-kund-garanti.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-brand-green text-white font-semibold text-lg hover:bg-brand-green-hover transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Boka städning
          </Link>
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-all"
          >
            Kontakta oss
          </Link>
        </div>

        <div className="mt-12 sm:mt-14 flex flex-wrap gap-6 sm:gap-10 text-white/95 text-sm sm:text-base animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {trustSignals.map((item) => (
            <span key={item.label} className="flex items-center gap-2">
              <span className="text-brand-green font-bold" aria-hidden>{item.icon}</span>
              <span>{item.label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
