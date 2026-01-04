"use client";

import { useState } from "react";
import { Linkedin } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    voornaam: "",
    achternaam: "",
    email: "",
    telefoon: "",
    bedrijf: "",
    functie: "",
    bericht: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onChange<K extends keyof typeof form>(key: K, value: string) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.voornaam.trim()) return setError("Vul je voornaam in.");
    if (!form.achternaam.trim()) return setError("Vul je achternaam in.");
    if (!form.email.trim()) return setError("Vul je e-mailadres in.");

    setSubmitting(true);

    const payload = {
      ...form,
      diensten: [],
      overigToelichting: "",
    };

    const res = await fetch("/api/intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const j = await res.json().catch(() => null);
      setError(j?.message || "Verzenden mislukt. Probeer het later opnieuw.");
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="contactSuccess">
        <p className="eyebrow">VERZONDEN</p>
        <h3 className="contactSuccessTitle">Bericht ontvangen</h3>
        <p className="lead" style={{ marginTop: 8 }}>
          Bedankt! We hebben je bericht ontvangen en nemen binnen 1 werkdag contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form className="servicesForm contactForm" onSubmit={onSubmit}>
      <div className="formGrid">
        <div className="field">
          <span>Voornaam *</span>
          <input
            value={form.voornaam}
            onChange={(e) => onChange("voornaam", e.target.value)}
            placeholder="Bijv. Hans"
          />
        </div>

        <div className="field">
          <span>Achternaam *</span>
          <input
            value={form.achternaam}
            onChange={(e) => onChange("achternaam", e.target.value)}
            placeholder="Bijv. De Jong"
          />
        </div>

        <div className="field">
          <span>Zakelijk e-mailadres *</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="naam@bedrijf.nl"
          />
        </div>

        <div className="field">
          <span>Telefoon (optioneel)</span>
          <input
            value={form.telefoon}
            onChange={(e) => onChange("telefoon", e.target.value)}
            placeholder="+31 6 12345678"
          />
        </div>

        <div className="field">
          <span>Bedrijfsnaam (optioneel)</span>
          <input
            value={form.bedrijf}
            onChange={(e) => onChange("bedrijf", e.target.value)}
            placeholder="Bedrijfsnaam"
          />
        </div>

        <div className="field">
          <span>Functie (optioneel)</span>
          <input
            value={form.functie}
            onChange={(e) => onChange("functie", e.target.value)}
            placeholder="Bijv. IT Manager"
          />
        </div>

        <div className="field fieldWide">
          <span>Waar kunnen we je bij helpen? (optioneel)</span>
          <textarea
            rows={5}
            value={form.bericht}
            onChange={(e) => onChange("bericht", e.target.value)}
            placeholder="Waar kunnen we je bij helpen?"
          />
        </div>
      </div>

      {error && (
        <p className="finePrint" style={{ marginTop: 12, opacity: 1 }}>
          ⚠️ {error}
        </p>
      )}

      {/* Actie: knop exact rechts uitlijnen op grid */}
      <div className="formActions formActionsRight">
        <button type="submit" className="btn primary" disabled={submitting}>
          {submitting ? "Verzenden…" : "Stuur bericht"}
        </button>
      </div>

      {/* Footer: toestemming links, LinkedIn rechts */}
      <div className="formFooterRow">
        <p className="finePrint" style={{ margin: 0 }}>
          Door te versturen geef je toestemming dat we contact met je opnemen over dit bericht.
        </p>

        <a
          className="formLinkedIn"
          href="https://www.linkedin.com/in/threatzero-security-4b02563a3/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="formLinkedInIcon" aria-hidden="true">
            <Linkedin size={16} />
          </span>
          Volg ons
        </a>
      </div>
    </form>
  );
}
