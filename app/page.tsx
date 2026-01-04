/* AI-LAYOUT: HOME v4 */

import Link from "next/link";
import { Cloud, ShoppingCart, Landmark, Building2 } from "lucide-react";

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
                  Door te scannen ga je akkoord met onze{" "}
                  <Link href="/algemene-voorwaarden" className="termsLink">
                    voorwaarden
                  </Link>
                  .
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
                  <span className="visualTitle">Security overview (voorbeeld)</span>
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

                  {/* verwijderd: "Duidelijke uitleg + concrete vervolgstappen" */}
                </div>
              </div>
            </div>
          </div>

          {/* doelgroep */}
          <div className="logoBarTitle">GESCHIKT VOOR O.A.</div>
          <div className="logoBar">
            <div className="logoPill">
              <span className="logoIcon" aria-hidden="true">
                <Cloud size={16} />
              </span>
              <span>SaaS</span>
            </div>

            <div className="logoPill">
              <span className="logoIcon" aria-hidden="true">
                <ShoppingCart size={16} />
              </span>
              <span>E-commerce</span>
            </div>

            <div className="logoPill">
              <span className="logoIcon" aria-hidden="true">
                <Landmark size={16} />
              </span>
              <span>Finance</span>
            </div>

            <div className="logoPill">
              <span className="logoIcon" aria-hidden="true">
                <Building2 size={16} />
              </span>
              <span>MKB</span>
            </div>
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
                <h3 className="stackTitle">Weet wat er speelt</h3>
                <p className="stackText">
                  We brengen in kaart waar risico&apos;s zitten en waarom ze relevant zijn.
                </p>
              </div>

              <div className="stackCard">
                <p className="stackKicker">Prioriteit</p>
                <h3 className="stackTitle">Duidelijke prioriteiten</h3>
                <p className="stackText">
                  U ziet wat eerst aandacht vraagt en wat kan wachten.
                </p>
              </div>

              <div className="stackCard">
                <p className="stackKicker">Actie</p>
                <h3 className="stackTitle">Praktische vervolgstappen</h3>
                <p className="stackText">
                  Concrete aanbevelingen die direct toepasbaar zijn.
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow">WAAROM WIJ</p>
              <h2 className="h2">Inzicht in uw IT-beveiliging</h2>
              <p className="lead">
                Wij brengen beveiligingsrisico&apos;s overzichtelijk in kaart en laten zien
                wat dit betekent voor uw organisatie. U krijgt een duidelijk overzicht,
                heldere prioriteiten en praktische aanbevelingen.
              </p>

              <a href="/services" className="btn primary" style={{ marginTop: 18 }}>
                Bekijk onze diensten
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
