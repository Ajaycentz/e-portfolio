"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export function Lightbox({
  images,
  open,
  index,
  onClose,
  onNavigate,
}: {
  images: string[];
  open: boolean;
  index: number;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate("next");
      if (event.key === "ArrowLeft") onNavigate("prev");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/80 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-black/90"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <Image
              src={images[index]}
              alt={`Gallery image ${index + 1}`}
              width={1600}
              height={1000}
              className="h-[70vh] w-full object-contain"
            />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/60 p-2"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-6">
              <button
                type="button"
                onClick={() => onNavigate("prev")}
                className="rounded-full border border-white/20 bg-black/60 p-3"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                {index + 1} / {images.length}
              </span>
              <button
                type="button"
                onClick={() => onNavigate("next")}
                className="rounded-full border border-white/20 bg-black/60 p-3"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
