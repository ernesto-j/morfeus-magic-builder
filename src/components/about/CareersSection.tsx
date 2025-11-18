import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CareersSection = () => {
  const roles = [
    {
      title: "Senior Data Architect",
      location: "Brisbane or Sydney (hybrid)",
      salary: "$150K-200K + equity",
      responsibilities: [
        "Lead platform modernization engagements",
        "Work with AI agents using 10-80-10 methodology",
        "Design enterprise data architectures",
      ],
    },
    {
      title: "AI Agent Specialist",
      location: "Remote (Australia)",
      salary: "$120K-160K + equity",
      responsibilities: [
        "Train and optimize AI agent capabilities",
        "Develop agent orchestration workflows",
        "Quality assurance for AI-generated outputs",
      ],
    },
    {
      title: "Security Consultant",
      location: "Brisbane or Sydney (hybrid)",
      salary: "$130K-180K + equity",
      responsibilities: [
        "Conduct security assessments and audits",
        "APRA CPS 234 and Privacy Act compliance",
        "Collaborate with Morfeus Cyber agents",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Join the Team
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Build the future of agentic consulting
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{role.title}</CardTitle>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>📍 {role.location}</p>
                  <p className="text-primary font-semibold">{role.salary}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2 text-sm">Responsibilities:</p>
                <ul className="space-y-1 mb-4 text-sm">
                  {role.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("https://ernst-3kn785vq.scoreapp.com/", "_blank")}
                >
                  Apply Now →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
