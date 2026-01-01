/* AI-LAYOUT: HOME v4 */

import ScanBox from "@/components/ScanBox";
import PricingCards from "@/components/PricingCards";
import PeaceOfMind from "@/components/PeaceOfMind";
import ScanCTA from "@/components/ScanCTA";

export default function HomePage() {
  return (
    <>
      {/* ================= SOFT LAUNCH BANNER ================= */}
      <div className="softBanner">
        🚧 Soft launch: demo-omgeving — scanfunctionaliteit volgt binnenkort.
      </div>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container">
          <div className="heroGrid">
            {/* Left */}
            <div>
              <p className="eyebrow">SNELLE SECURITY CHECK</p>

              <h1 className="heroTitle">
                Krijg inzicht in risico&apos;s <br />
                <span className="heroTitleEm">binnen 30 seconden</span>
              </h1>

              {/* Scan */}
              <div className="heroScan">
                <ScanBox />
                <p className="finePrint">
                  Door te scannen ga je akkoord met onze voorwaarden.
                </p>
              </div>
            </div>

            {/* Right visual (placeholder / demo) */}
            <div className="heroVisual">
              <div className="visualCard">
                <div className="visualTop">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <span className="visualTitle">
                    Security overview (voorbeeld)
                  </span>
                </div>

                <div className="visualBody">
                  <div className="miniGrid">
                    <div className="miniTile">
                      <p className="miniLabel">Kritiek</p>
                      <p className="miniValue">3</p>
                    </div>
                    <div className="miniTile">
                      <p className="miniLabel">Waarschuwingen</p>
                      <p className="miniValue">7</p>
                    </div>
                    <div className="miniTile">
                      <p className="miniLabel">Risicoscore</p>
                      <p className="miniValue">62</p>
                    </div>
                  </div>

                  <div className="visualHint">
                    Duidelijke uitleg + concrete vervolgstappen
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* doelgroep */}
          <div className="logoBarTitle">GESCHIKT VOOR O.A.</div>
          <div className="logoBar">
            <div className="logoPill">SaaS</div>
            <div className="logoPill">E-commerce</div>
            <div className="logoPill">Finance</div>
            <div className="logoPill">MKB</div>
          </div>
        </div>
      </section>

      {/* ================= WAAROM WIJ ================= */}
      <section className="section">
        <div className="container">
          <div className="featureGrid">
            <div className="featureCards">
              <div className="stackCard">
                <p className="stackKicker">Detectie</p>
                <h3 className="stackTitle">Weet wat er mis is</h3>
                <p className="stackText">
                  Wij laten zien waar risico&apos;s zitten en waarom ze relevant zijn.
                </p>
              </div>

              <div className="stackCard">
                <p className="stackKicker">Prioriteit</p>
                <h3 className="stackTitle">Focus op wat telt</h3>
                <p className="stackText">
                  Geen ruis. Je ziet direct wat eerst moet worden aangepakt.
                </p>
              </div>

              <div className="stackCard">
                <p className="stackKicker">Actie</p>
                <h3 className="stackTitle">Concrete vervolgstappen</h3>
                <p className="stackText">
                  Heldere aanbevelingen die je team meteen kan uitvoeren.
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow">WAAROM WIJ</p>
              <h2 className="h2">
                Security zonder onnodige <br /> complexiteit
              </h2>
              <p className="lead">
                Geen technisch geneuzel, maar duidelijke inzichten voor beslissers
                én engineers.
              </p>

              <a
                href="/services"
                className="btn primary"
                style={{ marginTop: 18 }}
              >
                Bekijk onze services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <PricingCards />

      {/* ================= PEACE OF MIND ================= */}
      <PeaceOfMind />

      {/* ================= SCAN CTA ================= */}
      <ScanCTA />
    </>
  );
}
