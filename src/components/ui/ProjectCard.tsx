"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { Project } from "@/data/profile";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
  badge,
}: {
  project: Project;
  className?: string;
  badge?: string;
}) {
  const cover = project.gallery?.[0] ?? project.cover;
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const transform = useMotionTemplate`perspective(900px) rotateX(${springY}deg) rotateY(${springX}deg)`;

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    x.set(relX / 6);
    y.set(-relY / 6);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn("group block", className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.article
        style={{
          transform: reducedMotion ? undefined : transform,
        }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40"
      >
        {badge ? (
          <div className="absolute left-6 top-6 z-10 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[0.6rem] uppercase tracking-[0.4em] text-white/80 backdrop-blur">
            {badge}
          </div>
        ) : null}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={cover}
            alt={project.title}
            width={900}
            height={700}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          {project.featured ? (
            <motion.div
              className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em]"
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.04, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Featured
            </motion.div>
          ) : null}
        </div>
        <div className="space-y-3 p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            {project.category}
          </p>
          <h3 className="font-display text-2xl">{project.title}</h3>
          <p className="text-sm text-white/70">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="translate-y-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-white/60 transition duration-500 group-hover:translate-y-0"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
