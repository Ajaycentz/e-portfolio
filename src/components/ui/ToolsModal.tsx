"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Aperture,
  Atom,
  Bot,
  Code2,
  Database,
  Film,
  Github,
  LayoutGrid,
  Palette,
  PenTool,
  Scissors,
  Sparkles,
  Terminal,
  Wind,
  Wrench,
} from "lucide-react";

export type ToolsGroup = {
  title: string;
  items: string[];
};

const iconMap: Record<string, React.ReactNode> = {
  "Adobe Photoshop": <Palette className="h-4 w-4" />,
  Canva: <Palette className="h-4 w-4" />,
  "Adobe Illustrator": <PenTool className="h-4 w-4" />,
  Lightroom: <Aperture className="h-4 w-4" />,
  Figma: <PenTool className="h-4 w-4" />,
  "Adobe Premiere Pro": <Film className="h-4 w-4" />,
  CapCut: <Scissors className="h-4 w-4" />,
  Filmora: <Film className="h-4 w-4" />,
  "DaVinci Resolve": <Film className="h-4 w-4" />,
  HTML: <Code2 className="h-4 w-4" />,
  CSS: <Code2 className="h-4 w-4" />,
  JavaScript: <Code2 className="h-4 w-4" />,
  PHP: <Terminal className="h-4 w-4" />,
  MySQL: <Database className="h-4 w-4" />,
  Laravel: <Code2 className="h-4 w-4" />,
  Bootstrap: <LayoutGrid className="h-4 w-4" />,
  "Tailwind CSS": <Wind className="h-4 w-4" />,
  Python: <Terminal className="h-4 w-4" />,
  "React JS": <Atom className="h-4 w-4" />,
  "Visual Studio Code": <Code2 className="h-4 w-4" />,
  "Git & GitHub": <Github className="h-4 w-4" />,
  "Next.js": <Code2 className="h-4 w-4" />,
  "Canva AI": <Sparkles className="h-4 w-4" />,
  "Adobe Firefly": <Sparkles className="h-4 w-4" />,
  Uizard: <Bot className="h-4 w-4" />,
  Midjourney: <Sparkles className="h-4 w-4" />,
  "Leonardo AI": <Sparkles className="h-4 w-4" />,
  ChatGPT: <Bot className="h-4 w-4" />,
  Copilot: <Bot className="h-4 w-4" />,
  "CapCut AI": <Sparkles className="h-4 w-4" />,
  "Runway ML": <Sparkles className="h-4 w-4" />,
  Pika: <Sparkles className="h-4 w-4" />,
  Kaiber: <Sparkles className="h-4 w-4" />,
  "DALL-E": <Sparkles className="h-4 w-4" />,
  "Google Gemini": <Sparkles className="h-4 w-4" />,
  "Meta AI": <Sparkles className="h-4 w-4" />,
  "VEO 3": <Sparkles className="h-4 w-4" />,
  FLOW: <Sparkles className="h-4 w-4" />,
  "Stable Diffusion": <Sparkles className="h-4 w-4" />,
  Synthesia: <Sparkles className="h-4 w-4" />,
  Veed: <Sparkles className="h-4 w-4" />,
  Lumen5: <Sparkles className="h-4 w-4" />,
  ElevenLabs: <Sparkles className="h-4 w-4" />,
};

export function ToolsModal({ groups }: { groups: ToolsGroup[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const prepared = useMemo(
    () =>
      groups.map((group) => ({
        ...group,
        items: group.items.filter(Boolean),
      })),
    [groups]
  );

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-300/10 text-emerald-300">
          <Wrench className="h-4 w-4" />
        </span>
        Tools & Platforms
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-6 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="glass flex max-h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 shadow-soft"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-black/70 px-6 py-4 backdrop-blur">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Tools & Platforms
                  </p>
                  <p className="font-display text-2xl text-white">
                    Organized toolkit
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:border-white/30 hover:text-white"
                >
                  Close
                </button>
              </div>
              <div className="grid gap-6 overflow-y-auto px-6 py-6 md:grid-cols-2">
                {prepared.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {group.title}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-white/70">
                      {group.items.map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 transition hover:border-white/30 hover:text-white"
                        >
                          <span className="text-emerald-300">
                            {iconMap[tool] ?? <Wrench className="h-4 w-4" />}
                          </span>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
