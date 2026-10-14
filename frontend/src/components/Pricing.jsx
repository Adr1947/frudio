import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Eyebrow, Reveal } from "../lib/motion";
import { useSmoothScroll } from "../lib/scroll";

const TIERS = [
  {
    name: "Sprint",
    project: "$2,900",
    monthly: "$990",
    blurb: "One page, done brutally well. Perfect for launches and campaigns.",
    features: [
      "One high-converting page",
      "5-day delivery",
      "AI-assisted copywriting",
      "Basic integrations",
      "2 revision rounds",
    ],
    featured: false,
  },
  {
    name: "Scale",
    project: "$5,400",
    monthly: "$1,900",
    blurb: "The full frudio treatment — a complete site that sells for you.",
    features: [
      "Up to 6 custom pages",
      "10-day delivery",
      "Custom motion & animations",
      "CMS setup & training",
      "Advanced SEO & analytics",
      "3 revision rounds",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    project: "$9,800",
    monthly: "$3,900",
    blurb: "Complex products, bespoke motion, priority everything.",
    features: [
      "Full site + web app UI",
      "Bespoke motion design",
      "Priority delivery lane",
      "Dedicated senior support",
      "Integrations & automations",
    ],
    featured: false,
  },
];

export function Pricing() {
  const [mode, setMode] = useState("project");
  const scrollTo = useSmoothScroll();

  return (
    <section id="pricing" className="border-y border-line bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Transparent. Fixed. No surprises.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <LayoutGroup id="pricing-toggle">
              <div className="inline-flex rounded-full border border-line bg-paper p-1">
                {[
                  { id: "project", label: "Per project" },
                  { id: "retainer", label: "Monthly retainer" },
                ].map((m) => (
                  <button
                    key={m.id}
                    data-testid={`pricing-toggle-${m.id}`}
                    onClick={() => setMode(m.id)}
                    aria-pressed={mode === m.id}
                    className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                      mode === m.id ? "text-paper" : "text-smoke hover:text-ink"
                    }`}
                  >
                    {mode === m.id && (
                      <motion.span
                        layoutId="pricing-toggle-pill"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{m.label}</span>
                  </button>
                ))}
              </div>
            </LayoutGroup>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <article
                data-testid={`pricing-card-${t.name.toLowerCase()}`}
                className={`flex h-full flex-col rounded-3xl border p-8 transition-transform duration-300 hover:-translate-y-1 ${
                  t.featured
                    ? "border-ink bg-ink text-paper shadow-lift"
                    : "border-line bg-paper"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                  {t.featured && (
                    <span className="rounded-full bg-vermillion px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-paper">
                      Most popular
                    </span>
                  )}
                </div>

                <p className="mt-6">
                  <span className="font-display text-5xl font-extrabold tracking-tight">
                    {mode === "project" ? t.project : t.monthly}
                  </span>
                  <span
                    className={`ml-2 text-sm ${t.featured ? "text-paper/60" : "text-fog"}`}
                  >
                    {mode === "project" ? "/ project" : "/ month"}
                  </span>
                </p>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    t.featured ? "text-paper/70" : "text-smoke"
                  }`}
                >
                  {t.blurb}
                  {mode === "retainer" && " Pause or cancel anytime."}
                </p>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          t.featured
                            ? "bg-vermillion text-paper"
                            : "bg-cream text-ink"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className={t.featured ? "text-paper/90" : "text-smoke"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  data-testid={`pricing-cta-${t.name.toLowerCase()}`}
                  onClick={() => scrollTo("#contact")}
                  className={`group mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold transition-colors duration-300 ${
                    t.featured
                      ? "bg-vermillion text-paper hover:bg-vermillion-dark"
                      : "border border-ink/15 bg-white text-ink hover:border-ink"
                  }`}
                >
                  Start with {t.name}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
