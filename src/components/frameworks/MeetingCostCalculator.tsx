import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MeetingCostCalculator = () => {
  const [attendees, setAttendees] = useState(8);
  const [avgSalary, setAvgSalary] = useState(120000);
  const [meetingHours, setMeetingHours] = useState(2);
  const [decisionDelay, setDecisionDelay] = useState(4);

  const hourlyRate = avgSalary / 2080; // 2080 work hours per year
  const meetingCost = attendees * hourlyRate * meetingHours;
  const weeklyDelayCost = meetingCost * decisionDelay;
  const annualOpportunityCost = weeklyDelayCost * 52;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <Calculator className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h3 className="text-2xl font-bold mb-2">Meeting Cost & Decision Delay Calculator</h3>
        <p className="text-muted-foreground">
          Calculate the true cost of meetings and delayed decisions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 border-2">
            <h4 className="text-lg font-bold mb-4">Meeting Parameters</h4>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="attendees" className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4" />
                  Number of Attendees
                </Label>
                <Input
                  id="attendees"
                  type="number"
                  value={attendees}
                  onChange={(e) => setAttendees(Number(e.target.value))}
                  min={1}
                  max={50}
                />
              </div>

              <div>
                <Label htmlFor="salary" className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4" />
                  Average Annual Salary ($)
                </Label>
                <Input
                  id="salary"
                  type="number"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  min={30000}
                  max={500000}
                  step={10000}
                />
              </div>

              <div>
                <Label htmlFor="hours" className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4" />
                  Meeting Duration (hours)
                </Label>
                <Input
                  id="hours"
                  type="number"
                  value={meetingHours}
                  onChange={(e) => setMeetingHours(Number(e.target.value))}
                  min={0.5}
                  max={8}
                  step={0.5}
                />
              </div>

              <div>
                <Label htmlFor="delay" className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4" />
                  Decision Delay (weeks)
                </Label>
                <Input
                  id="delay"
                  type="number"
                  value={decisionDelay}
                  onChange={(e) => setDecisionDelay(Number(e.target.value))}
                  min={0}
                  max={52}
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6 border-2 border-primary/50 bg-primary/5 h-full">
            <h4 className="text-lg font-bold mb-4">Cost Analysis</h4>
            
            <div className="space-y-6">
              <motion.div
                key={meetingCost}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="p-4 bg-background rounded-lg border border-border"
              >
                <div className="text-sm text-muted-foreground mb-1">Single Meeting Cost</div>
                <div className="text-3xl font-bold text-primary">
                  ${meetingCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </motion.div>

              <motion.div
                key={weeklyDelayCost}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="p-4 bg-background rounded-lg border border-border"
              >
                <div className="text-sm text-muted-foreground mb-1">
                  Cost of {decisionDelay} Week Delay
                </div>
                <div className="text-3xl font-bold text-orange-600">
                  ${weeklyDelayCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </motion.div>

              <motion.div
                key={annualOpportunityCost}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="p-4 bg-background rounded-lg border border-border"
              >
                <div className="text-sm text-muted-foreground mb-1">
                  Annual Opportunity Cost
                </div>
                <div className="text-3xl font-bold text-red-600">
                  ${annualOpportunityCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </motion.div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <strong>Hourly Rate:</strong> ${hourlyRate.toFixed(2)}/hour per person
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-accent/10 border border-accent/30 rounded-lg p-6"
      >
        <h4 className="font-semibold mb-2 text-center">The 10-80-10 Solution</h4>
        <p className="text-sm text-muted-foreground text-center">
          AI agents can analyze data 24/7, present recommendations instantly, and reduce decision delay 
          from weeks to hours—saving hundreds of thousands in opportunity cost.
        </p>
      </motion.div>
    </div>
  );
};

export default MeetingCostCalculator;
