import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/HeroSection";
import TeamsSection from "@/components/TeamsSection";
import CodeSection from "@/components/CodeSection";
import OfferingsSection from "@/components/OfferingsSection";
import FabricTeamsSection from "@/components/FabricTeamsSection";
import PlatformSection from "@/components/PlatformSection";
import CTASection from "@/components/CTASection";

const MorfeusFramework = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TeamsSection />
      <CodeSection />
      <OfferingsSection />
      <FabricTeamsSection />
      <PlatformSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default MorfeusFramework;
