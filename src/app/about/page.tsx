import Link from "next/link";
import type { Metadata } from "next";
import {
  Aperture,
  Atom,
  Bot,
  Calendar,
  Code2,
  Database,
  Film,
  Github,
  Layers3,
  LayoutGrid,
  Mail,
  MapPin,
  Palette,
  PenTool,
  Phone,
  Scissors,
  Sparkles,
  Terminal,
  Video,
  Wind,
  Wrench,
} from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { PageReveal } from "@/components/ui/PageReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About | Alden Jay Centino",
  description:
    "Get to know Alden Jay Centino, a graphic designer specializing in brand identity, social creatives, and print systems.",
  openGraph: {
    title: "About | Alden Jay Centino",
    description:
      "Graphic designer specializing in brand identity, social creatives, and print systems.",
    images: ["/prof.jpg"],
  },
};

export default function AboutPage() {
  const stats = profile.stats.filter((stat) => stat.value !== "--");
  const categoryIcon: Record<string, React.ReactNode> = {
    "Graphic Design": <Palette className="h-5 w-5 text-emerald-300" />,
    "Video Editing": <Video className="h-5 w-5 text-emerald-300" />,
    "Web Development": <Code2 className="h-5 w-5 text-emerald-300" />,
    "AI Tools": <Sparkles className="h-5 w-5 text-emerald-300" />,
  };
  const toolGroups = [
    {
      title: "Design & UI",
      items: [
        "Adobe Photoshop",
        "Canva",
        "Adobe Illustrator",
        "Lightroom",
        "Figma",
      ],
    },
    {
      title: "Video & Motion",
      items: ["Adobe Premiere Pro", "CapCut", "Filmora", "DaVinci Resolve"],
    },
    {
      title: "Web Development",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "Laravel",
        "Bootstrap",
        "Tailwind CSS",
        "Python",
        "React JS",
        "Visual Studio Code",
        "Git & GitHub",
        "Next.js",
      ],
    },
    {
      title: "AI Tools",
      items: [
        "Canva AI",
        "Adobe Firefly",
        "Uizard",
        "Midjourney",
        "Leonardo AI",
        "ChatGPT",
        "Copilot",
        "CapCut AI",
        "Runway ML",
        "Pika",
        "Kaiber",
        "DALL-E",
        "Google Gemini",
        "Meta AI",
        "VEO 3",
        "FLOW",
        "Stable Diffusion",
        "Synthesia",
        "Veed",
        "Lumen5",
        "ElevenLabs",
      ],
    },
  ]
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => profile.tools.includes(item)),
    }))
    .filter((group) => group.items.length > 0);

  const toolMeta: Record<
    string,
    { icon: React.ReactNode; desc: string }
  > = {
    "Adobe Photoshop": { icon: <Palette className="h-4 w-4" />, desc: "Photo editing and compositing." },
    Canva: { icon: <Palette className="h-4 w-4" />, desc: "Fast visual layouts and social graphics." },
    "Adobe Illustrator": { icon: <PenTool className="h-4 w-4" />, desc: "Vector illustration and logo work." },
    Lightroom: { icon: <Aperture className="h-4 w-4" />, desc: "Photo color grading and cleanup." },
    Figma: { icon: <PenTool className="h-4 w-4" />, desc: "UI design and interactive prototypes." },
    "Adobe Premiere Pro": { icon: <Film className="h-4 w-4" />, desc: "Professional video editing." },
    CapCut: { icon: <Scissors className="h-4 w-4" />, desc: "Quick edits and social-ready video." },
    Filmora: { icon: <Film className="h-4 w-4" />, desc: "Lightweight video editing." },
    "DaVinci Resolve": { icon: <Film className="h-4 w-4" />, desc: "Color grading and editing suite." },
    HTML: { icon: <Code2 className="h-4 w-4" />, desc: "Structure for web pages." },
    CSS: { icon: <Code2 className="h-4 w-4" />, desc: "Styling and layout control." },
    JavaScript: { icon: <Code2 className="h-4 w-4" />, desc: "Interactive behavior for the web." },
    PHP: { icon: <Terminal className="h-4 w-4" />, desc: "Server-side scripting." },
    MySQL: { icon: <Database className="h-4 w-4" />, desc: "Relational database management." },
    Laravel: { icon: <Code2 className="h-4 w-4" />, desc: "PHP framework for web apps." },
    Bootstrap: { icon: <LayoutGrid className="h-4 w-4" />, desc: "Responsive UI framework." },
    "Tailwind CSS": { icon: <Wind className="h-4 w-4" />, desc: "Utility-first styling system." },
    Python: { icon: <Terminal className="h-4 w-4" />, desc: "Scripting and automation." },
    "React JS": { icon: <Atom className="h-4 w-4" />, desc: "Component-based UI building." },
    "Visual Studio Code": { icon: <Code2 className="h-4 w-4" />, desc: "Primary code editor." },
    "Git & GitHub": { icon: <Github className="h-4 w-4" />, desc: "Version control and collaboration." },
    "Next.js": { icon: <Code2 className="h-4 w-4" />, desc: "React framework for production." },
    "Canva AI": { icon: <Sparkles className="h-4 w-4" />, desc: "AI-assisted design creation." },
    "Adobe Firefly": { icon: <Sparkles className="h-4 w-4" />, desc: "Generative design tools." },
    Uizard: { icon: <Bot className="h-4 w-4" />, desc: "AI UI concept generation." },
    Midjourney: { icon: <Sparkles className="h-4 w-4" />, desc: "Generative image creation." },
    "Leonardo AI": { icon: <Sparkles className="h-4 w-4" />, desc: "AI image generation platform." },
    ChatGPT: { icon: <Bot className="h-4 w-4" />, desc: "Content ideation and scripting." },
    Copilot: { icon: <Bot className="h-4 w-4" />, desc: "AI coding assistance." },
    "CapCut AI": { icon: <Sparkles className="h-4 w-4" />, desc: "AI effects for video edits." },
    "Runway ML": { icon: <Sparkles className="h-4 w-4" />, desc: "AI video tools and edits." },
    Pika: { icon: <Sparkles className="h-4 w-4" />, desc: "AI video generation." },
    Kaiber: { icon: <Sparkles className="h-4 w-4" />, desc: "AI motion video tools." },
    "DALL-E": { icon: <Sparkles className="h-4 w-4" />, desc: "AI image generation." },
    "Google Gemini": { icon: <Sparkles className="h-4 w-4" />, desc: "AI assistance and research." },
    "Meta AI": { icon: <Sparkles className="h-4 w-4" />, desc: "AI assistance and creation." },
    "VEO 3": { icon: <Sparkles className="h-4 w-4" />, desc: "AI video generation." },
    FLOW: { icon: <Sparkles className="h-4 w-4" />, desc: "AI creative workflows." },
    "Stable Diffusion": { icon: <Sparkles className="h-4 w-4" />, desc: "Generative image models." },
    Synthesia: { icon: <Sparkles className="h-4 w-4" />, desc: "AI video presenters." },
    Veed: { icon: <Film className="h-4 w-4" />, desc: "Online video editing." },
    Lumen5: { icon: <Film className="h-4 w-4" />, desc: "Video creation from text." },
    ElevenLabs: { icon: <Sparkles className="h-4 w-4" />, desc: "AI voice generation." },
  };
  const skillItems = profile.skills.map((group) => ({
    id: group.category,
    title: group.category,
    content: (
      <div className="space-y-3 text-sm text-white/70">
        <div className="flex items-center gap-3 text-white">
          <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 p-2">
            {categoryIcon[group.category] ?? (
              <Wrench className="h-5 w-5 text-emerald-300" />
            )}
          </span>
          <span className="font-display text-lg">{group.category}</span>
        </div>
        <ul className="space-y-2">
          {group.items.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </div>
    ),
  }));
  const serviceIcon: Record<string, React.ReactNode> = {
    "Brand Identity Suite": <PenTool className="h-4 w-4" />,
    "Social Creative Pack": <Sparkles className="h-4 w-4" />,
    "Print & Poster System": <Layers3 className="h-4 w-4" />,
  };

  return (
    <PageReveal>
      <div className="section">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
          <SectionHeading
            eyebrow="About"
            title="Graphic-first craft with a strong visual system"
            description={profile.personal.summary}
          />
          <div className="flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
            {profile.focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
              >
                {item}
              </span>
            ))}
          </div>
          <Reveal className="glass rounded-3xl p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  label: "Birthday",
                  value: profile.personal.birthday,
                  icon: <Calendar className="h-4 w-4" />,
                },
                {
                  label: "Location",
                  value: profile.personal.location,
                  icon: <MapPin className="h-4 w-4" />,
                },
                {
                  label: "Email",
                  value: profile.personal.email,
                  icon: <Mail className="h-4 w-4" />,
                },
                {
                  label: "Phone",
                  value: profile.personal.phone,
                  icon: <Phone className="h-4 w-4" />,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/30 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10 text-emerald-300 transition group-hover:scale-105">
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                  <p className="mt-2 text-sm text-white/80">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/Centino%20Alden%20Jay%20Cv%20(2026).pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.3em] transition hover:border-white/40 hover:text-white"
              >
                <Sparkles className="h-4 w-4 text-emerald-300" />
                Download CV
              </Link>
              {stats.length ? (
                <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
                  {stats.map((stat) => (
                    <span
                      key={stat.label}
                      className="rounded-full border border-white/10 px-4 py-2"
                    >
                      {stat.value} {stat.label}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>
          <Reveal className="glass rounded-3xl p-6">
            <h3 className="font-display text-xl">Core Skills</h3>
            <p className="mt-2 text-sm text-white/60">
              Tap to expand each skill set.
            </p>
            <Accordion items={skillItems} className="mt-6" />
          </Reveal>
          </div>
          <div className="space-y-6">
          <Reveal className="glass rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Focus Areas
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-white/60">
              {profile.focusAreas.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="glass rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Signature Services
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              {profile.services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/30 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3 text-white">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10 text-emerald-300 transition group-hover:scale-105">
                      {serviceIcon[service.title] ?? (
                        <Wrench className="h-4 w-4" />
                      )}
                    </span>
                    <div>
                      <p className="font-display text-base">{service.title}</p>
                      <p className="mt-1 text-xs text-white/60">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="glass rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Design Approach
            </p>
            <div className="mt-4 grid gap-2 text-xs uppercase tracking-[0.28em] text-white/60">
              {[
                "Visual hierarchy first",
                "System consistency",
                "Fast, reliable delivery",
                "Detail-focused polish",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="glass rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Availability
            </p>
            <p className="mt-3 font-display text-2xl">
              {profile.personal.availability}
            </p>
            <p className="mt-2 text-sm text-white/70">
              Open to brand visuals, social creatives, and print systems.
            </p>
          </Reveal>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="glass rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Tools & Platforms
                </p>
                <h3 className="mt-2 font-display text-3xl">
                  Complete toolkit
                </h3>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {toolGroups.map((group) => (
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
                        className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 transition hover:border-white/30 hover:text-white"
                      >
                        <span className="text-emerald-300">
                          {toolMeta[tool]?.icon ?? (
                            <Wrench className="h-4 w-4" />
                          )}
                        </span>
                        {tool}
                        <span className="pointer-events-none absolute left-1/2 top-0 z-10 w-56 -translate-x-1/2 -translate-y-[120%] rounded-xl border border-white/10 bg-black/90 px-3 py-2 text-[0.6rem] uppercase tracking-[0.25em] text-white/80 opacity-0 shadow-soft transition duration-200 group-hover:opacity-100">
                          {toolMeta[tool]?.desc ??
                            "Creative tool in the workflow."}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </PageReveal>
  );
}
