"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

type MagneticButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void;
};

export function MagneticButton({
  href,
  children,
  className,
  variant = "primary",
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reducedMotion = useReducedMotion();
  const isTouch = useIsTouchDevice();

  const handleMove = (event: React.MouseEvent) => {
    if (reducedMotion || isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x / 10}px, ${y / 10}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition-colors";
  const variantClasses =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/20 text-white hover:border-white/60";

  const content = (
    <motion.span
      ref={ref}
      data-cursor="hover"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseClasses, variantClasses, className)}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
