import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, Video, Activity } from "lucide-react";

const FreeTools = () => {
  const tools = [
    {
      icon: Search,
      title: "FabricScope",
      badge: "Free Trial",
      description: "Live Fabric architecture scanning tool and architecture assessment",
      features: "155-point framework | Real-time analysis | 12 dimensions",
    },
    {
      icon: Shield,
      title: "PII Profiler",
      badge: "Free Trial",
      description: "Policy RAG - AI-powered policy documentation search",
      features: "GDPR compliant | Privacy Act ready | Natural language queries",
    },
    {
      icon: Video,
      title: "BIBugger",
      badge: "Beta",
      description: "MS Teams Integrated BI Video bug capturing tool",
      features: "Teams integration | Video capture | Auto-ticketing",
    },
    {
      icon: Activity,
      title: "DataSentinel",
      badge: "Beta",
      description: "Live Data Engineering pipeline tool",
      features: "Log scanning | ADO/JIRA integration | AI-powered fix suggestions",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Start Free with Morfeus Blueprints
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Powerful tools to assess and optimize your data platforms
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <Badge className="mx-auto mb-2">{tool.badge}</Badge>
                  <CardTitle>{tool.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    {tool.description}
                  </p>
                  <p className="text-xs font-semibold text-primary mb-4">
                    {tool.features}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = "/blueprints"}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FreeTools;
