"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const reducedMotion = useReducedMotion();
  const content = [...items, ...items];

  return (
    <div className={cn("overflow-hidden border-y border-white/10 py-3", className)}>
      <motion.div
        className="flex w-max gap-8 text-xs uppercase tracking-[0.3em] text-white/70"
        animate={
          reducedMotion
            ? { x: 0 }
            : {
                x: ["0%", "-50%"],
              }
        }
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
      >
        {content.map((item, index) => (
          <span key={`${item}-${index}`} className="whitespace-nowrap">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
