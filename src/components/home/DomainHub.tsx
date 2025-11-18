import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DomainHub = () => {
  const domains = [
    {
      title: "Morfeus Data",
      description: "Azure Fabric & Databricks Agentic Consulting",
      color: "from-blue-500/20 to-blue-600/20",
      services: [
        "Audits: $25K-50K, 2-4 weeks",
        "Modernization: $200K-750K, 4-9 months",
        "Migration: $150K-500K, 3-6 months",
      ],
      href: "/data",
    },
    {
      title: "Morfeus Cyber",
      description: "Security Assessment & Compliance",
      color: "from-red-500/20 to-red-600/20",
      services: [
        "Security audits & penetration testing",
        "Compliance frameworks (APRA, GDPR)",
        "Threat modeling & risk assessment",
      ],
      href: "/cyber",
    },
    {
      title: "Morfeus Engineer",
      description: "Platform Engineering & DevOps",
      color: "from-green-500/20 to-green-600/20",
      services: [
        "Infrastructure as Code (Terraform/Bicep)",
        "CI/CD pipeline automation",
        "Cloud architecture optimization",
      ],
      href: "/engineer",
    },
    {
      title: "Morfeus Architecture",
      description: "Enterprise Architecture & Strategy",
      color: "from-purple-500/20 to-purple-600/20",
      services: [
        "Technology roadmap planning",
        "System integration design",
        "Architecture governance",
      ],
      href: "/architecture",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          5 Specialized Domains. 1 Unified Framework.
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
            MORFEUS
            <br />
            SUITE
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain, index) => (
            <Card 
              key={index}
              className="hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <CardHeader className={`bg-gradient-to-br ${domain.color} rounded-t-lg`}>
                <CardTitle>{domain.title}</CardTitle>
                <CardDescription className="text-foreground/80">
                  {domain.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 mb-4">
                  {domain.services.map((service, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {service}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = domain.href}
                >
                  Explore {domain.title.split(" ")[1]} →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainHub;
