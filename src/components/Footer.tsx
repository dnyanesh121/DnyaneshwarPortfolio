import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950/60">
      <div className="container-custom py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 font-display text-sm font-bold text-accent">
                {site.initials}
              </span>
              <span className="font-display font-semibold text-white">{site.shortName}</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Building fast, accessible and thoughtful web experiences with React, Next.js and TypeScript.
              Based in {site.location}, open to work anywhere.
            </p>
            <div className="mt-5 flex gap-2">
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
                <Github size={17} />
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
              <a href={`mailto:${site.email}`} className="icon-link" aria-label="Email">
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 transition hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Let&apos;s talk</h3>
            <a href={`mailto:${site.email}`} className="mt-4 block break-all text-sm text-slate-300 transition hover:text-accent">
              {site.email}
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-white"
            >
              View resume <ArrowUp size={14} className="rotate-45" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
