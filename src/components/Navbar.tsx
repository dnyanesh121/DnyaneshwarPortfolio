"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="container-custom flex h-[4.5rem] items-center justify-between gap-6" aria-label="Main navigation">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 font-display text-sm font-bold text-accent">
            {site.initials}
            <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full border-2 border-ink-950 bg-emerald-400" />
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-white sm:block">
            {site.shortName}
            <span className="block font-mono text-[10px] font-normal uppercase tracking-[0.2em] text-slate-400">
              Portfolio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition ${
                active === link.href ? "text-accent" : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
              {active === link.href ? (
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-accent" />
              ) : null}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Resume <Download size={14} />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="icon-link lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink-950/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium ${
                  active === link.href ? "bg-accent/10 text-accent" : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {link.label}
                <ArrowUpRight size={15} />
              </a>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              Download resume <Download size={15} />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
