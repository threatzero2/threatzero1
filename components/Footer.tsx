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
              Wij helpen organisaties risico’s tijdig herkennen en grip houden op hun security.
              Met helder inzicht en slimme automatisering voorkom je problemen voordat ze ontstaan.
            </p>

            <p className="footerSmall">
              Door scans uit te voeren ga je akkoord met onze{" "}
              <Link href="/algemene-voorwaarden" className="termsLinkDark">
                algemene voorwaarden
              </Link>
              .
            </p>

            <p className="footerSmall footerCopy">
              © {new Date().getFullYear()} ThreatZero. Alle rechten voorbehouden.
            </p>
          </div>

          {/* Handige links */}
          <div className="footerCol">
            <h4 className="footerColTitle">Handige links</h4>
            <nav className="footerLinks">
              <Link href="/">Home</Link>
              <Link href="/company">Bedrijf</Link>
              <Link href="/services">Diensten</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          {/* Voorwaarden */}
          <div className="footerCol">
            <h4 className="footerColTitle">Voorwaarden</h4>
            <div className="footerLinks">
              <Link href="/privacybeleid">Privacybeleid</Link>
              <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="footerCol">
            <h4 className="footerColTitle">Contact</h4>
            <a className="footerEmail" href="mailto:contact@threatzero.nl">
              contact@threatzero.nl
            </a>

            {/* Placeholder blijft ok zolang reCAPTCHA nog niet live is */}
            <div className="recapPlaceholder">reCAPTCHA</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
