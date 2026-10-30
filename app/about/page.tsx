import Booking from "@/components/sections/Booking";
export const metadata = { title: "Our approach" };
export default function Page() {
  return (
    <>
      <section className="page-intro">
        <div className="eyebrow muted">OUR APPROACH / HUMAN AT THE CORE</div>
        <h1>
          Your practice has a purpose.
          <br />
          <em>So should your marketing.</em>
        </h1>
        <p>
          Excelsis is an AI marketing agency focused exclusively on dentistry.
          We help practice owners connect outstanding care with the people
          looking for it.
        </p>
      </section>
      <section className="section editorial">
        <h2>
          Built around your practice.
          <br />
          Never around a template.
        </h2>
        <div>
          <p>
            Every practice has a different story, patient community, and
            ambition. We start by understanding yours: the treatments you want
            to grow, the capacity of your team, and the experience you want
            patients to have.
          </p>
          <p>
            Then we bring strategy, creative work, and automation together. AI
            helps us connect the details. Human judgment keeps the work
            relevant, considered, and true to your practice.
          </p>
          <h3>Responsible by design</h3>
          <p>
            Marketing automation should earn trust. We plan for consent, minimal
            data collection, and clear human hand-offs. Clinical advice stays
            with qualified professionals. We never promise a specific number of
            patients or a guaranteed financial return.
          </p>
          <h3>A working relationship with clarity</h3>
          <p>
            We agree on priorities, define what success means, and review the
            evidence together. You’ll understand what we’re building, why it
            matters, and what comes next.
          </p>
        </div>
      </section>
      <Booking />
    </>
  );
}
