import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Database, Code, Shield, Building, Package } from "lucide-react";

interface Domain {
  title: string;
  description: string;
  status: "active" | "coming-soon" | "expansion-pack";
  services: string[];
  href: string;
  icon: any;
}

const MorfeusSuiteDiagram = () => {
  const domains: Domain[] = [
    {
      title: "Morfeus Data",
      description: "Azure Fabric & Databricks Agentic Consulting",
      status: "active",
      services: [
        "Audits: $25K-50K, 2-4 weeks",
        "Modernization: $200K-750K, 4-9 months",
        "Migration: $150K-500K, 3-6 months",
      ],
      href: "/data",
      icon: Database,
    },
    {
      title: "Context Engineering",
      description: "Agentic Software Development & Platform Engineering",
      status: "active",
      services: [
        "Full-stack development with AI agents",
        "Cloud-native architecture (Azure/AWS)",
        "CI/CD pipeline automation",
        "Infrastructure as Code (Terraform/Bicep)",
      ],
      href: "/engineer",
      icon: Code,
    },
    {
      title: "Morfeus Cyber",
      description: "Security Assessment & Compliance",
      status: "coming-soon",
      services: [
        "Security audits & penetration testing",
        "Compliance frameworks (APRA, GDPR)",
        "Threat modeling & risk assessment",
      ],
      href: "#",
      icon: Shield,
    },
    {
      title: "Morfeus Architecture",
      description: "Enterprise Architecture & Strategy",
      status: "coming-soon",
      services: [
        "Technology roadmap planning",
        "System integration design",
        "Architecture governance",
      ],
      href: "#",
      icon: Building,
    },
    {
      title: "Morfeus Blueprints",
      description: "Free Tools & Assessment Frameworks",
      status: "expansion-pack",
      services: [
        "FabricScope: Architecture scanning",
        "PII Profiler: Data classification",
        "BIBugger: BI bug tracking",
        "DataSentinel: Pipeline monitoring",
      ],
      href: "/blueprints",
      icon: Package,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-primary text-primary-foreground">Active</Badge>;
      case "coming-soon":
        return <Badge variant="secondary" className="bg-muted text-muted-foreground">Coming Soon</Badge>;
      case "expansion-pack":
        return <Badge className="bg-accent text-accent-foreground">Expansion Pack</Badge>;
      default:
        return null;
    }
  };

  // Calculate positions for circular layout
  const calculatePosition = (index: number, total: number, radius: number) => {
    const angle = (index * 360) / total - 90; // Start from top
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y, angle };
  };

  return (
    <div className="relative w-full py-12">
      {/* Desktop: Circular Layout */}
      <div className="hidden lg:block relative h-[900px] w-full max-w-7xl mx-auto">
        {/* Central Hub */}
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="w-56 h-56 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex flex-col items-center justify-center text-white font-bold text-xl shadow-2xl border-4 border-accent/50 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-pulse" />
            <Network className="w-12 h-12 mb-2 relative z-10" />
            <span className="text-center relative z-10 leading-tight">
              MORFEUS
              <br />
              ORCHESTRATOR
            </span>
          </div>
        </motion.div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {domains.map((_, index) => {
            const pos = calculatePosition(index, domains.length, 320);
            return (
              <motion.line
                key={index}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${pos.x}px)`}
                y2={`calc(50% + ${pos.y}px)`}
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeOpacity="0.3"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            );
          })}
        </svg>

        {/* Satellite Domains */}
        {domains.map((domain, index) => {
          const pos = calculatePosition(index, domains.length, 320);
          const Icon = domain.icon;
          
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `calc(50% + ${pos.x}px)`,
                top: `calc(50% + ${pos.y}px)`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            >
              <Card className="w-64 hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 border-primary/30 bg-card/95 backdrop-blur">
                <CardHeader className="relative">
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(domain.status)}
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{domain.title}</CardTitle>
                  </div>
                  <CardDescription className="text-xs">
                    {domain.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {domain.services.slice(0, 3).map((service, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground">
                        • {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile & Tablet: Stacked Layout */}
      <div className="lg:hidden space-y-6 max-w-2xl mx-auto">
        {/* Central Hub */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex flex-col items-center justify-center text-white font-bold text-base shadow-2xl border-4 border-accent/50">
            <Network className="w-8 h-8 mb-2" />
            <span className="text-center leading-tight text-sm">
              MORFEUS
              <br />
              ORCHESTRATOR
            </span>
          </div>
        </motion.div>

        {/* Satellite Domains */}
        {domains.map((domain, index) => {
          const Icon = domain.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 border-2 border-primary/30">
                <CardHeader className="relative">
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(domain.status)}
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{domain.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    {domain.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {domain.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        • {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MorfeusSuiteDiagram;
