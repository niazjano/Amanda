import type { Metadata } from "next";
import { ServicePageContent } from "@/components/ServicePageContent";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Trappstädning / BRF i Kristianstad | Amanda Städ",
  description:
    "Professionell trappstädning och BRF-städning i Kristianstad. Lokalt städbolag, trygg service. Städning av trapphus, entréer och gemensamma utrymmen.",
  keywords: ["trappstädning Kristianstad", "BRF-städning Kristianstad", "städning förening", "lokalt städbolag", "Amanda Städ"],
};

const intro =
  "Amanda Städ hjälper bostadsrättsföreningar och fastigheter med professionell trappstädning i Kristianstad. Vi städar trapphus, entréer, hissar och andra gemensamma utrymmen så att föreningen alltid ser välskött och välkommen ut. Som lokalt städbolag är vi trygga att ha att göra med.";

const vadIngar = [
  "Städning av trapphus och trappor",
  "Städning av entréer och lobby",
  "Hissstädning (vid behov)",
  "Dammtorkning av lister och handräcken",
  "Golvmoppning och dammsugning",
  "Tömning av papperskorgar i gemensamma utrymmen",
];

export default function Page() {
  return (
    <ServicePageContent
      title="Trappstädning / BRF"
      image={images.kitchenWiping}
      imageAlt="Professionell trappstädning i Kristianstad"
      intro={intro}
      vadIngar={vadIngar}
      rutApplicable={false}
    />
  );
}
