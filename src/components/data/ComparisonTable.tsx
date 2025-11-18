const ComparisonTable = () => {
  const comparisons = [
    { dimension: "Audit Timeline", traditional: "8-12 weeks", morfeus: "2-4 weeks" },
    { dimension: "Audit Cost", traditional: "$150K-300K", morfeus: "$25K-50K" },
    { dimension: "Analysis Depth", traditional: "Sample-based", morfeus: "100% coverage" },
    { dimension: "Knowledge Retention", traditional: "Lost when consultants leave", morfeus: "Persistent AI agents" },
    { dimension: "Updates", traditional: "Point-in-time", morfeus: "Continuous monitoring" },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Why Morfeus Data vs. Traditional Consulting
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4">Dimension</th>
                <th className="text-left p-4">Traditional Consulting</th>
                <th className="text-left p-4 text-primary">Morfeus Data</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50">
                  <td className="p-4 font-semibold">{row.dimension}</td>
                  <td className="p-4 text-muted-foreground">{row.traditional}</td>
                  <td className="p-4 text-primary font-semibold">{row.morfeus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
