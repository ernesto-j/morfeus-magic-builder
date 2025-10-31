import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Zap, GraduationCap, ArrowRight } from "lucide-react";

const offerings = [
  {
    icon: Briefcase,
    title: "Consulting",
    description: "Expert guidance for your AI and data transformation journey",
    features: [
      "Strategic AI implementation roadmaps",
      "Architecture design & review",
      "Best practices & governance",
      "Team enablement & training"
    ],
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Framework as a Service",
    description: "Deploy autonomous AI agents with zero infrastructure hassle",
    features: [
      "Managed agent orchestration",
      "Scalable cloud infrastructure",
      "Real-time monitoring & observability",
      "Enterprise-grade security"
    ],
    color: "text-secondary"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Empower your teams with cutting-edge AI agent knowledge",
    features: [
      "Hands-on workshops & bootcamps",
      "Certification programs",
      "Custom curriculum development",
      "Ongoing learning support"
    ],
    color: "text-accent"
  }
];

const OfferingsSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Choose Your <span className="text-gradient">Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you need strategic guidance, a managed platform, or team education, 
            Morfeus adapts to your organization's needs
          </p>
        </div>

        {/* Offerings grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <Card
                key={offering.title}
                className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${offering.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{offering.title}</CardTitle>
                  <CardDescription className="text-base">
                    {offering.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {offering.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${offering.color}`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

export default OfferingsSection;
