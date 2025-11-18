import { motion } from "framer-motion";

const quadrants = [
  {
    position: "top-left",
    title: "Buy/Rent",
    description: "Commodity capabilities",
    examples: ["Cloud storage", "Auth services", "Email delivery"],
    color: "bg-primary/10 border-primary/50"
  },
  {
    position: "top-right",
    title: "Buy + Customize",
    description: "Strategic but not unique",
    examples: ["CRM platforms", "BI tools", "Orchestrators"],
    color: "bg-accent/10 border-accent/50"
  },
  {
    position: "bottom-left",
    title: "Outsource",
    description: "Non-critical operations",
    examples: ["Help desk", "Basic monitoring", "Data entry"],
    color: "bg-muted/30 border-muted/50"
  },
  {
    position: "bottom-right",
    title: "Build",
    description: "Core competitive advantage",
    examples: ["Proprietary algorithms", "Domain agents", "IP"],
    color: "bg-secondary/10 border-secondary/50"
  }
];

const BuildVsBuyMatrix = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Build vs. Buy Decision Matrix</h3>
        <p className="text-muted-foreground">Strategic framework for technology investments</p>
      </div>

      <div className="relative">
        {/* Axis labels */}
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-semibold text-muted-foreground">
          Strategic Value →
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-sm font-semibold text-muted-foreground">
          Competitive Differentiation →
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-2 gap-4 p-8 border-2 border-border rounded-lg">
          {quadrants.map((quadrant, index) => (
            <motion.div
              key={quadrant.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-6 rounded-lg border-2 ${quadrant.color} hover:shadow-lg transition-all duration-300`}
            >
              <h4 className="text-lg font-bold mb-2">{quadrant.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{quadrant.description}</p>
              <div className="space-y-1">
                {quadrant.examples.map((example, i) => (
                  <div key={i} className="text-xs flex items-center">
                    <span className="mr-1">•</span>
                    {example}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BuildVsBuyMatrix;
