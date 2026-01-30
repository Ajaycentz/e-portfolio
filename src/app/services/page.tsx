import { PageReveal } from "@/components/ui/PageReveal";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { Palette, Sparkles, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Alden Jay Centino",
  description:
    "Creative packages for brand identity, social creatives, and print systems with clear process and deliverables.",
  openGraph: {
    title: "Services | Alden Jay Centino",
    description:
      "Creative packages for brand identity, social creatives, and print systems.",
    images: ["/Profile.jpg"],
  },
};

const faqs = [
  {
    id: "timeline",
    title: "What is the typical timeline?",
    content:
      "Most projects run 2-6 weeks depending on scope, with weekly check-ins and milestones.",
  },
  {
    id: "process",
    title: "How do we start?",
    content:
      "We begin with a discovery call, align on goals, then move into moodboards, systems, and production.",
  },
  {
    id: "revisions",
    title: "How many revisions are included?",
    content:
      "Each package includes two revision rounds per phase. Extra rounds can be added as needed.",
  },
];

export default function ServicesPage() {
  return (
    <PageReveal>
      <div className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Creative packages with bold outcomes"
            description="Pick a focus area or combine services into a custom collaboration."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {profile.services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.08}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 transition hover:-translate-y-1 hover:border-white/30 hover:bg-black/50"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-300/60 via-sky-300/60 to-rose-300/60 opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-300/10 text-emerald-300 transition group-hover:scale-105">
                    {index === 0 ? (
                      <Palette className="h-5 w-5" />
                    ) : index === 1 ? (
                      <Sparkles className="h-5 w-5" />
                    ) : (
                      <FileText className="h-5 w-5" />
                    )}
                  </span>
                  <h3 className="font-display text-2xl">{service.title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {service.features.map((feature) => (
                    <li key={feature}>- {feature}</li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Customizable package
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16">
            <SectionHeading eyebrow="FAQ" title="Details before we dive in" />
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </PageReveal>
  );
}
import type { Metadata } from "next";
