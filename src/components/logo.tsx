import Link from "next/link";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="ElevateX Digital monogram">
      <defs>
        <linearGradient id="exGold" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#8a682f" />
          <stop offset="38%" stopColor="#e6c98d" />
          <stop offset="62%" stopColor="#f7e7c4" />
          <stop offset="100%" stopColor="#c9a05a" />
        </linearGradient>
      </defs>
      <rect x="1.1" y="1.1" width="45.8" height="45.8" rx="11" fill="#08080a" stroke="url(#exGold)" strokeWidth="1.5" />
      <g fill="url(#exGold)">
        <rect x="10" y="13.5" width="4.4" height="17" />
        <rect x="10" y="13.5" width="12.6" height="4.1" />
        <rect x="10" y="20" width="9.4" height="3.9" />
        <rect x="10" y="26.4" width="12.6" height="4.1" />
        <path d="M25.9 28.9 35.4 15.9l2.6 1.9-9.5 13z" />
        <path d="M34 31.7 26.2 21.2l2.2-1.6 7.8 10.4z" />
        <path d="M31.6 12.9h6.9v6.9h-2.6v-4.3h-4.3z" />
      </g>
    </svg>
  );
}

export function Logo({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="ElevateX Digital — home" className={`group inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={`${compact ? "h-9 w-9" : "h-10 w-10"} transition-transform duration-500 group-hover:-translate-y-0.5`} />
      <span className="flex flex-col leading-none">
        <span className="gold-text text-[1.35rem] font-extrabold tracking-[-0.02em]">ElevateX</span>
        <span className="mt-1 text-[0.54rem] font-semibold uppercase tracking-[0.46em] text-mist">Digital</span>
      </span>
    </Link>
  );
}
