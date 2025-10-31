import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, RefreshCw, GitBranch, Database, Workflow, Brain, BarChart3, Layers, Code2, Boxes, Cloud, TestTube, Palette, Rocket, FileCode, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { useTypewriter } from "@/hooks/use-typewriter";

// Data Teams Configuration
const dataTeamCenter = {
  icon: Database,
  title: "Data Architect",
  description: "System design & strategy",
};

const dataTeamMembers = [
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

// Context Engineering Teams Configuration
const contextEngineeringCenter = {
  icon: Boxes,
  title: "Solution Architect",
  description: "System design & integration",
};

const contextEngineeringMembers = [
  {
    icon: Code2,
    title: "Frontend Developer",
    description: "UI/UX implementation",
  },
  {
    icon: FileCode,
    title: "Backend Developer",
    description: "API & server logic",
  },
  {
    icon: Cloud,
    title: "DevOps Engineer",
    description: "CI/CD & infrastructure",
  },
  {
    icon: TestTube,
    title: "QA Engineer",
    description: "Testing & quality",
  },
  {
    icon: Palette,
    title: "UX Designer",
    description: "User experience",
  },
];

const fabricTeams = [
  {
    icon: Sparkles,
    title: "Data Platform Greenfield",
    description: "Build modern data platforms from the ground up",
    capabilities: [
      "Modern data architecture design",
      "Data warehouse & lake architecture",
      "Real-time analytics setup",
      "AI/ML pipeline integration"
    ],
    badge: "New Projects",
    badgeColor: "bg-primary/20 text-primary border-primary/30"
  },
  {
    icon: RefreshCw,
    title: "Data Platform Modernisation",
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
    title: "Data Platform Migration",
    description: "Seamless migration between modern data platforms",
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

const contextEngineeringTeams = [
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description: "Build MVPs and proof-of-concepts at lightning speed",
    capabilities: [
      "Low-code/no-code integration",
      "Rapid iteration cycles",
      "User feedback integration",
      "Quick deployment pipelines"
    ],
    badge: "Fast Track",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30"
  },
  {
    icon: Zap,
    title: "Full-Stack Development",
    description: "End-to-end application development with modern tech stack",
    capabilities: [
      "React & TypeScript frontend",
      "Node.js backend services",
      "Real-time data synchronization",
      "Progressive web apps"
    ],
    badge: "Complete Solution",
    badgeColor: "bg-purple-400/20 text-purple-300 border-purple-400/30"
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Scalable applications built for the cloud",
    capabilities: [
      "Microservices architecture",
      "Container orchestration",
      "Serverless functions",
      "Auto-scaling infrastructure"
    ],
    badge: "Enterprise",
    badgeColor: "bg-purple-600/20 text-purple-500 border-purple-600/30"
  }
];

// Separate component to ensure typewriter resets on team change
const TypewriterText = ({ isDataTeam }: { isDataTeam: boolean }) => {
  const { displayText: titleText, isTyping: titleTyping } = useTypewriter({
    phrases: [isDataTeam ? "Data Teams" : "App Development Teams"],
    typingSpeed: 80,
    deletingSpeed: 0,
    pauseDuration: 999999,
  });

  const { displayText: subtitleText, isTyping: subtitleTyping } = useTypewriter({
    phrases: [
      isDataTeam
        ? "Customisable Data AI teams for every phase of your architecture"
        : "Full-stack development teams ready to build your next application"
    ],
    typingSpeed: 30,
    deletingSpeed: 0,
    pauseDuration: 999999,
  });

  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold">
        {isDataTeam ? "Specialized " : ""}
        <span className={isDataTeam ? "text-primary" : "text-purple-400"}>
          {titleText}<span className={`${titleTyping ? 'animate-pulse' : 'opacity-0'}`}>_</span>
        </span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        {subtitleText}<span className={`${subtitleTyping ? 'animate-pulse' : 'opacity-0'}`}>_</span>
      </p>
    </>
  );
};

const FabricTeamsSection = () => {
  const [selectedTeam, setSelectedTeam] = useState<"data" | "context">("data");

  const isDataTeam = selectedTeam === "data";
  const centerRole = isDataTeam ? dataTeamCenter : contextEngineeringCenter;
  const teamMembers = isDataTeam ? dataTeamMembers : contextEngineeringMembers;
  const teams = isDataTeam ? fabricTeams : contextEngineeringTeams;

  return (
    <section className="relative py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section header */}
        <div className="text-center space-y-6 animate-fade-in">
          {/* Team selector pills */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setSelectedTeam("data")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isDataTeam
                  ? "bg-primary/10 border border-primary/20 text-primary"
                  : "bg-card/50 border border-border text-muted-foreground hover:bg-card"
              }`}
            >
              Context Analytics
            </button>
            <button
              onClick={() => setSelectedTeam("context")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isDataTeam
                  ? "bg-purple-500/10 border border-purple-500/20 text-purple-400"
                  : "bg-card/50 border border-border text-muted-foreground hover:bg-card"
              }`}
            >
              Context Engineering
            </button>
          </div>

          <TypewriterText key={selectedTeam} isDataTeam={isDataTeam} />
        </div>

        {/* Spider Diagram */}
        <div className="relative flex items-center justify-center min-h-[600px] my-16">
          {/* Concentric circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`absolute w-[300px] h-[300px] rounded-full border ${isDataTeam ? "border-primary/20" : "border-purple-500/20"}`} />
            <div className={`absolute w-[450px] h-[450px] rounded-full border ${isDataTeam ? "border-primary/10" : "border-purple-500/10"}`} />
          </div>

          {/* Center Role */}
          <div className="relative z-10">
            <Card className={`w-40 h-40 flex items-center justify-center backdrop-blur-sm shadow-xl ${
              isDataTeam 
                ? "bg-primary/10 border-primary/50 shadow-primary/20" 
                : "bg-purple-500/10 border-purple-500/50 shadow-purple-500/20"
            }`}>
              <CardHeader className="p-4 text-center space-y-2">
                <div className={`w-12 h-12 mx-auto rounded-full border flex items-center justify-center ${
                  isDataTeam 
                    ? "bg-primary/20 border-primary" 
                    : "bg-purple-500/20 border-purple-500"
                }`}>
                  {centerRole.icon && <centerRole.icon className={`w-6 h-6 ${isDataTeam ? "text-primary" : "text-purple-400"}`} />}
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
            const radius = 225;
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
                  className={`absolute left-1/2 top-1/2 origin-center border-t ${isDataTeam ? "border-primary/20" : "border-purple-500/20"}`}
                  style={{
                    width: `${radius}px`,
                    transform: `translate(-100%, -50%) rotate(${angle - 90}deg)`,
                    transformOrigin: 'right center'
                  }}
                />
                
                <Card className={`w-32 h-32 flex items-center justify-center bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 ${
                  isDataTeam 
                    ? "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10" 
                    : "hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
                }`}>
                  <CardHeader className="p-3 text-center space-y-2">
                    <div className="w-10 h-10 mx-auto rounded-lg bg-card border border-border flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${isDataTeam ? "text-primary" : "text-purple-400"}`} />
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
          {teams.map((team, index) => {
            const Icon = team.icon;
            return (
              <Card
                key={team.title}
                className={`group relative overflow-hidden border-border bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in ${
                  isDataTeam ? "hover:shadow-primary/5" : "hover:shadow-purple-500/5"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center transition-colors ${
                      isDataTeam ? "group-hover:border-primary/50" : "group-hover:border-purple-500/50"
                    }`}>
                      <Icon className={`w-6 h-6 ${isDataTeam ? "text-primary" : "text-purple-400"}`} />
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
                    <p className={`text-xs font-semibold uppercase tracking-wider ${
                      isDataTeam ? "text-primary" : "text-purple-400"
                    }`}>
                      Key Capabilities
                    </p>
                    <ul className="space-y-2">
                      {team.capabilities.map((capability) => (
                        <li key={capability} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className={`w-1 h-1 rounded-full mt-2 ${
                            isDataTeam ? "bg-primary" : "bg-purple-400"
                          }`} />
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
