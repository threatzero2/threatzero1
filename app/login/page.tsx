"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function LoginPage() {
  const slides = useMemo(
    () => [
      {
        icon: "🛡️",
        title: "Onze focus: security & betrouwbaarheid",
        text:
          "ThreatZero helpt organisaties risico’s vroeg te signaleren: zwakke configuraties, blootgestelde data en kwetsbaarheden. Zo weet je sneller wat aandacht nodig heeft.",
      },
      {
        icon: "🔎",
        title: "Sneller inzicht",
        text:
          "Je krijgt overzicht en duidelijke prioriteiten, zodat je direct weet waar je moet beginnen — zonder technische ruis.",
      },
      {
        icon: "⚡",
        title: "Pentesten met impact",
        text:
          "We testen zoals een aanvaller en vertalen bevindingen naar concrete verbeterpunten die je team direct kan oppakken.",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 4500); // om de paar sec
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="loginWrap">
      <div className="container">
        <div className="loginGrid">
          {/* LINKS: slider card */}
          <div className="loginLeft">
            <div className="loginInfoCard loginSliderCard">
              <div className="loginInfoIcon" aria-hidden="true">
                {slides[active].icon}
              </div>

              <h3 className="loginInfoTitle">{slides[active].title}</h3>

              <p className="loginInfoText">{slides[active].text}</p>

              {/* dots */}
              <div className="loginDots" aria-label="slides">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`loginDot ${i === active ? "isActive" : ""}`}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RECHTS: login panel */}
          <div className="loginRight">
            <div className="loginPanel loginPanelLarge">
              <h1 className="loginTitle">Inloggen</h1>

              {/* Start een scan verwijderd */}
              <p className="loginSub">
                Nog geen account?{" "}
                <Link className="loginLink" href="/register">
                  Maak er één aan
                </Link>
              </p>

              <button className="googleBtn" type="button">
                <span className="googleG">G</span>
                Inloggen met Google
              </button>

              <div className="divider" role="separator" aria-label="of">
                <span />
                <p>OF</p>
                <span />
              </div>

              <form className="loginForm">
                <label className="field">
                  <span>E-mailadres</span>
                  <input
                    type="email"
                    placeholder="naam@bedrijf.nl"
                    autoComplete="email"
                  />
                </label>

                <label className="field">
                  <span>Wachtwoord</span>
                  <div className="pwRow">
                    <input
                      type="password"
                      placeholder="••••••••"
                      autoComplete="current-password"
                    />
                    <button
                      className="pwIcon"
                      type="button"
                      aria-label="Wachtwoord tonen"
                      title="Wachtwoord tonen"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </div>
                </label>

                <button className="btn primary loginBtn" type="button">
                  Inloggen
                </button>
              </form>

              <p className="loginHelp">
                Wachtwoord vergeten?{" "}
                <a className="loginLink" href="#">
                  Klik hier
                </a>
              </p>

              <p className="finePrint" style={{ marginTop: 14 }}>
                Door in te loggen ga je akkoord met onze{" "}
                <Link href="/algemene-voorwaarden" className="termsLinkDark">
                  voorwaarden
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
