import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { WhyChoose } from "@/components/WhyChoose";
import { HowItWorks } from "@/components/HowItWorks";
import { Trust } from "@/components/Trust";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { FadeInSection } from "@/components/FadeInSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeInSection>
        <Services />
      </FadeInSection>
      <FadeInSection>
        <Pricing />
      </FadeInSection>
      <FadeInSection>
        <WhyChoose />
      </FadeInSection>
      <FadeInSection>
        <HowItWorks />
      </FadeInSection>
      <FadeInSection>
        <Trust />
      </FadeInSection>
      <FadeInSection>
        <FAQ />
      </FadeInSection>
      <CTA />
    </>
  );
}
