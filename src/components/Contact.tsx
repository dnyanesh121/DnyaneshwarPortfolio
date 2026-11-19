"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Send, AlertCircle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string; note?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFeedback(result.note || "Thanks for reaching out! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="relative border-t border-white/[0.06] bg-white/[0.015] py-24 sm:py-28">
      <div className="container-custom">
        <SectionHeading
          label="Get in touch"
          title="Have something in mind? Let's build it."
          description="Whether it's a project, a question or just a hello — drop me a message and I'll get back to you."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              <div className="glass rounded-3xl p-7">
                <h3 className="font-display text-lg font-semibold text-white">Contact details</h3>
                <div className="mt-6 space-y-5">
                  <a href={`mailto:${site.email}`} className="group flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Mail size={17} />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-400">Email</span>
                      <span className="mt-1 block break-all text-sm text-slate-300 transition group-hover:text-accent">
                        {site.email}
                      </span>
                    </span>
                  </a>
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <MapPin size={17} />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-400">Location</span>
                      <span className="mt-1 block text-sm text-slate-300">{site.location} · Open to remote</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-3xl p-7">
                <h3 className="font-display text-lg font-semibold text-white">Find me online</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2.5">
                    <Github size={15} /> GitHub
                  </a>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2.5">
                    <Linkedin size={15} /> LinkedIn
                  </a>
                </div>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-accent hover:text-white"
                >
                  Download my resume →
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-medium text-slate-400">
                    Your name <span className="text-accent">*</span>
                  </label>
                  <input id="name" name="name" type="text" required maxLength={120} placeholder="Jane Doe" className="field" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium text-slate-400">
                    Your email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    placeholder="jane@example.com"
                    className="field"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="mb-2 block text-xs font-medium text-slate-400">
                  Subject
                </label>
                <input id="subject" name="subject" type="text" maxLength={200} placeholder="Let's work together" className="field" />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block text-xs font-medium text-slate-400">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  maxLength={5000}
                  placeholder="Tell me a little about your project..."
                  className="field resize-none"
                />
              </div>

              {feedback ? (
                <p
                  role="status"
                  className={`mt-4 flex items-start gap-2 rounded-xl border px-4 py-3 text-xs leading-5 ${
                    status === "success"
                      ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300"
                      : "border-red-400/20 bg-red-400/[0.06] text-red-300"
                  }`}
                >
                  {status === "success" ? <CheckCircle2 size={15} className="mt-0.5 shrink-0" /> : <AlertCircle size={15} className="mt-0.5 shrink-0" />}
                  {feedback}
                </p>
              ) : null}

              <button type="submit" disabled={status === "loading"} className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60">
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send message <Send size={15} />
                  </>
                )}
              </button>

              <p className="mt-4 text-center font-mono text-[10px] text-slate-400">
                Your message is handled securely and never shared.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
