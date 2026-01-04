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
                Wil je weten waar je staat of welke stappen voor jou het meeste opleveren?
                <br />
                We denken graag met je mee en geven je snel duidelijkheid.
              </p>

              <div className="contactFacts">
                <div className="factRow">
                  <span>Locatie</span>
                  <strong>Nederland</strong>
                </div>
                <div className="factRow">
                  <span>Beschikbaar</span>
                  <strong>Ma–Vr (09:00–17:00)</strong>
                </div>
              </div>

              {/* Alleen mail hier (LinkedIn verplaatst naar formulier) */}
              <p className="contactInline" style={{ marginTop: 12 }}>
                Liever mailen?{" "}
                <a className="contactLink" href="mailto:contact@threatzero.nl">
                  contact@threatzero.nl
                </a>
              </p>

              <div className="contactMiniGrid">
                <div className="contactMiniCard">
                  <p className="contactMiniKicker">Snelle reactie</p>
                  <p className="contactMiniTitle">Binnen 1 werkdag reactie</p>
                  <p className="contactMiniText">Vaak zelfs sneller.</p>
                </div>

                <div className="contactMiniCard">
                  <p className="contactMiniKicker">Duidelijke scope</p>
                  <p className="contactMiniTitle">Eerst duidelijkheid, dan actie</p>
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
