import { motion } from "framer-motion";
import { Eye, TrendingUp, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const dimensions = [
  {
    icon: Eye,
    title: "Observable",
    description: "Can you see what's happening?",
    levels: [
      { level: 1, label: "Blind", description: "No visibility into system state" },
      { level: 2, label: "Reactive", description: "Alert when things break" },
      { level: 3, label: "Proactive", description: "Predict issues before they occur" },
      { level: 4, label: "Omniscient", description: "Complete system understanding" }
    ],
    color: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description: "Can you handle growth?",
    levels: [
      { level: 1, label: "Manual", description: "Human intervention required" },
      { level: 2, label: "Semi-automated", description: "Some processes automated" },
      { level: 3, label: "Automated", description: "Fully automated scaling" },
      { level: 4, label: "Elastic", description: "Self-optimizing resources" }
    ],
    color: "text-green-600"
  },
  {
    icon: Zap,
    title: "Autonomous",
    description: "Can you self-operate?",
    levels: [
      { level: 1, label: "Dependent", description: "Constant human oversight" },
      { level: 2, label: "Assisted", description: "Guided automation" },
      { level: 3, label: "Independent", description: "Self-managing operations" },
      { level: 4, label: "Intelligent", description: "Self-improving systems" }
    ],
    color: "text-purple-600"
  }
];

const OSAMaturityMatrix = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">OSA Maturity Assessment</h3>
        <p className="text-muted-foreground">Evaluate your platform across three critical dimensions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dimensions.map((dimension, index) => {
          const Icon = dimension.icon;
          return (
            <motion.div
              key={dimension.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full p-6 border-2 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <Icon className={`w-12 h-12 mx-auto mb-3 ${dimension.color}`} />
                  <h4 className="text-xl font-bold mb-1">{dimension.title}</h4>
                  <p className="text-sm text-muted-foreground">{dimension.description}</p>
                </div>

                <div className="space-y-3">
                  {dimension.levels.map((level, i) => (
                    <motion.div
                      key={level.level}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.15 + i * 0.1 }}
                      className="p-3 bg-muted/50 rounded border border-border hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm">L{level.level}: {level.label}</span>
                        <span className={`text-xs px-2 py-1 rounded ${dimension.color} bg-current/10`}>
                          {level.level}/4
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{level.description}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center"
      >
        <p className="font-semibold mb-2">Target State: Level 3+ across all dimensions</p>
        <p className="text-sm text-muted-foreground">
          World-class platforms achieve Level 3 or higher in Observable, Scalable, and Autonomous
        </p>
      </motion.div>
    </div>
  );
};

export default OSAMaturityMatrix;
