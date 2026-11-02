import { useMemo } from "react";

export function FireBackground() {
  const embers = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        left: (i * 37) % 100,
        size: 2 + (i % 4),
        dur: 7 + ((i * 13) % 9),
        delay: (i * 7) % 12,
        drift: ((i % 5) - 2) * 25,
      })),
    [],
  );
  const skulls = [
    { top: "12%", left: "4%" }, { top: "30%", left: "90%" }, { top: "62%", left: "6%" }, { top: "78%", left: "88%" },
  ];
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-hell">
      <div className="smoke absolute inset-x-0 bottom-24 h-1/2 bg-[radial-gradient(ellipse_at_center,var(--color-muted-foreground)_0%,transparent_65%)] opacity-30 blur-3xl" />
      {skulls.map((s, i) => (
        <span key={i} className="absolute text-3xl opacity-15 sm:text-5xl" style={s}>💀</span>
      ))}
      {embers.map((e, i) => (
        <span key={i} className="ember" style={{ left: `${e.left}%`, width: e.size, height: e.size, animationDuration: `${e.dur}s`, animationDelay: `${e.delay}s`, ["--drift" as string]: `${e.drift}px` }} />
      ))}
      <svg className="absolute bottom-0 h-40 w-full sm:h-56" viewBox="0 0 400 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="fg" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="var(--crimson)" />
            <stop offset=".6" stopColor="var(--fire)" />
            <stop offset="1" stopColor="var(--ember)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 14 }, (_, i) => (
          <path key={i} className="flame" style={{ animationDelay: `${(i % 5) * 0.23}s`, animationDuration: `${1.1 + (i % 3) * 0.3}s` }}
            d={`M${i * 30 - 10} 100 Q${i * 30 + 5} ${40 - (i % 3) * 15} ${i * 30 + 15} ${20 + (i % 4) * 10} Q${i * 30 + 25} ${50} ${i * 30 + 45} 100 Z`}
            fill="url(#fg)" opacity=".85" />
        ))}
      </svg>
      <div className="vignette absolute inset-0" />
    </div>
  );
}
