import { ExperienceTimeline } from "@/components/ui/ExperienceTimeline";
import { PageReveal } from "@/components/ui/PageReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience | Alden Jay Centino",
  description:
    "Creative experience timeline including graphic design, web design, video editing, and digital support roles.",
  openGraph: {
    title: "Experience | Alden Jay Centino",
    description:
      "Creative experience timeline including graphic design, web design, video editing, and digital support roles.",
    images: ["/Profile.jpg"],
  },
};

export default function ExperiencePage() {
  const roles = profile.experience.length;
  const years = profile.experience
    .flatMap((item) => [item.start, item.end])
    .filter(Boolean)
    .map((value) => parseInt(value.replace(/\D/g, ""), 10))
    .filter((value) => !Number.isNaN(value));
  const range = years.length ? `${Math.min(...years)} - ${Math.max(...years)}` : "";

  return (
    <PageReveal>
      <div className="section">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="A timeline of bold collaborations"
            description="Every role sharpened the craft and elevated the creative system."
          />
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            <div className="glass rounded-3xl p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Total roles
              </p>
              <p className="mt-3 font-display text-3xl">{roles}</p>
            </div>
            <div className="glass rounded-3xl p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Timeline
              </p>
              <p className="mt-3 font-display text-3xl">{range || "—"}</p>
            </div>
            <div className="glass rounded-3xl p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Focus
              </p>
              <p className="mt-3 text-sm text-white/70">
                Design, web, video, analytics, and IT support.
              </p>
            </div>
          </div>
          <ExperienceTimeline experience={profile.experience} />
        </div>
      </div>
    </PageReveal>
  );
}
import type { Metadata } from "next";
