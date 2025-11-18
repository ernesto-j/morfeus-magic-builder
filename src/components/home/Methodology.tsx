import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Bot, CheckCircle } from "lucide-react";

const Methodology = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          10% Human Strategy. 80% AI Execution. 10% Human Approval.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="border-primary/50">
            <CardHeader className="text-center">
              <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-2xl">10% Human Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Define business objectives
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Set constraints & guardrails
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Make key decisions
                </li>
              </ul>
              <div className="text-center font-semibold text-primary">
                4-8 hours/week
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/50 md:-mt-8 md:mb-8">
            <CardHeader className="text-center">
              <Bot className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle className="text-2xl">80% AI Execution</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Analyze 100% of data
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Generate documentation
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Identify optimizations
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Model scenarios
                </li>
              </ul>
              <div className="text-center font-semibold text-accent">
                24/7 automated
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/50">
            <CardHeader className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-2xl">10% Human Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Review findings
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Validate context
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Prioritize actions
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Approve plans
                </li>
              </ul>
              <div className="text-center font-semibold text-primary">
                4-8 hours/week
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-xl font-semibold mb-6">
            Deliver in 3-6 months what traditionally takes 12-18 months
          </p>
          <Button 
            size="lg"
            onClick={() => window.location.href = "/agentic-consulting"}
          >
            Learn About Agentic Consulting →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
