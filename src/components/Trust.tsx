import Image from "next/image";
import { images } from "@/lib/images";

export function Trust() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue text-center mb-4">
          Vad våra kunder säger
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          ★★★★★ Betyg från nöjda kunder i Kristianstad. Vi jobbar hårt för att varje städning ska ge resultat och trygghet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-gray-50 p-6 sm:p-8 border border-gray-100 shadow-soft">
            <div className="flex gap-1 text-brand-green mb-4" aria-hidden>
              {"★".repeat(5)}
            </div>
            <p className="text-gray-700 italic">
              &ldquo;Supernöjda! Amanda Städ kom i tid, var vänliga och hemmet blev skinande rent. Rekommenderar varmt.&rdquo;
            </p>
            <p className="mt-4 text-sm text-gray-500">— Kund i Kristianstad</p>
          </div>
          <div className="rounded-3xl bg-gray-50 p-6 sm:p-8 border border-gray-100 shadow-soft">
            <div className="flex gap-1 text-brand-green mb-4" aria-hidden>
              {"★".repeat(5)}
            </div>
            <p className="text-gray-700 italic">
              &ldquo;Lätt att boka, tydliga priser och inga bindningstider. Precis vad vi behövde.&rdquo;
            </p>
            <p className="mt-4 text-sm text-gray-500">— Kund i Kristianstad</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <div className="relative w-48 h-32 sm:w-56 sm:h-36 rounded-2xl overflow-hidden shadow-soft">
            <Image
              src={images.bedroom}
              alt=""
              fill
              className="object-cover"
              sizes="224px"
            />
          </div>
          <div className="relative w-48 h-32 sm:w-56 sm:h-36 rounded-2xl overflow-hidden shadow-soft">
            <Image
              src={images.dusting}
              alt=""
              fill
              className="object-cover"
              sizes="224px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
