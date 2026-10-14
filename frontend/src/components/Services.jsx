import { motion } from "framer-motion";
import { Brain, Layers, MousePointerClick, Gauge, Workflow, ArrowUpRight } from "lucide-react";
import { Eyebrow, Reveal, staggerParent, staggerChild } from "../lib/motion";

const SERVICES_IMG =
  "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?crop=entropy&cs=srgb&fm=jpg&q=85";

function IconTile({ icon: Icon }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-vermillion transition-colors duration-300 group-hover:bg-vermillion group-hover:text-paper">
      <Icon className="h-5 w-5" />
    </span>
  );
}

function Card({ icon, title, copy, className = "", children }) {
  return (
    <motion.article
      variants={staggerChild}
      className={`group flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-ink sm:p-8 ${className}`}
    >
      <div>
        <div className="flex items-start justify-between">
          <IconTile icon={icon} />
          <ArrowUpRight className="h-5 w-5 text-fog opacity-0 transition-all duration-300 group-hover:text-vermillion group-hover:opacity-100" />
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-smoke sm:text-base">
          {copy}
        </p>
      </div>
      {children}
    </motion.article>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Everything a launch needs. Nothing it doesn&rsquo;t.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-base leading-relaxed text-smoke">
              One senior team, one AI-accelerated pipeline, zero hand-off
              friction — from first sketch to live URL.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12"
        >
          <motion.article
            variants={staggerChild}
            className="group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border border-line bg-pine p-6 text-paper sm:p-8 md:col-span-2 lg:col-span-7"
          >
            <img
              src={SERVICES_IMG}
              alt="frudio studio workspace during a website build"
              className="img-duotone absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/70 to-pine/20" aria-hidden="true" />
            <div className="relative">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper/10 text-paper backdrop-blur">
                <Brain className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                AI-accelerated strategy &amp; copy
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/80 sm:text-base">
                We mine your market, offer and audience, then let AI turn the
                research into positioning and copy that sells — reviewed and
                sharpened by senior writers.
              </p>
            </div>
          </motion.article>

          <Card
            icon={Layers}
            title="No-code architecture"
            copy="Pixel-perfect, responsive builds in Framer & Webflow. Clean structure, CMS-ready, zero tech debt — your team can edit everything."
            className="lg:col-span-5"
          >
            <div className="mt-6 flex flex-wrap gap-2">
              {["Framer", "Webflow", "Figma"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-paper px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-smoke"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>

          <Card
            icon={MousePointerClick}
            title="Conversion-first UX"
            copy="Data-backed flows, hierarchy and CTAs engineered to turn visits into qualified leads."
            className="lg:col-span-4"
          />

          <Card
            icon={Gauge}
            title="Ultra-fast performance & SEO"
            copy="Semantic structure, image pipelines and clean markup out of the box."
            className="lg:col-span-4"
          >
            <p className="mt-6 font-display text-5xl font-extrabold tracking-tight text-ink">
              99<span className="text-vermillion">+</span>
              <span className="ml-2 align-middle font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-fog">
                Lighthouse
              </span>
            </p>
          </Card>

          <Card
            icon={Workflow}
            title="CMS & workflow automation"
            copy="Edit content without touching design. Forms, CRM and analytics wired up on launch day."
            className="lg:col-span-4"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
