import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";

const footerLinks = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#priser", label: "Priser" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={images.logo}
                alt="Amanda Städ Kristianstad"
                width={180}
                height={54}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
              Vi är ett lokalt städbolag i Kristianstad. Med försäkrad personal, miljövänliga
              produkter och nöjd-kund-garanti gör vi din vardag enklare – utan bindningstider.
            </p>
          </div>

          <div>
            <h3 className="text-brand-blue font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="mailto:info@amandastad.se" className="hover:text-brand-green transition-colors">
                  info@amandastad.se
                </a>
              </li>
              <li>
                <a href="tel:+46447853002" className="hover:text-brand-green transition-colors">
                  044-785 30 02
                </a>
              </li>
            </ul>
            <h3 className="text-brand-blue font-semibold mt-6 mb-2">Öppettider</h3>
            <p className="text-gray-600 text-sm">
              Mån–Fre 08:00–17:00
              <br />
              Lör 09:00–14:00
            </p>
          </div>

          <div>
            <h3 className="text-brand-blue font-semibold mb-4">Sidor</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-brand-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Amanda Städ Kristianstad. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
}
