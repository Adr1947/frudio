import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ArrowDown, TrendingUp, Zap, Gauge } from "lucide-react";
import { useSmoothScroll } from "../lib/scroll";

const EASE = [0.16, 1, 0.3, 1];

const LINES = [
  <>High-converting</>,
  <>websites, built</>,
  <>
    at{" "}
    <em className="font-editorial font-normal italic text-vermillion">
      AI speed.
    </em>
  </>,
];

const HERO_IMG =
  "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?q=85&w=1400&auto=format&fit=crop";

function ShowcaseCard() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const rx = useSpring(0, { stiffness: 140, damping: 18 });
  const ry = useSpring(0, { stiffness: 140, damping: 18 });
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${mx}% ${my}%, rgba(240,74,35,0.16), transparent 65%)`;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const onMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set(px * 100);
    my.set(py * 100);
    rx.set((0.5 - py) * 10);
    ry.set((px - 0.5) * 12);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ y: reduce ? 0 : parallaxY, perspective: 1200 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative"
    >
      <motion.div
        data-testid="hero-showcase-card"
        style={{ rotateX: reduce ? 0 : rx, rotateY: reduce ? 0 : ry, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 48, rotateX: 12 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.7 }}
        className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-lift"
      >
        <div className="flex items-center gap-2 border-b border-line bg-cream/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E6E4DD]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E6E4DD]" />
          <span className="h-2.5 w-2.5 rounded-full bg-vermillion/70" />
          <span className="ml-3 rounded-full bg-white px-3 py-1 font-mono text-[10px] tracking-wider text-fog">
            frudio.studio/launch
          </span>
        </div>
        <div className="relative">
          <img
            src={HERO_IMG}
            alt="Website designed and launched by frudio, shown on a laptop"
            className="img-duotone aspect-[4/3] w-full object-cover"
            loading="eager"
          />
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ background: reduce ? "transparent" : spotlight }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-4 top-10 sm:-left-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.7, ease: EASE }}
      >
        <div className="animate-float-slow flex items-center gap-2.5 rounded-full border border-line bg-white/90 px-4 py-2.5 shadow-lift backdrop-blur">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pine text-paper">
            <TrendingUp className="h-3.5 w-3.5" />
          </span>
          <span className="text-xs font-semibold text-ink">
            3.4× conversion lift
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-3 bottom-12 sm:-right-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.7, ease: EASE }}
        style={{ animationDelay: "0.8s" }}
      >
        <div className="animate-float-slow flex items-center gap-2.5 rounded-full border border-line bg-ink px-4 py-2.5 shadow-lift">
          <Zap className="h-3.5 w-3.5 text-vermillion" />
          <span className="text-xs font-semibold text-paper">
            10-day delivery
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-5 left-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.7, ease: EASE }}
      >
        <div className="flex items-center gap-2.5 rounded-full border border-line bg-white/90 px-4 py-2.5 shadow-lift backdrop-blur">
          <Gauge className="h-3.5 w-3.5 text-vermillion" />
          <span className="text-xs font-semibold text-ink">99+ Lighthouse</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const scrollTo = useSmoothScroll();
  const reduce = useReducedMotion();

  const lineAnim = (i) => ({
    initial: reduce ? { opacity: 0 } : { y: "110%" },
    animate: reduce ? { opacity: 1 } : { y: "0%" },
    transition: { duration: 1, ease: EASE, delay: 0.15 + i * 0.13 },
  });

  const fade = (delay) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[560px] w-[560px] rounded-full bg-vermillion/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-14 sm:px-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="lg:col-span-7">
          <motion.div {...fade(0.05)}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-smoke">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vermillion opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-vermillion" />
              </span>
              Next-gen no-code web studio
            </span>
          </motion.div>

          <h1 className="mt-8 font-display text-[2.75rem] font-extrabold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-[4.6rem]">
            {LINES.map((line, i) => (
              <span key={i} className="mask-line">
                <motion.span className="block" {...lineAnim(i)}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            {...fade(0.65)}
            className="mt-7 max-w-xl text-base leading-relaxed text-smoke sm:text-lg"
          >
            We eliminate traditional 3-month dev cycles. frudio delivers
            bespoke, result-driven Framer &amp; Webflow websites in days —
            powered by AI precision, finished by hand.
          </motion.p>

          <motion.div {...fade(0.8)} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              data-testid="hero-cta-button"
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center gap-2 rounded-full bg-vermillion px-7 py-4 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-vermillion-dark"
            >
              Get an instant estimate
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              data-testid="hero-secondary-cta-button"
              onClick={() => scrollTo("#work")}
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-4 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink"
            >
              Explore the work
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </motion.div>

          <motion.div
            {...fade(0.95)}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-fog"
          >
            <span>10-day avg. delivery</span>
            <span className="h-1 w-1 rounded-full bg-vermillion" aria-hidden="true" />
            <span>40+ launches</span>
            <span className="h-1 w-1 rounded-full bg-vermillion" aria-hidden="true" />
            <span>Zero code debt</span>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <ShowcaseCard />
        </div>
      </div>
    </section>
  );
}

export default Hero;
