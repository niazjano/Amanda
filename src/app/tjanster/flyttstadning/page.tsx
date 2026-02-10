import type { Metadata } from "next";
import { ServicePageContent } from "@/components/ServicePageContent";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Flyttstädning i Kristianstad | Amanda Städ",
  description:
    "Professionell flyttstädning i Kristianstad. Lokalt städbolag, trygg service, RUT-avdrag. Heltäckande städning inför eller efter flytt.",
  keywords: ["flyttstädning Kristianstad", "städning Kristianstad", "lokalt städbolag", "RUT-avdrag", "Amanda Städ"],
};

const intro =
  "Behöver du flyttstädning i Kristianstad? Amanda Städ hjälper dig med professionell städning inför eller efter flytt. Som lokalt städbolag är vi snabba på plats och levererar trygg, pålitlig service. Vi tar hand om hela lägenheten eller huset så att du kan fokusera på flytten.";

const vadIngar = [
  "Grundlig städning av alla rum",
  "Städning av kök inkl. vitvaror och skåp",
  "Städning av badrum och toaletter",
  "Dammtorkning, dammsugning och moppning",
  "Fönsterputs (vid behov)",
  "Bortforsling av lätt skräp (vid önskeavtal)",
];

export default function Page() {
  return (
    <ServicePageContent
      title="Flyttstädning"
      image={images.vacuuming}
      imageAlt="Professionell flyttstädning i Kristianstad"
      intro={intro}
      vadIngar={vadIngar}
      rutApplicable
    />
  );
}
