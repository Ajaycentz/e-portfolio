"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";
import { PageReveal } from "@/components/ui/PageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function EducationPage() {
  const years = profile.education
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
          eyebrow="Education"
          title="Foundations of craft and experimentation"
          description="Formal training paired with motion and digital specialization."
        />
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
            Schools: {profile.education.length}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
            Timeline: {range || "—"}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
            Focus: IT foundations, web development, honors
          </span>
        </div>
        <div className="relative space-y-6 pl-10">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10" />
          <motion.div
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-emerald-400 via-sky-400 to-rose-400"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          {profile.education.map((item, index) => (
            <motion.div
              key={`${item.school}-${item.program}-${index}`}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute left-2 top-6 h-4 w-4 rounded-full border border-white/30 bg-black shadow-[0_0_16px_rgba(52,211,153,0.35)]" />
              <Reveal className="glass rounded-3xl p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <Calendar className="h-3 w-3 text-emerald-300" />
                    {item.start} - {item.end}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <GraduationCap className="h-3 w-3 text-emerald-300" />
                    {item.program}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl">{item.program}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/70">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <BookOpen className="h-4 w-4 text-emerald-300" />
                    {item.school}
                  </span>
                  {item.location ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      <MapPin className="h-4 w-4 text-emerald-300" />
                      {item.location}
                    </span>
                  ) : null}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {item.details.map((detail) => (
                    <li key={detail}>- {detail}</li>
                  ))}
                </ul>
              </Reveal>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </PageReveal>
  );
}
