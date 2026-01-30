"use client";

import { MotionConfig, useReducedMotion } from "framer-motion";
import { CursorProvider } from "./CursorProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <CursorProvider reducedMotion={reducedMotion ?? false}>
        {children}
      </CursorProvider>
    </MotionConfig>
  );
}
