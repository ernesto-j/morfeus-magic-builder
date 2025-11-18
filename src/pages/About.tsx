import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import AboutHero from "@/components/about/AboutHero";
import StoryTimeline from "@/components/about/StoryTimeline";
import TeamSection from "@/components/about/TeamSection";
import ClientsSection from "@/components/about/ClientsSection";
import LocationsSection from "@/components/about/LocationsSection";
import CareersSection from "@/components/about/CareersSection";
import StrategyPyramid from "@/components/frameworks/StrategyPyramid";
import TransformationRoadmap from "@/components/frameworks/TransformationRoadmap";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      
      {/* Strategy Pyramid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our Strategic Framework
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            From ambition to execution: How we think about building Morfeus
          </p>
          <StrategyPyramid />
        </div>
      </section>

      <StoryTimeline />
      <TeamSection />
      <ClientsSection />
      <LocationsSection />
      
      {/* Transformation Roadmap */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <TransformationRoadmap />
        </div>
      </section>

      <CareersSection />
      <Footer />
    </main>
  );
};

export default About;
