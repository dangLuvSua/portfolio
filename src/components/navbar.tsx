"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border shadow-[0_8px_30px_-18px_rgba(0,0,0,0.35)]"
          : "bg-background/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <Link
          href="#top"
          className="group flex items-center gap-2.5 font-semibold tracking-tight"
          aria-label="Back to top"
        >
          {/* <span className="grid size-8 place-items-center rounded-xl bg-foreground text-background text-[13px] font-bold transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-105">
            FJ
          </span> */}
          <span className="hidden xs:inline sm:inline text-sm">
            Fransua Villesis
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 rounded-full text-accent hover:text-foreground hover:bg-foreground/[0.06] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="mailto:fransuavillesis14@gmail.com"
            className="group hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background pl-4 pr-3 py-2 text-sm font-semibold transition-all duration-300 hover:pr-2.5 hover:shadow-lg hover:-translate-y-px"
          >
            Hire Me
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid size-9 place-items-center rounded-full border border-border hover:bg-foreground/5 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* scroll progress hairline */}
      <motion.div
        style={{ scaleX: progress }}
        className="h-px origin-left bg-foreground/30"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium hover:bg-foreground/[0.06] transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight className="size-4 text-accent" />
                  </Link>
                </motion.div>
              ))}
              <a
                href="mailto:fransuavillesis14@gmail.com"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-background px-4 py-3 text-sm font-semibold"
              >
                Hire Me <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
