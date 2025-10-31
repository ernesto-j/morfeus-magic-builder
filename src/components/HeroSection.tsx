import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["unplug", "scale", "build", "evolve", "innovate"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for joining! We'll be in touch soon.");
      setEmail("");
    }
  };

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
          Ready to <span className="text-gradient transition-opacity duration-300">{words[currentWord]}</span>?
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          The AI agent framework that lets you orchestrate autonomous teams.
          <br />
          <span className="text-foreground">Observable. Scalable. Autonomous.</span>
        </p>

        {/* Waitlist form */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Join the Waitlist</h3>
                <p className="text-sm text-muted-foreground">
                  Be the first to access Morfeus when we launch
                </p>
              </div>
              
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="neo@matrix.ai"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-input border-border"
                />
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Get Early Access
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Already have an account?{" "}
                <a href="#" className="text-primary hover:underline">
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
