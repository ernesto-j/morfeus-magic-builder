import { Clock, DollarSign, Users, FileX, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Too Slow",
      stat: "12-18 months",
      description: "for platform modernization",
      cost: "Market moves faster than your delivery",
    },
    {
      icon: DollarSign,
      title: "Too Expensive",
      stat: "$2M-$5M",
      description: "for Big 3 consultants",
      cost: "Budget constraints limit innovation",
    },
    {
      icon: Users,
      title: "Knowledge Loss",
      stat: "100%",
      description: "when consultants leave",
      cost: "Institutional knowledge walks out the door",
    },
    {
      icon: FileX,
      title: "Point-in-Time",
      stat: "Outdated",
      description: "the moment it's delivered",
      cost: "Static deliverables don't evolve",
    },
    {
      icon: TrendingDown,
      title: "Sample-Based",
      stat: "<10%",
      description: "of data actually analyzed",
      cost: "Critical issues missed in sampling",
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Why Traditional Consulting is Broken
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                <div className="text-3xl font-bold text-destructive mb-1">
                  {problem.stat}
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {problem.description}
                </div>
                <p className="text-sm">{problem.cost}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
