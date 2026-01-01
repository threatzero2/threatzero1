import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="section contactHero">
        <div className="container">
          <div className="contactGridTop">
            {/* Left */}
            <div>
              <p className="eyebrow">CONTACT</p>
              <h1 className="pageTitle">Neem gerust contact met ons op</h1>

              <p className="lead" style={{ marginTop: 12 }}>
                Heb je vragen, wil je een intake, of wil je weten wat ThreatZero Security voor
                jouw organisatie kan betekenen? Stuur een bericht — dit is nu nog alleen de opmaak.
              </p>

              <div className="contactFacts">
                <div className="factRow">
                  <span>E-mail</span>
                  <strong>contact@threatzero.nl</strong>
                </div>
                <div className="factRow">
                  <span>Locatie</span>
                  <strong>Nederland</strong>
                </div>
                <div className="factRow">
                  <span>Beschikbaar</span>
                  <strong>Ma–Vr (09:00–17:00)</strong>
                </div>
              </div>

              <div className="contactMiniGrid">
                <div className="contactMiniCard">
                  <p className="contactMiniKicker">Snelle reactie</p>
                  <p className="contactMiniTitle">Binnen 1 werkdag</p>
                  <p className="contactMiniText">
                    Meestal sneller, afhankelijk van de drukte.
                  </p>
                </div>
                <div className="contactMiniCard">
                  <p className="contactMiniKicker">Duidelijke scope</p>
                  <p className="contactMiniTitle">Eerst scherp, dan uitvoeren</p>
                  <p className="contactMiniText">
                    We stemmen verwachtingen af voordat we starten.
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="contactPanel">
              <p className="eyebrow">STUUR EEN BERICHT</p>
              <h2 className="contactPanelTitle">Contactformulier</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
