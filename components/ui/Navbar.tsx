"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header>
      <Link href="/" className="logo" aria-label="Excelsis home">
        <span className="brand-mark">✳</span> excelsis
        <span className="logo-dot">®</span>
      </Link>
      <nav aria-label="Main navigation" className={open ? "open" : ""}>
        {[
          ["Services", "/services"],
          ["Our approach", "/about"],
          ["Insights", "/insights"],
        ].map(([label, url]) => (
          <Link
            key={url}
            href={url}
            onClick={() => setOpen(false)}
            aria-current={path === url ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link className="button small nav-cta" href="/contact">
        Let’s talk growth <ArrowUpRight size={16} />
      </Link>
      <button
        className="menu"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
