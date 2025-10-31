import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, RefreshCw, GitBranch, Database, Workflow, Brain, BarChart3, Layers } from "lucide-react";

const centerRole = {
  icon: Database,
  title: "Data Architect",
  description: "System design & strategy",
};

const teamMembers = [
  {
    icon: Workflow,
    title: "Data Engineer",
    description: "Pipeline development",
  },
  {
    icon: Layers,
    title: "Analytics Engineer",
    description: "Data modeling",
  },
  {
    icon: Brain,
    title: "Data Scientist",
    description: "ML & AI solutions",
  },
  {
    icon: BarChart3,
    title: "BI Developer",
    description: "Visualization & reporting",
  },
  {
    icon: Sparkles,
    title: "ML Engineer",
    description: "Model deployment",
  },
];

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

        {/* Spider Diagram */}
        <div className="relative flex items-center justify-center min-h-[600px] my-16">
          {/* Concentric circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[300px] h-[300px] rounded-full border border-primary/20" />
            <div className="absolute w-[450px] h-[450px] rounded-full border border-primary/10" />
          </div>

          {/* Center - Data Architect */}
          <div className="relative z-10">
            <Card className="w-40 h-40 flex items-center justify-center bg-primary/10 border-primary/50 backdrop-blur-sm shadow-xl shadow-primary/20">
              <CardHeader className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-sm">{centerRole.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">{centerRole.description}</p>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Outer team members in circular layout */}
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            const angle = (index * 360) / teamMembers.length;
            const radius = 225; // Distance from center
            const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
            const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

            return (
              <div
                key={member.title}
                className="absolute z-10 animate-fade-in"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Connection line to center */}
                <div
                  className="absolute left-1/2 top-1/2 origin-center border-t border-primary/20"
                  style={{
                    width: `${radius}px`,
                    transform: `translate(-100%, -50%) rotate(${angle - 90}deg)`,
                    transformOrigin: 'right center'
                  }}
                />
                
                <Card className="w-32 h-32 flex items-center justify-center bg-card/80 backdrop-blur-sm hover:bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardHeader className="p-3 text-center space-y-2">
                    <div className="w-10 h-10 mx-auto rounded-lg bg-card border border-border flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xs">{member.title}</CardTitle>
                      <p className="text-[10px] text-muted-foreground">{member.description}</p>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Teams grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
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
