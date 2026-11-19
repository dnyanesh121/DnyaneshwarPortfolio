import { GraduationCap, Rocket, Terminal } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { timeline } from "@/lib/data";

const icons = [Terminal, GraduationCap, Rocket];

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-28">
      <div className="container-custom">
        <SectionHeading
          label="My journey"
          title="The path so far."
          description="A quick look at where I've been and what I'm building toward."
        />

        <div className="relative mt-12 pl-8 sm:pl-12">
          <div className="absolute bottom-4 left-[11px] top-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent sm:left-[19px]" />

          <div className="space-y-5">
            {timeline.map((item, index) => {
              const Icon = icons[index] ?? Terminal;
              return (
                <Reveal key={item.title} delay={index * 90}>
                  <div className="glass relative rounded-2xl p-6 card-hover sm:p-7">
                    <span className="absolute -left-[38px] top-7 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-ink-950 text-accent sm:-left-[54px] sm:h-10 sm:w-10">
                      <Icon size={14} />
                    </span>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{item.period}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs text-slate-400">{item.place}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
