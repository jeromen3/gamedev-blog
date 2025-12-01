"use client";

import { FormEvent, useState } from "react";

export default function EmailWidget() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const trimmed = email.trim();

    if (!trimmed || !trimmed.includes("@")) {
      setStatus("error");
      setErrorMessage("Add a valid email before joining.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmed }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setErrorMessage(
          data?.error || "Something went wrong. Try again in a moment."
        );
        return;
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="email-widget">
      <div className="email-widget-inner">

        <h3 className="email-title">Join Our Email List</h3>

        <p className="email-desc">
          Occasional emails about game development and coding. No spam, just
          signal.
        </p>

        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            className="email-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") {
                setStatus("idle");
                setErrorMessage(null);
              }
            }}
          />
          <button
            type="submit"
            className="email-button"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Joining..." : "Join the list"}
          </button>
        </form>

        {status === "success" && (
          <p className="email-status success">
            You&apos;re in. Check your inbox soon.
          </p>
        )}
        {status === "error" && (
          <p className="email-status error">
            {errorMessage || "Something went wrong."}
          </p>
        )}

        <p className="email-footnote">
          You can unsubscribe any time. This is powered by an external email
          service so emails actually send and manage properly.
        </p>
      </div>
    </div>
  );
}
