"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

type CursorContextValue = {
  enabled: boolean;
  toggle: () => void;
  setEnabled: (value: boolean) => void;
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({
  children,
  reducedMotion = false,
}: {
  children: React.ReactNode;
  reducedMotion?: boolean;
}) {
  const isTouch = useIsTouchDevice();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!reducedMotion && !isTouch) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [reducedMotion, isTouch]);

  useEffect(() => {
    document.body.classList.toggle("cursor-none", enabled);
    return () => {
      document.body.classList.remove("cursor-none");
    };
  }, [enabled]);

  const value = useMemo(
    () => ({
      enabled,
      toggle: () => {
        if (reducedMotion || isTouch) return;
        setEnabled((prev) => !prev);
      },
      setEnabled: (value: boolean) => {
        if (reducedMotion || isTouch) return;
        setEnabled(value);
      },
    }),
    [enabled, reducedMotion, isTouch]
  );

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) {
    throw new Error("useCursor must be used within CursorProvider");
  }
  return ctx;
}
