import type { Metadata } from "next";
import { ServicePageContent } from "@/components/ServicePageContent";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Fönsterputs i Kristianstad | Amanda Städ",
  description:
    "Professionell fönsterputs i Kristianstad. Lokalt städbolag, trygg service, RUT-avdrag. In- och utvändig fönsterputs för klara fönster.",
  keywords: ["fönsterputs Kristianstad", "fönsterputsning Kristianstad", "lokalt städbolag", "RUT-avdrag", "Amanda Städ"],
};

const intro =
  "Amanda Städ erbjuder professionell fönsterputs i Kristianstad – in- och utvändigt. Som lokalt städbolag kommer vi till dig med erfaren personal och rätt utrustning. Klara fönster som släpper in ljuset och ger ett fräscht intryck av hemmet eller kontoret.";

const vadIngar = [
  "Fönsterputs in- och utvändigt",
  "Städning av fönsterkarmar och brädor",
  "Borttagning av flugor, damm och hårda fläckar",
  "Professionella produkter och utrustning",
  "Säker arbetsmetod (höga fönster vid behov)",
  "Inga repor eller fläckar på rutor",
];

export default function Page() {
  return (
    <ServicePageContent
      title="Fönsterputs"
      image={images.fonsterputsCover}
      imageAlt="Professionell fönsterputs i Kristianstad"
      intro={intro}
      vadIngar={vadIngar}
      rutApplicable
    />
  );
}
