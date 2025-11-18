import { motion } from "framer-motion";
import { User, Bot } from "lucide-react";
import { Card } from "@/components/ui/card";

const comparisonPoints = [
  {
    aspect: "Primary User",
    ux: "Humans",
    ax: "AI Agents"
  },
  {
    aspect: "Interface",
    ux: "Visual, interactive UI",
    ax: "APIs, data contracts"
  },
  {
    aspect: "Documentation",
    ux: "User guides, tooltips",
    ax: "Schema definitions, OpenAPI specs"
  },
  {
    aspect: "Error Handling",
    ux: "User-friendly messages",
    ax: "Structured error codes, retry logic"
  },
  {
    aspect: "Performance",
    ux: "Sub-second response times",
    ax: "Millisecond latency, batch processing"
  },
  {
    aspect: "Authentication",
    ux: "Username/password, OAuth",
    ax: "API keys, service accounts, mTLS"
  },
  {
    aspect: "Versioning",
    ux: "Soft launches, gradual rollouts",
    ax: "Strict API versioning, backwards compatibility"
  },
  {
    aspect: "Monitoring",
    ux: "User analytics, session tracking",
    ax: "Request rates, error rates, latency distribution"
  },
  {
    aspect: "Testing",
    ux: "A/B tests, user testing",
    ax: "Contract tests, load tests, chaos engineering"
  }
];

const UXvsAXComparison = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">UX vs. AX: Different Design Principles</h3>
        <p className="text-muted-foreground">
          User Experience (UX) optimizes for humans. Agent Experience (AX) optimizes for AI systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 border-2 border-blue-500/50 bg-blue-50 dark:bg-blue-950/30 h-full">
            <div className="text-center mb-4">
              <User className="w-12 h-12 mx-auto mb-3 text-blue-600" />
              <h4 className="text-xl font-bold">User Experience (UX)</h4>
              <p className="text-sm text-muted-foreground">Designed for human interaction</p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 border-2 border-green-500/50 bg-green-50 dark:bg-green-950/30 h-full">
            <div className="text-center mb-4">
              <Bot className="w-12 h-12 mx-auto mb-3 text-green-600" />
              <h4 className="text-xl font-bold">Agent Experience (AX)</h4>
              <p className="text-sm text-muted-foreground">Designed for AI agent interaction</p>
            </div>
          </Card>
        </motion.div>
      </div>

      <div className="space-y-2">
        {comparisonPoints.map((point, index) => (
          <motion.div
            key={point.aspect}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="font-semibold text-center md:text-left">
              {point.aspect}
            </div>
            <div className="text-sm bg-blue-50 dark:bg-blue-950/30 p-3 rounded border border-blue-500/30">
              <span className="text-blue-600 font-semibold">UX: </span>
              {point.ux}
            </div>
            <div className="text-sm bg-green-50 dark:bg-green-950/30 p-3 rounded border border-green-500/30">
              <span className="text-green-600 font-semibold">AX: </span>
              {point.ax}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-accent/10 border border-accent/30 rounded-lg p-6"
      >
        <h4 className="font-semibold mb-2 text-center">Key Insight</h4>
        <p className="text-sm text-muted-foreground text-center">
          Modern platforms need BOTH excellent UX for human users AND excellent AX for AI agents. 
          They're complementary, not competing priorities.
        </p>
      </motion.div>
    </div>
  );
};

export default UXvsAXComparison;
