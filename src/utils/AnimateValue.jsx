import { useEffect, useState } from "react";

const AnimateValue = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / value));
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(timer);
        setDisplayValue(value);
      } else {
        setDisplayValue(parseFloat(start.toFixed(2)));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span className="current-value animated-number">{displayValue}</span>;
};

export default AnimateValue;
