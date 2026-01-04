import type { ReactNode } from "react";

import ServicesForm from "@/components/ServicesForm";
import ScanCTA from "@/components/ScanCTA";

import { Search, Zap, Shield, Network, Eye } from "lucide-react";

type Service = {
  id: string;
  title: string;
  desc: string;
  cta: string;
  align: "left" | "right";
  kicker: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    id: "risk",
    title: "Risicoanalyse",
    desc:
      "Krijg snel inzicht in je grootste risico’s en waar ze zich bevinden.\n" +
      "We helpen je prioriteiten stellen, zodat je weet waar je vandaag moet beginnen.",
    cta: "Gratis intake aanvragen",
    align: "left",
    kicker: "ZICHT KRIJGEN",
    icon: <Search size={18} />,
  },
  {
    id: "pentest",
    title: "Pentesten",
    desc:
      "We testen je systemen en processen zoals echte aanvallers dat zouden doen.\n" +
      "Dit combineren we met realistische aanvalsscenario’s, zodat je ziet waar je kwetsbaar bent én hoe groot de impact kan zijn.\n\n" +
      "Je krijgt duidelijke inzichten en concrete verbeterpunten.",
    cta: "Meer informatie",
    align: "right",
    kicker: "ONTDEK & VERBETER",
    icon: <Zap size={18} />,
  },
  {
    id: "ai",
    title: "AI & Automatisering",
    desc:
      "Met AI en slimme automatisering houden we continu overzicht over risico’s en signalen.\n" +
      "Zo worden problemen sneller herkend en kun je eerder ingrijpen — zonder extra handmatig werk.\n\n" +
      "Ideaal voor organisaties die willen schalen zonder extra complexiteit.",
    cta: "Meer informatie",
    align: "left",
    kicker: "BLIJF VERBETEREN",
    icon: <Shield size={18} />,
  },
  {
    id: "cloudflare",
    title: "Cloudflare Security",
    desc:
      "We helpen je Cloudflare slim in te zetten voor betere beveiliging en prestaties.\n" +
      "Denk aan bescherming tegen aanvallen, meer controle en een stabiele basis voor groei.",
    cta: "Meer informatie",
    align: "right",
    kicker: "BESCHERMEN",
    icon: <Network size={18} />,
  },
  {
    id: "osint",
    title: "OSINT-onderzoek",
    desc:
      "We brengen in kaart welke informatie over jouw organisatie openbaar zichtbaar is.\n" +
      "Zo voorkom je dat aanvallers misbruik maken van data die onbedoeld beschikbaar is.",
    cta: "Meer informatie",
    align: "left",
    kicker: "ZICHT KRIJGEN",
    icon: <Eye size={18} />,
  },
];

function Paragraphs({ text }: { text: string }) {
  const blocks = text.split("\n\n");
  return (
    <>
      {blocks.map((b, i) => (
        <span key={i}>
          {b.split("\n").map((line, j) => (
            <span key={j}>
              {line}
              {j < b.split("\n").length - 1 ? <br /> : null}
            </span>
          ))}
          {i < blocks.length - 1 ? (
            <>
              <br />
              <br />
            </>
          ) : null}
        </span>
      ))}
    </>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Header / Intro */}
      <section className="section servicesHero">
        <div className="container servicesHeroInner">
          <p className="{`eyebrow kicker-${s.id}">DIENSTEN</p>
          <h1 className="pageTitle" style={{ textAlign: "center" }}>
            Onze cybersecuritydiensten
          </h1>
          <p
            className="lead"
            style={{
              textAlign: "center",
              margin: "10px auto 0",
              maxWidth: "70ch",
            }}
          >
            Een overzicht van onze diensten. Klik op een knop om direct door te
            gaan naar het intake-formulier onderaan.
          </p>
        </div>
      </section>

      {/* Services lijst */}
      <section className="section servicesListSection">
        <div className="container">
          <div className="servicesList">
            {services.map((s) => (
              <article
                key={s.id}
                className={`serviceRow ${s.align === "right" ? "right" : "left"}`}
              >
                <div className="serviceArt">
                  <div className="illusCard">
                    <div className="illusTop">
                      <span className="illusDot" />
                      <span className="illusDot" />
                      <span className="illusDot" />
                    </div>
                    <div className="illusBody">
                      <div className="illusIcon" aria-hidden="true">
                        {s.icon}
                      </div>
                      <div className="illusLines">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="serviceCopy">
                  <p className="eyebrow">{s.kicker}</p>
                  <h2 className="h2">{s.title}</h2>
                  <p className="lead" style={{ marginTop: 10 }}>
                    <Paragraphs text={s.desc} />
                  </p>

                  {/* Scroll naar formulier */}
                  <a className="btn primary" href="#services-form">
                    {s.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Formulier sectie (anker) */}
      <div id="services-form" />

      {/* ServicesForm rendert zelf section+container+heading */}
      <ServicesForm />

      {/* Scan CTA onderaan (optioneel) */}
      <ScanCTA title="Gratis web check met snelle resultaten." subtitle="" />
    </>
  );
}
