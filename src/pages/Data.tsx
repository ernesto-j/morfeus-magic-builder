import Navigation from "@/components/shared/Navigation";
import PageHero from "@/components/shared/PageHero";
import ServiceSection from "@/components/data/ServiceSection";
import ComparisonTable from "@/components/data/ComparisonTable";
import CaseStudies from "@/components/data/CaseStudies";
import FAQ from "@/components/data/FAQ";

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
      <ComparisonTable />
      <CaseStudies />
      <FAQ />
    </main>
  );
};

export default Data;
