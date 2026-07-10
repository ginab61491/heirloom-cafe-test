"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [fieldError, setFieldError] = useState("");
  const [submitError, setSubmitError] = useState("");

  function validate(value: string): string {
    if (!value.trim()) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Please enter a valid email address.";
    return "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFieldError("");
    setSubmitError("");

    const error = validate(email);
    if (error) {
      setFieldError(error);
      return;
    }

    setState("loading");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();

      if (data.ok) {
        setState("success");
      } else {
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setSubmitError("Could not connect. Please check your connection and try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="text-sm text-[var(--color-cream)]">
        <p className="font-[family-name:var(--font-serif)] text-base text-white mb-1">Thank you!</p>
        <p className="opacity-80">You are on the list.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2">
      <label htmlFor="newsletter-email" className="text-xs uppercase tracking-widest opacity-70">
        Join our mailing list
      </label>
      <input
        id="newsletter-email"
        type="email"
        autoComplete="email"
        placeholder="Your email address"
        value={email}
        onChange={e => { setEmail(e.target.value); if (fieldError) setFieldError(""); }}
        className={`w-full px-4 py-2.5 text-sm rounded bg-white/10 border text-[var(--color-cream)] placeholder:text-[var(--color-cream)] placeholder:opacity-40 focus:outline-none focus:border-white/60 transition-colors ${
          fieldError ? "border-red-300" : "border-white/25"
        }`}
      />
      {fieldError && (
        <p role="alert" className="text-xs text-red-300 -mt-1">{fieldError}</p>
      )}
      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-gold text-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "loading" ? "Sending..." : "Subscribe"}
      </button>
      {(state === "error" && submitError) && (
        <p role="alert" className="text-xs text-red-300">{submitError}</p>
      )}
    </form>
  );
}
