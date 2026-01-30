import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageReveal } from "@/components/ui/PageReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { profile } from "@/data/profile";

const normalizeSlug = (value?: string) =>
  (value ?? "")
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export function generateStaticParams() {
  return profile.projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const rawSlug = decodeURIComponent(params.slug ?? "").trim();
  const normalized = normalizeSlug(rawSlug);
  const project =
    profile.projects.find((item) => item.slug === rawSlug) ??
    profile.projects.find((item) => normalizeSlug(item.slug) === normalized) ??
    profile.projects.find((item) => normalizeSlug(item.title) === normalized);
  if (!project) {
    return {
      title: "Project | Alden Jay Centino",
      description: "Project details from Alden Jay Centino's portfolio.",
      openGraph: {
        title: "Project | Alden Jay Centino",
        description: "Project details from Alden Jay Centino's portfolio.",
        images: ["/Profile.jpg"],
      },
    };
  }

  const title = `${project.title} | Alden Jay Centino`;
  return {
    title,
    description: project.summary,
    openGraph: {
      title,
      description: project.summary,
      images: [project.cover],
    },
  };
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const rawSlug = decodeURIComponent(params.slug ?? "").trim();
  const normalized = normalizeSlug(rawSlug);
  const project =
    profile.projects.find((item) => item.slug === rawSlug) ??
    profile.projects.find((item) => normalizeSlug(item.slug) === normalized) ??
    profile.projects.find((item) => normalizeSlug(item.title) === normalized);

  const images =
    project?.gallery?.length
      ? project.gallery
      : project?.cover
      ? [project.cover]
      : [];
  if (!project || images.length === 0) return notFound();

  return (
    <PageReveal>
      <div className="section">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1.6fr_0.8fr]">
          <div className="space-y-10">
            <SectionHeading
              eyebrow={project.category}
              title={project.title}
              description={
                project.description
              }
            />
            <ProjectGallery images={images} />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="glass rounded-3xl p-6 lg:col-span-2">
                <h3 className="font-display text-2xl">Overview</h3>
                <p className="mt-4 text-sm text-white/70">
                  {project.summary}
                </p>
              </div>
              <div className="glass rounded-3xl p-6">
                <h3 className="font-display text-2xl">Role</h3>
                <p className="mt-4 text-sm text-white/70">
                  {project.role}
                </p>
              </div>
              <div className="glass rounded-3xl p-6">
                <h3 className="font-display text-2xl">Tools</h3>
                <ul className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-white/10 px-3 py-2"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass rounded-3xl p-6">
                <h3 className="font-display text-2xl">Process</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {project.process.map((step) => (
                    <li key={step}>- {step}</li>
                  ))}
                </ul>
              </div>
              <div className="glass rounded-3xl p-6">
                <h3 className="font-display text-2xl">Results</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {project.results.map((result) => (
                    <li key={result}>- {result}</li>
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
                  <span className="text-white">{project.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Category</span>
                  <span className="text-white">{project.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tags</span>
                  <span className="text-white">{project.tags.join(", ")}</span>
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
