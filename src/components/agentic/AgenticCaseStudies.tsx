import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgenticCaseStudies = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          10-80-10 in Action
        </h2>
        
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="text-2xl">
              UCQ Healthcare: $1.9M Value in 2 Weeks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold mb-2">10% Human Setup (Week 0)</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 4-hour kickoff workshop</li>
                  <li>• Stakeholders: Head of Data, CTO, Security, Compliance</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold mb-2">80% AI Execution (Week 1)</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Fabric Scope scanned 100% of workspaces</li>
                  <li>• PII Profiler scanned all tables</li>
                  <li>• Documentation generated automatically</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold mb-2">10% Human Approval (Week 2)</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Daily review sessions</li>
                  <li>• Prioritization workshop</li>
                  <li>• Executive presentation</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3">Results:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-background rounded">
                  <div className="text-2xl font-bold text-primary">$1.9M</div>
                  <div className="text-sm text-muted-foreground">value identified</div>
                </div>
                <div className="text-center p-4 bg-background rounded">
                  <div className="text-2xl font-bold text-primary">54x</div>
                  <div className="text-sm text-muted-foreground">ROI</div>
                </div>
                <div className="text-center p-4 bg-background rounded">
                  <div className="text-2xl font-bold text-primary">2 weeks</div>
                  <div className="text-sm text-muted-foreground">vs. 3 months</div>
                </div>
                <div className="text-center p-4 bg-background rounded">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">coverage</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AgenticCaseStudies;
