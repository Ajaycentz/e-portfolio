import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, Clock3 } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { PageReveal } from "@/components/ui/PageReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact | Alden Jay Centino",
  description:
    "Start a project with Alden Jay Centino. Share goals, timelines, and scope for a response within 24-48 hours.",
  openGraph: {
    title: "Contact | Alden Jay Centino",
    description:
      "Start a project with Alden Jay Centino. Response within 24-48 hours.",
    images: ["/Profile.jpg"],
  },
};

export default function ContactPage() {
  return (
    <PageReveal>
      <div className="section">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Start a project with bold creative energy"
              description="Tell me about your vision, timelines, and goals. I will reply within 24-48 hours."
            />
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="glass rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Availability
              </p>
              <span className="mt-3 inline-flex rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-emerald-200">
                Available
              </span>
              <p className="mt-3 font-display text-2xl">
                {profile.personal.availability}
              </p>
            </div>
            <div className="glass rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                What happens next
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {[
                  "Quick review of your inquiry and goals",
                  "Follow-up email with scope + timeline",
                  "Kickoff call to align visuals and deliverables",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10 text-emerald-300">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
                <Clock3 className="h-4 w-4 text-emerald-300" />
                Response time: 24-48 hours
              </div>
            </div>
            <div className="glass rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Reach me
              </p>
              <p className="mt-3 text-sm text-white/70">{profile.personal.email}</p>
              <p className="text-sm text-white/70">{profile.personal.phone}</p>
            </div>
            <div className="glass rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Socials
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                {profile.socials.map((social) => (
                  <Link key={social.name} href={social.url} target="_blank">
                    {social.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageReveal>
  );
}
