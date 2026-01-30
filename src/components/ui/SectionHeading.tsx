"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={cn("mb-10 space-y-3", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {eyebrow ? (
        <motion.p
          className="text-xs uppercase tracking-[0.4em] text-white/60"
          variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        className="font-display text-4xl md:text-5xl"
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          className="max-w-2xl text-white/70"
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
