import { motion } from "framer-motion";
import { MousePointer, Code, Bot } from "lucide-react";
import { Card } from "@/components/ui/card";

const stages = [
  {
    icon: MousePointer,
    title: "ClickOps",
    subtitle: "Manual Configuration",
    characteristics: [
      "Point-and-click in UI",
      "High error rate",
      "No version control",
      "Manual documentation",
      "Can't scale"
    ],
    metrics: { speed: 20, reliability: 30, scale: 10 },
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/30"
  },
  {
    icon: Code,
    title: "DevOps",
    subtitle: "Infrastructure as Code",
    characteristics: [
      "Git-based workflows",
      "Automated deployments",
      "Repeatable processes",
      "Code reviews",
      "Moderate scale"
    ],
    metrics: { speed: 60, reliability: 80, scale: 60 },
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30"
  },
  {
    icon: Bot,
    title: "AgentOps",
    subtitle: "Intelligent Automation",
    characteristics: [
      "AI-driven decisions",
      "Self-healing systems",
      "Predictive optimization",
      "Autonomous operations",
      "Infinite scale"
    ],
    metrics: { speed: 95, reliability: 95, scale: 100 },
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/30"
  }
];

const ClickOpsEvolution = () => {
  return (
    <div className="space-y-8">
      {/* Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`h-full p-6 ${stage.bgColor} border-2 hover:shadow-xl transition-all duration-300`}>
                <div className="text-center mb-4">
                  <Icon className={`w-12 h-12 mx-auto mb-3 ${stage.color}`} />
                  <h3 className="text-xl font-bold mb-1">{stage.title}</h3>
                  <p className="text-sm text-muted-foreground">{stage.subtitle}</p>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {stage.characteristics.map((char, i) => (
                    <li key={i} className="text-sm flex items-start">
                      <span className={`${stage.color} mr-2`}>•</span>
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t border-border space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Speed</span>
                      <span className="font-semibold">{stage.metrics.speed}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stage.metrics.speed}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                        className={`h-2 rounded-full ${stage.color.replace('text-', 'bg-')}`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Reliability</span>
                      <span className="font-semibold">{stage.metrics.reliability}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stage.metrics.reliability}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                        className={`h-2 rounded-full ${stage.color.replace('text-', 'bg-')}`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Scale</span>
                      <span className="font-semibold">{stage.metrics.scale}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stage.metrics.scale}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                        className={`h-2 rounded-full ${stage.color.replace('text-', 'bg-')}`}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Arrow visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex items-center justify-center gap-4 text-muted-foreground"
      >
        <div className="text-sm font-semibold">Evolution</div>
        <div className="flex-1 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 rounded-full max-w-md" />
        <div className="text-sm font-semibold">→</div>
      </motion.div>
    </div>
  );
};

export default ClickOpsEvolution;
