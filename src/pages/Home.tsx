import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import HomeHero from "@/components/home/HomeHero";
import ProblemStatement from "@/components/home/ProblemStatement";
import DomainHub from "@/components/home/DomainHub";
import TenEightyTenDiagram from "@/components/frameworks/TenEightyTenDiagram";
import SocialProof from "@/components/home/SocialProof";
import FeaturedData from "@/components/home/FeaturedData";
import FreeTools from "@/components/home/FreeTools";
import FinalCTAs from "@/components/home/FinalCTAs";

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HomeHero />
      <ProblemStatement />
      <DomainHub />
      
      {/* 10-80-10 Methodology Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            10% Human Strategy. 80% AI Execution. 10% Human Approval.
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Deliver in 3-6 months what traditionally takes 12-18 months
          </p>
          <TenEightyTenDiagram variant="homepage" animated />
        </div>
      </section>

      <SocialProof />
      <FeaturedData />
      <FreeTools />
      <FinalCTAs />
      <Footer />
    </main>
  );
};

export default Home;
