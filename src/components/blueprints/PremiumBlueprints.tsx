import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PremiumBlueprints = () => {
  const blueprints = [
    {
      title: "Morfeus Framework",
      tagline: "5-Pillar Architecture. Production-Ready.",
      price: "$25K one-time license",
      pillars: [
        "Data Foundation (Medallion architecture)",
        "Platform Infrastructure (Terraform/Bicep IaC)",
        "Agent Orchestration (BMAD, Archon MCP)",
        "Observability (Prometheus + Grafana + Loki)",
        "Governance (Policy-as-code, RBAC)",
      ],
    },
    {
      title: "BMAD Orchestrator",
      tagline: "12+ Specialized AI Agents. Orchestrated.",
      price: "$50K one-time license",
      pillars: [
        "Mary - Business Analyst",
        "Sophia - Azure Fabric Engineer",
        "Marcus - Security Architect",
        "Plus 9 more specialized agents",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Premium Blueprints
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blueprints.map((blueprint, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{blueprint.title}</CardTitle>
                <p className="text-muted-foreground">{blueprint.tagline}</p>
                <p className="text-primary font-bold text-lg">{blueprint.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {blueprint.pillars.map((pillar, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">{idx + 1}.</span>
                      {pillar}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("https://ernst-3kn785vq.scoreapp.com/", "_blank")}
                >
                  Request Demo →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumBlueprints;
