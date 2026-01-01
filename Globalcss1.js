import ScanCTA from "@/components/ScanCTA";

type TeamMember = {
  name: string;
  role: string;
  blurb: string;
  // jij vult later echte images in (of Next/Image)
  imageUrl?: string;
};

const team: TeamMember[] = [
  {
    name: "Eren Korkmaz",
    role: "Founder",
    blurb:
      "Korte intro over expertise, aanpak en waar je team voor staat. Hou het simpel en concreet.",
  },
  {
    name: "Mecit Pehlivan",
    role: "Founder",
    blurb:
      "Korte tekst: focus op duidelijke rapportage, snel schakelen, en praktische fixes.",
  },
  {
    name: "Voornaam Achternaam",
    role: "Red Team",
    blurb:
      "Korte tekst: webapp/security testing, threat modeling of pentest ervaring.",
  },
  {
    name: "Voornaam Achternaam",
    role: "CTO",
    blurb:
      "Korte tekst: engineering, hardening, cloud/security pipelines, tooling.",
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Top intro / founder story */}
      <section className="section companyHero">
        <div className="container companyHeroGrid">
          <div>
            <p className="eyebrow">OVER ONS</p>
            <h1 className="pageTitle">Wie we zijn en hoe we werken</h1>
            <p className="lead" style={{ marginTop: 10 }}>
              Wij helpen teams sneller inzicht krijgen in risico’s en vooral: sneller fixes doorvoeren.
              Je krijgt duidelijke bevindingen, prioriteit en een praktisch stappenplan.
            </p>

            <div className="badgeRow">
              <span className="miniBadge">Security-first</span>
              <span className="miniBadge">Praktisch & direct</span>
              <span className="miniBadge">Rapporten die werken</span>
            </div>

            <div className="credRow">
              <span className="cred">Compliance / Framework</span>
              <span className="cred">Pentest methodology</span>
              <span className="cred">Best practices</span>
            </div>
          </div>

          {/* Founder image circle (placeholder) */}
          <div className="founderWrap">
            <div className="founderRing">
              <div className="founderPhoto">
                {/* Vervang dit blok later door jouw foto */}
                <div className="photoPlaceholder">
                  Voeg hier je foto toe
                </div>
              </div>
            </div>

            <div className="socialRow">
              <a className="socialIcon" href="#" aria-label="Email">✉️</a>
              <a className="socialIcon" href="#" aria-label="LinkedIn">in</a>
              <a className="socialIcon" href="#" aria-label="X">𝕏</a>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="section">
        <div className="container">
          <div className="centerHead">
            <p className="eyebrow">ONS TEAM</p>
            <h2 className="h2">Maak kennis met het team</h2>
            <p className="lead" style={{ marginTop: 8 }}>
              Jij vult straks de foto’s en teksten in — de cards staan al netjes in de juiste opmaak.
            </p>
          </div>

          <div className="teamGrid">
            {team.map((m, i) => (
  <article key={`${m.name}-${i}`} className="teamCard">

                <div className="teamTop">
                  <div className="avatar">
                    <div className="avatarPlaceholder">Foto</div>
                  </div>
                  <div>
                    <h3 className="teamName">{m.name}</h3>
                    <p className="teamRole">{m.role}</p>
                  </div>
                </div>

                <p className="teamBlurb">{m.blurb}</p>

                <div className="teamBottom">
                  <span className="rolePill">{m.role}</span>
                  <div className="teamIcons">
                    <a className="miniIcon" href="#" aria-label="Email">✉️</a>
                    <a className="miniIcon" href="#" aria-label="LinkedIn">in</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Scan CTA onderaan (zoals jij wil: onder elke pagina) */}
      <ScanCTA
        title="100% gratis check (demo)"
        subtitle="Alleen de opmaak nu — later koppel je hier de echte scan aan."
      />
    </>
  );
}


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/login", label: "Login" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // init theme from <html data-theme="...">, default dark
    const html = document.documentElement;
    const current = (html.getAttribute("data-theme") as "light" | "dark") || "dark";
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
          <span className="brandText">ThreatZero</span>
        </Link>

        {/* Desktop nav (right) */}
        <nav className="navDesktop" aria-label="Main navigation">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

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

          {/* theme toggle */}
          <button className="themeToggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="toggleTrack">
              <span className={`toggleThumb ${theme === "light" ? "light" : ""}`} />
            </span>
          </button>
        </nav>

        {/* Mobile */}
        <div className="headerActions">
          <button className="themeToggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="toggleTrack">
              <span className={`toggleThumb ${theme === "light" ? "light" : ""}`} />
            </span>
          </button>

          <button
            className="burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={open}
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
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

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
