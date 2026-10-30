"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function ContactForm() {
  const [draft, setDraft] = useState("");
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ganasehaki@gmail.com";
  return (
    <form className="form-panel" onSubmit={(event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPractice: ${data.get("practice")}\nWebsite: ${data.get("website")}\nInterest: ${data.get("interest")}\n\n${data.get("goals")}`;
      if (email) {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent("Dental practice growth audit enquiry")}&body=${encodeURIComponent(body)}`;
      } else {
        setDraft(body);
      }
    }}>
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
      <p className="form-note">Please don’t include patient or medical information. <Link href="/privacy">Read our privacy policy.</Link></p>
      <button className="button" type="submit">
        {email ? "Open enquiry in email" : "Prepare my enquiry"}
        <ArrowUpRight size={18} />
      </button>
      <p className="form-note bottom-note">
        {email ? "Opens your email app. Review and send your message there." : "Prepare a message to share with us. Our contact address will be available here soon."}
      </p>
      {draft && <div role="status"><h3 style={{marginTop:24}}>Your enquiry draft</h3><p className="form-note">Nothing has been sent. Copy this draft for your records.</p><textarea aria-label="Your enquiry draft" readOnly rows={10} value={draft}/><button type="button" className="button" onClick={() => {const url=URL.createObjectURL(new Blob([draft],{type:"text/plain"}));const a=document.createElement("a");a.href=url;a.download="excelsis-enquiry.txt";a.click();URL.revokeObjectURL(url);}}>Download my draft</button></div>}
    </form>
  );
}
