"use client";

import { useState, type FormEvent } from "react";

const budgets = [
  "$1k - $3k",
  "$3k - $6k",
  "$6k - $10k",
  "$10k+",
];

const services = [
  "Brand Identity",
  "Social Media Creatives",
  "Web Design",
  "Web Build",
  "Content System",
  "Other",
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.includes("@")) nextErrors.email = "Valid email is required";
    if (!form.service) nextErrors.service = "Select a service";
    if (!form.message.trim()) nextErrors.message = "Message is required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!validate()) {
      event.preventDefault();
      return;
    }
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      window.location.href = "/thank-you";
    }, 600);
  };

  return (
    <form
      method="POST"
      action="https://docs.google.com/forms/d/e/1FAIpQLSc07ObWQmBZeMaV_ng6kakW89oKE5QEtyyn1cj8ycM5vZ8zHw/formResponse"
      target="hidden_iframe"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <iframe
        name="hidden_iframe"
        title="hidden_iframe"
        className="hidden"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-white/70">
          Name
          <input
            name="entry.1818995754"
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-white/40"
          />
          {errors.name ? (
            <span className="text-xs text-rose-400">{errors.name}</span>
          ) : null}
        </label>
        <label className="space-y-2 text-sm text-white/70">
          Email
          <input
            name="entry.487429469"
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-white/40"
          />
          {errors.email ? (
            <span className="text-xs text-rose-400">{errors.email}</span>
          ) : null}
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-white/70">
          Service Needed
          <select
            name="entry.1077734351"
            value={form.service}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, service: event.target.value }))
            }
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-white/40"
          >
            <option value="">Select service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service ? (
            <span className="text-xs text-rose-400">{errors.service}</span>
          ) : null}
        </label>
        <label className="space-y-2 text-sm text-white/70">
          Budget Range
          <select
            name="entry.300372339"
            value={form.budget}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, budget: event.target.value }))
            }
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-white/40"
          >
            <option value="">Select range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="space-y-2 text-sm text-white/70">
        Message
        <textarea
          name="entry.1929040440"
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          rows={5}
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-white/40"
        />
        {errors.message ? (
          <span className="text-xs text-rose-400">{errors.message}</span>
        ) : null}
      </label>
      <button
        type="submit"
        className="rounded-full border border-white/20 bg-white px-6 py-3 text-xs uppercase tracking-[0.3em] text-black"
      >
        {status === "loading" ? "Sending..." : "Send inquiry"}
      </button>
      {status === "success" ? (
        <p className="text-sm text-emerald-300">
          Inquiry sent. I will reply within 48 hours.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-rose-400">
          Something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}
