import Link from "next/link";
import Image from "next/image";

export type ServicePageProps = {
  title: string;
  image: string;
  imageAlt: string;
  intro: string;
  vadIngar: string[];
  rutApplicable?: boolean;
};

const varforVälja = [
  "Lokalt företag i Kristianstad",
  "Försäkrad och utbildad personal",
  "Miljövänliga produkter",
  "Nöjd-kund-garanti",
];

const såGårDetTill = [
  { step: 1, title: "Kontakta oss", text: "Ring eller skicka en förfrågan. Vi svarar snabbt och hjälper dig att hitta rätt lösning." },
  { step: 2, title: "Vi planerar", text: "Tillsammans bestämmer vi datum, omfattning och pris. Inga överraskningar." },
  { step: 3, title: "Vi städar", text: "Vår personal kommer i rätt tid och levererar professionell städning." },
];

export function ServicePageContent({ title, image, imageAlt, intro, vadIngar, rutApplicable = true }: ServicePageProps) {
  return (
    <>
      <section className="relative h-[40vh] min-h-[280px]">
        <Image src={image} alt={imageAlt} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
            {title} i Kristianstad
          </h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          {intro}
        </p>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-brand-blue mb-4">Vad ingår i {title.toLowerCase()}?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {vadIngar.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {rutApplicable && (
            <p className="mt-4 text-gray-600 text-sm">
              Som privatperson kan du dra nytta av <strong>RUT-avdrag</strong> för hushållsnära tjänster.
            </p>
          )}
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-brand-blue mb-4">Varför välja Amanda Städ?</h2>
          <ul className="space-y-3">
            {varforVälja.map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <span className="text-brand-green font-bold" aria-hidden>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-brand-blue mb-4">Så går det till</h2>
          <ol className="space-y-6">
            {såGårDetTill.map(({ step, title: stepTitle, text }) => (
              <li key={step} className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-green text-white font-bold flex items-center justify-center">
                  {step}
                </span>
                <div>
                  <h3 className="font-semibold text-brand-blue">{stepTitle}</h3>
                  <p className="text-gray-600 text-sm mt-0.5">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-2xl bg-brand-blue p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-4">Redo för professionell {title.toLowerCase()} i Kristianstad?</h2>
          <p className="text-white/90 mb-6">
            Kontakta oss så hjälper vi dig. Lokalt städbolag med trygg service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-brand-green text-white font-semibold hover:bg-brand-green-hover transition-colors"
            >
              Boka städning
            </Link>
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Kontakta oss
            </Link>
          </div>
        </section>

        <p className="mt-8 text-center text-gray-500 text-sm">
          <Link href="/" className="text-brand-blue hover:underline">
            ← Tillbaka till startsidan
          </Link>
        </p>
      </div>
    </>
  );
}
