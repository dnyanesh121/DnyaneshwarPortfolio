import { CloudCog, Code2, Server, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups, techMarquee, type SkillGroup } from "@/lib/data";

const iconMap = {
  code: Code2,
  server: Server,
  cloud: CloudCog,
  tool: Wrench,
};

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const Icon = iconMap[group.icon];

  return (
    <Reveal delay={index * 90}>
      <div className="glass h-full rounded-3xl p-6 card-hover sm:p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
            <Icon size={19} />
          </span>
          <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
        </div>
        <div className="mt-6 space-y-4">
          {group.skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-300">{skill.name}</span>
                <span className="font-mono text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent-deep via-accent to-sky-400"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="container-custom">
        <SectionHeading
          label="Tech skills"
          title="The tools I use to bring ideas to life."
          description="From pixel-perfect interfaces to reliable APIs and deployment — here's the stack I work with every day."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>

        <Reveal delay={120}>
          <div className="marquee-mask mt-14 overflow-hidden border-y border-white/[0.06] py-5">
            <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
              {[...techMarquee, ...techMarquee].map((tech, index) => (
                <span key={`${tech}-${index}`} className="flex items-center gap-10 font-display text-sm font-medium text-slate-400">
                  {tech}
                  <span className="h-1 w-1 rounded-full bg-accent/60" />
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
