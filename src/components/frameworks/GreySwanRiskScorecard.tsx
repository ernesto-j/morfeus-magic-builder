import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Users, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const risks = [
  {
    icon: AlertTriangle,
    category: "Technical Debt",
    risk: "Undocumented legacy pipelines",
    impact: "High",
    probability: "Very High",
    severity: 9,
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/30"
  },
  {
    icon: TrendingDown,
    category: "Performance",
    risk: "Query performance degradation",
    impact: "Medium",
    probability: "High",
    severity: 7,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/30"
  },
  {
    icon: Users,
    category: "Knowledge",
    risk: "Key person dependency",
    impact: "High",
    probability: "Medium",
    severity: 7,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/30"
  },
  {
    icon: Clock,
    category: "Operational",
    risk: "Manual intervention required",
    impact: "Medium",
    probability: "Very High",
    severity: 8,
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/30"
  },
  {
    icon: AlertTriangle,
    category: "Data Quality",
    risk: "Inconsistent data definitions",
    impact: "High",
    probability: "High",
    severity: 8,
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/30"
  },
  {
    icon: TrendingDown,
    category: "Cost",
    risk: "Unoptimized resource usage",
    impact: "Medium",
    probability: "Medium",
    severity: 5,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/30"
  }
];

const getSeverityLabel = (severity: number) => {
  if (severity >= 8) return "Critical";
  if (severity >= 6) return "High";
  if (severity >= 4) return "Medium";
  return "Low";
};

const GreySwanRiskScorecard = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Grey Swan Risk Scorecard</h3>
        <p className="text-muted-foreground">
          Predictable risks that organizations often ignore until it's too late
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {risks.map((risk, index) => {
          const Icon = risk.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className={`p-5 border-2 ${risk.bgColor} h-full hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-start justify-between mb-3">
                  <Icon className={`w-8 h-8 ${risk.color}`} />
                  <span className={`text-xs font-bold px-2 py-1 rounded ${risk.color} bg-current/10`}>
                    {getSeverityLabel(risk.severity)}
                  </span>
                </div>
                
                <h4 className="font-bold mb-1">{risk.category}</h4>
                <p className="text-sm mb-4">{risk.risk}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Impact:</span>
                    <span className="font-semibold">{risk.impact}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Probability:</span>
                    <span className="font-semibold">{risk.probability}</span>
                  </div>
                  
                  <div className="pt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Risk Score</span>
                      <span className="font-bold">{risk.severity}/10</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${risk.severity * 10}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.08 }}
                        className={`h-2 rounded-full ${
                          risk.severity >= 8 ? 'bg-red-600' :
                          risk.severity >= 6 ? 'bg-orange-600' :
                          'bg-yellow-600'
                        }`}
                      />
                    </div>
                  </div>
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
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-muted/50 border border-border rounded-lg p-6"
      >
        <h4 className="font-semibold mb-2 text-center">What are Grey Swans?</h4>
        <p className="text-sm text-muted-foreground text-center">
          Unlike "black swans" (unpredictable events), grey swans are <strong>predictable but ignored</strong> risks. 
          They're visible, known, and often preventable—yet organizations fail to act until damage is done.
        </p>
      </motion.div>
    </div>
  );
};

export default GreySwanRiskScorecard;
