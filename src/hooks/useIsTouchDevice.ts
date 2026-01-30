import { useEffect, useState } from "react";

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const hasTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      // @ts-expect-error legacy
      navigator.msMaxTouchPoints > 0;
    setIsTouch(hasTouch);
  }, []);

  return isTouch;
}
