import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import FreeToolsSection from "@/components/blueprints/FreeToolsSection";
import PremiumBlueprints from "@/components/blueprints/PremiumBlueprints";
import ExpansionPacks from "@/components/blueprints/ExpansionPacks";
import MorfeusCanvas from "@/components/frameworks/MorfeusCanvas";
import FivePillarsArchitecture from "@/components/frameworks/FivePillarsArchitecture";

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
      
      {/* Five Pillars Architecture */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Complete Architecture Framework
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            All five pillars of modern data platform design
          </p>
          <FivePillarsArchitecture variant="complete" animated />
        </div>
      </section>

      <PremiumBlueprints />
      
      {/* Morfeus Canvas */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <MorfeusCanvas />
        </div>
      </section>

      <ExpansionPacks />
      <Footer />
    </main>
  );
};

export default Blueprints;
