import type { Metadata } from "next";
import { PageReveal } from "@/components/ui/PageReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkGrid } from "@/components/ui/WorkGrid";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Work | Alden Jay Centino",
  description:
    "Browse branding, social media creatives, posters, print design, and digital systems by Alden Jay Centino.",
  openGraph: {
    title: "Work | Alden Jay Centino",
    description:
      "Browse branding, social media creatives, posters, print design, and digital systems.",
    images: ["/prof.jpg"],
  },
};

export default function WorkPage() {
  return (
    <PageReveal>
      <div className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Work"
            title="A playground of brands, campaigns, and digital experiences"
            description="Filter by category or search for a specific project."
          />
          <WorkGrid projects={profile.projects} />
          <div className="mt-12 glass rounded-3xl p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Ready to collaborate?
                </p>
                <h3 className="mt-3 font-display text-3xl">
                  Let's build your next visual system.
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Brand identity, social creatives, and print campaigns tailored to your goals.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="rounded-full border border-white/20 bg-white px-5 py-3 text-xs uppercase tracking-[0.3em] text-black"
                >
                  Start a project
                </a>
                <a
                  href="mailto:ajcentz28@gmail.com?subject=Graphic%20Design%20Project"
                  className="rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:border-white/40 hover:text-white"
                >
                  Email me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageReveal>
  );
}
