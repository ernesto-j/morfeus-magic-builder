import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, RefreshCw, GitBranch } from "lucide-react";

const fabricTeams = [
  {
    icon: Sparkles,
    title: "MS Fabric Greenfield",
    description: "Build next-generation data platforms from scratch",
    capabilities: [
      "Modern data architecture design",
      "Lakehouse implementation",
      "Real-time analytics setup",
      "AI/ML pipeline integration"
    ],
    badge: "New Projects",
    badgeColor: "bg-primary/20 text-primary border-primary/30"
  },
  {
    icon: RefreshCw,
    title: "MS Fabric Modernisation",
    description: "Transform legacy systems into modern data platforms",
    capabilities: [
      "Legacy system assessment",
      "Incremental migration strategy",
      "Zero-downtime transitions",
      "Performance optimization"
    ],
    badge: "Transformation",
    badgeColor: "bg-secondary/20 text-secondary border-secondary/30"
  },
  {
    icon: GitBranch,
    title: "MS Fabric Migration",
    description: "Seamless migration to Microsoft Fabric ecosystem",
    capabilities: [
      "Data warehouse migration",
      "ETL pipeline conversion",
      "Security & compliance mapping",
      "Automated testing & validation"
    ],
    badge: "Migration",
    badgeColor: "bg-accent/20 text-accent border-accent/30"
  }
];

const FabricTeamsSection = () => {
  return (
    <section className="relative py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            Microsoft Fabric Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Specialized <span className="text-primary">Data Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pre-configured AI agent teams optimized for every phase of your Microsoft Fabric journey
          </p>
        </div>

        {/* Teams grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {fabricTeams.map((team, index) => {
            const Icon = team.icon;
            return (
              <Card
                key={team.title}
                className="group relative overflow-hidden border-border bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${team.badgeColor}`}>
                      {team.badge}
                    </span>
                  </div>
                  
                  <div>
                    <CardTitle className="text-xl mb-2">{team.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {team.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Key Capabilities
                    </p>
                    <ul className="space-y-2">
                      {team.capabilities.map((capability) => (
                        <li key={capability} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary mt-2" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FabricTeamsSection;
