import { Card } from "@/components/ui/card";
import { Code2, Terminal, Globe } from "lucide-react";

const platforms = [
  {
    icon: Code2,
    title: "VS Code Extension",
    description: "Seamless integration into your development workflow",
    features: [
      "IntelliSense for agent APIs",
      "Real-time agent status",
      "Debug & monitoring tools",
      "One-click deployments"
    ]
  },
  {
    icon: Terminal,
    title: "Terminal Interface",
    description: "Command-line power for automation and CI/CD",
    features: [
      "Script-friendly CLI",
      "Pipeline integration",
      "Batch operations",
      "Advanced logging"
    ]
  },
  {
    icon: Globe,
    title: "Web Application",
    description: "Visual dashboard for team collaboration",
    features: [
      "Agent orchestration UI",
      "Performance analytics",
      "Team management",
      "Custom workflows"
    ]
  }
];

const PlatformSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            One Framework, <span className="text-gradient">Three Interfaces</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access Morfeus however you work best—from your IDE, terminal, or browser
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card
                key={platform.title}
                className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{platform.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {platform.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <ul className="space-y-2">
                      {platform.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="text-4xl font-bold text-primary">10x</div>
            <div className="text-sm text-muted-foreground">Faster Deployment</div>
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <div className="text-4xl font-bold text-secondary">85%</div>
            <div className="text-sm text-muted-foreground">Cost Reduction</div>
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="text-4xl font-bold text-accent">24/7</div>
            <div className="text-sm text-muted-foreground">Autonomous Operation</div>
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "700ms" }}>
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Observable</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
