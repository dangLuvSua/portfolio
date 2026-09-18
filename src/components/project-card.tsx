"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  FolderGit2,
} from "lucide-react";

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

type Project = {
  title: string;
  image1: string;
  image2: string;
  url: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  description: string;
  problem: string;
  solution: string;
};

const projects: Project[] = [
  {
    title: "OneData",
    image1: "/OnedataLanding.png",
    image2: "/OnedataDashboard.png",
    url: "onedata-baliwag.com",
    liveUrl: "https://onedata-baliwag.com",
    githubUrl: "https://github.com/Robb730/onedata",
    techStack: ["React", "Tailwind CSS", "Supabase", "PostgreSQL", "Recharts"],
    description:
      "A centralized education data management and analytics platform for the Department of Education — City of Baliwag.",
    problem:
      "School divisions and offices were managing education data across fragmented systems, making reporting, monitoring, and access control inefficient and hard to audit.",
    solution:
      "Built a unified web platform for enrollment tracking, file repository management, role-based access control, analytics dashboards, and audit logging across divisions and sections.",
  },
  {
    title: "COIS",
    image1: "/project_beta_mockup_1787038592211.jpg",
    image2: "/project_beta_mockup_1787038592211.jpg",
    url: "auraartisan.shop",
    liveUrl: "#",
    githubUrl: "#",
    techStack: ["React", "Node.js", "Stripe API"],
    description:
      "A headless e-commerce experience with sub-second page loads and seamless checkout.",
    problem:
      "The client's legacy storefront was slow and losing mobile conversions.",
    solution:
      "Rebuilt the storefront headless, cutting load times and lifting conversions.",
  },
  {
    title: "Task Flow",
    image1: "/project_gamma_mockup_1787038606637.jpg",
    image2: "/project_gamma_mockup_1787038606637.jpg",
    url: "finlytic.app",
    liveUrl: "#",
    githubUrl: "#",
    techStack: ["Vue.js", "D3.js", "Firebase"],
    description:
      "An interactive, dark-themed dashboard that unifies portfolios into beautiful, readable charts.",
    problem:
      "Investors struggled to visualize complex asset allocations across multiple brokers.",
    solution:
      "Unified every broker's data into one clear, chartable portfolio view.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectsBrowser() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const project = projects[active];

  const go = (next: number) => {
    setDirection(next > active ? 1 : -1);
    setActive((next + projects.length) % projects.length);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Tab pills */}
      <div className="flex flex-wrap items-center gap-2">
        {projects.map((p, i) => {
          const isActive = i === active;
          return (
            <button
              key={p.title}
              onClick={() => go(i)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-background"
                  : "text-accent hover:text-foreground border border-border bg-card"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="project-tab"
                  transition={{ duration: 0.35, ease: EASE }}
                  className="absolute inset-0 rounded-full bg-foreground"
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span
                  className={`font-mono text-[11px] ${
                    isActive ? "opacity-60" : "opacity-50"
                  }`}
                >
                  0{i + 1}
                </span>
                {p.title}
              </span>
            </button>
          );
        })}

        <div className="ml-auto flex items-center gap-2">
          <span className="hidden sm:inline font-mono text-xs text-accent tabular-nums">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => go(active - 1)}
            aria-label="Previous project"
            className="grid size-9 place-items-center rounded-full border border-border bg-card transition-all duration-200 hover:-translate-x-px hover:border-ring hover:shadow-sm"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            onClick={() => go(active + 1)}
            aria-label="Next project"
            className="grid size-9 place-items-center rounded-full border border-border bg-card transition-all duration-200 hover:translate-x-px hover:border-ring hover:shadow-sm"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Browser card */}
      <div className="bento overflow-hidden">
        {/* Traffic bar */}
        <div className="flex items-center gap-3 px-4 sm:px-5 pt-4 pb-3 border-b border-border">
          <div className="flex gap-1.5 shrink-0" aria-hidden>
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
          </div>
          <div className="flex-1 flex items-center justify-center px-3 py-1.5 rounded-full bg-foreground/[0.05] border border-border min-w-0">
            <AnimatePresence mode="wait">
              <motion.span
                key={project.url}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="text-xs font-mono text-accent truncate"
              >
                {project.url}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="flex gap-1 shrink-0">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live site`}
                className="grid size-8 place-items-center rounded-full text-accent hover:text-foreground hover:bg-foreground/[0.06] transition-colors"
              >
                <ArrowUpRight className="size-4" />
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} source code`}
                className="grid size-8 place-items-center rounded-full text-accent hover:text-foreground hover:bg-foreground/[0.06] transition-colors"
              >
                <GithubIcon className="size-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            initial={{ opacity: 0, x: 28 * (direction >= 0 ? 1 : -1) }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 * (direction >= 0 ? 1 : -1) }}
            transition={{ duration: 0.38, ease: EASE }}
            className="grid grid-cols-1 sm:grid-cols-2"
          >
            <div className="group relative w-full aspect-video overflow-hidden sm:m-3 sm:rounded-xl sm:w-[calc(100%-0.75rem)]">
              <Image
                src={project.image1}
                alt={`${project.title} — screenshot 1`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 border-t sm:border-t-0 sm:border-l border-border">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent">
                <FolderGit2 className="size-3.5" />
                {project.title}
              </div>
              <p className="leading-relaxed text-[15px]">
                {project.description}
              </p>
              <div className="flex gap-1.5 flex-wrap">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-foreground/[0.04] px-3 py-1 text-xs font-medium transition-colors hover:border-ring"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3 p-6 sm:p-8 border-t border-border sm:border-r order-4 sm:order-none bg-foreground/[0.02]">
              <p className="text-sm text-accent leading-relaxed">
                <strong className="text-foreground font-semibold">
                  Problem —{" "}
                </strong>
                {project.problem}
              </p>
              <p className="text-sm text-accent leading-relaxed">
                <strong className="text-foreground font-semibold">
                  Solution —{" "}
                </strong>
                {project.solution}
              </p>
            </div>

            <div className="group relative w-full aspect-video overflow-hidden order-3 sm:order-none sm:m-3 sm:rounded-xl sm:w-[calc(100%-0.75rem)] sm:mb-3 border-t sm:border-t border-border sm:border-0">
              <Image
                src={project.image2}
                alt={`${project.title} — screenshot 2`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
