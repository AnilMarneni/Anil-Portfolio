import { useEffect, useState, useRef } from "react";

/**
 * Animates a numeric value from its current state to a target value using requestAnimationFrame.
 * @param value The target value to animate to.
 * @param decimals Number of decimal places.
 * @param duration Animation duration in milliseconds (default 1000).
 */
export function useAnimatedNumber(
  value: number,
  decimals: number = 0,
  duration: number = 1000
) {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValueRef = useRef(value);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const startValue = prevValueRef.current;
    const endValue = value;

    if (startValue === endValue) return;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutQuad easing function
      const easedProgress = progress * (2 - progress);
      const current = startValue + easedProgress * (endValue - startValue);
      setDisplayValue(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        prevValueRef.current = endValue;
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => {
      window.cancelAnimationFrame(animId);
      prevValueRef.current = endValue;
    };
  }, [value, duration]);

  return decimals === 0 ? Math.floor(displayValue) : Number(displayValue.toFixed(decimals));
}
