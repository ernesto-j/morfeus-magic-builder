import { Button } from "@/components/ui/button";

interface Stat {
  value: string;
  label: string;
}

interface PageHeroProps {
  breadcrumb?: string;
  title: string;
  description: string;
  stats?: Stat[];
  primaryCTA?: string;
  secondaryCTA?: string;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
}

const PageHero = ({
  breadcrumb,
  title,
  description,
  stats,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTA,
  onSecondaryCTA,
}: PageHeroProps) => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {breadcrumb && (
          <nav className="text-sm text-muted-foreground mb-6">
            {breadcrumb}
          </nav>
        )}
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mb-8">
          {description}
        </p>
        
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-wrap gap-4">
            {primaryCTA && (
              <Button 
                size="lg" 
                onClick={onPrimaryCTA}
                className="bg-primary hover:bg-primary/90"
              >
                {primaryCTA}
              </Button>
            )}
            {secondaryCTA && (
              <Button 
                size="lg" 
                variant="outline"
                onClick={onSecondaryCTA}
              >
                {secondaryCTA}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
