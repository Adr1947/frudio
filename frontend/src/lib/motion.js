import { motion, useReducedMotion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

export const staggerChild = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export function Reveal({ children, className, delay = 0, y = 32, once = true }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] ${
        light ? "text-fog" : "text-fog"
      }`}
    >
      <span className="h-px w-8 bg-vermillion" aria-hidden="true" />
      {children}
    </p>
  );
}
