import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Boxes, Settings, Terminal, Bug, BarChart3, Cloud } from "lucide-react";
import { useState, useEffect } from "react";

const teams = [
  {
    icon: Boxes,
    title: "The Architect",
    description: "System design & planning",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Settings,
    title: "The Engineer",
    description: "Infrastructure & deployment",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Terminal,
    title: "The Coder",
    description: "Code generation & refactoring",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Bug,
    title: "The Debugger",
    description: "Testing & bug fixes",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: BarChart3,
    title: "The Data Smith",
    description: "Data analysis & insights",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Cloud,
    title: "The Cloud Oracle",
    description: "Cloud operations & scaling",
    gradient: "from-accent/20 to-accent/5",
  },
];

const TeamsSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "Morfeus Autonomous Team",
    "AI Squad",
    "Agentic Army"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Your <span className="text-primary transition-all duration-300">{phrases[currentPhrase]}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pre-configured AI agents specialized for Microsoft Fabric migrations, modernizations, and greenfield projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => {
            const Icon = team.icon;
            return (
              <Card
                key={team.title}
                className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${team.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{team.title}</CardTitle>
                  <CardDescription>{team.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
