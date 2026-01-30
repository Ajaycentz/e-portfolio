"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Graphic Designer",
  "Brand Visuals",
  "Social Creatives",
  "Print & Poster Design",
];

export function AnimatedHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
