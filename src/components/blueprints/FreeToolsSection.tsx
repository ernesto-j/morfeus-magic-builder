import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FreeToolsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <Card className="border-primary/50">
          <CardHeader>
            <Badge className="w-fit mb-4">FREE Forever</Badge>
            <CardTitle className="text-3xl">Fabric Scope</CardTitle>
            <p className="text-muted-foreground text-lg">
              Azure Fabric Architecture Assessment. Automated.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="font-semibold mb-2">Features:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  155-point assessment framework (12 dimensions)
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Security scanning (IAM, encryption, network)
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Performance analysis
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Cost optimization
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Compliance checks (Privacy Act, GDPR, APRA)
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={() => window.open("https://ernst-3kn785vq.scoreapp.com/", "_blank")}>
                Download Fabric Scope (Free) →
              </Button>
              <Button variant="outline">
                See Documentation →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FreeToolsSection;
