import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Reveal } from "../lib/motion";

const FILTERS = ["All projects", "SaaS", "E-Commerce", "Agencies"];

const PROJECTS = [
  {
    name: "Nordhaus Studio",
    category: "Agencies",
    metric: "+215% inbound leads",
    img: "https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?q=85&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kernel Analytics",
    category: "SaaS",
    metric: "1.1s load time",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    name: "Maison Ora",
    category: "E-Commerce",
    metric: "3.2× conversion",
    img: "https://images.unsplash.com/photo-1541506618330-7c369fc759b5?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    name: "Atlas Platforms",
    category: "SaaS",
    metric: "+180% demo bookings",
    img: "https://images.unsplash.com/photo-1678690832311-bb6e361989ca?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    name: "Halo Home",
    category: "E-Commerce",
    metric: "+92% AOV",
    img: "https://images.unsplash.com/photo-1604074131228-9d48b811bd80?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    name: "Fieldnote Collective",
    category: "Agencies",
    metric: "10-day launch",
    img: "https://images.unsplash.com/photo-1758613654460-0ef9c8c75197?q=85&w=1200&auto=format&fit=crop",
  },
];

export function Portfolio() {
  const [filter, setFilter] = useState("All projects");

  const visible =
    filter === "All projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Websites that pull their weight
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <LayoutGroup id="portfolio-filters">
              <div
                role="tablist"
                aria-label="Filter projects"
                className="flex flex-wrap gap-2"
              >
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    role="tab"
                    aria-selected={filter === f}
                    data-testid={`portfolio-filter-${f.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setFilter(f)}
                    className={`relative rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors duration-200 ${
                      filter === f ? "text-paper" : "text-smoke hover:text-ink"
                    }`}
                  >
                    {filter === f && (
                      <motion.span
                        layoutId="portfolio-filter-pill"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{f}</span>
                  </button>
                ))}
              </div>
            </LayoutGroup>
          </Reveal>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                data-testid="portfolio-card"
                className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-colors duration-300 hover:border-ink"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.name} website by frudio`}
                    className="img-duotone aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-ink backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-vermillion">
                      {p.metric}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-smoke transition-all duration-300 group-hover:border-vermillion group-hover:bg-vermillion group-hover:text-paper">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;
