"use client";

import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";

const services = [
  {
    id: "hemstadning",
    title: "Hemstädning",
    description: "Regelbunden hemstädning som passar din vardag. Vi tar hand om ditt hem med omsorg och professionella produkter.",
    icon: "🏠",
    image: images.kitchenCleaning,
    cta: "Läs mer",
  },
  {
    id: "flyttstadning",
    title: "Flyttstädning",
    description: "Heltäckande städning inför eller efter flytt så att du kan fokusera på det viktiga.",
    icon: "📦",
    image: images.vacuuming,
    cta: "Läs mer",
  },
  {
    id: "storstadning",
    title: "Storstädning",
    description: "Grundlig storstädning för ett skinande rent hem. Perfekt vid säsongskiften eller speciella tillfällen.",
    icon: "✨",
    image: images.bedroom,
    cta: "Läs mer",
  },
  {
    id: "fonsterputs",
    title: "Fönsterputs",
    description: "Professionell fönsterputs in- och utvändigt. Klara fönster som släpper in ljuset.",
    icon: "🪟",
    image: images.windowCleaning,
    cta: "Läs mer",
  },
  {
    id: "kontorsstadning",
    title: "Kontorsstädning",
    description: "Städning av kontor och arbetsplatser. Flexibla tider som inte stör verksamheten.",
    icon: "🏢",
    image: images.dusting,
    cta: "Läs mer",
  },
  {
    id: "trappstadning",
    title: "Trappstädning / BRF",
    description: "Städning av trapphus, entréer och gemensamma utrymmen för bostadsrättsföreningar.",
    icon: "🪜",
    image: images.kitchenWiping,
    cta: "Läs mer",
  },
];

export function Services() {
  return (
    <section id="tjanster" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue text-center mb-4">
          Våra tjänster
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          Vi erbjuder ett brett utbud av städtjänster i Kristianstad – från regelbunden hemstädning till flytt- och kontorsstädning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <article
              key={service.id}
              className="group rounded-3xl bg-gray-50 border border-gray-100 overflow-hidden shadow-soft hover:shadow-soft-lg hover:border-brand-blue/20 transition-all duration-300"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-2xl" aria-hidden>{service.icon}</span>
                  <h3 className="text-xl font-semibold text-white drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all"
                >
                  {service.cta}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
