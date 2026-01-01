import Link from "next/link";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="footerInner">
          {/* Brand */}
          <div className="footerBrand">
            <h3 className="footerLogo">ThreatZero</h3>

            <p className="footerText">
              Wij helpen je snel blootgestelde gegevens, zwakke configuraties en
              andere signalen te herkennen die het cyberrisico verhogen — zodat
              je problemen kunt oplossen voordat ze incidenten worden.
            </p>

            <p className="footerSmall">
              Door scans uit te voeren ga je akkoord met onze{" "}
              <span className="footerMutedLink">Algemene voorwaarden</span>
            </p>

            <p className="footerSmall footerCopy">
              © {new Date().getFullYear()} ThreatZero. Alle rechten voorbehouden.
            </p>
          </div>

          {/* Useful links */}
          <div className="footerCol">
            <h4 className="footerColTitle">Handige links</h4>
            <nav className="footerLinks">
              <Link href="/">Home</Link>
              <Link href="/company">Bedrijf</Link>
              <Link href="/services">Diensten</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
              <span className="disabled">Verwijder mijn website</span>
            </nav>
          </div>

          {/* Terms */}
          <div className="footerCol">
            <h4 className="footerColTitle">Voorwaarden</h4>
            <div className="footerLinks">
              <span className="disabled">Privacybeleid</span>
              <span className="disabled">Algemene voorwaarden</span>
            </div>
          </div>

          {/* Contact */}
          <div className="footerCol">
            <h4 className="footerColTitle">Contact</h4>
            <a
              className="footerEmail"
              href="mailto:contact@threatzero.nl"
            >
              contact@threatzero.nl
            </a>

            <div className="recapPlaceholder">reCAPTCHA</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
