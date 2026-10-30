import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Booking from "@/components/sections/Booking";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="discipline-strip">
        <span>EXCLUSIVELY FOR DENTISTRY</span>
        <b>General dentistry</b>
        <i>✳</i>
        <b>Cosmetic dentistry</b>
        <i>✳</i>
        <b>Orthodontics</b>
        <i>✳</i>
        <b>Dental implants</b>
        <i>✳</i>
        <b>Multi-location practices</b>
      </div>
      <Services />
      <section className="approach section">
        <div className="approach-visual">
          <div className="visual-caption">
            <span className="status-dot" /> THE EXCELSIS ADVANTAGE
          </div>
          <div className="growth-diagram">
            <span>YOUR PRACTICE</span>
            <div className="diagram-core">✳</div>
            <div className="diagram-chips">
              <span>Human insight</span>
              <span>AI intelligence</span>
            </div>
            <div className="diagram-result">Connected growth ↗</div>
          </div>
          <span className="visual-bottom">
            PURPOSE-BUILT. NOT ONE-SIZE-FITS-ALL.
          </span>
        </div>
        <div className="approach-copy">
          <div className="eyebrow muted">02 / INTELLIGENCE WITH INTENTION</div>
          <h2>
            Technology is powerful.
            <br />
            <em>Direction is everything.</em>
          </h2>
          <p>
            More tools won’t grow your practice. A connected strategy will. We
            combine human understanding with AI to build a marketing system
            around your goals, your team, and your patients.
          </p>
          <ul>
            {[
              "Dental-first thinking, from day one",
              "AI that supports your team, not replaces it",
              "Clear reporting. Meaningful decisions.",
            ].map((x) => (
              <li key={x}>
                <Check size={16} />
                {x}
              </li>
            ))}
          </ul>
          <Link href="/about" className="text-link dark">
            Meet your growth partner <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="process section">
        <div className="section-heading">
          <div>
            <div className="eyebrow muted">03 / A CLEAR PATH FORWARD</div>
            <h2>
              Less guesswork.
              <br />
              <em>More forward motion.</em>
            </h2>
          </div>
          <Link href="/contact" className="text-link dark">
            Let’s map your next move <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="process-grid">
          {[
            [
              "Discover",
              "We listen, audit your patient journey, and find the opportunities that matter.",
            ],
            [
              "Build",
              "We connect your brand, campaigns, and automation into one purposeful system.",
            ],
            [
              "Refine",
              "We measure, learn, and improve together. Growth is a process, not a launch date.",
            ],
          ].map(([t, d], i) => (
            <div key={t}>
              <span className="step">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <Booking />
    </>
  );
}
