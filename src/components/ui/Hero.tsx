"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile } from "@/data/profile";
import {
  ArrowUpRight,
  Download,
  Sparkles,
  Briefcase,
  Users,
  Trophy,
  Star,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M21 8.5c-1.8-.1-3.4-.8-4.6-2-1.2-1.2-1.9-2.8-2-4.6h-3.5v13.1c0 1.4-1.1 2.5-2.5 2.5S6 16.4 6 15s1.1-2.5 2.5-2.5c.4 0 .8.1 1.1.3V9.1c-.4-.1-.8-.1-1.1-.1C5.5 9 3 11.5 3 14.5S5.5 20 8.5 20s5.5-2.5 5.5-5.5V8.2c1.4 1 3.1 1.6 5 1.6V8.5z" />
  </svg>
);

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [offset, setOffset] = useState(0);
  const statIcons = [
    Briefcase,
    Trophy,
    Users,
    Star,
  ];
  const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Facebook,
    Instagram,
    LinkedIn: Linkedin,
    TikTok: TikTokIcon,
  };

  useEffect(() => {
    if (reducedMotion) return;

    let raf = 0;
    const onScroll = () => {
      raf = window.requestAnimationFrame(() => {
        setOffset(window.scrollY * 0.2);
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  return (
    <section className="relative overflow-hidden pb-16 pt-24 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ transform: reducedMotion ? "none" : `translateY(${offset}px)` }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:px-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <motion.div
          className="order-2 space-y-8 md:order-1"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/60"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span>{profile.personal.location}</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-200/10 px-3 py-1 text-[0.6rem] tracking-[0.3em] text-amber-100">
              <Sparkles className="h-3 w-3" /> Available
            </span>
          </motion.div>
          <motion.h1
            className="font-display text-6xl leading-[0.95] sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-amber-200"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span className="relative inline-block">
              <span className="absolute -bottom-3 left-0 h-3 w-full rounded-full bg-amber-300/30 blur-md" />
              <motion.span
                className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-amber-300/90"
                animate={reducedMotion ? undefined : { x: ["-6%", "6%", "-6%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              {profile.personal.name}
            </span>
          </motion.h1>
          <motion.p
            className="max-w-xl text-lg text-white/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            {profile.personal.tagline}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <MagneticButton href="/contact">
              <span className="inline-flex items-center gap-2">
                <ArrowUpRight className="h-4 w-4" />
                Contact me
              </span>
            </MagneticButton>
            <MagneticButton
              href="/Centino%20Alden%20Jay%20Cv%20(2026).pdf"
              variant="ghost"
            >
              <span className="inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </span>
            </MagneticButton>
          </motion.div>
          <motion.div
            className="flex flex-wrap items-center gap-3 text-[0.6rem] uppercase tracking-[0.28em] text-white/60"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <span className="text-white/50">Find me on</span>
            {profile.socials.map((social) => {
              const Icon = socialIconMap[social.name] ?? Sparkles;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[0.6rem] font-semibold text-white/70 transition hover:border-amber-200/70 hover:text-white"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-amber-300/20 opacity-0 blur-md transition duration-300 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute -inset-2 rounded-full border border-amber-200/30 opacity-0 transition duration-300 group-hover:opacity-100" />
                  <Icon className="relative h-5 w-5" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
        <motion.div
          className="relative order-1 md:order-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mx-auto w-full max-w-sm">
            <motion.div
              className="pointer-events-none absolute -left-8 -top-6 h-16 w-16 rounded-full border border-white/15"
              animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -right-10 bottom-6 h-20 w-20 rounded-full border border-white/10"
              animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-amber-300/25 blur-2xl"
              animate={reducedMotion ? undefined : { scale: [1, 1.06, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute right-0 top-6 h-44 w-44 rounded-full bg-sky-400/20 blur-2xl"
              animate={reducedMotion ? undefined : { scale: [1, 1.04, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute left-8 -bottom-8 h-24 w-24 rounded-full bg-emerald-300/20 blur-2xl"
              animate={reducedMotion ? undefined : { scale: [1, 1.08, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative p-2"
              whileHover={{
                rotate: 0.8,
                scale: 1.015,
                transition: { type: "spring", stiffness: 120, damping: 16 },
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="pointer-events-none absolute -right-14 top-10 h-40 w-40 rounded-full bg-amber-300/30 blur-2xl"
                animate={reducedMotion ? undefined : { scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute -left-12 bottom-12 h-32 w-32 rounded-[40%] bg-indigo-500/35 blur-2xl"
                animate={reducedMotion ? undefined : { scale: [1, 1.06, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute right-4 -bottom-8 h-20 w-20 rounded-full border-2 border-amber-200/60"
                animate={reducedMotion ? undefined : { rotate: [0, 6, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute left-6 top-6 h-3 w-3 rounded-full bg-emerald-300/80"
                animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute left-12 top-10 h-2 w-2 rounded-full bg-emerald-200/70"
                animate={reducedMotion ? undefined : { y: [0, -3, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute left-20 top-14 h-2 w-2 rounded-full bg-emerald-200/70"
                animate={reducedMotion ? undefined : { y: [0, -2, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute right-10 top-10 h-[2px] w-10 rounded-full bg-amber-200/80"
                animate={reducedMotion ? undefined : { scaleX: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src={profile.personal.portrait}
                alt={profile.personal.name}
                width={500}
                height={640}
                sizes="(min-width: 1024px) 420px, (min-width: 768px) 45vw, 80vw"
                className="relative z-10 w-full rounded-[26px] object-cover shadow-[0_0_70px_rgba(253,224,71,0.4)]"
                priority
              />
            </motion.div>
            <motion.div
              className="mt-6 grid gap-3 rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent p-4 text-xs text-white/70 sm:grid-cols-2"
              animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              {profile.stats.slice(0, 4).map((stat, index) => {
                const Icon = statIcons[index % statIcons.length];
                return (
                  <motion.div
                    key={stat.label}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-amber-200 transition group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/55">
                        {stat.label}
                      </p>
                      <p className="text-base font-semibold text-white">
                        {stat.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
