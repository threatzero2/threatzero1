"use client";

import { useMemo, useState } from "react";

type ServiceKey =
  | "pentest"
  | "risk"
  | "redteam"
  | "osint"
  | "dataremoval"
  | "monitoring";

const ALL_SERVICES: { key: ServiceKey; label: string; hint: string }[] = [
  {
    key: "pentest",
    label: "Pentest (web / API)",
    hint: "Vind kwetsbaarheden vóór aanvallers dat doen.",
  },
  {
    key: "risk",
    label: "Risico-assessment",
    hint: "Overzicht van risico’s + prioriteiten (wat eerst).",
  },
  {
    key: "redteam",
    label: "Red teaming",
    hint: "Realistische aanvalssimulatie met duidelijke impact.",
  },
  {
    key: "osint",
    label: "OSINT onderzoek",
    hint: "Open bronnen: datalekken, blootgestelde accounts, exposure.",
  },
  {
    key: "dataremoval",
    label: "Data removal",
    hint: "Verwijder gevoelige of ongewenste vermeldingen (waar mogelijk).",
  },
  {
    key: "monitoring",
    label: "Monitoring & rapportage",
    hint: "Doorlopende signalen en maandelijkse inzichten.",
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
  });

  const [form, setForm] = useState({
    voornaam: "",
    achternaam: "",
    email: "",
    telefoon: "",
    bedrijf: "",
    bericht: "",
  });

  const selectedCount = useMemo(
    () => Object.values(selected).filter(Boolean).length,
    [selected]
  );

  function toggleService(key: ServiceKey) {
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function onChange<K extends keyof typeof form>(key: K, value: string) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Alleen opmaak demo — later koppel je dit aan backend/CRM
    console.log("Diensten aanvraag (demo):", {
      ...form,
      diensten: Object.entries(selected)
        .filter(([, v]) => v)
        .map(([k]) => k),
    });

    alert("Verzonden (demo). Later koppel je dit aan je backend/CRM.");
  }

  return (
    <section className="section formSection">
      <div className="container">
        <p className="eyebrow">DIENSTEN</p>
        <h2 className="h2">Vraag een intake aan</h2>
        <p className="lead">
          Kies de diensten waar je interesse in hebt en laat je gegevens achter.
          Dit is nu alleen de opmaak — later koppel je dit aan je backend of CRM.
        </p>

        <div className="servicesFormCard">
          <form className="servicesForm" onSubmit={onSubmit}>
            <div className="formGrid">
              <label className="field">
                <span>Voornaam</span>
                <input
                  value={form.voornaam}
                  onChange={(e) => onChange("voornaam", e.target.value)}
                  placeholder="Eren"
                  autoComplete="given-name"
                />
              </label>

              <label className="field">
                <span>Achternaam</span>
                <input
                  value={form.achternaam}
                  onChange={(e) => onChange("achternaam", e.target.value)}
                  placeholder="Korkmaz"
                  autoComplete="family-name"
                />
              </label>

              <label className="field">
                <span>E-mail</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => onChange("email", e.target.value)}
                  placeholder="jij@bedrijf.nl"
                  autoComplete="email"
                />
              </label>

              <label className="field">
                <span>Telefoon</span>
                <input
                  value={form.telefoon}
                  onChange={(e) => onChange("telefoon", e.target.value)}
                  placeholder="+31 6 …"
                  autoComplete="tel"
                />
              </label>

              <label className="field">
                <span>Bedrijf</span>
                <input
                  value={form.bedrijf}
                  onChange={(e) => onChange("bedrijf", e.target.value)}
                  placeholder="ThreatZero Security"
                  autoComplete="organization"
                />
              </label>

              <label className="field fieldWide">
                <span>Waar kunnen we mee helpen?</span>
                <textarea
                  rows={5}
                  value={form.bericht}
                  onChange={(e) => onChange("bericht", e.target.value)}
                  placeholder="Bijv. we willen een pentest op onze website/API, graag een voorstel met scope en planning…"
                />
              </label>

              <div className="fieldChecks servicesPicker">
                <div className="servicesPickerTop">
                  <p className="servicesPickerTitle">Selecteer je diensten</p>
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
                        <span className="serviceCheckHint">{s.hint}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="formActions">
              <button type="submit" className="btn primary">
                Versturen
              </button>
            </div>

            <p className="finePrint" style={{ marginTop: 12 }}>
              Door te versturen ga je akkoord dat we contact met je opnemen.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
