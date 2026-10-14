import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Clock, ArrowRight, Check, Loader2 } from "lucide-react";
import { Eyebrow, Reveal } from "../lib/motion";

const BUDGETS = ["$2k–$5k", "$5k–$10k", "$10k+"];
const SERVICES = ["Landing page", "Multi-page site", "Redesign", "Web app UI"];
const EASE = [0.16, 1, 0.3, 1];

const initialForm = {
  name: "",
  email: "",
  website: "",
  details: "",
  budget: "$5k–$10k",
  services: ["Landing page"],
};

function Chip({ active, children, onClick, testid }) {
  return (
    <button
      type="button"
      data-testid={testid}
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? "border-ink bg-ink text-paper"
          : "border-line bg-white text-smoke hover:border-ink hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function Field({ label, error, children, testid }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            data-testid={testid}
            className="mt-1.5 text-xs font-medium text-vermillion"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-fog transition-colors duration-200 focus:border-ink focus:outline-none";

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const toggleService = (s) => {
    const has = form.services.includes(s);
    setForm({
      ...form,
      services: has
        ? form.services.filter((x) => x !== s)
        : [...form.services, s],
    });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Your name helps us say hello properly.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email so we can reply.";
    if (!form.details.trim())
      e.details = "Tell us a line or two about the project.";
    return e;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1100);
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Start a project</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Tell us what you&rsquo;re building.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-smoke">
              Send the brief — we&rsquo;ll come back with a fixed quote, a
              delivery date and an honest take on whether frudio is the right
              fit.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-vermillion">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">hello@frudio.studio</p>
                  <p className="text-xs text-fog">Or just use the form</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-vermillion">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Reply within 24 hours</p>
                  <p className="text-xs text-fog">One business day, always</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pine opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pine" />
                  </span>
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    Available for new projects
                  </p>
                  <p className="text-xs text-fog">2 delivery slots left this quarter</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-10" data-testid="contact-form-card">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="flex min-h-[480px] flex-col items-center justify-center text-center"
                    data-testid="contact-success-state"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-pine text-paper"
                    >
                      <Check className="h-8 w-8" strokeWidth={3} />
                    </motion.span>
                    <h3 className="mt-8 font-display text-3xl font-bold tracking-tight text-ink">
                      Brief received.
                    </h3>
                    <p className="mt-3 max-w-sm text-base leading-relaxed text-smoke">
                      Thanks, {form.name.split(" ")[0] || "there"} — we&rsquo;ll
                      reply to <span className="font-semibold text-ink">{form.email}</span> within
                      24 hours with next steps.
                    </p>
                    <button
                      data-testid="contact-reset-button"
                      onClick={() => {
                        setForm(initialForm);
                        setStatus("idle");
                      }}
                      className="mt-8 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink"
                    >
                      Send another brief
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -12 }}
                    onSubmit={onSubmit}
                    noValidate
                    data-testid="contact-form"
                    className="space-y-6"
                  >
                    <fieldset>
                      <legend className="mb-3 text-sm font-semibold text-ink">
                        Budget range
                      </legend>
                      <div className="flex flex-wrap gap-2.5">
                        {BUDGETS.map((b) => (
                          <Chip
                            key={b}
                            active={form.budget === b}
                            onClick={() => setForm({ ...form, budget: b })}
                            testid={`contact-budget-${b.replace(/[$–k]/g, "")}`}
                          >
                            {b}
                          </Chip>
                        ))}
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend className="mb-3 text-sm font-semibold text-ink">
                        What do you need?
                      </legend>
                      <div className="flex flex-wrap gap-2.5">
                        {SERVICES.map((s) => (
                          <Chip
                            key={s}
                            active={form.services.includes(s)}
                            onClick={() => toggleService(s)}
                            testid={`contact-service-${s.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            {s}
                          </Chip>
                        ))}
                      </div>
                    </fieldset>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Name *" error={errors.name} testid="contact-error-name">
                        <input
                          data-testid="contact-input-name"
                          className={inputCls}
                          placeholder="Jane Founder"
                          value={form.name}
                          onChange={set("name")}
                        />
                      </Field>
                      <Field label="Email *" error={errors.email} testid="contact-error-email">
                        <input
                          data-testid="contact-input-email"
                          type="email"
                          className={inputCls}
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={set("email")}
                        />
                      </Field>
                    </div>

                    <Field label="Current website" error={null}>
                      <input
                        data-testid="contact-input-website"
                        className={inputCls}
                        placeholder="https://yoursite.com (optional)"
                        value={form.website}
                        onChange={set("website")}
                      />
                    </Field>

                    <Field
                      label="Project details *"
                      error={errors.details}
                      testid="contact-error-details"
                    >
                      <textarea
                        data-testid="contact-input-details"
                        rows={4}
                        className={`${inputCls} resize-none`}
                        placeholder="What are you building, who is it for, and when do you need it live?"
                        value={form.details}
                        onChange={set("details")}
                      />
                    </Field>

                    <button
                      type="submit"
                      data-testid="contact-submit-button"
                      disabled={status === "sending"}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-vermillion px-8 py-4 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-vermillion-dark disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <>
                          Sending
                          <Loader2 className="h-4 w-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          Send the brief
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-fog">
                      No spam, no newsletter — just a reply from a human.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
