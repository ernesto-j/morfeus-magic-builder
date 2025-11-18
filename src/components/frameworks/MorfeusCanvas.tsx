import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const sections = [
  {
    title: "Agent Name & Purpose",
    placeholder: "e.g., DataQualityGuardian - Ensures data quality standards across pipelines",
    color: "bg-blue-50 dark:bg-blue-950/30 border-blue-500"
  },
  {
    title: "Triggers",
    placeholder: "What events activate this agent? (schedule, data arrival, threshold breach)",
    color: "bg-green-50 dark:bg-green-950/30 border-green-500"
  },
  {
    title: "Inputs",
    placeholder: "What data/context does the agent need? (schemas, configs, historical data)",
    color: "bg-purple-50 dark:bg-purple-950/30 border-purple-500"
  },
  {
    title: "Decision Logic",
    placeholder: "How does the agent make decisions? (rules, ML models, heuristics)",
    color: "bg-orange-50 dark:bg-orange-950/30 border-orange-500"
  },
  {
    title: "Actions",
    placeholder: "What can the agent do? (send alerts, fix issues, update configs)",
    color: "bg-red-50 dark:bg-red-950/30 border-red-500"
  },
  {
    title: "Outputs",
    placeholder: "What does the agent produce? (reports, tickets, logs, metrics)",
    color: "bg-teal-50 dark:bg-teal-950/30 border-teal-500"
  },
  {
    title: "Human Touchpoints",
    placeholder: "When do humans intervene? (approval gates, exception handling)",
    color: "bg-yellow-50 dark:bg-yellow-950/30 border-yellow-500"
  },
  {
    title: "Success Metrics",
    placeholder: "How do you measure agent performance? (accuracy, latency, cost savings)",
    color: "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-500"
  }
];

const MorfeusCanvas = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Morfeus Agent Design Canvas</h3>
        <p className="text-muted-foreground">
          One-page template to design intelligent automation agents
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Card className={`p-6 border-2 ${section.color} h-full hover:shadow-xl transition-all duration-300`}>
              <h4 className="text-lg font-bold mb-3">{section.title}</h4>
              <div className="min-h-[100px] p-4 bg-background/80 border border-border rounded text-sm text-muted-foreground italic">
                {section.placeholder}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-accent/10 border-2 border-accent/50 rounded-lg p-6 text-center"
      >
        <h4 className="font-semibold mb-2">Pro Tip</h4>
        <p className="text-sm text-muted-foreground">
          Start with a single, high-value use case. Prove the agent works. Then expand to adjacent workflows.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center"
      >
        <a
          href="/blueprints"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Download Canvas Template →
        </a>
      </motion.div>
    </div>
  );
};

export default MorfeusCanvas;
