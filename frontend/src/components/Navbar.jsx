import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useSmoothScroll } from "../lib/scroll";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollTo = useSmoothScroll();
  const reduce = useReducedMotion();

  const go = (href) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <button
          data-testid="nav-logo-button"
          onClick={() => go("#top")}
          aria-label="frudio — back to top"
          className="transition-opacity duration-200 hover:opacity-70"
        >
          <Logo />
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <button
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                onClick={() => go(l.href)}
                className="group relative text-sm font-medium text-smoke transition-colors duration-200 hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-vermillion transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            data-testid="nav-cta-button"
            onClick={() => go("#contact")}
            className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-vermillion sm:inline-flex"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-paper lg:hidden"
          >
            <ul className="space-y-1 px-6 py-6">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <button
                    data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                    onClick={() => go(l.href)}
                    className="w-full py-3 text-left font-display text-2xl font-semibold text-ink"
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
              <li className="pt-4">
                <button
                  data-testid="nav-mobile-cta-button"
                  onClick={() => go("#contact")}
                  className="w-full rounded-full bg-vermillion px-5 py-3.5 text-sm font-semibold text-paper"
                >
                  Start a project
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
