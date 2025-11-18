import PageHero from "@/components/shared/PageHero";
import ProblemSection from "@/components/agentic/ProblemSection";
import TenEightyTenSection from "@/components/agentic/TenEightyTenSection";
import BenefitsGrid from "@/components/agentic/BenefitsGrid";
import AgenticCaseStudies from "@/components/agentic/AgenticCaseStudies";

const AgenticConsulting = () => {
  return (
    <main className="min-h-screen bg-background">
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
      <TenEightyTenSection />
      <BenefitsGrid />
      <AgenticCaseStudies />
    </main>
  );
};

export default AgenticConsulting;
