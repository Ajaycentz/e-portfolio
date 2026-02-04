import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { Divider } from "@/components/ui/Divider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile } from "@/data/profile";
import { PageReveal } from "@/components/ui/PageReveal";
import {
  Camera,
  Film,
  Megaphone,
  Palette,
  Sparkles,
  Star,
  Type,
  Wand2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Alden Jay Centino | Graphic Designer Portfolio",
  description:
    "Graphic designer focused on brand visuals, social creatives, and print design. Explore featured work, services, and collaborations.",
  openGraph: {
    title: "Alden Jay Centino | Graphic Designer Portfolio",
    description:
      "Graphic designer focused on brand visuals, social creatives, and print design.",
    images: ["/prof.jpg"],
  },
};

export default function HomePage() {
  const spotlightSlugs = ["brochure-design", "furniture-design"];
  const spotlightProjects = spotlightSlugs
    .map((slug) => profile.projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof profile.projects)[number] => Boolean(project));
  const featured = profile.projects
    .filter((project) => project.featured && !spotlightSlugs.includes(project.slug))
    .slice(0, 6);
  const services = profile.services.slice(0, 3);


  return (
    <PageReveal>
    <div>
      <Hero />
      <section className="section">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:px-8 md:grid-cols-4">
          {profile.stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 transition hover:-translate-y-1 hover:border-white/30"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-300/60 via-sky-300/60 to-rose-300/60 opacity-0 transition group-hover:opacity-100" />
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                {stat.label}
              </p>
              <p className="mt-4 font-display text-3xl">{stat.value}</p>
              <div className="mt-4 h-[2px] w-12 bg-emerald-300/40 transition group-hover:w-20" />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section pt-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proof"
            title="Visual systems that deliver clarity and impact"
            description="Focused on consistency, speed, and brand recognition."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Consistent brand look",
                copy: "Unified visuals across print, social, and digital touchpoints.",
              },
              {
                title: "Fast turnaround",
                copy: "Batch production workflows for campaigns and creator kits.",
              },
              {
                title: "Audience-ready",
                copy: "Designs optimized for readability, hierarchy, and engagement.",
              },
            ].map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="glass rounded-3xl p-6"
              >
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Divider />
      <section className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Recent work"
            title="Brochures & Furniture Designs"
            description="A focused look at your latest print and product visuals."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {spotlightProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08} className="group relative">
                <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-amber-300/40 via-rose-300/40 to-sky-300/40 opacity-50 blur-2xl transition duration-500 group-hover:opacity-80 animate-pulse" />
                <ProjectCard className="relative z-10" project={project} badge="Recent work" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured work"
            title="Selected graphic design projects with bold visuals"
            description="Brand visuals, social creatives, print layouts, and poster systems."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-10">
            <MagneticButton href="/work" variant="ghost">
              View all work
            </MagneticButton>
          </div>
        </div>
      </section>
      <Marquee items={profile.tools} className="mask-fade" />
      <section className="section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Graphic design packages built for momentum"
            description="Focused visual systems for brands, creators, and campaigns."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.08}
                className="glass rounded-3xl p-6"
              >
                <h3 className="font-display text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm text-white/70">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {service.features.map((feature) => (
                    <li key={feature}>- {feature}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected Clients"
            title="Collaborations across brands, creators, and local businesses"
            description="Replace these placeholders with real client logos when available."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Brand Identity", icon: <Palette className="h-5 w-5" /> },
              { label: "Social Creatives", icon: <Megaphone className="h-5 w-5" /> },
              { label: "Poster Design", icon: <Type className="h-5 w-5" /> },
              { label: "Digital Visuals", icon: <Sparkles className="h-5 w-5" /> },
              { label: "Photo Editing", icon: <Camera className="h-5 w-5" /> },
              { label: "Video Highlights", icon: <Film className="h-5 w-5" /> },
              { label: "Creative Direction", icon: <Wand2 className="h-5 w-5" /> },
              { label: "Client Trust", icon: <Star className="h-5 w-5" /> },
            ].map((item) => (
              <div
                key={item.label}
                className="glass flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-xs uppercase tracking-[0.3em] text-white/60 transition hover:border-white/30 hover:text-white"
              >
                <span className="text-emerald-300">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Let's work together
                </p>
                <h3 className="mt-3 font-display text-3xl">
                  Need a graphic system that stands out?
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  I deliver bold visuals for brands, creators, and campaigns.
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
      </section>
    </div>
    </PageReveal>
  );
}
