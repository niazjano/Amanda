import Link from "next/link";

export function CTA() {
  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-brand-blue">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Redo för ett renare hem i Kristianstad?
        </h2>
        <p className="text-white/90 text-lg mb-10">
          Boka städning enkelt och tryggt. Vi svarar snabbt och hjälper dig att hitta rätt lösning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a
            href="tel:+46447853002"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-brand-green text-white font-semibold text-lg hover:bg-brand-green-hover transition-colors shadow-lg"
          >
            Boka nu
          </a>
          <a
            href="tel:+46447853002"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            Ring oss: 044-785 30 02
          </a>
        </div>
        <p className="mt-6 text-white/80 text-sm">
          Öppettider: Mån–Fre 08:00–17:00, Lör 09:00–14:00
        </p>
      </div>
    </section>
  );
}
