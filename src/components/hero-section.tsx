"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePageReady } from "./page-ready";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Supabase",
  "Figma",
  "Git",
];

function useManilaTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-PH", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Manila",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "fransuavillesis14@gmail.com";
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {}
      }}
      className="hidden group sm:inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-px hover:border-ring hover:shadow-md"
    >
      {copied ? (
        <Check className="size-4" />
      ) : (
        <Copy className="size-4 text-accent transition-colors group-hover:text-foreground" />
      )}
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}

export function HeroSection() {
  const manilaTime = useManilaTime();
  const ready = usePageReady();

  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate={ready ? "visible" : "hidden"}
      className="flex flex-col gap-8 pt-10 sm:pt-14"
    >
      {/* Status row */}
      <motion.div variants={item} className="flex flex-wrap items-center gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium shadow-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-30" />
            <span className="relative inline-flex size-2 rounded-full bg-foreground" />
          </span>
          Available for internships & freelance
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-accent">
          <MapPin className="size-3.5" />
          Philippines · {manilaTime || "--:--"}
        </span>
      </motion.div>

      {/* Headline */}
      <div className="flex flex-col gap-5">
        <motion.p
          variants={item}
          className="text-xs font-semibold tracking-[0.22em] uppercase text-accent"
        >
          Fransua John Villesis — Fullstack Developer
        </motion.p>
        <motion.h1
          variants={item}
          className="text-[2.6rem] sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.02] text-balance"
        >
          I build software that looks good{" "}
          <span className="text-accent font-medium">and works</span> even
          better.
        </motion.h1>
        <motion.p
          variants={item}
          className="text-accent max-w-xl text-base sm:text-lg leading-relaxed text-pretty"
        >
          Fourth-year software engineering student crafting fast, minimal web
          apps — from education data platforms to clean, thoughtful interfaces.
        </motion.p>
      </div>

      {/* CTAs */}
      <motion.div variants={item} className="flex flex-wrap items-center gap-3">
        <Link
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          View my work
          <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </Link>
        <Link
          href="#about"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          About me
          <ArrowUpRight className="size-4 text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        </Link>
        <CopyEmailButton />
      </motion.div>

      {/* Bento strip */}
      <motion.div
        variants={item}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
      >
        <div className="bento bento-hover p-5 flex flex-col gap-3">
          <span className="grid size-9 place-items-center rounded-xl w-fit">
            <GraduationCap className="size-4.5" />
          </span>
          <p className="text-sm font-semibold">Currently</p>
          <p className="text-sm text-accent leading-relaxed">
            4th-year @ Bulacan State University — building{" "}
            <span className="text-foreground font-medium">OneData</span> for
            DepEd Baliwag.
          </p>
        </div>

        <div className="bento bento-hover p-5 flex flex-col gap-3">
          <span className="grid size-9 place-items-center rounded-xl w-fit">
            <Sparkles className="size-4.5" />
          </span>
          <p className="text-sm font-semibold">Focus</p>
          <p className="text-sm text-accent leading-relaxed">
            Clean code, fast pages, and interfaces that feel obvious. React,
            Next.js & TypeScript first.
          </p>
        </div>

        <div className="bento bento-hover p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Setup</p>
            <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-mono text-accent">
              UTC+8
            </span>
          </div>
          <p className="font-mono text-2xl tracking-tight tabular-nums">
            {manilaTime || "--:--:--"}
          </p>
          <p className="text-sm text-accent">Baliwag, Bulacan — open to remote.</p>
        </div>
      </motion.div>

      {/* Stack marquee — monochrome pills */}
      <motion.div
        variants={item}
        className="bento overflow-hidden py-4 marquee-mask"
        aria-label="Tech stack"
      >
        <div className="marquee-track flex w-max gap-2.5 px-4 animate-marquee">
          {[...STACK, ...STACK].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              aria-hidden={i >= STACK.length}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-[13px] font-medium text-accent transition-colors hover:text-foreground hover:border-ring"
            >
              <span className="size-1 rounded-full bg-current" />
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
