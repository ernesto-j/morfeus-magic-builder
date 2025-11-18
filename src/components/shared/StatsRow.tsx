import AnimatedStat from "./AnimatedStat";

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
        <AnimatedStat
          key={index}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
};

export default StatsRow;
