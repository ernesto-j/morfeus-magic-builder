import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TenEightyTenSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          How 10-80-10 Changes Everything
        </h2>
        
        <div className="space-y-8">
          <Card className="border-primary/50">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardTitle className="text-2xl">10% Human Setup</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">What Humans Do:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Define business objectives</li>
                    <li>• Set constraints & guardrails</li>
                    <li>• Make key decisions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Time Investment:</p>
                  <p className="text-2xl font-bold text-primary">4-8 hours/week</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Executives, stakeholders, SMEs
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/50">
            <CardHeader className="bg-gradient-to-r from-accent/10 to-accent/5">
              <CardTitle className="text-2xl">80% AI Execution</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">What AI Agents Do:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Analyze 100% of data</li>
                    <li>• Generate documentation</li>
                    <li>• Identify optimizations</li>
                    <li>• Model scenarios</li>
                    <li>• Create implementation plans</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Time Investment:</p>
                  <p className="text-2xl font-bold text-accent">24/7 automated</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Continuous analysis & improvement
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/50">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardTitle className="text-2xl">10% Human Approval</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">What Humans Do:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Review findings</li>
                    <li>• Validate context</li>
                    <li>• Prioritize actions</li>
                    <li>• Approve plans</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Time Investment:</p>
                  <p className="text-2xl font-bold text-primary">4-8 hours/week</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Decision makers & validators
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TenEightyTenSection;
