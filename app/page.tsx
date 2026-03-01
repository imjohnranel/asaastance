import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { TrustedBySection } from "../components/TrustedBySection";
import { ServicesSection } from "../components/ServicesSection";
import { SuccessStoriesSection } from "../components/SuccessStoriesSection";
import { ExpertsSection } from "../components/ExpertsSection";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <SuccessStoriesSection />
      <ExpertsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
