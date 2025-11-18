import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedData = () => {
  const services = [
    {
      title: "Agentic Data Engineering Audits",
      pricing: "$25K-50K | 2-4 weeks",
      description: "155-point assessment framework",
      deliverables: [
        "Executive presentation",
        "Security & compliance report",
        "Performance optimization review",
        "12-month roadmap",
      ],
    },
    {
      title: "Agentic Fabric Modernization",
      pricing: "$200K-750K | 4-9 months",
      description: "Complete platform transformation",
      deliverables: [
        "Medallion architecture design",
        "Data pipeline migration",
        "Performance optimization",
        "Team training & handover",
      ],
    },
    {
      title: "Agentic Fabric Migration",
      pricing: "$150K-500K | 3-6 months",
      description: "Zero-downtime platform migration",
      deliverables: [
        "Source system analysis",
        "Parallel build & validation",
        "Cutover execution",
        "24/7 hypercare support",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <Badge className="mb-4">Most Mature Domain</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Start with Morfeus Data
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The most mature Morfeus domain—proven with 8+ years of Azure Fabric & Databricks delivery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  {service.pricing}
                </CardDescription>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="text-sm flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("https://ernst-3kn785vq.scoreapp.com/", "_blank")}
                >
                  Request Audit →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => window.location.href = "/data"}
          >
            View Full Morfeus Data Details →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedData;
