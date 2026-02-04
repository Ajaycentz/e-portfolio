"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/components/providers/CursorProvider";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

export function CustomCursor() {
  const { enabled } = useCursor();
  const isTouch = useIsTouchDevice();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (!enabled || isTouch) return;

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a, button, [data-cursor='hover']")) {
        setHovering(true);
      }
    };

    const handleOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a, button, [data-cursor='hover']")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [enabled, isTouch]);

  if (!enabled || isTouch) return null;

  const dot = hovering ? 7 : 5;
  const ringSize = hovering ? 38 : 28;
  const haloSize = hovering ? 62 : 44;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9997] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-gradient-to-r from-emerald-300/15 via-sky-300/15 to-rose-300/15"
        animate={{
          width: haloSize,
          height: haloSize,
          opacity: hovering ? 0.6 : 0.3,
          filter: [
            "hue-rotate(0deg)",
            "hue-rotate(120deg)",
            "hue-rotate(240deg)",
            "hue-rotate(360deg)",
          ],
        }}
        style={{ x: springX, y: springY }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 26,
          filter: { duration: 10, repeat: Infinity, ease: "linear" },
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40"
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: hovering ? 0.7 : 0.45,
          filter: [
            "hue-rotate(0deg)",
            "hue-rotate(120deg)",
            "hue-rotate(240deg)",
            "hue-rotate(360deg)",
          ],
        }}
        style={{ x: springX, y: springY }}
        transition={{
          type: "spring",
          stiffness: 190,
          damping: 26,
          filter: { duration: 10, repeat: Infinity, ease: "linear" },
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: springX, y: springY }}
      >
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/85"
          style={{
            width: dot,
            height: dot,
            transform: `translate(-50%, -50%) scale(${pressed ? 0.85 : 1})`,
            opacity: hovering ? 0.95 : 0.85,
          }}
        />
      </motion.div>
    </>
  );
}
