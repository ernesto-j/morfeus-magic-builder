import AboutHero from "@/components/about/AboutHero";
import StoryTimeline from "@/components/about/StoryTimeline";
import TeamSection from "@/components/about/TeamSection";
import ClientsSection from "@/components/about/ClientsSection";
import LocationsSection from "@/components/about/LocationsSection";
import CareersSection from "@/components/about/CareersSection";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <AboutHero />
      <StoryTimeline />
      <TeamSection />
      <ClientsSection />
      <LocationsSection />
      <CareersSection />
    </main>
  );
};

export default About;
