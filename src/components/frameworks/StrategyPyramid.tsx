import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const levels = [
  {
    title: "Ambition",
    description: "Transform data platforms with AI-first thinking",
    width: "w-full md:w-3/4 lg:w-2/3",
    color: "bg-primary/20 border-primary/50"
  },
  {
    title: "Where to Play",
    description: "Azure Fabric, Databricks, Agentic Consulting",
    width: "w-full md:w-4/5 lg:w-3/4",
    color: "bg-accent/20 border-accent/50"
  },
  {
    title: "How to Win",
    description: "10-80-10 methodology: Humans + AI + Automation",
    width: "w-full md:w-[85%] lg:w-4/5",
    color: "bg-primary/20 border-primary/50"
  },
  {
    title: "Priorities",
    description: "Ship blueprints, scale consulting, build community",
    width: "w-full md:w-[90%] lg:w-[85%]",
    color: "bg-accent/20 border-accent/50"
  },
  {
    title: "Journey",
    description: "From framework to platform to ecosystem",
    width: "w-full md:w-[95%] lg:w-[90%]",
    color: "bg-primary/20 border-primary/50"
  }
];

const StrategyPyramid = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      {levels.map((level, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={level.width}
        >
          <Card 
            className={`p-6 text-center border-2 ${level.color} hover:shadow-lg transition-all duration-300 cursor-pointer`}
          >
            <h3 className="text-xl font-bold mb-2">{level.title}</h3>
            <p className="text-sm text-muted-foreground">{level.description}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default StrategyPyramid;
