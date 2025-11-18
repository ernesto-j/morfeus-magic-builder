const AboutHero = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Built By Engineers. For Engineers.
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Morfeus was born from 8+ years of delivering Azure Fabric and Databricks projects 
          for Bain, ANZ, Shell, and Sportsbet.
        </p>
        
        <div className="w-full max-w-2xl mx-auto h-64 bg-muted rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">[Team Photo Placeholder]</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
