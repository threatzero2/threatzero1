import Link from "next/link";

export default function AlgemeneVoorwaardenPage() {
  return (
    <section className="section legalPage">
      <div className="container legalContainer">
        <header className="legalHeader">
          <p className="legalKicker">Terms of Use</p>
          <h1 className="legalTitle">Algemene voorwaarden</h1>
          <p className="legalSubtitle">
            Deze voorwaarden zijn van toepassing op het gebruik van onze website en op
            het afnemen van diensten van ThreatZero Security.
          </p>
          <p className="legalMeta">Laatst bijgewerkt: 2026</p>
        </header>

        <div className="legalContent">
          <h2>Website usage</h2>

          <h3>1. Algemeen</h3>
          <p>
            Deze algemene voorwaarden zijn van toepassing op alle diensten en producten van{" "}
            <strong>ThreatZero Security</strong> (“ThreatZero”, “wij”, “ons”). Door
            gebruik te maken van onze website, het aanvragen van een intake of het uitvoeren
            van een scan ga je akkoord met deze voorwaarden.
          </p>

          <h3>2. Diensten</h3>
          <p>
            ThreatZero levert cybersecuritydiensten zoals scans, risicoanalyses, pentesten,
            OSINT-onderzoek en advisering. Resultaten en rapportages zijn{" "}
            <strong>informatief en adviserend</strong> en vormen geen garantie dat een systeem
            volledig vrij is van kwetsbaarheden.
          </p>

          <h3>3. Toegestaan gebruik</h3>
          <p>
            Je mag onze website gebruiken voor informatieve doeleinden en voor het aanvragen
            van onze diensten. Je mag niet:
          </p>
          <ul>
            <li>de website verstoren, misbruiken of proberen te hacken;</li>
            <li>ongeautoriseerde toegang proberen te verkrijgen tot systemen of data;</li>
            <li>onze content herpubliceren of commercieel gebruiken zonder toestemming.</li>
          </ul>

          <h3>4. Aansprakelijkheid</h3>
          <p>
            ThreatZero doet haar best om informatie correct en actueel te houden, maar kan
            dit niet garanderen. ThreatZero is niet aansprakelijk voor indirecte schade,
            gevolgschade of schade door beslissingen gebaseerd op onze output. Aansprakelijkheid
            is in alle gevallen beperkt tot het bedrag dat voor de betreffende dienst is betaald.
          </p>

          <h3>5. Intellectueel eigendom</h3>
          <p>
            Alle teksten, rapportages, analyses en overige content blijven eigendom van ThreatZero,
            tenzij schriftelijk anders overeengekomen.
          </p>

          <h3>6. Vertrouwelijkheid</h3>
          <p>
            Informatie die je met ons deelt behandelen we vertrouwelijk en gebruiken we uitsluitend
            voor het uitvoeren van de overeengekomen dienst.
          </p>

          <h3>7. Wijzigingen</h3>
          <p>
            ThreatZero kan deze voorwaarden wijzigen. De meest actuele versie staat altijd op
            deze pagina.
          </p>

          <h3>8. Contact</h3>
          <p>
            Vragen? Mail ons op{" "}
            <a className="legalLink" href="mailto:contact@threatzero.nl">
              contact@threatzero.nl
            </a>
            . Bekijk ook ons{" "}
            <Link className="legalLink" href="/privacybeleid">
              privacybeleid
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
