const StoryTimeline = () => {
  const timeline = [
    {
      year: "2016-2023",
      title: "The Problem We Saw",
      quote: "After 8 years delivering data platform projects for Bain, ANZ, and Shell, we kept seeing the same pattern: Traditional consulting was too slow, too expensive, and knowledge walked out the door when consultants left.",
      painPoints: [
        "12-18 month projects that should take 6 months",
        "$2M+ budgets for work that could cost $500K",
        "Knowledge loss when consultants rolled off",
      ],
    },
    {
      year: "2024",
      title: "The Breakthrough",
      quote: "We started experimenting with AI agents to automate architecture assessments. What used to take 3 months took 2 weeks. We realized we'd stumbled onto something bigger: agentic consulting.",
      painPoints: ["The 10-80-10 methodology emerged"],
    },
    {
      year: "2025",
      title: "From milkmydata.com to Morfeus",
      quote: "Evolution from a single-domain consultancy to a comprehensive suite serving 5 specialized domains.",
      painPoints: ["Morfeus Suite: 5 domains, 1 unified framework"],
    },
    {
      year: "Today",
      title: "Serving Australia, Expanding Global",
      quote: "Helping enterprises transform their data platforms with AI-powered consulting.",
      painPoints: [
        "15-25 active clients",
        "$1.9M average value per engagement",
        "500+ Fabric Scope downloads",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Story</h2>
        
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 border-l-4 border-primary">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary" />
              <div className="mb-2">
                <span className="text-2xl font-bold text-primary">{item.year}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <blockquote className="italic text-muted-foreground mb-4 text-sm md:text-base">
                "{item.quote}"
              </blockquote>
              <ul className="space-y-1">
                {item.painPoints.map((point, idx) => (
                  <li key={idx} className="text-sm flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;
