import type { Metadata } from "next";
import { ServicePageContent } from "@/components/ServicePageContent";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Storstädning i Kristianstad | Amanda Städ",
  description:
    "Professionell storstädning i Kristianstad. Lokalt städbolag, trygg service, RUT-avdrag. Grundlig djupstädning för ett skinande rent hem.",
  keywords: ["storstädning Kristianstad", "djupstädning Kristianstad", "lokalt städbolag", "RUT-avdrag", "Amanda Städ"],
};

const intro =
  "Vill du ha en grundlig storstädning i Kristianstad? Amanda Städ erbjuder professionell djupstädning – perfekt vid säsongskiften, efter renovering eller när det behövs en extra ordentlig städning. Som lokalt städbolag ger vi dig trygg service med försäkrad personal och nöjd-kund-garanti.";

const vadIngar = [
  "Grundlig dammtorkning i hela hemmet",
  "Städning av kök inkl. in- och utsidor av skåp",
  "Badrum och toaletter från topp till tå",
  "Dammsugning och moppning av alla golv",
  "Fönsterputs in- och utvändigt (vid önskeavtal)",
  "Städning av lister, dörrar och fönsterbrädor",
];

export default function Page() {
  return (
    <ServicePageContent
      title="Storstädning"
      image={images.bedroom}
      imageAlt="Professionell storstädning i Kristianstad"
      intro={intro}
      vadIngar={vadIngar}
      rutApplicable
    />
  );
}
