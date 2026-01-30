"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile } from "@/data/profile";
import { ArrowUpRight, Briefcase, Sparkles } from "lucide-react";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [offset, setOffset] = useState(0);

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
        className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow"
        style={{ transform: reducedMotion ? "none" : `translateY(${offset}px)` }}
      />
      <div className="pointer-events-none absolute -left-20 top-20 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-10 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-rose-400/20 blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8 md:flex-row md:items-end">
        <div className="flex-1 space-y-8">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/60">
            <span>{profile.personal.location}</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.6rem] tracking-[0.3em] text-emerald-200">
              <Sparkles className="h-3 w-3" /> Available
            </span>
          </div>
          <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="relative inline-block">
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-400/40 via-sky-400/40 to-rose-400/40 blur-2xl animate-glow" />
              <span className="text-gradient">{profile.personal.name}</span>
            </span>
            <span className="block text-white/90">
              <AnimatedHeadline />
            </span>
          </h1>
          <p className="max-w-xl text-lg text-white/70">
            {profile.personal.tagline}
          </p>
          <div className="flex flex-wrap gap-2 text-[0.6rem] uppercase tracking-[0.28em] text-white/60">
            {profile.focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <MagneticButton href="/work">
              <span className="inline-flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                View Work
              </span>
            </MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              <span className="inline-flex items-center gap-2">
                <ArrowUpRight className="h-4 w-4" />
                Hire Me
              </span>
            </MagneticButton>
          </div>
        </div>
        <motion.div
          className="relative flex-1 md:max-w-sm lg:max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-tr from-emerald-400/30 via-sky-400/20 to-rose-400/30 blur-3xl"
            animate={{ opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="group glass relative mx-auto w-full max-w-sm overflow-hidden rounded-[28px] p-4 sm:max-w-md md:max-w-sm"
            whileHover={{ rotate: 0.8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
          >
            <motion.div
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/25 blur-2xl"
              animate={{ y: [0, 12, 0], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-sky-400/25 blur-2xl"
              animate={{ y: [0, -10, 0], opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -left-6 top-8 h-20 w-20 rounded-full border border-white/20"
              animate={{ rotate: [0, 12, 0], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />
            <Image
              src={profile.personal.portrait}
              alt={profile.personal.name}
              width={460}
              height={560}
              className="h-full w-full rounded-[22px] object-cover transition duration-700 group-hover:scale-105"
              priority
            />
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
