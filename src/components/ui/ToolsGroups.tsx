"use client";

import { useMemo, useState } from "react";

export type ToolsGroup = {
  title: string;
  items: string[];
};

export function ToolsGroups({ groups }: { groups: ToolsGroup[] }) {
  const [showAllAi, setShowAllAi] = useState(false);

  const prepared = useMemo(() => {
    return groups.map((group) => {
      if (group.title !== "AI Tools") return group;
      const visible = showAllAi ? group.items : group.items.slice(0, 8);
      return { ...group, items: visible, hasMore: group.items.length > 8 } as ToolsGroup & {
        hasMore: boolean;
      };
    });
  }, [groups, showAllAi]);

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {prepared.map((group) => (
        <div
          key={group.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              {group.title}
            </p>
            {group.title === "AI Tools" && "hasMore" in group && group.hasMore ? (
              <button
                type="button"
                onClick={() => setShowAllAi((prev) => !prev)}
                className="rounded-full border border-white/10 px-3 py-1 text-[0.55rem] uppercase tracking-[0.3em] text-white/60 transition hover:border-white/30 hover:text-white"
              >
                {showAllAi ? "Show less" : "Show more"}
              </button>
            ) : null}
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-white/70">
            {group.items.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 px-3 py-2 transition hover:border-white/30 hover:text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
