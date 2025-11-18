import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import ServiceSection from "@/components/data/ServiceSection";
import ComparisonTable from "@/components/data/ComparisonTable";
import CaseStudies from "@/components/data/CaseStudies";
import FAQ from "@/components/data/FAQ";
import FivePillarsArchitecture from "@/components/frameworks/FivePillarsArchitecture";
import ClickOpsEvolution from "@/components/frameworks/ClickOpsEvolution";

const Data = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHero
        breadcrumb="Home > Morfeus Data"
        title="Azure Fabric & Databricks. Delivered 3x Faster."
        description="Morfeus Data automates data platform engineering using the 10-80-10 methodology"
        stats={[
          { value: "2-4 weeks", label: "vs. 8-12 traditional" },
          { value: "$25K", label: "starting (vs. $150K+ traditional)" },
          { value: "$1.9M", label: "value (UCQ Healthcare)" },
        ]}
        primaryCTA="Request Audit"
        secondaryCTA="See Pricing"
      />
      <ServiceSection />
      
      {/* Five Pillars Architecture */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Built on Five Pillars of Excellence
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Data Foundation, Platform Infrastructure, and Observability
          </p>
          <FivePillarsArchitecture variant="data-focused" animated />
        </div>
      </section>

      <ComparisonTable />
      
      {/* ClickOps Evolution */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            The Evolution from ClickOps to AgentOps
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Why manual configuration is holding you back
          </p>
          <ClickOpsEvolution />
        </div>
      </section>

      <CaseStudies />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Data;
