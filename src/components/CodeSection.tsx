import { Code2 } from "lucide-react";

const CodeSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-xl border border-border bg-card/30 backdrop-blur-sm p-8">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">morfeus.py</span>
            <div className="ml-auto flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/50" />
              <div className="w-3 h-3 rounded-full bg-secondary/50" />
              <div className="w-3 h-3 rounded-full bg-primary/50" />
            </div>
          </div>

          {/* Code snippet */}
          <div className="font-mono text-sm space-y-3">
            <div className="text-accent">import morfeus</div>
            <div className="h-4" />
            <div>
              <span className="text-foreground">morfeus.</span>
              <span className="text-primary">load_agent_army</span>
              <span className="text-muted-foreground">(</span>
              <span className="text-accent">[</span>
            </div>
            <div className="pl-6 space-y-1">
              <div className="text-secondary">"The Architect"</div>
              <div className="text-secondary">"The Engineer"</div>
              <div className="text-secondary">"The Coder"</div>
              <div className="text-secondary">"The Debugger"</div>
              <div className="text-secondary">"The Data Smith"</div>
              <div className="text-secondary">"The Cloud Oracle"</div>
            </div>
            <div>
              <span className="text-accent">]</span>
              <span className="text-muted-foreground">)</span>
            </div>
            <div className="h-4" />
            <div className="text-muted-foreground">
              <span className="text-primary">{">>"}</span> AI army online.
            </div>
            <div className="text-muted-foreground">
              <span className="text-primary">{">>"}</span> 10-eighty-10 initiated
            </div>
            <div className="h-4" />
            <div className="text-primary"># Agent operating principle</div>
            <div className="text-accent">Observable. Scalable. Autonomous.</div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
