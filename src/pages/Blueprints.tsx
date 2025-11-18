import Navigation from "@/components/shared/Navigation";
import PageHero from "@/components/shared/PageHero";
import FreeToolsSection from "@/components/blueprints/FreeToolsSection";
import PremiumBlueprints from "@/components/blueprints/PremiumBlueprints";
import ExpansionPacks from "@/components/blueprints/ExpansionPacks";

const Blueprints = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHero
        title="Blueprints. Tools. Expansion Packs."
        description="Free and premium tools to accelerate your data platform initiatives"
        stats={[
          { value: "12+", label: "tools & frameworks" },
          { value: "100%", label: "open source core tools" },
          { value: "500+", label: "downloads (Fabric Scope)" },
        ]}
      />
      <FreeToolsSection />
      <PremiumBlueprints />
      <ExpansionPacks />
    </main>
  );
};

export default Blueprints;
