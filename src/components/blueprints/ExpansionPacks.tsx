import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ExpansionPacks = () => {
  const packs = [
    {
      title: "Azure Fabric Expansion Pack",
      status: "Q1 2025",
      price: "$10K-15K",
      includes: [
        "Fabric governance templates",
        "Workspace best practices",
        "Cost allocation templates",
        "CI/CD pipelines",
      ],
    },
    {
      title: "Databricks Expansion Pack",
      status: "Q2 2025",
      price: "$10K-15K",
      includes: [
        "Unity Catalog setup",
        "Delta Lake optimization",
        "MLflow templates",
        "Job orchestration patterns",
      ],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Expansion Packs
          <span className="block text-lg text-muted-foreground mt-2">Coming Soon</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packs.map((pack, index) => (
            <Card key={index} className="opacity-80">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{pack.status}</Badge>
                <CardTitle className="text-xl">{pack.title}</CardTitle>
                <p className="text-primary font-bold">{pack.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {pack.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("https://ernst-3kn785vq.scoreapp.com/", "_blank")}
                >
                  Join Waitlist →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpansionPacks;
