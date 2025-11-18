import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileCheck, Calendar } from "lucide-react";

const FinalCTAs = () => {
  const ctas = [
    {
      icon: Download,
      title: "Free Fabric Scope Assessment",
      time: "15-Minute Self-Service",
      description: "Download and run your own Azure Fabric assessment",
      cta: "Download Fabric Scope (Free) →",
    },
    {
      icon: FileCheck,
      title: "Request Paid Audit",
      time: "2-Week Engagement | $25K-50K",
      description: "Let Morfeus agents conduct comprehensive assessment",
      cta: "Request Audit →",
    },
    {
      icon: Calendar,
      title: "Schedule Discovery Call",
      time: "30-Minute Consultation",
      description: "Talk to an expert about your specific challenges",
      cta: "Schedule Call →",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Ready to Experience Agentic Consulting?
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Choose your starting point
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctas.map((cta, index) => {
            const Icon = cta.icon;
            return (
              <Card key={index} className="hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{cta.title}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {cta.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {cta.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open("https://ernst-3kn785vq.scoreapp.com/", "_blank")}
                  >
                    {cta.cta}
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

export default FinalCTAs;
