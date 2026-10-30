import { services } from "@/components/sections/Services";
import Booking from "@/components/sections/Booking";
import Link from "next/link";
export const metadata = { title: "Services" };
export default function Page() {
  return (
    <>
      <section className="page-intro">
        <div className="eyebrow muted">OUR SERVICES / CONNECTED BY DESIGN</div>
        <h1>
          The right systems.
          <br />
          <em>Remarkable possibilities.</em>
        </h1>
        <p>
          From the first search to the next conversation, we help ambitious
          dental practices build a more connected patient journey.
        </p>
      </section>
      <section className="section service-details">
        {services.map((s, i) => (
          <article id={s.id} key={s.id}>
            <span className="detail-number">0{i + 1}</span>
            <div>
              <s.icon size={32} />
              <div className="eyebrow muted">{s.tag}</div>
              <h2>{s.title}</h2>
              <p>{s.detail}</p>
              <Link
                className="text-link dark"
                href={"/contact?interest=" + s.id}
              >
                Discuss this service ↗
              </Link>
            </div>
          </article>
        ))}
      </section>
      <Booking />
    </>
  );
}
