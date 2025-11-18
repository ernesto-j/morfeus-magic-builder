import { motion } from "framer-motion";
import { CheckCircle, Circle, ArrowRight } from "lucide-react";

const phases = [
  {
    phase: "Phase 1: Foundation",
    duration: "Months 1-3",
    status: "current",
    milestones: [
      { task: "Assess current state (ClickOps audit)", completed: true },
      { task: "Define 10-80-10 strategy", completed: true },
      { task: "Build MVP agent (1 use case)", completed: false },
      { task: "Establish observability baseline", completed: false }
    ],
    color: "bg-blue-50 dark:bg-blue-950/30 border-blue-500"
  },
  {
    phase: "Phase 2: Expansion",
    duration: "Months 4-6",
    status: "planned",
    milestones: [
      { task: "Deploy 3-5 additional agents", completed: false },
      { task: "Implement agent orchestration", completed: false },
      { task: "Train team on AX principles", completed: false },
      { task: "Achieve Level 2 OSA maturity", completed: false }
    ],
    color: "bg-green-50 dark:bg-green-950/30 border-green-500"
  },
  {
    phase: "Phase 3: Optimization",
    duration: "Months 7-9",
    status: "future",
    milestones: [
      { task: "Multi-agent coordination", completed: false },
      { task: "Predictive capabilities (grey swan detection)", completed: false },
      { task: "Cost optimization (Platform Economics)", completed: false },
      { task: "Achieve Level 3 OSA maturity", completed: false }
    ],
    color: "bg-purple-50 dark:bg-purple-950/30 border-purple-500"
  },
  {
    phase: "Phase 4: Autonomy",
    duration: "Months 10-12",
    status: "future",
    milestones: [
      { task: "Self-healing systems", completed: false },
      { task: "Continuous learning loops", completed: false },
      { task: "Zero-touch operations for 80% of tasks", completed: false },
      { task: "Achieve Level 4 OSA maturity", completed: false }
    ],
    color: "bg-orange-50 dark:bg-orange-950/30 border-orange-500"
  }
];

const TransformationRoadmap = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-2">AI-Native Transformation Roadmap</h3>
        <p className="text-muted-foreground">
          12-month journey from ClickOps to autonomous operations
        </p>
      </motion.div>

      <div className="space-y-6">
        {phases.map((phase, phaseIndex) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: phaseIndex * 0.15 }}
            className={`border-2 rounded-lg p-6 ${phase.color}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold">{phase.phase}</h4>
                <p className="text-sm text-muted-foreground">{phase.duration}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                phase.status === 'current' ? 'bg-blue-600 text-white' :
                phase.status === 'planned' ? 'bg-green-600 text-white' :
                'bg-gray-400 text-white'
              }`}>
                {phase.status.toUpperCase()}
              </div>
            </div>

            <div className="space-y-3">
              {phase.milestones.map((milestone, milestoneIndex) => (
                <motion.div
                  key={milestoneIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: phaseIndex * 0.15 + milestoneIndex * 0.08 }}
                  className="flex items-center gap-3 p-3 bg-background/80 rounded border border-border hover:shadow-md transition-shadow"
                >
                  {milestone.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                  <span className={`text-sm ${milestone.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {milestone.task}
                  </span>
                </motion.div>
              ))}
            </div>

            {phaseIndex < phases.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center justify-center mt-4"
              >
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
              </motion.div>
            )}
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
        <h4 className="font-semibold mb-2">Success Metrics</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <div className="text-3xl font-bold text-primary">60%</div>
            <div className="text-sm text-muted-foreground">Cost Reduction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">3x</div>
            <div className="text-sm text-muted-foreground">Faster Delivery</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">80%</div>
            <div className="text-sm text-muted-foreground">Task Automation</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TransformationRoadmap;
