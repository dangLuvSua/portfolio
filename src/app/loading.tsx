export default function Loading() {
  return (
    <div className="loader-container" role="status" aria-label="Loading page">
      <div className="flex w-[min(420px,72vw)] flex-col gap-4">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent">
          Loading
        </p>
        <div className="h-[2px] w-full overflow-hidden rounded-full bg-border">
          <div className="loader-bar-indeterminate h-full rounded-full bg-foreground" />
        </div>
      </div>
    </div>
  );
}
