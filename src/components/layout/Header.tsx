"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useCursor } from "@/components/providers/CursorProvider";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { enabled, toggle } = useCursor();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-400/60 via-sky-400/60 to-rose-400/60" />
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="Home"
            className="group relative"
          >
            <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur transition duration-300 group-hover:border-white/40 group-hover:bg-white/10">
              <Image
                src="/projects/LOGO.PNG"
                alt="AJ Studio Logo"
                width={44}
                height={44}
                className="h-10 w-10 object-contain"
              />
            </span>
            <span className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-r from-emerald-400/35 via-sky-400/35 to-rose-400/35 opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute -bottom-3 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-emerald-300 via-sky-300 to-rose-300 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70 backdrop-blur md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative rounded-full px-3 py-2 transition",
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              <span className="relative z-10 transition duration-300 group-hover:text-white">
                {link.label}
              </span>
              <span className="pointer-events-none absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-emerald-300 via-sky-300 to-rose-300 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={toggle}
              className="group relative overflow-hidden rounded-full border border-white/20 px-4 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-white/70 transition duration-300 hover:border-white/50 hover:text-white"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.7)] transition-transform duration-300 group-hover:scale-125" />
                Cursor {enabled ? "On" : "Off"}
              </span>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-sky-400/10 to-rose-400/10 opacity-0 transition duration-300 group-hover:opacity-100" />
            </button>
            <MagneticButton
              href="/contact"
              className="px-4 py-2 text-[0.6rem] tracking-[0.35em]"
            >
              Start a project
            </MagneticButton>
          </div>
          
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-black/70 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.3em]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative transition",
                  pathname === link.href ? "text-white" : "text-white/60"
                )}
                onClick={() => setOpen(false)}
              >
                <span className="relative z-10 transition duration-300 group-hover:text-white">
                  {link.label}
                </span>
                <span className="pointer-events-none absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-emerald-300 via-sky-300 to-rose-300 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={toggle}
              className="group relative overflow-hidden rounded-full border border-white/20 px-4 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-white/70 transition duration-300 hover:border-white/50 hover:text-white"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.7)] transition-transform duration-300 group-hover:scale-125" />
                Cursor {enabled ? "On" : "Off"}
              </span>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-sky-400/10 to-rose-400/10 opacity-0 transition duration-300 group-hover:opacity-100" />
            </button>
            <MagneticButton href="/contact">Start a project</MagneticButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
