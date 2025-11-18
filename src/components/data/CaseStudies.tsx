import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComingSoonOverlay from "@/components/shared/ComingSoonOverlay";

const CaseStudies = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Case Studies</h2>
        
        <div className="space-y-8">
          <div className="relative">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Healthcare Client: Significant Value in 2 Weeks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="font-semibold">Challenge:</span> 3-year-old Azure Fabric with performance issues
                </div>
                <div>
                  <span className="font-semibold">Solution:</span> Morfeus Data 2-week agentic audit
                </div>
                <div>
                  <span className="font-semibold">Results:</span>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• $XXX value identified</li>
                    <li>• XX security findings (XX critical)</li>
                    <li>• XX performance optimizations</li>
                    <li>• 2-week timeline (vs. 3-month traditional)</li>
                  </ul>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "What would have taken 3 months took 2 weeks. And the agents are still working."
                  <footer className="text-sm text-muted-foreground mt-2">
                    — Head of Data & Analytics, Healthcare Client
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
            <ComingSoonOverlay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
