import ServicesForm from "@/components/ServicesForm";
import ScanCTA from "@/components/ScanCTA";

type Service = {
  id: string;
  title: string;
  desc: string;
  cta: string;
  align: "left" | "right";
};

const services: Service[] = [
  {
    id: "pentest",
    title: "Penetratietesten",
    desc:
      "Praktische tests om kwetsbaarheden en misconfiguraties te identificeren, inclusief prioritering en concrete verbeterpunten.",
    cta: "Meer informatie",
    align: "right",
  },
  {
    id: "risk",
    title: "Risicoanalyse",
    desc:
      "Snel inzicht in je grootste risico’s, waar ze zich bevinden en welke acties de meeste impact hebben.",
    cta: "Gratis intake aanvragen",
    align: "left",
  },
  {
    id: "redteam",
    title: "Red Teaming",
    desc:
      "Realistische aanvalsscenario’s om detectie, respons en weerbaarheid te testen — veilig en gecontroleerd.",
    cta: "Meer informatie",
    align: "right",
  },
  {
    id: "osint",
    title: "OSINT-onderzoek",
    desc:
      "Inzicht in je digitale voetafdruk: blootgestelde data, datalekken en signalen die door aanvallers kunnen worden misbruikt.",
    cta: "Gratis intake aanvragen",
    align: "left",
  },
  {
    id: "removal",
    title: "Gegevensverwijdering",
    desc:
      "Begeleiding bij het verminderen van onnodig openbare data en het verkleinen van je aanvalsvlak.",
    cta: "Meer informatie",
    align: "right",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header / Intro */}
      <section className="section servicesHero">
        <div className="container servicesHeroInner">
          <p className="eyebrow">DIENSTEN</p>
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
                      <div className="illusIcon" aria-hidden>
                        🛡️
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
                  <p className="eyebrow">ONTDEK & VERBETER</p>
                  <h2 className="h2">{s.title}</h2>
                  <p className="lead" style={{ marginTop: 10 }}>
                    {s.desc}
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
      <ScanCTA
        title="Gratis web check (demo)"
        subtitle="Snelle check — later koppel je dit aan echte scans."
      />
    </>
  );
}
