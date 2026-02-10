import type { Metadata } from "next";
import { ServicePageContent } from "@/components/ServicePageContent";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Kontorsstädning i Kristianstad | Amanda Städ",
  description:
    "Professionell kontorsstädning i Kristianstad. Lokalt städbolag, trygg service. Städning av kontor och arbetsplatser – flexibla tider.",
  keywords: ["kontorsstädning Kristianstad", "städning kontor Kristianstad", "lokalt städbolag", "Amanda Städ"],
};

const intro =
  "Behöver ert företag kontorsstädning i Kristianstad? Amanda Städ levererar professionell städning av kontor och arbetsplatser. Vi anpassar tider och omfattning efter ert behov så att städningen inte stör verksamheten. Som lokalt städbolag är vi lätt att nå och ger trygg, pålitlig service.";

const vadIngar = [
  "Städning av kontorsrum och öppna landskap",
  "Dammtorkning av skrivbord och möbler",
  "Städning av kök och pausrum",
  "Toalett- och badrumsstädning",
  "Dammsugning och golvmoppning",
  "Tömning av papperskorgar och återvinning",
];

export default function Page() {
  return (
    <ServicePageContent
      title="Kontorsstädning"
      image={images.dusting}
      imageAlt="Professionell kontorsstädning i Kristianstad"
      intro={intro}
      vadIngar={vadIngar}
      rutApplicable={false}
    />
  );
}
