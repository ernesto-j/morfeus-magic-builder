import HomeHero from "@/components/home/HomeHero";
import ProblemStatement from "@/components/home/ProblemStatement";
import DomainHub from "@/components/home/DomainHub";
import Methodology from "@/components/home/Methodology";
import SocialProof from "@/components/home/SocialProof";
import FeaturedData from "@/components/home/FeaturedData";
import FreeTools from "@/components/home/FreeTools";
import FinalCTAs from "@/components/home/FinalCTAs";

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <HomeHero />
      <ProblemStatement />
      <DomainHub />
      <Methodology />
      <SocialProof />
      <FeaturedData />
      <FreeTools />
      <FinalCTAs />
    </main>
  );
};

export default Home;
