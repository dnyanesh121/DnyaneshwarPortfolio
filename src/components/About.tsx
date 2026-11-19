import { CheckCircle2, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about, site } from "@/lib/data";

const highlights = [
  "Pixel-conscious, responsive interfaces",
  "Clean, maintainable TypeScript code",
  "API-driven products with real-time data",
  "Mentoring & coaching aspiring developers",
];

export default function About() {
  return (
    <section id="about" className="relative border-y border-white/[0.06] bg-white/[0.015] py-24 sm:py-28">
      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading label={about.eyebrow} title={about.title} />
            <Reveal delay={100}>
              <div className="mt-8 space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary">
                  Let&apos;s talk
                </a>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  LinkedIn profile
                </a>
              </div>
            </Reveal>
          </div>

          <div className="space-y-5">
            <Reveal delay={80}>
              <div className="glass relative overflow-hidden rounded-3xl p-7 shadow-card">
                <Quote className="absolute right-6 top-6 text-accent/15" size={54} />
                <p className="relative font-display text-lg font-medium leading-relaxed text-white">
                  &ldquo;Good code is not just about making things work — it&apos;s about making things
                  work beautifully for the people using them.&rdquo;
                </p>
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-accent">My philosophy</p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="grid grid-cols-2 gap-3">
                {about.stats.map((stat) => (
                  <div key={stat.label} className="glass rounded-2xl p-5 card-hover">
                    <p className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                    <p className="mt-1.5 text-xs leading-5 text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Always learning</p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Currently exploring advanced Next.js patterns and data modelling.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
