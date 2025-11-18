import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, DollarSign, Brain, Shield, TrendingUp, Users } from "lucide-react";

const BenefitsGrid = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Speed",
      stat: "3x Faster Delivery",
      traditional: "12-18 months",
      agentic: "3-6 months",
      why: "AI agents work 24/7, analyze 100% of data",
      example: "UCQ Healthcare: 2 weeks vs. 3-month quote (7.5x faster)",
    },
    {
      icon: DollarSign,
      title: "Cost",
      stat: "60% Cost Reduction",
      traditional: "$2M-$5M",
      agentic: "$200K-$750K",
      why: "Automated analysis reduces manual effort",
      example: "Average engagement: $500K vs. $3M traditional",
    },
    {
      icon: Brain,
      title: "Knowledge Retention",
      stat: "100% Persistent",
      traditional: "Lost when consultants leave",
      agentic: "Always available",
      why: "AI agents retain all context and learning",
      example: "Agents continuously improve from each engagement",
    },
    {
      icon: Shield,
      title: "Coverage",
      stat: "100% Data Analysis",
      traditional: "<10% sample-based",
      agentic: "100% comprehensive",
      why: "AI can process entire datasets",
      example: "UCQ: Analyzed all 500+ tables, not samples",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      stat: "Always Current",
      traditional: "Point-in-time deliverable",
      agentic: "Living documentation",
      why: "Agents monitor and update continuously",
      example: "Platform changes trigger automatic reassessment",
    },
    {
      icon: Users,
      title: "Human-AI Collaboration",
      stat: "Best of Both",
      traditional: "100% human effort",
      agentic: "10-80-10 optimal mix",
      why: "Humans for strategy, AI for execution",
      example: "4-8 hours/week human time, 24/7 AI analysis",
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          The Agentic Consulting Advantage
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <Icon className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <p className="text-2xl font-bold text-primary">{benefit.stat}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Traditional</p>
                      <p className="font-semibold">{benefit.traditional}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Agentic</p>
                      <p className="font-semibold text-primary">{benefit.agentic}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Why?</p>
                    <p className="text-sm">{benefit.why}</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded text-sm">
                    <p className="font-semibold mb-1">Example:</p>
                    <p className="text-muted-foreground">{benefit.example}</p>
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

export default BenefitsGrid;
