import { motion } from "framer-motion";
import { MessageSquare, Bot, Network } from "lucide-react";
import { Card } from "@/components/ui/card";

const paradigms = [
  {
    icon: MessageSquare,
    title: "AI Assistance",
    subtitle: "Copilot Model",
    characteristics: [
      "Human in the loop",
      "Suggests, doesn't execute",
      "Reactive support",
      "Limited autonomy"
    ],
    useCase: "Code completion, content drafting",
    color: "text-primary",
    bgColor: "bg-primary/10 border-primary/50"
  },
  {
    icon: Bot,
    title: "AI Agents",
    subtitle: "Autonomous Execution",
    characteristics: [
      "Goal-oriented behavior",
      "Execute multi-step tasks",
      "Adaptive decision-making",
      "Proactive automation"
    ],
    useCase: "Data pipeline optimization, quality checks",
    color: "text-accent",
    bgColor: "bg-accent/10 border-accent/50"
  },
  {
    icon: Network,
    title: "AI Interoperability",
    subtitle: "Multi-Agent Systems",
    characteristics: [
      "Coordinated workflows",
      "Specialized agent roles",
      "Distributed intelligence",
      "System-level optimization"
    ],
    useCase: "End-to-end platform orchestration",
    color: "text-secondary",
    bgColor: "bg-secondary/10 border-secondary/50"
  }
];

const ThreeAIParadigms = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {paradigms.map((paradigm, index) => {
        const Icon = paradigm.icon;
        return (
          <motion.div
            key={paradigm.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card className={`h-full p-6 ${paradigm.bgColor} border-2 hover:shadow-xl transition-all duration-300`}>
              <div className="text-center mb-4">
                <Icon className={`w-12 h-12 mx-auto mb-3 ${paradigm.color}`} />
                <h3 className="text-xl font-bold mb-1">{paradigm.title}</h3>
                <p className="text-sm text-muted-foreground">{paradigm.subtitle}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Characteristics:</h4>
                <ul className="space-y-1">
                  {paradigm.characteristics.map((char, i) => (
                    <li key={i} className="text-sm flex items-start">
                      <span className={`${paradigm.color} mr-2`}>•</span>
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`mt-4 pt-4 border-t border-border`}>
                <p className="text-xs font-semibold text-muted-foreground mb-1">Use Case:</p>
                <p className="text-sm">{paradigm.useCase}</p>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ThreeAIParadigms;
