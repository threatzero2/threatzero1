import ScanBox from "./ScanBox";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function ScanCTA({
  title = "Gratis web check met snelle resultaten.",
  subtitle = "",
}: Props) {
  return (
    <section className="scanCtaWrap">
      <div className="container">
        <div className="scanCta scanCtaHighlight">
          
          {/* Tekst links */}
          <div className="scanCtaText">
            <h3 className="scanCtaTitle">{title}</h3>
            <p className="scanCtaSub">{subtitle}</p>
          </div>

          {/* Scan box rechts */}
          <div className="scanCtaBox">
            <ScanBox />
            <p className="finePrint">
              Door te scannen ga je akkoord met onze voorwaarden.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
