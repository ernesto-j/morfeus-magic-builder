import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TeamSection = () => {
  const agents = [
    {
      name: "Sophia",
      role: "Azure Fabric Analytics Engineer",
      specialization: "Azure Fabric, Databricks, performance tuning",
      notableWork: "UCQ Healthcare $1.9M value in 2 weeks",
    },
    {
      name: "Marcus",
      role: "Security Architect",
      specialization: "Compliance, APRA CPS 234, risk assessment",
      notableWork: "Security audits across financial services",
    },
    {
      name: "Mary",
      role: "Business Analyst",
      specialization: "Requirements gathering, stakeholder management",
      notableWork: "Business case development for enterprise clients",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Humans + AI. Working Together.
        </h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Human Team</h3>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback>EJ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Ernst J.</CardTitle>
                  <p className="text-sm text-muted-foreground">Founder & Chief Architect</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                8+ years delivering Azure Fabric, Databricks for Bain, ANZ, Shell, Sportsbet, Lion
              </p>
              <div className="space-y-1 text-sm">
                <p className="font-semibold">Expertise:</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Data platform architecture</li>
                  <li>Cloud migration strategy</li>
                  <li>10-80-10 methodology creator</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground mt-3">📍 Brisbane, Australia</p>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6">AI Agent Team</h3>
          <p className="text-muted-foreground mb-6">
            Our specialized AI agents work 24/7, retain 100% context, continuously improve.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <Card key={index}>
                <CardHeader>
                  <Avatar className="w-12 h-12 mx-auto mb-3">
                    <AvatarFallback>{agent.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-center text-lg">
                    {agent.name} - {agent.role}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2 text-sm">
                  <p className="text-muted-foreground">{agent.specialization}</p>
                  <p className="font-semibold text-primary">{agent.notableWork}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
