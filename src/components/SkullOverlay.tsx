export function SkullOverlay({ nome }: { nome: string }) {
  return (
    <div className="relative flex h-full min-h-72 flex-col items-center justify-center overflow-hidden" role="img" aria-label={`${nome}: acabou`}>
      <div className="skull-flash absolute inset-0 bg-crimson" />
      <svg viewBox="0 0 200 220" className="skull-enter h-56 w-auto drop-shadow-[0_0_20px_var(--color-crimson)] sm:h-64">
        <path d="M100 8C50 8 18 44 18 92c0 30 14 50 30 62v28c0 8 6 14 14 14h76c8 0 14-6 14-14v-28c16-12 30-32 30-62C182 44 150 8 100 8Z" fill="var(--bone)" />
        <ellipse className="skull-eye" cx="68" cy="102" rx="22" ry="24" fill="var(--fire)" />
        <ellipse className="skull-eye" cx="132" cy="102" rx="22" ry="24" fill="var(--fire)" />
        <circle cx="68" cy="104" r="8" fill="var(--ember)" />
        <circle cx="132" cy="104" r="8" fill="var(--ember)" />
        <path d="M100 128l-12 22h24Z" fill="var(--abyss)" />
        {[70, 88, 106, 124].map((x) => <rect key={x} x={x} y="168" width="8" height="24" rx="2" fill="var(--abyss)" />)}
        <text x="100" y="62" textAnchor="middle" fontFamily="Pirata One, serif" fontSize="26" fill="var(--blood)">ACABOU.</text>
      </svg>
      <p className="mt-3 font-condensed text-sm uppercase tracking-widest text-ember/80">{nome}</p>
    </div>
  );
}
