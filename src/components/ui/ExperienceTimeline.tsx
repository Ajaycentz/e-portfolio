"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Briefcase, Calendar, ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  description: string;
  highlights: string[];
};

export function ExperienceTimeline({ experience }: { experience: ExperienceItem[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [openId, setOpenId] = useState(
    experience[0] ? `${experience[0].company}-${experience[0].role}-${experience[0].start}-${experience[0].end}` : ""
  );

  return (
    <div ref={containerRef} className="relative pl-10">
      <div className="absolute left-4 top-0 h-full w-px bg-white/10" />
      <motion.div
        className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-emerald-400 via-sky-400 to-rose-400"
        style={{ scaleY: scrollYProgress }}
      />
      <div className="space-y-6">
        {experience.map((item, index) => {
          const itemId = `${item.company}-${item.role}-${item.start}-${item.end}-${index}`;
          const isOpen = openId === itemId;
          const roleTags = [
            item.role.toLowerCase().includes("designer") ? "Design" : "",
            item.role.toLowerCase().includes("developer") ? "Web" : "",
            item.role.toLowerCase().includes("video") ? "Video" : "",
            item.role.toLowerCase().includes("analyst") ? "Analytics" : "",
            item.role.toLowerCase().includes("support") ? "IT" : "",
            item.role.toLowerCase().includes("email") ? "Growth" : "",
          ].filter(Boolean);
          return (
            <motion.div
              key={itemId}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute left-2 top-6 h-4 w-4 rounded-full border border-white/30 bg-black shadow-[0_0_16px_rgba(52,211,153,0.35)]" />
              <div className="rounded-3xl border border-white/10 bg-black/40 transition hover:border-white/25 hover:bg-black/50">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : itemId)}
                  className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left"
                >
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.3em] text-white/60">
                      <Calendar className="h-3 w-3 text-emerald-300" />
                      {item.start} - {item.end}
                    </div>
                    <div>
                      <h3 className="font-display text-xl">{item.role}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/70">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                          <Briefcase className="h-4 w-4 text-emerald-300" />
                          {item.company}
                        </span>
                        {item.location ? (
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                            <MapPin className="h-4 w-4 text-emerald-300" />
                            {item.location}
                          </span>
                        ) : null}
                        {roleTags.length ? (
                          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200">
                            {roleTags.join(" / ")}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "mt-1 h-5 w-5 text-white/60 transition-transform",
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
                      <p>{item.description || "Scope included end-to-end creative support."}</p>
                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>- {highlight}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
