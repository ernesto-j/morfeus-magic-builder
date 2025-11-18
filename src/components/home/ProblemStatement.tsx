import { useTypewriter } from "@/hooks/use-typewriter";

const ProblemStatement = () => {
  const { displayText } = useTypewriter({
    phrases: [
      "The Enterprise AI Paradox",
      "The Platform Modernization Gap",
      "The Innovation Bottleneck",
    ],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
  });
  const problems = [
    "12-18 months for platform transformation",
    "$2M+ for Big 3 consultants",
    "Knowledge walks out when consultants leave",
    "Point-in-time deliverables, outdated immediately",
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          {displayText}<span className="animate-pulse">|</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-semibold">
            65% of enterprises have adopted generative AI
          </span>
          {" "}(McKinsey). Yet{" "}
          <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent font-semibold">
            80% struggle with data platform modernization.
          </span>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <p className="text-lg">{problem}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20 text-center">
          <p className="text-xl md:text-2xl font-semibold">
            "You need AI. But building AI-ready infrastructure takes too long."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
