import { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

interface AnimatedStatProps {
  value: string;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
}

const AnimatedStat = ({ value, suffix = "", label, duration = 2, className = "" }: AnimatedStatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const hasDecimal = value.includes(".");

  return (
    <motion.div 
      ref={ref} 
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {isInView && (
          <>
            <CountUp 
              end={numericValue} 
              duration={duration}
              decimals={hasDecimal ? 1 : 0}
              preserveValue
            />
            {suffix}
          </>
        )}
      </div>
      <div className="text-sm text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
};

export default AnimatedStat;
