const ITEMS = [
  "10-day turnaround",
  "Zero lines of code",
  "3.2× avg. conversion lift",
  "Awwwards-grade finish",
  "AI-powered workflow",
];

function Track() {
  return (
    <ul className="flex w-max shrink-0 items-center">
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-mono text-sm uppercase tracking-[0.22em] text-smoke sm:px-12">
            {item}
          </span>
          <span className="font-editorial text-lg italic text-vermillion" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <section
      aria-label="Studio highlights"
      className="marquee-mask border-y border-line bg-cream/50 py-6"
    >
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}

export default Marquee;
