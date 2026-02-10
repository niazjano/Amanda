import Link from "next/link";

const pricingPoints = [
  "Transparenta priser – inga dolda avgifter",
  "RUT-avdrag gör städningen ännu billigare",
  "Pris efter storlek och behov",
];

export function Pricing() {
  return (
    <section id="priser" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue text-center mb-4">
          Enkla och transparenta priser
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Vi vill att du ska veta vad städningen kostar – utan överraskningar. RUT-avdraget gäller för privatpersoner.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-gray-100 shadow-soft text-center">
            <p className="text-brand-blue font-semibold mb-1">Veckostädning</p>
            <p className="text-gray-600 text-sm">Regelbunden hemstädning</p>
            <p className="mt-4 text-2xl font-bold text-brand-blue">Pris efter behov</p>
            <p className="text-sm text-gray-500 mt-1">RUT-avdrag tillämpar du själv</p>
          </div>
          <div className="rounded-3xl bg-white p-6 sm:p-8 border-2 border-brand-green shadow-soft text-center relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-green text-white text-xs font-semibold">
              Populärt
            </span>
            <p className="text-brand-blue font-semibold mb-1">Engångs / Storstädning</p>
            <p className="text-gray-600 text-sm">Enstaka eller djupstädning</p>
            <p className="mt-4 text-2xl font-bold text-brand-blue">Pris efter storlek</p>
            <p className="text-sm text-gray-500 mt-1">RUT-avdrag tillämpar du själv</p>
          </div>
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-gray-100 shadow-soft text-center">
            <p className="text-brand-blue font-semibold mb-1">Företag / BRF</p>
            <p className="text-gray-600 text-sm">Kontor, trapphus m.m.</p>
            <p className="mt-4 text-2xl font-bold text-brand-blue">Offert på begäran</p>
            <p className="text-sm text-gray-500 mt-1">Anpassat efter ert behov</p>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-6 text-gray-600 text-sm sm:text-base">
          {pricingPoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <span className="text-brand-green font-bold" aria-hidden>✓</span>
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-brand-green text-white font-semibold hover:bg-brand-green-hover transition-colors shadow-soft"
          >
            Boka städning
          </Link>
        </div>
      </div>
    </section>
  );
}
