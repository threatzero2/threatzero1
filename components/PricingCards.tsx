export default function PricingCards() {
  const plans = [
    {
      name: "PERSOONLIJK",
      old: "€49,00",
      price: "€19,00",
      suffix: "/maand",
      featured: false,
      items: [
        "Geautomatiseerde gegevensverwijdering",
        "Monitoring van je digitale voetafdruk",
        "AI-gestuurde automatisering",
        "Dark web-monitoring",
        "9.000+ beveiligingstests",
      ],
    },
    {
      name: "KLEIN BEDRIJF",
      old: "€99,00",
      price: "€49,00",
      suffix: "/maand",
      featured: true,
      items: [
        "24/7 websitebeveiliging",
        "Monitoring van medewerkers & directie",
        "AI-gestuurde automatisering",
        "140 miljard+ records gemonitord",
        "22.000+ beveiligingstests",
        "Professionele ondersteuning",
      ],
    },
    {
      name: "PENTESTER ELITE",
      old: "€1.499,00",
      price: "€899,00",
      suffix: "/maand",
      featured: false,
      items: [
        "AI + Red Team-experts",
        "Geavanceerde automatisering",
        "140 miljard+ records gemonitord",
        "39.000+ beveiligingstests",
        "Dedicated accountmanager",
        "Jaarlijkse handmatige pentest",
      ],
    },
  ];

  return (
    <section className="pricingSection">
      <div className="pricingContainer">
        <div className="pricingWrap">
          <p className="pricingEyebrow">GRATIS TE PROBEREN, EENVOUDIG IN GEBRUIK, ZONDER RISICO</p>
          <h2 className="pricingTitle">Prijzen afgestemd op jouw behoeften</h2>

          <div className="pricingGrid pricingGrid--large">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`pricingCard ${p.featured ? "featured" : ""}`}
              >
                <div className="pricingHead">
                  <div className="pricingName">{p.name}</div>
                  <div className="pricingOld">{p.old}</div>

                  <div className="pricingRow">
                    <div className="pricingPrice">{p.price}</div>
                    <div className="pricingSuffix">{p.suffix}</div>
                  </div>

                  <button
                    className={`pricingBtn ${p.featured ? "primary" : ""}`}
                    type="button"
                  >
                    Start nu
                  </button>
                </div>

                <ul className="pricingList">
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
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
