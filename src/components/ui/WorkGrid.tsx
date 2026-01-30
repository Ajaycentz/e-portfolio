"use client";

import { useMemo, useState } from "react";
import { Project } from "@/data/profile";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

export function WorkGrid({ projects }: { projects: Project[] }) {
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        active === "All" ? true : project.category === active;
      const matchesQuery = `${project.title} ${project.summary}`
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [projects, active, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition",
                active === category
                  ? "border-white/70 bg-white/10 text-white"
                  : "border-white/10 text-white/60 hover:border-white/40"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects"
          className="w-full rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm text-white/80 outline-none transition focus:border-white/40 md:w-72"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
