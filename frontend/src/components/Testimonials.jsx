import { motion } from "framer-motion";
import { Quote, BadgeCheck } from "lucide-react";
import { Eyebrow, Reveal, staggerParent, staggerChild } from "../lib/motion";

const QUOTES = [
  {
    quote:
      "frudio shipped in nine days what our last agency quoted three months for. The site finally sounds like us — and it sells.",
    name: "Maya Chen",
    role: "Founder, Northbeam Labs",
    metric: "+3.1× conversions",
    avatar:
      "https://images.unsplash.com/photo-1676989880361-091e12efc056?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    quote:
      "The website paid for itself in the first month. Their AI-assisted copy nailed our positioning on the first draft.",
    name: "Daniel Okafor",
    role: "CEO, Kernel Analytics",
    metric: "+215% demo bookings",
    avatar:
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    quote:
      "Genuinely award-level design without the agency timeline. I've already sent them three referrals.",
    name: "Sofia Marchetti",
    role: "CMO, Maison Ora",
    metric: "10-day launch",
    avatar:
      "https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>Client proof</Eyebrow>
          </div>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Results our clients put their name on
          </h2>
        </Reveal>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {QUOTES.map((q) => (
            <motion.figure
              key={q.name}
              variants={staggerChild}
              data-testid="testimonial-card"
              className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-ink"
            >
              <div>
                <Quote className="h-6 w-6 text-vermillion" fill="currentColor" strokeWidth={0} />
                <blockquote className="mt-5 font-display text-lg font-medium leading-snug tracking-tight text-ink">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <img
                  src={q.avatar}
                  alt={`Portrait of ${q.name}`}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                    {q.name}
                    <BadgeCheck className="h-4 w-4 shrink-0 text-pine" />
                  </p>
                  <p className="truncate text-xs text-fog">{q.role}</p>
                </div>
                <span className="ml-auto shrink-0 rounded-full bg-cream px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-ink">
                  {q.metric}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
