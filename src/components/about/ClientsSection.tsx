import { Building2, TrendingUp, Shield, Database, Users } from "lucide-react";

const ClientsSection = () => {
  const clients = [
    { name: "Bain & Company", logo: "/logos/bain-logo.png" },
    { name: "ANZ Bank", logo: "/logos/anz-logo.png" },
    { name: "Shell", logo: "/logos/shell-logo.png" },
    { name: "Sportsbet", logo: "/logos/sportsbet-logo.png" },
  ];

  const industries = [
    {
      icon: Building2,
      name: "Financial Services",
      percentage: "30% of clients",
      expertise: "APRA CPS 234, risk modeling, fraud detection",
    },
    {
      icon: TrendingUp,
      name: "Energy & Resources",
      percentage: "20% of clients",
      expertise: "Real-time analytics, IoT data platforms",
    },
    {
      icon: Shield,
      name: "Healthcare",
      percentage: "25% of clients",
      expertise: "Privacy Act compliance, clinical data warehouses",
    },
    {
      icon: Database,
      name: "Retail & E-commerce",
      percentage: "15% of clients",
      expertise: "Customer 360, real-time personalization",
    },
    {
      icon: Users,
      name: "Professional Services",
      percentage: "10% of clients",
      expertise: "Business intelligence, client analytics",
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Clients & Industries
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 items-center justify-items-center">
          {clients.map((client, index) => (
            <img 
              key={index}
              src={client.logo} 
              alt={client.name}
              className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
        
        <h3 className="text-2xl font-bold mb-6">Industries Served</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div key={index} className="p-6 rounded-lg border border-border bg-card">
                <Icon className="w-10 h-10 text-primary mb-3" />
                <h4 className="font-bold mb-1">{industry.name}</h4>
                <p className="text-sm text-primary font-semibold mb-2">
                  {industry.percentage}
                </p>
                <p className="text-sm text-muted-foreground">{industry.expertise}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
