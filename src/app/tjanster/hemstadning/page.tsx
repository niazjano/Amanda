import type { Metadata } from "next";
import { ServicePageContent } from "@/components/ServicePageContent";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Hemstädning i Kristianstad | Amanda Städ",
  description:
    "Professionell hemstädning i Kristianstad. Lokalt städbolag, trygg service, RUT-avdrag. Regelbunden städning som passar din vardag.",
  keywords: ["hemstädning Kristianstad", "städning Kristianstad", "lokalt städbolag", "RUT-avdrag", "Amanda Städ"],
};

const intro =
  "Amanda Städ erbjuder professionell hemstädning i Kristianstad. Som lokalt städbolag känner vi stan och våra kunder – vi levererar trygg, pålitlig städning med försäkrad personal och miljövänliga produkter. Perfekt om du vill ha ett skinande rent hem utan att behöva göra det själv.";

const vadIngar = [
  "Dammtorkning och avtorkning av ytor",
  "Städning av kök och badrum",
  "Dammsugning och moppning av golv",
  "Bädda sängar och ordna hemmet",
  "Tömma papperskorgar och kasta sopor",
  "Städning av vardagsrum och sovrum",
];

export default function Page() {
  return (
    <ServicePageContent
      title="Hemstädning"
      image={images.kitchenCleaning}
      imageAlt="Professionell hemstädning i Kristianstad"
      intro={intro}
      vadIngar={vadIngar}
      rutApplicable
    />
  );
}
