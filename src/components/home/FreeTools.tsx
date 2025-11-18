import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, FileText } from "lucide-react";

const FreeTools = () => {
  const tools = [
    {
      icon: Search,
      title: "Fabric Scope",
      badge: "FREE Forever",
      description: "Azure Fabric architecture assessment tool",
      features: "155-point framework | 12 dimensions",
    },
    {
      icon: Shield,
      title: "PII Profiler",
      badge: "FREE Forever",
      description: "Automated PII detection & classification",
      features: "GDPR compliant | Privacy Act ready",
    },
    {
      icon: FileText,
      title: "Policy RAG",
      badge: "Coming Soon",
      description: "AI-powered policy documentation search",
      features: "Natural language queries | Context-aware",
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
