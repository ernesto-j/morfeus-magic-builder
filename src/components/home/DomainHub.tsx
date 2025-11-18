import MorfeusSuiteDiagram from "./MorfeusSuiteDiagram";

const DomainHub = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          5 Specialized Domains. 1 Unified Framework. Vertically Integrated.
        </h2>
        
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          End-to-end solutions powered by the Morfeus Orchestrator
        </p>
        
        <MorfeusSuiteDiagram />
      </div>
    </section>
  );
};

export default DomainHub;
