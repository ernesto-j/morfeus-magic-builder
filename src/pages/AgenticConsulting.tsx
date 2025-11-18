import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import ProblemSection from "@/components/agentic/ProblemSection";
import TenEightyTenDiagram from "@/components/frameworks/TenEightyTenDiagram";
import BenefitsGrid from "@/components/agentic/BenefitsGrid";
import AgenticCaseStudies from "@/components/agentic/AgenticCaseStudies";
import ThreeAIParadigms from "@/components/frameworks/ThreeAIParadigms";
import PlatformEconomicsCurve from "@/components/frameworks/PlatformEconomicsCurve";
import UXvsAXComparison from "@/components/frameworks/UXvsAXComparison";

const AgenticConsulting = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHero
        title="Agentic Consulting. The Future is 10-80-10."
        description="What if consultants could deliver 3x faster, at 40% the cost, with knowledge that never walks out the door?"
        stats={[
          { value: "3x", label: "faster delivery" },
          { value: "60%", label: "cost savings" },
          { value: "100%", label: "knowledge retention" },
        ]}
      />
      <ProblemSection />
      
      {/* 10-80-10 Model with Volume Overlay */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            The 10-80-10 Model in Action
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Strategic human input, AI execution at scale, human oversight
          </p>
          <TenEightyTenDiagram variant="consulting" showVolume animated />
        </div>
      </section>

      {/* Three AI Paradigms */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Three Paradigms of AI Integration
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Understanding Assistance, Agents, and Interoperability
          </p>
          <ThreeAIParadigms />
        </div>
      </section>

      <BenefitsGrid />
      
      {/* Platform Economics */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <PlatformEconomicsCurve />
        </div>
      </section>

      {/* UX vs AX */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <UXvsAXComparison />
        </div>
      </section>

      <AgenticCaseStudies />
      <Footer />
    </main>
  );
};

export default AgenticConsulting;
