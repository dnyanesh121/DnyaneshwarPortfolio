"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { site } from "@/lib/data";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = site.alternativeRoles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setDeleting(true);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (!next) {
            setDeleting(false);
            setRoleIndex((index) => (index + 1) % site.alternativeRoles.length);
          }
        }
      },
      deleting ? 45 : 90,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new opportunities
            </div>

            <p className="mt-8 font-mono text-sm tracking-[0.25em] text-slate-400">HELLO, I&apos;M</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
              {site.name.split(" ").slice(0, 2).join(" ")}
              <br />
              <span className="gradient-text">{site.name.split(" ").slice(2).join(" ")}</span>
            </h1>

            <div className="mt-6 flex min-h-[2.75rem] items-center gap-3 text-lg text-slate-300 sm:text-2xl">
              <Sparkles size={20} className="shrink-0 text-accent" />
              <span className="font-display font-medium">
                I&apos;m a <span className="text-accent">{text}</span>
                <span className="ml-0.5 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-accent" />
              </span>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              I turn complex ideas into clean, fast and delightful web experiences. Focused on
              React, Next.js and TypeScript — with a soft spot for great design and good coffee.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                Explore my work <ArrowUpRight size={16} />
              </a>
              <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Download resume <Download size={15} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
                <Github size={17} />
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
              <a href={`mailto:${site.email}`} className="icon-link" aria-label="Email">
                <Mail size={17} />
              </a>
              <span className="hidden h-5 w-px bg-white/10 sm:block" />
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin size={13} /> {site.location}
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/20 via-transparent to-violet-500/10 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-ink-800/80 via-ink-900/40 to-ink-950 shadow-card">
              <Image
                src="/images/profile-no-bg.png"
                alt={site.name}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-contain object-bottom p-3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">Frontend Developer</p>
                <p className="mt-1 font-display text-xl font-semibold text-white">{site.shortName}</p>
              </div>
            </div>

            <div className="glass absolute -left-4 top-10 animate-float rounded-2xl px-4 py-3 shadow-card sm:-left-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Currently</p>
              <p className="mt-1 text-sm font-semibold text-white">Building with Next.js</p>
            </div>
            <div className="glass absolute -bottom-5 -right-3 animate-float rounded-2xl px-4 py-3 shadow-card [animation-delay:1.4s] sm:-right-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Also into</p>
              <p className="mt-1 text-sm font-semibold text-accent">MongoDB & APIs</p>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="mt-16 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 transition hover:text-accent lg:mt-24"
        >
          Scroll to explore <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
