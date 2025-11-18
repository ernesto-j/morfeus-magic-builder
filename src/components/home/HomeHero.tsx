import { Button } from "@/components/ui/button";
import StatsRow from "@/components/shared/StatsRow";

const HomeHero = () => {
  const stats = [
    { value: "3x", label: "Faster delivery" },
    { value: "60%", label: "Cost savings" },
    { value: "100%", label: "Knowledge retention" },
  ];

  const handlePrimaryClick = () => {
    window.open("https://ernst-3kn785vq.scoreapp.com/", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background animate-pulse" />
      
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Resilient Enterprise Systems.{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Powered by AI.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 animate-fade-in">
          The Morfeus suite automates data platform engineering, security assessment, 
          and enterprise architecture—delivering in months what traditionally takes years.
        </p>
        
        <StatsRow stats={stats} className="mb-12" />
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            variant="hero"
            onClick={handlePrimaryClick}
          >
            Explore Morfeus Data →
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={handlePrimaryClick}
          >
            See All Solutions
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handlePrimaryClick}
          >
            Free Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
