interface Stat {
  value: string;
  label: string;
}

interface StatsRowProps {
  stats: Stat[];
  className?: string;
}

const StatsRow = ({ stats, className = "" }: StatsRowProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-fade-in">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
