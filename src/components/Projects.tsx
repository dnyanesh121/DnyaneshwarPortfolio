import Image from "next/image";
import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative border-y border-white/[0.06] bg-white/[0.015] py-24 sm:py-28">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            label="Selected work"
            title="Things I've built and shipped."
            description="A few projects where I turned real problems into working, responsive web applications."
          />
          <Reveal>
            <a href={projects[0].live} target="_blank" rel="noopener noreferrer" className="btn-ghost shrink-0">
              See a live project <ArrowUpRight size={15} />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 100}>
              <article className="glass group h-full overflow-hidden rounded-3xl card-hover">
                <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 560px"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-ink-950/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-accent backdrop-blur">
                    {project.category}
                  </span>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ink-950/70 text-white backdrop-blur transition hover:border-accent/60 hover:text-accent"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check size={13} className="shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 font-mono text-[10px] text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-white"
                  >
                    View live demo <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
