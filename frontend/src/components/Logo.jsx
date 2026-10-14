export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#111110" />
      <path
        d="M20.5 7.5a4.5 4.5 0 0 0-4.5 4.5v13.5"
        fill="none"
        stroke="#F04A23"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M10.5 15h11.5"
        fill="none"
        stroke="#FAF9F6"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className = "", markClassName = "h-9 w-9" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      <span className="font-display text-[1.35rem] font-bold tracking-tight text-ink">
        frudio
      </span>
    </span>
  );
}

export default Logo;
