"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock3,
  FolderGit2,
  Lock,
  Quote,
  TrendingUp,
  UserRound,
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
  // Placeholder detail fields — replace with real copy when ready
  year: string;
  role: string;
  timeline: string;
  status: string;
  features: { title: string; text: string }[];
  stats: { value: string; label: string }[];
  quote: { text: string; author: string };
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
    year: "2025",
    role: "Lead Frontend Dev",
    timeline: "14 weeks",
    status: "Live in production",
    features: [
      {
        title: "Enrollment tracking",
        text: "Placeholder — live counts per school, year level, and section with searchable records.",
      },
      {
        title: "Analytics dashboards",
        text: "Placeholder — Recharts-powered charts for trends, comparisons, and division reports.",
      },
      {
        title: "Roles & audit log",
        text: "Placeholder — granular permissions per office plus a full trail of who changed what.",
      },
    ],
    stats: [
      { value: "12+", label: "Schools onboarded (placeholder)" },
      { value: "4.2k", label: "Records managed (placeholder)" },
      { value: "~38%", label: "Faster reporting (placeholder)" },
    ],
    quote: {
      text: "Placeholder testimonial — OneData turned our scattered spreadsheets into one dashboard we actually open every morning.",
      author: "Division Coordinator, DepEd Baliwag (placeholder)",
    },
  },
  {
    title: "COIS",
    image1: "/project_beta_mockup_1787038592211.jpg",
    image2: "/project_beta_mockup_1787038592211.jpg",
    url: "cois-rent.vercel.app",
    liveUrl: "https://cois-rent.vercel.app/",
    githubUrl: "https://github.com/dangLuvSua/COIS",
    techStack: ["React", "Node.js", "Stripe API"],
    description:
      "A rental platform for tools and equipment, making it easy to find and rent items for your projects.",
    problem:
      "The client's legacy storefront was slow and losing mobile conversions.",
    solution:
      "Rebuilt the storefront headless, cutting load times and lifting conversions.",
    year: "2024",
    role: "Frontend Developer",
    timeline: "6 weeks",
    status: "Concept demo",
    features: [
      {
        title: "Instant PLP / PDP",
        text: "Placeholder — sub-second product listing and detail pages with optimistic UI states.",
      },
      {
        title: "One-page checkout",
        text: "Placeholder — Stripe-powered flow with saved carts and guest checkout fallback.",
      },
      {
        title: "Mobile-first filters",
        text: "Placeholder — bottom-sheet facets, sticky sort bar, and skeleton loading rows.",
      },
    ],
    stats: [
      { value: "0.8s", label: "Target LCP (placeholder)" },
      { value: "+19%", label: "Mobile conversion (placeholder)" },
      { value: "100", label: "Lighthouse target (placeholder)" },
    ],
    quote: {
      text: "Placeholder testimonial — the new storefront feels instant; customers stopped abandoning carts on mobile.",
      author: "Shop Owner (placeholder)",
    },
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
    year: "2024",
    role: "Design Engineer",
    timeline: "8 weeks",
    status: "Prototype",
    features: [
      {
        title: "Unified holdings",
        text: "Placeholder — normalized positions across brokers into one clean ledger model.",
      },
      {
        title: "Readable charts",
        text: "Placeholder — allocation donuts, performance lines, and drill-down tooltips.",
      },
      {
        title: "Dark-first UI",
        text: "Placeholder — low-glare theme with glanceable deltas and sparklines.",
      },
    ],
    stats: [
      { value: "5", label: "Brokers merged (placeholder)" },
      { value: "60fps", label: "Chart interactions (placeholder)" },
      { value: "3×", label: "Faster reviews (placeholder)" },
    ],
    quote: {
      text: "Placeholder testimonial — I finally see my whole portfolio in one place instead of five tabs.",
      author: "Beta Tester (placeholder)",
    },
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function ProjectTabCard({
  project,
  index,
  isActive,
  onSelect,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      role="tab"
      aria-selected={isActive}
      data-active={isActive}
      className="project-tab-card group relative overflow-hidden rounded-xl border text-left transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image1}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover transition-all duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-2.5 top-2.5 rounded-full border border-border bg-background/85 px-2 py-0.5 font-mono text-[11px] tabular-nums backdrop-blur-md">
          0{index + 1}
        </span>
        {isActive && (
          <motion.span
            layoutId="tab-card-dot"
            transition={{ duration: 0.3, ease: EASE }}
            className="absolute right-2.5 top-2.5 flex items-center gap-1.5 rounded-full bg-foreground px-2.5 py-1 text-[11px] font-medium text-background"
          >
            <span className="size-1.5 rounded-full bg-background animate-pulse-dot" />
            Active
          </motion.span>
        )}
      </div>
      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <span className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <FolderGit2 className="size-3.5 text-accent" />
          {project.title}
        </span>
        <span className="font-mono text-[11px] text-accent">
          {project.techStack.length} tools
        </span>
      </div>
    </button>
  );
}

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
      {/* Browser window */}
      <div className="bento overflow-hidden">
        {/* Title bar: traffic lights + real browser tabs */}
        <div className="flex items-center gap-3 px-4 pt-3">
          <div className="flex gap-1.5 shrink-0" aria-hidden>
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
          </div>
          <div
            role="tablist"
            aria-label="Projects"
            className="flex flex-1 items-end gap-1 overflow-x-auto"
          >
            {projects.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.title}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => go(i)}
                  className={`relative flex shrink-0 items-center gap-2 rounded-t-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-accent hover:text-foreground hover:bg-foreground/[0.05]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="browser-tab-bg"
                      transition={{ duration: 0.35, ease: EASE }}
                      className="absolute inset-0 rounded-t-xl border border-b-0 border-border bg-background"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span
                      className={`size-1.5 rounded-full ${
                        isActive ? "bg-foreground" : "bg-current opacity-40"
                      }`}
                    />
                    <span className="font-mono text-[11px] opacity-50">
                      0{i + 1}
                    </span>
                    {p.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Address bar */}
        <div className="border-y border-border bg-background px-4 py-2.5">
          <div className="flex items-center gap-3">
            <div className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-foreground/[0.04] px-3 py-1.5 min-w-0">
              <Lock className="size-3 shrink-0 text-accent" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={project.url}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="truncate font-mono text-xs text-accent"
                >
                  {project.url}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="flex shrink-0 gap-1">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live site`}
                  className="grid size-8 place-items-center rounded-full text-accent transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
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
                  className="grid size-8 place-items-center rounded-full text-accent transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
                >
                  <GithubIcon className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Tab cards: every project visible at once (desktop only — hidden on mobile to save space) */}
        <div className="hidden gap-3 p-3 sm:grid sm:grid-cols-3 sm:p-4">
          {projects.map((p, i) => (
            <ProjectTabCard
              key={p.title}
              project={p}
              index={i}
              isActive={i === active}
              onSelect={() => go(i)}
            />
          ))}
        </div>

        {/* Active project detail */}
        <div className="border-t border-border bg-foreground/[0.02] px-4 py-4 sm:px-6 sm:py-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="font-mono text-xs tabular-nums text-accent">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden />
            <button
              onClick={() => go(active - 1)}
              aria-label="Previous project"
              className="grid size-8 place-items-center rounded-full border border-border bg-card transition-all duration-200 hover:-translate-x-px hover:border-ring hover:shadow-sm"
            >
              <ArrowLeft className="size-3.5" />
            </button>
            <button
              onClick={() => go(active + 1)}
              aria-label="Next project"
              className="grid size-8 place-items-center rounded-full border border-border bg-card transition-all duration-200 hover:translate-x-px hover:border-ring hover:shadow-sm"
            >
              <ArrowRight className="size-3.5" />
            </button>
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="flex flex-col gap-5"
            >
              {/* Meta strip */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  { icon: Calendar, label: "Year", value: project.year },
                  { icon: UserRound, label: "Role", value: project.role },
                  { icon: Clock3, label: "Timeline", value: project.timeline },
                  { icon: TrendingUp, label: "Status", value: project.status },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-background px-3.5 py-2.5"
                  >
                    <m.icon className="size-4 shrink-0 text-accent" />
                    <div className="flex min-w-0 flex-col">
                      <span className="text-[11px] font-medium uppercase tracking-widest text-accent">
                        {m.label}
                      </span>
                      <span className="truncate text-[13px] font-semibold">
                        {m.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Overview + visual */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div className="flex flex-col justify-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {project.title} — overview
                  </p>
                  <p className="text-[15px] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.1 + i * 0.05,
                          duration: 0.3,
                          ease: EASE,
                        }}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium transition-colors hover:border-ring"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 pt-1">
                    <p className="text-sm leading-relaxed text-accent">
                      <strong className="font-semibold text-foreground">
                        Problem —{" "}
                      </strong>
                      {project.problem}
                    </p>
                    <p className="text-sm leading-relaxed text-accent">
                      <strong className="font-semibold text-foreground">
                        Solution —{" "}
                      </strong>
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-border">
                  <Image
                    src={project.image2}
                    alt={`${project.title} — detail view`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Key features */}
              <div className="flex flex-col gap-2.5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Key features
                </p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {project.features.map((f, i) => (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.06,
                        duration: 0.32,
                        ease: EASE,
                      }}
                      className="flex flex-col gap-1.5 rounded-xl border border-border bg-background p-4"
                    >
                      <CheckCircle2 className="size-4 text-accent" />
                      <p className="text-sm font-semibold tracking-tight">
                        {f.title}
                      </p>
                      <p className="text-[13px] leading-relaxed text-accent">
                        {f.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Outcomes + quote */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
                <div className="grid grid-cols-3 gap-2 sm:col-span-3">
                  {project.stats.map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-col justify-center gap-0.5 rounded-xl border border-border bg-background px-3.5 py-3"
                    >
                      <span className="text-lg font-semibold tracking-tight tabular-nums sm:text-xl">
                        {s.value}
                      </span>
                      <span className="text-[11px] leading-snug text-accent">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
                <figure className="flex flex-col justify-center gap-2 rounded-xl border border-border bg-background p-4 sm:col-span-2">
                  <Quote className="size-4 text-accent" />
                  <blockquote className="text-[13px] italic leading-relaxed text-accent">
                    “{project.quote.text}”
                  </blockquote>
                  <figcaption className="text-[11px] font-medium">
                    — {project.quote.author}
                  </figcaption>
                </figure>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
