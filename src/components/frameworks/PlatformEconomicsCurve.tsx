import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: 0, platform: 0, project: 0 },
  { month: 3, platform: 20, project: 15 },
  { month: 6, platform: 50, project: 30 },
  { month: 9, platform: 100, project: 45 },
  { month: 12, platform: 180, project: 60 },
  { month: 15, platform: 300, project: 75 },
  { month: 18, platform: 480, project: 90 }
];

const PlatformEconomicsCurve = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold mb-2">Platform Economics vs. Project Model</h3>
          <p className="text-muted-foreground">Exponential returns from reusable components and automation</p>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="month" 
              label={{ value: 'Months', position: 'insideBottom', offset: -5 }}
              className="text-sm"
            />
            <YAxis 
              label={{ value: 'Value Delivered ($K)', angle: -90, position: 'insideLeft' }}
              className="text-sm"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="platform" 
              stroke="hsl(var(--accent))" 
              strokeWidth={3}
              name="Platform Model (Exponential)"
              dot={{ fill: 'hsl(var(--accent))', r: 5 }}
            />
            <Line 
              type="monotone" 
              dataKey="project" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              name="Traditional Projects (Linear)"
              dot={{ fill: 'hsl(var(--primary))', r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-accent/10 border border-accent/30 rounded p-4">
            <h4 className="font-semibold text-accent mb-2">Platform Model</h4>
            <ul className="text-sm space-y-1">
              <li>• Reusable components</li>
              <li>• Compounding automation</li>
              <li>• Knowledge retention</li>
              <li>• Network effects</li>
            </ul>
          </div>
          <div className="bg-primary/10 border border-primary/30 rounded p-4">
            <h4 className="font-semibold text-primary mb-2">Traditional Projects</h4>
            <ul className="text-sm space-y-1">
              <li>• Start from scratch each time</li>
              <li>• Linear progress</li>
              <li>• Knowledge walks out the door</li>
              <li>• No compounding benefits</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlatformEconomicsCurve;
