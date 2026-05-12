import { useState, useCallback } from "react";

export function useProfileTap(threshold: number = 5, onTrigger?: () => void) {
  const [tapCount, setTapCount] = useState(0);

  const handleTap = useCallback(() => {
    setTapCount((prev) => {
      const next = prev + 1;
      if (next >= threshold) {
        if (onTrigger) onTrigger();
        return 0;
      }
      return next;
    });
  }, [threshold, onTrigger]);

  return { tapCount, handleTap };
}
