import ScanCTA from "@/components/ScanCTA";

type Post = {
  title: string;
  date: string;
  // later kun je hier slug/url toevoegen
  image?: string; // placeholder
};

const posts: Post[] = [
  { title: "Massive breach: wat betekent dit voor je organisatie?", date: "Aug 14, 2025" },
  { title: "Data breach uitgelegd: waar begin je met mitigatie?", date: "Aug 03, 2025" },
  { title: "Ransomware: hoe herken je vroege signalen?", date: "Jul 28, 2025" },
  { title: "Is pentesten legaal? (korte uitleg)", date: "Jul 10, 2025" },
  { title: "HIPAA / compliance: wat verwacht een rapport?", date: "Jun 22, 2025" },
  { title: "De fases van een penetration test", date: "Jun 05, 2025" },
  { title: "Phishing: herkenning en preventie in 10 punten", date: "May 18, 2025" },
  { title: "Red Team vs Cybersecurity test: verschillen", date: "May 01, 2025" },
  { title: "Top 10 redenen om te pentesten", date: "Apr 14, 2025" },
  { title: "Account beveiligen: snelle checklist", date: "Mar 30, 2025" },
  { title: "Social engineering: praktische voorbeelden", date: "Mar 09, 2025" },
  { title: "Security basics: wat is ‘attack surface’?", date: "Feb 20, 2025" },
];

export default function BlogPage() {
  return (
    <>
      <section className="section blogHero">
        <div className="container blogHeroInner">
          <h1 className="pageTitle" style={{ textAlign: "center" }}>
            ThreatZero Blog
          </h1>
          <p
            className="lead"
            style={{ textAlign: "center", margin: "10px auto 0", maxWidth: "70ch" }}
          >
            Nieuws, uitleg en praktische tips rondom cybersecurity.
          </p>
        </div>
      </section>

      <section className="section blogSection">
        <div className="container blogInner">
          {/* Search (alleen opmaak) */}
          <div className="blogSearchRow">
            <div className="blogSearch">
              <span className="blogSearchIcon" aria-hidden>🔎</span>
              <input className="blogSearchInput" placeholder="Search blog posts..." />
            </div>
          </div>

          {/* Grid */}
          <div className="blogGrid">
            {posts.map((p) => (
              <article key={p.title} className="blogCard">
                <div className="blogThumb">
                  <div className="thumbOverlay">
                    <span className="thumbTag">Article</span>
                  </div>
                  <div className="thumbPlaceholder">Afbeelding</div>
                </div>

                <div className="blogCardBody">
                  <h3 className="blogTitle">{p.title}</h3>
                  <p className="blogMeta">{p.date}</p>

                  <div className="blogCardFooter">
                    {/* Link maak jij later: nu alleen “button look” */}
                    <span className="readMore">Read more →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination (alleen opmaak) */}
          <div className="blogPagination" aria-label="Pagination">
            <button className="pageBtn" type="button" aria-label="Previous">‹</button>
            <button className="pageBtn active" type="button">1</button>
            <button className="pageBtn" type="button">2</button>
            <button className="pageBtn" type="button">3</button>
            <span className="pageDots">…</span>
            <button className="pageBtn" type="button">16</button>
            <button className="pageBtn" type="button" aria-label="Next">›</button>
          </div>
        </div>
      </section>

      <ScanCTA title="Gratis web check met snelle resultaten" subtitle="" />
    </>
  );
}
