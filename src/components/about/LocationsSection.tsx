import { MapPin } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      name: "Brisbane - Head Office",
      address: "[Address TBD]",
      services: "All Morfeus domains, in-person consulting",
      team: "5-8 people (growing)",
    },
    {
      name: "Sydney - Client Services",
      address: "[Address TBD]",
      services: "Client meetings, workshops, training",
      team: "Remote team",
    },
    {
      name: "Remote - AI Agents (Global)",
      address: "Distributed",
      services: "24/7 automated consulting services",
      team: "12+ specialized AI agents",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Locations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="p-6 rounded-lg border border-border bg-card">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-2">{location.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{location.address}</p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold">Services:</span> {location.services}
                </div>
                <div>
                  <span className="font-semibold">Team:</span> {location.team}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
