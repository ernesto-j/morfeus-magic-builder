import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SocialProof = () => {
  const clients = [
    { name: "Bain & Company", logo: "/logos/bain-logo.png" },
    { name: "ANZ Bank", logo: "/logos/anz-logo.png" },
    { name: "Shell", logo: "/logos/shell-logo.png" },
    { name: "Sportsbet", logo: "/logos/sportsbet-logo.png" },
  ];

  const results = [
    "$1.9M value identified",
    "47 security findings (12 critical)",
    "31 performance optimizations",
    "2-week timeline (vs. 3-month traditional)",
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Trusted By
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 items-center justify-items-center">
          {clients.map((client, index) => (
            <img 
              key={index}
              src={client.logo} 
              alt={client.name}
              className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
        
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">
              UCQ Healthcare: $1.9M Value Identified in 2 Weeks
            </CardTitle>
            <CardDescription className="text-base">
              <span className="font-semibold">Challenge:</span> 3-year-old Azure Fabric with performance issues
              <br />
              <span className="font-semibold">Solution:</span> Morfeus Data 2-week agentic audit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {results.map((result, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-semibold">{result}</span>
                </div>
              ))}
            </div>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg mb-4">
              "What would have taken 3 months took 2 weeks. And the agents are still working."
              <footer className="text-sm text-muted-foreground mt-2">
                — Head of Data & Analytics, UCQ Healthcare
              </footer>
            </blockquote>
            
            <Button variant="outline">
              Read Full Case Study →
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SocialProof;
