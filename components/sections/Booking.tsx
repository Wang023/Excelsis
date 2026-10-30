import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function Booking() {
  return (
    <section className="booking">
      <div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div>
      <h2>
        A remarkable practice.
        <br />
        <em>Let’s give it remarkable reach.</em>
      </h2>
      <p>
        Let’s uncover the opportunities hiding in your patient journey.
        <br />
        Start with a free, no-pressure growth audit.
      </p>
      <Link href="/contact" className="button mint">
        Find your growth opportunities <ArrowUpRight size={18} />
      </Link>
      <small>No obligation. Just a fresh perspective.</small>
      <span className="booking-star" aria-hidden="true">
        ✳
      </span>
    </section>
  );
}
