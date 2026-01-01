export default function ContactForm() {
  return (
    <form className="servicesForm">
      <div className="formGrid">
        <div className="field">
          <span>Voornaam</span>
          <input type="text" placeholder="Eren" autoComplete="given-name" />
        </div>

        <div className="field">
          <span>Achternaam</span>
          <input type="text" placeholder="Korkmaz" autoComplete="family-name" />
        </div>

        <div className="field">
          <span>E-mail</span>
          <input type="email" placeholder="jij@bedrijf.nl" autoComplete="email" />
        </div>

        <div className="field">
          <span>Telefoon</span>
          <input type="tel" placeholder="+31 6 ..." autoComplete="tel" />
        </div>

        <div className="field">
          <span>Bedrijf</span>
          <input type="text" placeholder="Bedrijfsnaam" autoComplete="organization" />
        </div>

        <div className="field">
          <span>Functie</span>
          <input type="text" placeholder="Bijv. IT Manager" autoComplete="organization-title" />
        </div>

        <div className="field fieldWide">
          <span>Waar kunnen we mee helpen?</span>
          <textarea
            rows={5}
            placeholder="Schrijf je vraag of geef wat context (bijv. website, scope, deadline)..."
          />
        </div>

        <div className="field fieldWide">
          <span>Waar ben je in geïnteresseerd?</span>
          <div className="serviceChecks">
            <label className="serviceCheck">
              <input type="checkbox" /> Penetratietest
            </label>
            <label className="serviceCheck">
              <input type="checkbox" /> Risicoanalyse
            </label>
            <label className="serviceCheck">
              <input type="checkbox" /> Red Teaming
            </label>
            <label className="serviceCheck">
              <input type="checkbox" /> OSINT-onderzoek
            </label>
            <label className="serviceCheck">
              <input type="checkbox" /> Gegevensverwijdering
            </label>
          </div>
        </div>
      </div>

      <div className="formActions">
        <button type="button" className="btn primary">
          Versturen
        </button>
      </div>
    </form>
  );
}
