import { motion } from "framer-motion";
import { Database, Layers, Bot, Eye, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FivePillarsArchitectureProps {
  variant?: 'complete' | 'data-focused';
  animated?: boolean;
}

const pillars = [
  {
    icon: Database,
    title: "Data Foundation",
    description: "Lakehouse architecture, data mesh patterns, quality frameworks",
    color: "text-primary",
    borderColor: "border-primary/50"
  },
  {
    icon: Layers,
    title: "Platform Infrastructure",
    description: "Cloud-native architecture, IaC, CI/CD pipelines",
    color: "text-accent",
    borderColor: "border-accent/50"
  },
  {
    icon: Bot,
    title: "Agent Orchestration",
    description: "AI agents, workflow automation, decision engines",
    color: "text-secondary",
    borderColor: "border-secondary/50"
  },
  {
    icon: Eye,
    title: "Observability",
    description: "Monitoring, logging, alerting, performance tracking",
    color: "text-primary",
    borderColor: "border-primary/50"
  },
  {
    icon: Shield,
    title: "Governance",
    description: "Security, compliance, data lineage, access control",
    color: "text-accent",
    borderColor: "border-accent/50"
  }
];

const FivePillarsArchitecture = ({ 
  variant = 'complete', 
  animated = true 
}: FivePillarsArchitectureProps) => {
  const displayPillars = variant === 'data-focused' 
    ? pillars.filter(p => ['Data Foundation', 'Platform Infrastructure', 'Observability'].includes(p.title))
    : pillars;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {displayPillars.map((pillar, index) => {
        const Icon = pillar.icon;
        const MotionCard = animated ? motion.div : 'div';
        
        return (
          <MotionCard
            key={pillar.title}
            {...(animated ? {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: index * 0.1 }
            } : {})}
          >
            <Card className={`h-full border-2 ${pillar.borderColor} hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <CardHeader className="text-center pb-3">
                <Icon className={`w-10 h-10 mx-auto mb-3 ${pillar.color}`} />
                <CardTitle className="text-lg">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          </MotionCard>
        );
      })}
    </div>
  );
};

export default FivePillarsArchitecture;
