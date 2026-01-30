"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";
import { motion } from "framer-motion";

export function ProjectGallery({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (nextIndex: number) => {
    setIndex(nextIndex);
    setOpen(true);
  };

  const navigate = (direction: "prev" | "next") => {
    setIndex((prev) => {
      if (direction === "next") return (prev + 1) % images.length;
      return (prev - 1 + images.length) % images.length;
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, idx) => (
          <motion.button
            key={image}
            type="button"
            onClick={() => openAt(idx)}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-soft"
            whileHover={{ scale: 1.01 }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={image}
                alt="Project image"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 text-[0.6rem] uppercase tracking-[0.3em] text-white/60 opacity-0 transition duration-500 group-hover:opacity-100">
              <span>Gallery</span>
              <span>{String(idx + 1).padStart(2, "0")}</span>
            </div>
            <div className="absolute inset-0 ring-1 ring-white/5" />
          </motion.button>
        ))}
      </div>
      <Lightbox
        images={images}
        open={open}
        index={index}
        onClose={() => setOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
}
