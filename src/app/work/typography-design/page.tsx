import type { Metadata } from "next";
import Link from "next/link";
import { PageReveal } from "@/components/ui/PageReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { profile } from "@/data/profile";

const project = profile.projects.find((item) => item.slug === "typography-design");

export const metadata: Metadata = {
  title: "Typography Studies | Alden Jay Centino",
  description: "Typography Studies project gallery from Alden Jay Centino's portfolio.",
  openGraph: {
    title: "Typography Studies | Alden Jay Centino",
    description: "Typography Studies project preview gallery.",
    images: ["/Profile.jpg"],
  },
};

export default function TypographyDesignPage() {
  const images =
    project?.gallery?.length
      ? project.gallery
      : project?.cover
      ? [project.cover]
      : [];

  return (
    <PageReveal>
      <div className="section">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1.6fr_0.8fr]">
          <div className="space-y-10">
            <SectionHeading
              eyebrow={project?.category ?? "Project"}
              title={project?.title ?? "Typography Studies"}
              description={
                project?.description ??
                "Typography Studies project preview gallery."
              }
            />
            <ProjectGallery images={images} />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="glass rounded-3xl p-6 lg:col-span-2">
                <h3 className="font-display text-2xl">Overview</h3>
                <p className="mt-4 text-sm text-white/70">
                  {project?.summary ?? "Project summary will appear here."}
                </p>
              </div>
              <div className="glass rounded-3xl p-6">
                <h3 className="font-display text-2xl">Role</h3>
                <p className="mt-4 text-sm text-white/70">
                  {project?.role ?? "Graphic Designer"}
                </p>
              </div>
              <div className="glass rounded-3xl p-6">
                <h3 className="font-display text-2xl">Tools</h3>
                <ul className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                  {(project?.tools ?? ["Photoshop", "Illustrator"]).map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-white/10 px-3 py-2"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="glass rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Quick facts
              </p>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                <div className="flex items-center justify-between">
                  <span>Year</span>
                  <span className="text-white">{project?.year ?? "?"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Category</span>
                  <span className="text-white">{project?.category ?? "?"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tags</span>
                  <span className="text-white">
                    {project?.tags?.length ? project.tags.join(", ") : "?"}
                  </span>
                </div>
              </div>
            </div>
            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-2xl">Start a project</h3>
              <p className="mt-3 text-sm text-white/70">
                Ready for a new collaboration? Let us craft something bold.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.3em]"
              >
                Start a project
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </PageReveal>
  );
}
