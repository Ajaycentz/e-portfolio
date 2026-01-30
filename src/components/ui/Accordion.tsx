"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export function Accordion({
  items,
  className,
  defaultOpen,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: string;
}) {
  const [openId, setOpenId] = useState(defaultOpen ?? items[0]?.id);

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-white/10 bg-black/40"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? "" : item.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
            >
              <span className="font-display text-lg">{item.title}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition-transform",
                  isOpen ? "rotate-180" : "rotate-0"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden px-6 pb-6 text-sm text-white/70"
                >
                  {item.content}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
