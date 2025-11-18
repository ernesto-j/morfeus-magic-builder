import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ServiceSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="audits" className="border rounded-lg px-6">
            <AccordionTrigger className="text-xl font-semibold">
              Agentic Data Engineering Audits
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <Badge>2-4 Weeks. $25K-50K. $1.9M Average Value Identified.</Badge>
              <p className="text-muted-foreground">
                Comprehensive 155-point assessment of your Azure Fabric or Databricks platform
              </p>
              <div className="space-y-2">
                <p className="font-semibold">What's Included:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Executive Presentation (findings + roadmap)</li>
                  <li>• Security & Compliance Report (avg 47 findings)</li>
                  <li>• Performance Optimization Review (avg 31 optimizations)</li>
                  <li>• Cost Analysis (avg 30% reduction potential)</li>
                  <li>• 12-Month Implementation Roadmap</li>
                </ul>
              </div>
              <Button onClick={() => window.open("https://ernst-3kn785vq.scoreapp.com/", "_blank")}>
                Request Audit →
              </Button>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modernization" className="border rounded-lg px-6">
            <AccordionTrigger className="text-xl font-semibold">
              Agentic Fabric Modernization
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <Badge>4-9 Months. $200K-750K. Platform Transformation.</Badge>
              <p className="text-muted-foreground">
                Transform your data platform with AI-powered modernization
              </p>
              <Button onClick={() => window.open("https://ernst-3kn785vq.scoreapp.com/", "_blank")}>
                Learn More →
              </Button>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="migration" className="border rounded-lg px-6">
            <AccordionTrigger className="text-xl font-semibold">
              Agentic Fabric Migration
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <Badge>3-6 Months. $150K-500K. Zero Downtime.</Badge>
              <p className="text-muted-foreground">
                Migrate your legacy platform with zero business disruption
              </p>
              <Button onClick={() => window.open("https://ernst-3kn785vq.scoreapp.com/", "_blank")}>
                Learn More →
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default ServiceSection;
