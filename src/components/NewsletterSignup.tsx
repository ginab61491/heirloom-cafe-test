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
      <div className="pt-4 border-t border-white/10">
        <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Mailing List</p>
        <p className="text-sm text-white/80">You are on the list.</p>
      </div>
    );
  }

  return (
    <div className="pt-4 border-t border-white/10">
      <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Mailing List</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex gap-2">
          <input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            placeholder="Your email address"
            value={email}
            onChange={e => { setEmail(e.target.value); if (fieldError) setFieldError(""); }}
            className={`flex-1 min-w-0 px-3 py-2 text-sm rounded bg-white/10 text-white placeholder:text-white/40 focus:outline-none border transition-colors ${fieldError ? "border-red-300/60" : "border-white/20 focus:border-white/50"}`}
          />
          <button
            type="submit"
            disabled={state === "loading"}
            className="px-4 py-2 text-xs font-semibold tracking-widest uppercase text-white border border-white/40 rounded hover:bg-white/10 transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {state === "loading" ? "..." : "Subscribe"}
          </button>
        </div>
        {fieldError && <p role="alert" className="text-xs text-red-300 mt-1">{fieldError}</p>}
        {state === "error" && submitError && <p role="alert" className="text-xs text-red-300 mt-1">{submitError}</p>}
      </form>
    </div>
  );
}
