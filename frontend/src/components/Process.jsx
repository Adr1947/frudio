import { motion } from "framer-motion";
import { Eyebrow, Reveal, staggerParent, staggerChild } from "../lib/motion";

const STEPS = [
  {
    num: "01",
    days: "Day 1–2",
    title: "AI blueprint & wireframe",
    copy: "We dig into your market, offer and audience. AI-assisted research becomes a conversion-ready sitemap and wireframe — fast.",
  },
  {
    num: "02",
    days: "Day 3–5",
    title: "High-craft visual design",
    copy: "Art direction, a full design system and every key screen. Reviewed with you in async walkthroughs, never long meetings.",
  },
  {
    num: "03",
    days: "Day 6–8",
    title: "No-code engine build",
    copy: "Pixel-perfect build in Framer or Webflow — responsive, CMS-ready and structured so your team owns every word.",
  },
  {
    num: "04",
    days: "Day 9–10",
    title: "QA, speed test & launch",
    copy: "SEO, analytics and performance scores verified, then we ship. Handover training and 30 days of support included.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-y border-line bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              The 10-day velocity engine
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-base leading-relaxed text-smoke">
              A ruthless process where AI does the heavy lifting and senior
              designers do the taste-making.
            </p>
          </Reveal>
        </div>

        <motion.ol
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((s) => (
            <motion.li key={s.num} variants={staggerChild} className="group relative">
              <div className="flex items-baseline justify-between border-t-2 border-ink pt-5">
                <span className="font-display text-5xl font-light tracking-tight text-fog transition-colors duration-300 group-hover:text-vermillion">
                  {s.num}
                </span>
                <span className="rounded-full bg-cream px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-smoke">
                  {s.days}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke">{s.copy}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

export default Process;
