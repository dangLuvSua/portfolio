"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Database,
  Mail,
  Paintbrush,
  Server,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./reveal";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const SKILLS = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express", "Python", "PHP / Laravel", "REST / GraphQL"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "Redis"],
  },
  {
    icon: Paintbrush,
    title: "Design & Tools",
    items: ["Figma", "Git / GitHub", "Docker", "Vercel", "AWS"],
  },
];

export function SkillsGrid() {
  return (
    <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3" stagger={0.07}>
      {SKILLS.map((group) => (
        <StaggerItem key={group.title}>
          <div className="bento bento-hover group p-6 flex flex-col gap-4 h-full">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-foreground text-background transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-6">
                <group.icon className="size-4.5" />
              </span>
              <h3 className="font-semibold tracking-tight">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-foreground/[0.03] px-3 py-1 text-[13px] text-accent transition-colors duration-200 hover:text-foreground hover:border-ring cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function AboutBento() {
  return (
    <Stagger className="grid grid-cols-1 md:grid-cols-5 gap-3" stagger={0.08}>
      <StaggerItem className="md:col-span-3">
        <div className="bento bento-hover p-6 sm:p-8 flex flex-col gap-4 h-full">
          <p className="font-mono text-xs text-accent">~/about.txt</p>
          <p className="text-base sm:text-lg leading-relaxed text-pretty">
            My journey into software engineering started with a curiosity for
            how things work on the web. I now build{" "}
            <span className="font-medium text-foreground">
              robust, scalable apps
            </span>{" "}
            that don&apos;t just function flawlessly — they feel intuitive and
            delightful to use.
          </p>
          <p className="text-accent leading-relaxed">
            I believe the best products live at the intersection of clean code
            and thoughtful design. Off the keyboard, I&apos;m usually hiking,
            reading tech deep-dives, or shooting digital photography.
          </p>
        </div>
      </StaggerItem>
      <StaggerItem className="md:col-span-2">
        <div className="flex flex-col gap-3 h-full">
          <div className="bento group relative overflow-hidden aspect-[4/3]">
            {/* Fallback monogram shown while /profile.jpg loads or if missing */}
            <div
              aria-hidden
              className="absolute inset-0 grid place-items-center bg-foreground/[0.04]"
            >
              <span className="text-4xl font-semibold tracking-tight text-accent">
                FJ
              </span>
            </div>
            <Image
              src="/suaport.jpg"
              alt="Portrait of Fransua John Villesis"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
              priority={false}
            />
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/85 px-3 py-1 text-[11px] font-medium backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-foreground animate-pulse-dot" />
              Fransua — Bulacan, PH
            </span>
          </div>
          <div className="bento bento-hover p-6 flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent">
              Interests
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Hiking", "Photography", "UI details", "Open source"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full bg-foreground text-background px-3 py-1 text-xs font-medium"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="bento bento-hover p-6 flex flex-col gap-1.5 flex-1">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent">
              Fun fact
            </p>
            <p className="text-sm leading-relaxed text-accent">
              I obsess over 4px spacing, empty states, and buttons that feel{" "}
              <span className="text-foreground">just right</span> to click.
            </p>
          </div>
        </div>
      </StaggerItem>
    </Stagger>
  );
}

export function EducationTimeline() {
  return (
    <Reveal>
      <div className="bento bento-hover p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8 relative overflow-hidden">
        <div
          aria-hidden
          className="hidden sm:block absolute left-0 top-0 h-full w-1 bg-foreground"
        />
        <div className="sm:w-36 shrink-0 flex sm:flex-col gap-1">
          <span className="font-mono text-xs text-accent">2023 —</span>
          <span className="font-mono text-xs text-accent">Present</span>
          <span className="mt-2 inline-flex w-fit items-center rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-accent">
            4th Year
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg tracking-tight">
            B.S. Information Technology{" "}
            <span className="text-accent font-normal">
              @ Bulacan State University — Bustos
            </span>
          </h3>
          <p className="text-accent leading-relaxed text-[15px] max-w-2xl">
            Strong focus on software engineering, web development, and shipping
            practical solutions — most recently the OneData platform for DepEd
            Baliwag.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "fransuavillesis14@gmail.com";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <Reveal>
      <div className="bento relative overflow-hidden p-8 sm:p-12 flex flex-col gap-6 text-center items-center">
        <div aria-hidden className="dot-grid absolute inset-0 opacity-60" />
        <div className="relative flex flex-col gap-4 items-center max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium shadow-sm">
            <span className="size-1.5 rounded-full bg-foreground animate-pulse-dot" />
            Let&apos;s build something together
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] text-balance">
            Have an idea? Let&apos;s talk.
          </h2>
          <p className="text-accent leading-relaxed">
            I&apos;m always open to new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Mail className="size-4" />
              {email}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-px hover:shadow-md"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="flex gap-2 pt-1">
            <a
              href="https://github.com/dangLuvSua"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-accent transition-all duration-200 hover:text-foreground hover:border-ring hover:-translate-y-px"
            >
              <GithubIcon className="size-4" />
              GitHub
              <ArrowUpRight className="size-3.5 opacity-0 -ml-1 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
            </a>
            <a
              href="https://www.linkedin.com/in/fransua-john-421032403/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-accent transition-all duration-200 hover:text-foreground hover:border-ring hover:-translate-y-px"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
              <ArrowUpRight className="size-3.5 opacity-0 -ml-1 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row gap-3 justify-between items-center text-sm text-accent pt-6 pb-8">
      <p className="font-mono text-xs">
        © {new Date().getFullYear()} Fransua John Villesis · Built with Next.js
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-medium transition-all duration-300 hover:text-foreground hover:border-ring hover:-translate-y-0.5 hover:shadow-md"
      >
        Back to top
        <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </footer>
  );
}
