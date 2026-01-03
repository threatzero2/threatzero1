"use client";

import { useMemo, useState } from "react";

type ServiceKey =
  | "pentest"
  | "risk"
  | "redteam"
  | "osint"
  | "dataremoval"
  | "monitoring"
  | "cloudflare"
  | "other";

const ALL_SERVICES: { key: ServiceKey; label: string; hint?: string }[] = [
  {
    key: "pentest",
    label: "Pentest (web / API)",
    hint: "Kwetsbaarheden & misconfiguraties.",
  },
  {
    key: "risk",
    label: "Risico-assessment",
    hint: "Risico’s + prioriteiten.",
  },
  {
    key: "redteam",
    label: "Red teaming",
    hint: "Realistische aanvalssimulatie.",
  },
  {
    key: "osint",
    label: "OSINT & footprint",
    hint: "Exposure & datalek-signalen.",
  },
  {
    key: "dataremoval",
    label: "Data removal",
    hint: "Verwijderverzoeken (waar mogelijk).",
  },
  {
    key: "monitoring",
    label: "Monitoring",
    hint: "Doorlopend inzicht.",
  },
  {
    key: "cloudflare",
    label: "Cloudflare",
    hint: "WAF / DNS / hardening.",
  },
  {
    key: "other",
    label: "Overig",
  },
];


export default function ServicesForm() {
  const [selected, setSelected] = useState<Record<ServiceKey, boolean>>({
    pentest: true,
    risk: false,
    redteam: false,
    osint: false,
    dataremoval: false,
    monitoring: false,
    cloudflare: false,
    other: false,
  });

  const [form, setForm] = useState({
    voornaam: "",
    achternaam: "",
    email: "",
    telefoon: "",
    bedrijf: "",
    bericht: "",
    overigToelichting: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedCount = useMemo(
    () => Object.values(selected).filter(Boolean).length,
    [selected]
  );

  const hasOther = selected.other;

  function toggleService(key: ServiceKey) {
    setSelected((prev) => {
      const next = { ...prev, [key]: !prev[key] };

      // Als Overig uit wordt gezet, leeg de toelichting
      if (key === "other" && prev.other === true) {
        setForm((p) => ({ ...p, overigToelichting: "" }));
      }

      return next;
    });
  }

  function onChange<K extends keyof typeof form>(key: K, value: string) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Basic required checks (professioneel en logisch)
    if (!form.voornaam.trim()) return setError("Vul je voornaam in.");
    if (!form.achternaam.trim()) return setError("Vul je achternaam in.");
    if (!form.email.trim()) return setError("Vul je e-mailadres in.");

    // Overig: toelichting verplicht
    if (hasOther && !form.overigToelichting.trim()) {
      return setError("Vul een korte toelichting in bij ‘Overig’.");
    }

    setSubmitting(true);

    // Payload (later te sturen naar backend/CRM)
    const payload = {
      ...form,
      diensten: Object.entries(selected)
        .filter(([, v]) => v)
        .map(([k]) => k),
    };

    // Demo submit (werkt nu al, later vervangen door fetch naar /api/...)
    await new Promise((r) => setTimeout(r, 900));
    console.log("Diensten aanvraag:", payload);

    setSubmitting(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <section className="section formSection">
        <div className="container">
          <p className="eyebrow">AANVRAAG</p>
          <h2 className="h2">We hebben je aanvraag ontvangen</h2>
          <p className="lead">
            Bedankt! We nemen binnen 1 werkdag contact met je op voor een vrijblijvende intake.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section formSection">
      <div className="container">
        <p className="eyebrow">DIENSTEN</p>
        <h2 className="h2">Vraag een security-intake aan</h2>
        <p className="lead">
          Kies één of meerdere diensten en laat je gegevens achter. We nemen binnen 1 werkdag contact met je op.
        </p>

        <div className="servicesFormCard">
          <form className="servicesForm" onSubmit={onSubmit}>
            <div className="formGrid">
              <label className="field">
                <span>Voornaam *</span>
                <input
                  value={form.voornaam}
                  onChange={(e) => onChange("voornaam", e.target.value)}
                  placeholder="Bijv. Hans"
                  autoComplete="given-name"
                />
              </label>

              <label className="field">
                <span>Achternaam *</span>
                <input
                  value={form.achternaam}
                  onChange={(e) => onChange("achternaam", e.target.value)}
                  placeholder="Bijv. De Jong"
                  autoComplete="family-name"
                />
              </label>

              <label className="field">
                <span>Zakelijk e-mailadres *</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => onChange("email", e.target.value)}
                  placeholder="naam@bedrijf.nl"
                  autoComplete="email"
                />
              </label>

              <label className="field">
                <span>Telefoon (optioneel)</span>
                <input
                  value={form.telefoon}
                  onChange={(e) => onChange("telefoon", e.target.value)}
                  placeholder="+31 6 12345678"
                  autoComplete="tel"
                />
              </label>

              <label className="field">
                <span>Bedrijfsnaam (optioneel)</span>
                <input
                  value={form.bedrijf}
                  onChange={(e) => onChange("bedrijf", e.target.value)}
                  placeholder="Bedrijfsnaam"
                  autoComplete="organization"
                />
              </label>

              <label className="field fieldWide">
                <span>Waar kunnen we mee helpen? (optioneel)</span>
                <textarea
                  rows={5}
                  value={form.bericht}
                  onChange={(e) => onChange("bericht", e.target.value)}
                  placeholder="Beschrijf kort je situatie. Bijvoorbeeld: pentest van website/API, scope, planning of specifieke zorgen."
                />
              </label>

              <div className="fieldChecks servicesPicker">
                <div className="servicesPickerTop">
                  <p className="servicesPickerTitle">Waar ben je in geïnteresseerd?</p>
                  <p className="servicesPickerMeta">
                    Gekozen: <strong>{selectedCount}</strong>
                  </p>
                </div>

                <div className="servicesPickerList">
                  {ALL_SERVICES.map((s) => (
                    <label key={s.key} className="serviceCheck">
                      <input
                        type="checkbox"
                        checked={!!selected[s.key]}
                        onChange={() => toggleService(s.key)}
                      />
                     <span className="serviceCheckText">
  <span className="serviceCheckLabel">{s.label}</span>
  {s.hint ? <span className="serviceCheckHint">{s.hint}</span> : null}
</span>

                    </label>
                  ))}
                </div>

                {hasOther && (
                  <label className="field" style={{ marginTop: 12 }}>
                    <span>Overig (toelichting) *</span>
                    <input
                      value={form.overigToelichting}
                      onChange={(e) => onChange("overigToelichting", e.target.value)}
                      placeholder="Omschrijf kort wat je nodig hebt"
                    />
                  </label>
                )}
              </div>
            </div>

            {error && (
              <p
                className="finePrint"
                style={{ marginTop: 12, opacity: 1 }}
              >
                ⚠️ {error}
              </p>
            )}

            <div className="formActions">
              <button type="submit" className="btn primary" disabled={submitting}>
                {submitting ? "Verzenden…" : "Versturen"}
              </button>
            </div>

            <p className="finePrint" style={{ marginTop: 12 }}>
              Door te versturen geef je toestemming dat we contact met je opnemen over deze aanvraag.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
