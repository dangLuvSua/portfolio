"use client";

import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-3 max-w-2xl">
      <Reveal>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-foreground/[0.04] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-accent">
          <span className="size-1.5 rounded-full bg-foreground animate-pulse-dot" />
          {eyebrow}
        </span>
      </Reveal>
      {title && (
        <Reveal delay={0.06}>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-balance">
            {title}
          </h2>
        </Reveal>
      )}
      {description && (
        <Reveal delay={0.12}>
          <p className="text-accent text-base sm:text-lg leading-relaxed text-pretty">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
