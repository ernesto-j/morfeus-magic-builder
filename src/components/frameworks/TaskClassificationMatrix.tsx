import { motion } from "framer-motion";

const taskTypes = [
  {
    category: "Perfect for 10-80-10",
    color: "bg-accent/10 border-accent/50",
    tasks: [
      { task: "Data quality checks", human: 10, ai: 80, approval: 10 },
      { task: "Pipeline optimization", human: 10, ai: 85, approval: 5 },
      { task: "Schema migrations", human: 15, ai: 75, approval: 10 },
      { task: "Cost analysis", human: 5, ai: 90, approval: 5 }
    ]
  },
  {
    category: "Hybrid Approach",
    color: "bg-secondary/10 border-secondary/50",
    tasks: [
      { task: "Architecture design", human: 40, ai: 40, approval: 20 },
      { task: "Security reviews", human: 30, ai: 50, approval: 20 },
      { task: "Performance tuning", human: 25, ai: 60, approval: 15 }
    ]
  },
  {
    category: "Human-Led",
    color: "bg-primary/10 border-primary/50",
    tasks: [
      { task: "Strategic planning", human: 70, ai: 20, approval: 10 },
      { task: "Stakeholder alignment", human: 80, ai: 10, approval: 10 },
      { task: "Crisis management", human: 75, ai: 15, approval: 10 }
    ]
  }
];

const TaskClassificationMatrix = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Task Classification for 10-80-10</h3>
        <p className="text-muted-foreground">Identify which tasks benefit most from agentic automation</p>
      </div>

      {taskTypes.map((type, categoryIndex) => (
        <motion.div
          key={type.category}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
          className={`border-2 rounded-lg p-6 ${type.color}`}
        >
          <h4 className="text-lg font-bold mb-4">{type.category}</h4>
          
          <div className="space-y-3">
            {type.tasks.map((item, taskIndex) => (
              <motion.div
                key={item.task}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.2 + taskIndex * 0.1 }}
                className="bg-background/80 rounded p-4 border border-border"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{item.task}</span>
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 bg-primary/20 rounded">
                      H: {item.human}%
                    </span>
                    <span className="px-2 py-1 bg-accent/20 rounded">
                      AI: {item.ai}%
                    </span>
                    <span className="px-2 py-1 bg-secondary/20 rounded">
                      A: {item.approval}%
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-1 h-3 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.human}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-primary"
                    style={{ width: `${item.human}%` }}
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.ai}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-accent"
                    style={{ width: `${item.ai}%` }}
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.approval}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="bg-secondary"
                    style={{ width: `${item.approval}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      <div className="bg-muted/50 border border-border rounded-lg p-4 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold">Rule of thumb:</span> Tasks with clear success criteria, 
          repeatable patterns, and high data volume are ideal for 10-80-10.
        </p>
      </div>
    </div>
  );
};

export default TaskClassificationMatrix;
