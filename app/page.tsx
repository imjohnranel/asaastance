import { SiteShell } from "../components/SiteShell";
import { HeroSection } from "../components/HeroSection";
// import { HomeTrustedBySection } from "../components/HomeTrustedBySection";
import { HomeWhatWeDoSection } from "../components/HomeWhatWeDoSection";
import { HomeStatsSection } from "../components/HomeStatsSection";
import { HomeSpotlightsSection } from "../components/HomeSpotlightsSection";
import { HomeHowItWorksSection } from "../components/HomeHowItWorksSection";
import { HomeLeadershipSection } from "../components/HomeLeadershipSection";
import { HomeFaqPreviewSection } from "../components/HomeFaqPreviewSection";
import { CTASection } from "../components/CTASection";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      {/* <HomeTrustedBySection /> */}
      <HomeWhatWeDoSection />
      <HomeStatsSection />
      <HomeSpotlightsSection />
      <HomeHowItWorksSection />
      <HomeLeadershipSection />
      <HomeFaqPreviewSection />
      <CTASection />
    </SiteShell>
  );
}
