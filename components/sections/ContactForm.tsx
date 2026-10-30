"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  return state === "success" ? (
    <div className="form-panel success" role="status">
      <CheckCircle2 size={44} />
      <h2>Your enquiry is saved.</h2>
      <p>
        Thank you for sharing your goals. Your request has been recorded in this
        website’s enquiry inbox.
      </p>
      <p className="form-note">
        Email delivery and scheduling aren’t connected yet. No appointment has
        been booked.
      </p>
      <button className="button" onClick={() => setState("idle")}>
        Send another enquiry <ArrowUpRight size={16} />
      </button>
    </div>
  ) : (
    <form
      className="form-panel"
      onSubmit={async (e) => {
        e.preventDefault();
        setState("sending");
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));
        try {
          const res = await fetch("/api/enquiries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const result = await res.json();
          if (!res.ok) throw new Error(result.error || "Please try again.");
          setState("success");
          form.reset();
        } catch (err) {
          setMessage(
            err instanceof Error
              ? err.message
              : "Unable to save your enquiry. Please try again.",
          );
          setState("error");
        }
      }}
    >
      <h2>Let’s find your opportunities.</h2>
      <p className="form-note">
        A free audit. A useful conversation. No obligation.
      </p>
      <div className="form-row">
        <label>
          Your name
          <input
            required
            name="name"
            autoComplete="name"
            maxLength={100}
            placeholder="Alex Morgan"
          />
        </label>
        <label>
          Work email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            maxLength={200}
            placeholder="alex@yourpractice.com"
          />
        </label>
      </div>
      <label>
        Practice name
        <input
          required
          name="practice"
          autoComplete="organization"
          maxLength={160}
          placeholder="Your dental practice"
        />
      </label>
      <label>
        Practice website <span>(optional)</span>
        <input
          type="url"
          name="website"
          placeholder="https://yourpractice.com"
          maxLength={300}
        />
      </label>
      <label>
        Where would you like to grow?
        <select name="interest" required defaultValue="">
          <option value="" disabled>
            Select your priority
          </option>
          <option>Patient acquisition</option>
          <option>AI & automation</option>
          <option>Brand & website</option>
          <option>Reporting & strategy</option>
          <option>A complete growth partnership</option>
        </select>
      </label>
      <label>
        Tell us about your goals <span>(optional)</span>
        <textarea
          name="goals"
          maxLength={2000}
          rows={3}
          placeholder="What would a better next chapter look like?"
        />
      </label>
      <label className="consent">
        <input type="checkbox" required name="consent" />
        <span>
          I agree to the <Link href="/privacy">privacy policy</Link> and consent
          to being contacted about this enquiry.
        </span>
      </label>
      <input
        className="honey"
        name="companyFax"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div role="status">
        {state === "error" && <p className="error">{message}</p>}
      </div>
      <button className="button" disabled={state === "sending"}>
        {state === "sending"
          ? "Saving your enquiry…"
          : "Request my free growth audit"}
        <ArrowUpRight size={18} />
      </button>
      <p className="form-note bottom-note">
        This site saves enquiries locally. Email and calendar integrations are
        pending.
      </p>
    </form>
  );
}
