import { motion } from "framer-motion";
import { Brain, Bot, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TenEightyTenDiagramProps {
  variant?: 'homepage' | 'consulting' | 'about';
  showVolume?: boolean;
  animated?: boolean;
}

const TenEightyTenDiagram = ({ 
  variant = 'homepage', 
  showVolume = false, 
  animated = true 
}: TenEightyTenDiagramProps) => {
  const MotionWrapper = animated ? motion.div : 'div';
  const animationProps = animated ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  } : {};

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* 10% Human Setup */}
        <MotionWrapper
          {...(animated ? {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 }
          } : {})}
        >
          <Card className="border-primary/50 h-full">
            <CardHeader className="text-center">
              <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-xl md:text-2xl">10% Human Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-sm">Define business objectives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-sm">Set constraints & guardrails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-sm">Make key decisions</span>
                </li>
              </ul>
              <div className="text-center font-semibold text-primary text-sm">
                4-8 hours/week
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>

        {/* 80% AI Execution */}
        <MotionWrapper
          {...(animated ? {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.2 }
          } : {})}
        >
          <Card className="border-accent/50 md:-mt-8 md:mb-8 h-full">
            <CardHeader className="text-center">
              <Bot className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle className="text-xl md:text-2xl">80% AI Execution</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span className="text-sm">Analyze 100% of data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span className="text-sm">Generate documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span className="text-sm">Identify optimizations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span className="text-sm">Model scenarios</span>
                </li>
              </ul>
              <div className="text-center font-semibold text-accent text-sm">
                24/7 automated
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>

        {/* 10% Human Approval */}
        <MotionWrapper
          {...(animated ? {
            initial: { opacity: 0, x: 50 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.4 }
          } : {})}
        >
          <Card className="border-primary/50 h-full">
            <CardHeader className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-xl md:text-2xl">10% Human Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-sm">Review findings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-sm">Validate context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-sm">Prioritize actions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-sm">Approve plans</span>
                </li>
              </ul>
              <div className="text-center font-semibold text-primary text-sm">
                4-8 hours/week
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>

      {/* Volume Overlay (Bell Curve) */}
      {showVolume && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 p-6 bg-muted/50 rounded-lg border border-border"
        >
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold">Work Volume Distribution</h4>
            <p className="text-sm text-muted-foreground">Peak efficiency at 80% AI automation</p>
          </div>
          <div className="relative h-32 flex items-end justify-center gap-1">
            {[10, 30, 50, 70, 90, 100, 90, 70, 50, 30, 10].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                className={`w-8 rounded-t ${
                  i === 5 ? 'bg-accent' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TenEightyTenDiagram;
