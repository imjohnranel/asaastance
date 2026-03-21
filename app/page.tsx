import { SiteShell } from "../components/SiteShell";
import { HeroSection } from "../components/HeroSection";
import { HomeWhatWeDoSection } from "../components/HomeWhatWeDoSection";
import { HomeSpotlightsSection } from "../components/HomeSpotlightsSection";
import { HomeHowItWorksSection } from "../components/HomeHowItWorksSection";
import { HomeLeadershipSection } from "../components/HomeLeadershipSection";
import { CTASection } from "../components/CTASection";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <HomeWhatWeDoSection />
      <HomeSpotlightsSection />
      <HomeHowItWorksSection />
      <HomeLeadershipSection />
      <CTASection />
    </SiteShell>
  );
}
