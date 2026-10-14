import { ArrowUpRight, Linkedin, Twitter, Dribbble, Instagram } from "lucide-react";
import { LogoMark } from "./Logo";
import { useSmoothScroll } from "../lib/scroll";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const SOCIALS = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Dribbble, label: "Dribbble" },
  { icon: Instagram, label: "Instagram" },
];

export function Footer() {
  const scrollTo = useSmoothScroll();

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 sm:px-10 lg:px-16 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9" />
              <span className="font-display text-[1.35rem] font-bold tracking-tight">
                frudio
              </span>
            </div>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-paper/60">
              A no-code web design studio for high-growth brands. Business-ready
              websites at AI speed — designed by humans, shipped in days.
            </p>
            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-paper/15 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/80">
                Available for new projects
              </span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <button
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                    onClick={() => scrollTo(l.href)}
                    className="group inline-flex items-center gap-1 text-sm text-paper/70 transition-colors duration-200 hover:text-paper"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40">
              Say hello
            </p>
            <a
              href="mailto:hello@frudio.studio"
              data-testid="footer-email-link"
              className="mt-5 inline-block text-sm text-paper/70 underline decoration-vermillion decoration-2 underline-offset-4 transition-colors duration-200 hover:text-paper"
            >
              hello@frudio.studio
            </a>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#top");
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-all duration-300 hover:border-vermillion hover:bg-vermillion hover:text-paper"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40 sm:flex-row sm:items-center">
          <span>© 2026 frudio studio — all rights reserved</span>
          <span>Designed at AI speed</span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none text-center font-display text-[24vw] font-extrabold leading-[0.78] tracking-tight text-paper/[0.05] lg:text-[19vw]"
      >
        frudio
      </div>
    </footer>
  );
}

export default Footer;
