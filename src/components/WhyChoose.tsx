import Image from "next/image";
import { images } from "@/lib/images";

const reasons = [
  {
    title: "Lokalt företag i Kristianstad",
    description: "Vi känner stan och våra kunder. Snabb respons och personlig service.",
    icon: "📍",
  },
  {
    title: "Inga bindningstider",
    description: "Boka när det passar dig. Ingen långtidsavtal – du bestämmer.",
    icon: "📅",
  },
  {
    title: "Försäkrad och utbildad personal",
    description: "All personal är försäkrad och utbildad för säker och professionell städning.",
    icon: "✓",
  },
  {
    title: "Miljövänliga produkter",
    description: "Vi använder miljövänliga rengöringsmedel där det är möjligt.",
    icon: "🌿",
  },
  {
    title: "Nöjd-kund-garanti",
    description: "Är du inte nöjd åtgärdar vi det. Din tillfredsställelse är viktig för oss.",
    icon: "★",
  },
];

export function WhyChoose() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">
              Varför välja Amanda Städ Kristianstad?
            </h2>
            <p className="text-gray-600 mb-10">
              Vi satsar på trygghet, kvalitet och enkelhet – så att du kan känna dig trygg med oss i ditt hem eller på arbetsplatsen.
            </p>
            <ul className="space-y-6">
              {reasons.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-green/15 text-brand-green flex items-center justify-center text-lg font-bold" aria-hidden>
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-blue">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-0.5">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-soft-lg aspect-[4/3]">
            <Image
              src={images.kitchenCleaning}
              alt="Professionell städare från Amanda Städ arbetar i ett hem"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
