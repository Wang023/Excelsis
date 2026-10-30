import ContactForm from "@/components/sections/ContactForm";
export const metadata = { title: "Your free growth audit" };
export default function Page() {
  return (
    <section className="contact-page section">
      <div className="contact-copy">
        <div className="eyebrow muted">LET’S TALK ABOUT WHAT’S NEXT</div>
        <h1>
          Your next chapter.
          <br />
          <em>Starts with a conversation.</em>
        </h1>
        <p>
          Tell us a little about your practice. We’ll use your enquiry to
          understand your goals and prepare a focused growth conversation.
        </p>
        <div className="audit-includes">
          <h3>What we’ll explore</h3>
          <p>
            01 <span>Your visibility and digital first impression</span>
          </p>
          <p>
            02 <span>The journey from enquiry to consultation</span>
          </p>
          <p>
            03 <span>Practical opportunities for smarter growth</span>
          </p>
        </div>
        <small>
          For dental practice owners and teams.
          <br />
          Please don’t include patient or medical information.
        </small>
      </div>
      <ContactForm />
    </section>
  );
}
