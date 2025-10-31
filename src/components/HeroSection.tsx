import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";

const HeroSection = () => {
  const { displayText, isTyping } = useTypewriter({
    phrases: ["unplug", "scale", "build", "evolve", "innovate"],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 1500,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Version badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Morfeus Framework v1.0.1
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="text-primary glow-primary">Knock, knock.</span>
          <br />
          Ready to <span className="text-gradient">{displayText}<span className={`${isTyping ? 'animate-pulse' : 'opacity-0'}`}>_</span></span>?
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          The AI agent framework that lets you orchestrate autonomous teams.
          <br />
          <span className="text-foreground">Observable. Scalable. Autonomous.</span>
        </p>

        {/* CTA Button */}
        <div className="max-w-md mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Join the Waitlist</h3>
              <p className="text-sm text-muted-foreground">
                Be the first to access Morfeus when we launch
              </p>
            </div>
            
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://ernst-3kn785vq.scoreapp.com/', '_blank')}
            >
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
