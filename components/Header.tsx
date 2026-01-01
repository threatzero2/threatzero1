"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Bedrijf" },
  { href: "/contact", label: "Contact" },
  { href: "/services", label: "Diensten" },
  { href: "/blog", label: "Blog" },
  { href: "/login", label: "Inloggen" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // init theme from <html data-theme="...">, default dark
    const html = document.documentElement;
    const current =
      (html.getAttribute("data-theme") as "light" | "dark") || "dark";
    setTheme(current);
  }, []);

  useEffect(() => {
    // close mobile menu on route change
    setOpen(false);
  }, [pathname]);

  function toggleTheme() {
    const html = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    setTheme(next);
  }

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        {/* Logo left */}
        <Link href="/" className="brand" aria-label="ThreatZero home">
          <span className="brandText">ThreatZero Security</span>
        </Link>

        {/* Desktop nav (right) */}
        <nav className="navDesktop" aria-label="Hoofdnavigatie">
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`navLink ${active ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* theme toggle (ONLY ONE, next to Login) */}
          <button
            className="themeToggle"
            onClick={toggleTheme}
            aria-label="Thema wisselen"
            type="button"
          >
            <span className="toggleTrack">
              <span className={`toggleThumb ${theme === "light" ? "light" : ""}`} />
            </span>
          </button>
        </nav>

        {/* Mobile */}
        <div className="headerActions">
          <button
            className="burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu openen"
            aria-expanded={open}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mobilePanel">
          <div className="container mobileInner">
            {NAV.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobileLink ${active ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
