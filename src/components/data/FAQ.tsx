import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Morfeus Data different from Big 3 consultants?",
      answer: "Three key differences: 1) Speed: 3-6 months vs. 12-18 months (10-80-10 methodology), 2) Cost: $200K-750K vs. $2M-$5M (automated analysis), 3) Knowledge: Agents persist vs. consultants leave"
    },
    {
      question: "How does the 10-80-10 methodology work?",
      answer: "10% of time is spent with humans defining objectives and making key decisions. 80% is AI agents analyzing data, generating documentation, and identifying optimizations. Final 10% is humans reviewing, validating, and approving the findings."
    },
    {
      question: "What platforms do you support?",
      answer: "We specialize in Azure Fabric and Databricks, with migration support from Hadoop, Teradata, Oracle, SQL Server, Netezza, and other legacy platforms."
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
