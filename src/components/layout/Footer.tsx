import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Music2,
  Phone,
  Sparkles,
} from "lucide-react";
import { profile } from "@/data/profile";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const socialIconMap: Record<string, React.ReactNode> = {
    Facebook: <Facebook className="h-4 w-4" />,
    TikTok: <Music2 className="h-4 w-4" />,
    Instagram: <Instagram className="h-4 w-4" />,
    LinkedIn: <Linkedin className="h-4 w-4" />,
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-rose-400/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mb-12 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
              <Sparkles className="h-4 w-4 text-emerald-300" />
              Available for projects
            </div>
            <div>
              <p className="font-display text-2xl">{profile.personal.name}</p>
              <p className="text-sm text-white/60">{profile.personal.title}</p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-2 lg:grid-cols-3">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Quick Links
              </p>
              <div className="flex flex-col gap-2 text-sm text-white/70">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Contact
              </p>
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-300" />
                  <span>{profile.personal.email}</span>
                </div>
                {profile.personal.phone ? (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-emerald-300" />
                    <span>{profile.personal.phone}</span>
                  </div>
                ) : null}
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-300" />
                  <span>{profile.personal.location}</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Socials
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                {profile.socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 transition hover:border-white/40 hover:text-white"
                  >
                    <span className="text-emerald-300">
                      {socialIconMap[social.name]}
                    </span>
                    {social.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-[0.65rem] uppercase tracking-[0.35em] text-white/50 md:flex-row md:items-center md:justify-between">
          <span>Copyright {new Date().getFullYear()} {profile.personal.name}</span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-300" />
            <span className="animate-glow">Built with Next.js + Framer Motion</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
