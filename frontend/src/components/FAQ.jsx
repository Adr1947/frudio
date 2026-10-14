import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow, Reveal } from "../lib/motion";

const FAQS = [
  {
    q: "How fast is “fast”, really?",
    a: "Most projects launch in 10 working days from kickoff. A single-page Sprint ships in 5. The only thing that moves the date is waiting on us — we'll flag dependencies on day one.",
  },
  {
    q: "Who owns the design and the site?",
    a: "You do, 100%. We transfer the full Framer or Webflow project, source files and every asset to your account at handover. No lock-in, no licensing games.",
  },
  {
    q: "Framer or Webflow — which do you build on?",
    a: "It depends on the job. Framer for marketing sites with rich motion and fast iteration; Webflow when you need a deeper CMS, localisation or complex collections. We recommend one in the blueprint phase and explain why.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes 30 days of post-launch support — bug fixes, tweaks and a recorded handover walkthrough for your team. After that, optional monthly care plans cover updates, experiments and new pages.",
  },
  {
    q: "How many revisions do I get?",
    a: "Structured revision rounds at each milestone: wireframe, design, and pre-launch. In practice, the AI blueprint phase means fewer surprises — most projects finish rounds with room to spare.",
  },
  {
    q: "What do you need from me to start?",
    a: "A 45-minute kickoff call, any brand assets you already have, and one decision-maker who can give feedback within 24 hours. That's the whole checklist.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-line bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Asked before every kickoff
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-smoke">
              Still unsure about something? Put it in the brief form — we reply
              within one business day.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-line">
                  <AccordionTrigger
                    data-testid={`faq-trigger-${i}`}
                    className="py-6 text-left font-display text-lg font-semibold tracking-tight text-ink hover:text-vermillion hover:no-underline"
                  >
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-smoke">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
