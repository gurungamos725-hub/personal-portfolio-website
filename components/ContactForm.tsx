"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const serviceOptions = [
  "AI Marketing Strategy",
  "Marketing Automation",
  "Lead Generation Systems",
  "AI Content Strategy",
  "SEO & Content Optimization",
  "CRM and Funnel Optimization",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const required = ["name", "email", "message"];
    const missing = required.some((field) => !String(form.get(field) || "").trim());

    if (missing) {
      setError("Please complete your name, email, and message.");
      return;
    }

    setError("");
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form className="glass rounded-2xl p-6 sm:p-8" onSubmit={handleSubmit}>
      {submitted ? (
        <div className="mb-6 rounded-lg border border-mint/30 bg-mint/10 p-4 text-sm text-mint">
          Thank you. Your message is ready for review, and the form handler can
          be connected to email delivery when hosting is configured.
        </div>
      ) : null}
      {error ? (
        <div className="mb-6 rounded-lg border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200">
          {error}
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" />
        <Field label="Company" name="company" />
        <label className="md:col-span-2">
          <span className="text-sm font-medium text-slate-200">Service Interested In</span>
          <select
            name="service"
            className="focus-ring mt-2 min-h-12 w-full rounded-lg border border-white/10 bg-ink px-4 text-sm text-white"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className="md:col-span-2">
          <span className="text-sm font-medium text-slate-200">Message</span>
          <textarea
            name="message"
            required
            rows={6}
            className="focus-ring mt-2 w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-sm text-white"
            placeholder="Tell me about your goals, current marketing challenges, and timeline."
          />
        </label>
      </div>
      <button
        type="submit"
        className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
      >
        Send Message <Send size={16} />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label>
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="focus-ring mt-2 min-h-12 w-full rounded-lg border border-white/10 bg-ink px-4 text-sm text-white"
      />
    </label>
  );
}
