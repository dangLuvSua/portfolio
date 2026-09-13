"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  image1: string; // top-left screenshot
  image2: string; // bottom-right screenshot
  url: string; // fake URL shown in the browser bar
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  description: string; // top-right blurb
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
    githubUrl: "#",
    techStack: ["React", "Tailwind CSS", "Supabase", "PostgreSQL", "Recharts"],
    description:
      "A centralized education data management and analytics platform for the Department of Education - City of Baliwag.",
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

function TabIcon({ index }: { index: number }) {
  // simple deterministic favicon-style dot per project, no external asset needed
  const hues = ["bg-blue-400", "bg-emerald-400", "bg-violet-400"];
  return (
    <span
      className={`w-2 h-2 rounded-full shrink-0 ${hues[index % hues.length]}`}
    />
  );
}

export function ProjectsBrowser() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <div className="rounded-xl overflow-hidden border border-foreground/10 bg-foreground/5">
      {/* Traffic lights + address bar */}
      <div className="flex items-center gap-3 px-4 pt-3 pb-2 border-b border-foreground/10">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-400/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <span className="w-3 h-3 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 flex items-center justify-center px-3 py-1 rounded-md bg-foreground/5">
          <span className="text-xs text-accent truncate">{project.url}</span>
        </div>
        <div className="flex gap-3 shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-foreground transition-colors"
              title="Live Demo"
            >
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
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-foreground transition-colors"
              title="Source Code"
            >
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
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Tab strip */}
      <div className="flex items-end gap-1 px-2 pt-2 bg-foreground/[0.03] overflow-x-auto">
        {projects.map((p, i) => (
          <button
            key={p.title}
            onClick={() => setActive(i)}
            aria-current={i === active}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap transition-colors ${
              i === active
                ? "bg-background text-foreground"
                : "text-accent hover:text-foreground hover:bg-foreground/5"
            }`}
          >
            <TabIcon index={i} />
            {p.title}
          </button>
        ))}
      </div>

      {/* Active project content — 2x2 grid: screenshot / description / details / screenshot */}
      <div className="bg-background grid grid-cols-1 sm:grid-cols-2 p-3">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            key={project.image1}
            src={project.image1}
            alt={`${project.title} — screenshot 1`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 550px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-3 p-6 border-b sm:border-b-0 sm:border-l border-foreground/10">
          <p className="text-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="flex gap-2 flex-wrap">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-foreground/5 text-foreground rounded-full border border-foreground/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 p-6 border-r border-foreground/10 order-4 sm:order-none">
          <p className="text-accent leading-relaxed">
            <strong className="text-foreground">Problem:</strong>{" "}
            {project.problem}
          </p>
          <p className="text-accent leading-relaxed">
            <strong className="text-foreground">Solution:</strong>{" "}
            {project.solution}
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden order-3 sm:order-none">
          <Image
            key={project.image2}
            src={project.image2}
            alt={`${project.title} — screenshot 2`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 550px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
