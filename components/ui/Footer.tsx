import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Link href="/" className="logo">
          <span className="brand-mark">✳</span> excelsis®
        </Link>
        <p>
          Better marketing. More possibility.
          <br />
          Built exclusively for dentistry.
        </p>
        <Link href="/contact">Let’s build what’s next ↗</Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Excelsis. All rights reserved.</span>
        <span>AI-powered. Human-led.</span>
        <Link href="/privacy">Privacy policy</Link>
      </div>
    </footer>
  );
}
