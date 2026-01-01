import Image from "next/image";

type Founder = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
  tags: string[];
};

const founders: Founder[] = [
  {
    name: "Eren Korkmaz",
    role: "Co-founder — ThreatZero Security",
    bio: "Eren focust zich op security-strategie, risicodetectie en het vertalen van technische bevindingen naar heldere beslisinformatie. Zijn kracht ligt in het combineren van techniek met overzicht.",
    image: "/team/eren.jpg",
    linkedin: "#",
    email: "contact@threatzero.nl",
    tags: ["Security", "Risicoanalyse", "Rapportage"],
  },
  {
    name: "Mecit Pehlivan",
    role: "Co-founder — ThreatZero Security",
    bio: "Mecit richt zich op platformontwikkeling, automatisering en schaalbaarheid. Hij zorgt ervoor dat security-inzichten snel, betrouwbaar en consistent beschikbaar zijn.",
    image: "/team/mecit.jpg",
    linkedin: "#",
    email: "contact@threatzero.nl",
    tags: ["Platform", "Automatisering", "Monitoring"],
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="companyAbout">
        <div className="container">
          <div className="companyHead">
            <p className="companyEyebrow">OVER THREATZERO</p>
            <h1 className="companyTitle">Opgericht door security-specialisten</h1>
            <p className="companyLead">
              ThreatZero is opgericht met één doel: organisaties helpen om risico’s zichtbaar te maken
              vóórdat ze echte problemen worden. Geen onnodige complexiteit — wél duidelijke inzichten
              en concrete vervolgstappen.
            </p>
          </div>

          <div className="founderGrid2">
            {founders.map((f) => (
              <article key={f.name} className="founderCard2">
                <div className="founderMedia">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    sizes="(max-width: 920px) 100vw, 520px"
                    className="founderImg"
                    priority={false}
                  />
                  <div className="founderBadge2">Co-founder</div>
                </div>

                <div className="founderBody2">
                  <h3 className="founderName2">{f.name}</h3>
                  <p className="founderRole2">{f.role}</p>
                  <p className="founderBio2">{f.bio}</p>

                  <div className="founderTags2">
                    {f.tags.map((t) => (
                      <span key={`${f.name}-${t}`} className="tagPill2">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="founderActions2">
                    <div className="founderIcons2">
                      {f.linkedin && (
                        <a className="iconBtn2" href={f.linkedin} aria-label="LinkedIn">
                          in
                        </a>
                      )}
                      {f.email && (
                        <a className="iconBtn2" href={`mailto:${f.email}`} aria-label="E-mail">
                          ✉
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="companyExpect">
            <h2 className="companyExpectTitle">Wat je van ons mag verwachten</h2>
            <p className="companyExpectText">
              Snelle check-ups, heldere rapportage en praktische acties. Zodat jij niet hoeft te gokken
              waar het misgaat — maar precies weet wat je als eerste moet fixen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
