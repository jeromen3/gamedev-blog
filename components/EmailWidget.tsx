"use client";

import { FormEvent, useState } from "react";

export default function EmailWidget() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    // TODO: hook this up to your real email provider API
    // For now we just fake a success state.
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <div className="email-widget">
      <div className="email-widget-inner">

        <h3 className="email-title">Join Our Email List</h3>

        <p className="email-desc">
          Occasional emails about game development, coding. No spam, just signal.
        </p>

        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            className="email-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
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
            Add a valid email before joining.
          </p>
        )}

        <p className="email-footnote">
          You can unsubscribe any time. This will eventually be powered by a
          proper email service.
        </p>
      </div>
    </div>
  );
}
