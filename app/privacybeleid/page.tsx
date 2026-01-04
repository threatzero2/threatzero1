import Link from "next/link";

export default function PrivacybeleidPage() {
  return (
    <section className="section legalPage">
      <div className="container legalContainer">
        <header className="legalHeader">
          <p className="legalKicker">Privacy policy</p>
          <h1 className="legalTitle">Privacybeleid</h1>
          <p className="legalSubtitle">
            We leggen uit welke persoonsgegevens we verwerken, waarom we dat doen en welke
            keuzes jij hebt.
          </p>
          <p className="legalMeta">Laatst bijgewerkt: 2026</p>
        </header>

        <div className="legalContent">
          <h2>GDPR & Data protection</h2>

          <h3>1. Wie zijn wij?</h3>
          <p>
            <strong>ThreatZero Security</strong> is verantwoordelijk voor de verwerking van
            persoonsgegevens zoals beschreven in dit privacybeleid.
          </p>

          <h3>2. Welke gegevens verwerken we?</h3>
          <p>We kunnen de volgende gegevens verwerken:</p>
          <ul>
            <li>naam, e-mailadres, telefoonnummer;</li>
            <li>bedrijfsnaam en functie;</li>
            <li>inhoud van berichten of intake-aanvragen;</li>
            <li>technische gegevens (bijv. IP-adres, browser, timestamps).</li>
          </ul>

          <h3>3. Waarvoor gebruiken we deze gegevens?</h3>
          <p>
            We gebruiken jouw gegevens om contact op te nemen naar aanleiding van je aanvraag,
            om onze dienstverlening uit te voeren en te verbeteren, en om te voldoen aan wettelijke
            verplichtingen. We gebruiken je gegevens niet voor ongevraagde marketing.
          </p>

          <h3>4. Delen van gegevens</h3>
          <p>
            We delen persoonsgegevens niet met derden, tenzij dit noodzakelijk is voor onze
            dienstverlening of wettelijk verplicht is.
          </p>

          <h3>5. Beveiliging</h3>
          <p>
            We nemen passende technische en organisatorische maatregelen om gegevens te beschermen
            tegen verlies, misbruik en onbevoegde toegang.
          </p>

          <h3>6. Bewaartermijnen</h3>
          <p>
            We bewaren persoonsgegevens niet langer dan nodig is voor het doel waarvoor ze zijn
            verzameld, tenzij een wettelijke bewaarplicht geldt.
          </p>

          <h3>7. Jouw rechten</h3>
          <p>
            Je kunt verzoeken om inzage, correctie of verwijdering van je gegevens. Mail ons op{" "}
            <a className="legalLink" href="mailto:contact@threatzero.nl">
              contact@threatzero.nl
            </a>
            .
          </p>

          <h3>8. Cookies</h3>
          <p>
            We gebruiken functionele en (eventueel) analytische cookies om de website te laten
            werken en te verbeteren. We plaatsen geen tracking cookies zonder toestemming.
          </p>

          <h3>9. Meer informatie</h3>
          <p>
            Zie ook onze{" "}
            <Link className="legalLink" href="/algemene-voorwaarden">
              algemene voorwaarden
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
