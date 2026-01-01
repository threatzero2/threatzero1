export default function LoginPage() {
  return (
    <section className="loginWrap">
      <div className="container">
        <div className="loginGrid">
          {/* LINKS: info card */}
          <div className="loginLeft">
            <div className="loginInfoCard">
              <div className="loginInfoIcon" aria-hidden="true">
                🛡️
              </div>

              <h3 className="loginInfoTitle">
                Onze focus: security & betrouwbaarheid
              </h3>

              <p className="loginInfoText">
                ThreatZero is een cybersecurityplatform dat helpt bij het vroegtijdig
                signaleren van blootgestelde data, zwakke configuraties en risico’s.
                Dit is momenteel alleen de opmaak — later koppel je hier echte scans
                en accounts aan.
              </p>

              <div className="loginDots" aria-hidden="true">
                <span className="dotActive" />
                <span />
                <span />
              </div>
            </div>
          </div>

          {/* RECHTS: login panel */}
          <div className="loginRight">
            <div className="loginPanel">
              <div className="loginBrandBadge" aria-hidden="true">
                TZ
              </div>

              <h1 className="loginTitle">Inloggen</h1>
              <p className="loginSub">
                Nog geen account?{" "}
                <a className="loginLink" href="/">
                  Start een scan
                </a>
              </p>

              <button className="googleBtn" type="button">
                <span className="googleG">G</span>
                Inloggen met Google
              </button>

              <div className="divider" role="separator" aria-label="of">
                <span />
                <p>OF</p>
                <span />
              </div>

              <form className="loginForm">
                <label className="field">
                  <span>E-mailadres</span>
                  <input type="email" placeholder="jij@bedrijf.nl" />
                </label>

                <label className="field">
                  <span>Wachtwoord</span>
                  <div className="pwRow">
                    <input type="password" placeholder="••••••••" />
                    <button
                      className="pwIcon"
                      type="button"
                      aria-label="Wachtwoord tonen"
                      title="Wachtwoord tonen"
                    >
                      {/* eye icon */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </div>
                </label>

                <button className="btn primary loginBtn" type="button">
                  Inloggen
                </button>
              </form>

              <p className="loginHelp">
                Wachtwoord vergeten?{" "}
                <a className="loginLink" href="#">
                  Klik hier
                </a>
              </p>

              <p className="finePrint" style={{ marginTop: 14 }}>
                Door in te loggen ga je akkoord met onze voorwaarden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
