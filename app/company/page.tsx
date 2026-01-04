/* AI-LAYOUT: BEDRIJF / OVER ONS */

import { Linkedin, Mail, UserRound } from "lucide-react";

export default function BedrijfPage() {
  return (
    <section className="companySection">
      <div className="container">
        {/* HERO */}
        <header className="companyHero">
          <h1 className="companyTitle">Opgericht door securityspecialisten</h1>

          <p className="companyLead">
            Wij helpen organisaties vooruit door Security risico’s vóór te zijn.
            <br />
            Met slimme AI en automatisering geeft ThreatZero direct inzicht in wat écht
            aandacht nodig heeft, zodat je sneller, slimmer en met vertrouwen beslissingen
            neemt.
          </p>

          <p className="companyLead companyLeadMuted">
            Geen ruis. Wel overzicht. Volledige duidelijkheid.
          </p>
        </header>

        {/* FOUNDERS */}
        <div className="foundersGrid">
          {/* Eren */}
          <article className="founderCard">
            <div className="founderBody">
              <div className="avatarWrap" aria-hidden="true">
                <div className="avatarCircle">
                  <UserRound size={26} />
                </div>
              </div>

              <div className="founderInfo">
                <h2 className="founderName">Eren Korkmaz</h2>
                <p className="founderRole">Co-founder</p>

                <p className="founderText">
                  Eren helpt organisaties begrijpen waar ze staan op het gebied van security.
                  Hij maakt risico’s inzichtelijk en vertaalt technische bevindingen naar
                  duidelijke uitleg, zodat beslissingen niet ingewikkeld hoeven te zijn.
                </p>

                <p className="founderText">
                  Hij houdt van overzicht, heldere keuzes en oplossingen die echt werken in
                  de praktijk.
                </p>

                <div className="founderLinks">
                  <a
                    className="iconBtn"
                    href="https://www.linkedin.com/in/eren-korkmaz-862914396/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Eren"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    className="iconBtn"
                    href="mailto:info@threatzero.nl"
                    aria-label="Mail ThreatZero"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Mecit */}
          <article className="founderCard">
            <div className="founderBody">
              <div className="avatarWrap" aria-hidden="true">
                <div className="avatarCircle">
                  <UserRound size={26} />
                </div>
              </div>

              <div className="founderInfo">
                <h2 className="founderName">Mecit Pehlivan</h2>
                <p className="founderRole">Co-founder</p>

                <p className="founderText">
                  Mecit zorgt ervoor dat het platform van ThreatZero stabiel, veilig en
                  betrouwbaar is. Hij bouwt aan systemen die altijd beschikbaar zijn en
                  meeschalen met de organisatie.
                </p>

                <div className="founderLinks">
                  <a
                    className="iconBtn"
                    href="https://www.linkedin.com/in/mecit-pehlivan-40b2a6318/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Mecit"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    className="iconBtn"
                    href="mailto:info@threatzero.nl"
                    aria-label="Mail ThreatZero"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
