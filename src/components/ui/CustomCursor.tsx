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
  const springX = useSpring(x, { stiffness: 400, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 400, damping: 30, mass: 0.5 });
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

  const dot = hovering ? 10 : 6;
  const line = hovering ? 42 : 28;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300/15 via-sky-300/15 to-rose-300/15 blur-xl"
        animate={{
          width: hovering ? 70 : 50,
          height: hovering ? 70 : 50,
          opacity: hovering ? 0.35 : 0.2,
        }}
        style={{
          x: springX,
          y: springY,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 30 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: springX, y: springY }}
      >
        <motion.span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 mix-blend-screen"
          animate={{
            width: dot,
            height: dot,
            scale: pressed ? 0.85 : 1,
            opacity: hovering ? 0.95 : 0.8,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          style={{
            boxShadow:
              "0 0 12px rgba(56,189,248,0.35), 0 0 22px rgba(52,211,153,0.25)",
          }}
        />
        <motion.span
          className="absolute left-1/2 top-1/2 h-[1px] -translate-x-1/2 -translate-y-1/2 bg-white/50 mix-blend-screen"
          animate={{ width: line, opacity: hovering ? 0.7 : 0.4 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        />
        <motion.span
          className="absolute left-1/2 top-1/2 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-white/50 mix-blend-screen"
          animate={{ height: line, opacity: hovering ? 0.7 : 0.4 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        />
      </motion.div>
    </>
  );
}
