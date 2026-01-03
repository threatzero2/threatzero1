import Link from "next/link";

type PlanBase = {
  name: string;
  featured: boolean;
  items: string[];
};

type PricedPlan = PlanBase & {
  old: string;
  price: string;
  suffix: string;
  ctaText: string;
};

type RequestPlan = PlanBase & {
  label: string;
  ctaText: string;
  ctaHref: string;
};

type Plan = PricedPlan | RequestPlan;

export default function PricingCards() {
  const plans: Plan[] = [
    {
      name: "PERSOONLIJK",
      old: "€49,00",
      price: "€19,00",
      suffix: "/maand",
      featured: false,
      ctaText: "Start nu",
      items: [
        "Analyse van jouw digitale footprint op het internet",
        "Controle op datalekken van e-mailadressen en accounts",
        "Inzicht in openbaar beschikbare persoonlijke informatie",
        "Signalering van verhoogd risico op identiteitsmisbruik",
        "Verzoeken tot verwijdering van aangetroffen persoonsgegevens",
        "Monitoring op herpublicatie na data removal",
      ],
    },
    {
      name: "MKB",
      old: "€99,00",
      price: "€49,00",
      suffix: "/maand",
      featured: true,
      ctaText: "Start nu",
      items: [
        "AI-gestuurde geautomatiseerde security tests",
        "Doorlopende kwetsbaarheidsscans van systemen en applicaties",
        "Detectie van veelvoorkomende misconfiguraties en zwakke plekken",
        "Simulatie van realistische aanvalstechnieken (automated)",
        "Overzichtelijk dashboard met bevindingen en risiconiveaus",
        "Periodieke her-tests na wijzigingen of updates",
      ],
    },
    {
      name: "Enterprise",
      featured: false,
      label: "Op aanvraag",
      ctaText: "Neem contact op",
      ctaHref: "/services#services-form",
      items: [
        "Volledige pentest afgestemd op scope en risico’s",
        "Uitgevoerd door ervaren red team specialisten",
        "Handmatige aanvalssimulaties (realistische scenario’s)",
        "Uitgebreide rapportage met bevindingen en risico’s",
        "Concreet advies en prioriteiten voor mitigatie",
        "Nabespreking en toelichting van het rapport",
      ],
    },
  ];

  const isPriced = (p: Plan): p is PricedPlan => "price" in p;

  return (
    <section className="pricingSection">
      <div className="pricingContainer">
        <div className="pricingWrap">
          <p className="pricingEyebrow">
            GRATIS TE PROBEREN, EENVOUDIG IN GEBRUIK, ZONDER RISICO
          </p>
          <h2 className="pricingTitle">Prijzen afgestemd op jouw behoeften</h2>

          <div className="pricingGrid pricingGrid--large">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`pricingCard ${p.featured ? "featured" : ""}`}
              >
                <div className="pricingHead">
                  <div className="pricingName">{p.name}</div>

                  <div className="pricingOld">
                    {isPriced(p) ? p.old : ""}
                  </div>

                  <div className="pricingRow">
                    {isPriced(p) ? (
                      <>
                        <div className="pricingPrice">{p.price}</div>
                        <div className="pricingSuffix">{p.suffix}</div>
                      </>
                    ) : (
                      <>
                        <div className="pricingPrice">{p.label}</div>
                        <div className="pricingSuffix" />
                      </>
                    )}
                  </div>

                  {"ctaHref" in p ? (
                    <Link
                      href={p.ctaHref}
                      className={`pricingBtn ${p.featured ? "primary" : ""}`}
                    >
                      {p.ctaText}
                    </Link>
                  ) : (
                    <button
                      className={`pricingBtn ${p.featured ? "primary" : ""}`}
                      type="button"
                    >
                      {p.ctaText}
                    </button>
                  )}
                </div>

                <ul className="pricingList">
                  {p.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
