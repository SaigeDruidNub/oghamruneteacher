
import Image from "next/image";
import Link from "next/link";

const runes = [
  { letter: "F", name: "Fehu", keyword: "Wealth" },
  { letter: "U", name: "Uruz", keyword: "Strength" },
  { letter: "TH", name: "Thurisaz", keyword: "Gateway" },
  { letter: "A", name: "Ansuz", keyword: "Signals" },
  { letter: "R", name: "Raido", keyword: "Journey" },
  { letter: "K", name: "Kaunan", keyword: "Fire" },
  { letter: "G", name: "Gebo", keyword: "Gift" },
  { letter: "W", name: "Wunjo", keyword: "Joy" },
  { letter: "H", name: "Hagaiaz", keyword: "Disruption" },
  { letter: "N", name: "Naughiz", keyword: "Constraint" },
  { letter: "I", name: "Isaz", keyword: "Ice" },
  { letter: "J", name: "Jera", keyword: "Harvest" },
  { letter: "AE", name: "Eihwaz", keyword: "Defense" },
  { letter: "P", name: "Perthro", keyword: "Mystery" },
  { letter: "Z", name: "Algiz", keyword: "Protection" },
  { letter: "S", name: "Sowilo", keyword: "Sun" },
  { letter: "T", name: "Tiwaz", keyword: "Warrior" },
  { letter: "B", name: "Berkanan", keyword: "Growth" },
  { letter: "E", name: "Ehwaz", keyword: "Movement" },
  { letter: "M", name: "Mannaz", keyword: "Self" },
  { letter: "L", name: "Laguz", keyword: "Flow" },
  { letter: "NG", name: "Ingwaz", keyword: "Fertility" },
  { letter: "O", name: "Othalan", keyword: "Inheritance" },
  { letter: "D", name: "Dagaz", keyword: "Breakthrough" }
];

export default function RunesLanding() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <style>{`
        @media (max-width: 700px) {
          .rune-cards-root {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.75rem !important;
            max-width: 100vw !important;
            margin-top: 1.5rem !important;
          }
          .rune-symbol-card {
            min-width: 0 !important;
            width: 90vw !important;
            max-width: 350px !important;
            margin: 0 auto !important;
            padding: 0.5rem 0.75rem !important;
          }
        }
      `}</style>
      <div
        style={{
          background: "var(--card)",
          color: "var(--card-foreground)",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          padding: "2rem",
          maxWidth: "32rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link href="/" passHref legacyBehavior>
          <a style={{ alignSelf: "flex-start", marginBottom: "1rem", color: "var(--primary)", textDecoration: "underline", fontWeight: 500, fontSize: "1rem" }}>&larr; Back to Home</a>
        </Link>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: "0.5rem",
            color: "var(--primary)",
            textAlign: "center",
          }}
        >
          Elder Futhark Runes
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            marginBottom: "1.5rem",
            textAlign: "center",
            color: "var(--foreground)",
            opacity: 0.85,
          }}
        >
          Explore all Elder Futhark runes below:
        </p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
          <Link href="/runes/nameGame" passHref legacyBehavior>
            <a
              style={{
                padding: "0.75rem 1.5rem",
                background: "var(--primary)",
                color: "#fff",
                borderRadius: "0.75rem",
                fontWeight: 600,
                fontSize: "1.1rem",
                textDecoration: "none",
                boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.10)",
                transition: "background 0.2s, box-shadow 0.2s",
                display: "inline-block"
              }}
            >
              Name Game
            </a>
          </Link>
          <Link href="/runes/letterGame" passHref legacyBehavior>
            <a
              style={{
                padding: "0.75rem 1.5rem",
                background: "var(--primary)",
                color: "#fff",
                borderRadius: "0.75rem",
                fontWeight: 600,
                fontSize: "1.1rem",
                textDecoration: "none",
                boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.10)",
                transition: "background 0.2s, box-shadow 0.2s",
                display: "inline-block"
              }}
            >
              Letter Game
            </a>
          </Link>
          <Link href="/runes/keywordGame" passHref legacyBehavior>
            <a
              style={{
                padding: "0.75rem 1.5rem",
                background: "var(--primary)",
                color: "#fff",
                borderRadius: "0.75rem",
                fontWeight: 600,
                fontSize: "1.1rem",
                textDecoration: "none",
                boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.10)",
                transition: "background 0.2s, box-shadow 0.2s",
                display: "inline-block"
              }}
            >
              Keyword Game
            </a>
          </Link>
        </div>
      </div>
      <div className="rune-cards-root"
        style={{
          marginTop: "2.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
          justifyContent: "center",
          maxWidth: "900px",
        }}
      >
        {runes.map((rune) => (
            <Link
              key={rune.letter}
              href={`/runes/${encodeURIComponent(rune.letter)}`}
              passHref
              legacyBehavior
            >
              <a
                className="rune-symbol-card"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    background: "var(--card)",
                    border: "2px solid var(--primary)",
                    borderRadius: "1rem",
                    boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.10)",
                    padding: "1rem 1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    minWidth: "16rem",
                    transition: "box-shadow 0.2s, border 0.2s",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", justifyContent: "flex-start" }}>
                    <span style={{ minWidth: "2rem", color: "var(--primary)", fontWeight: 600, fontSize: "1.1rem", textAlign: "right" }}>{rune.letter}</span>
                    <Image src={`/${rune.letter} - ${rune.name}.png`} alt={rune.letter} width={64} height={64} style={{ borderRadius: "0.5rem", boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)", background: "var(--card)" }} />
                    <span style={{ minWidth: "5rem", color: "var(--primary)", fontWeight: 500, fontSize: "1rem", textAlign: "left" }}>{rune.name}</span>
                  </div>
                  <span style={{ color: "var(--foreground)", fontWeight: 500, fontSize: "0.95rem", marginTop: "0.25rem", textAlign: "center", display: "block", width: "100%" }}>{rune.keyword}</span>
                </div>
              </a>
            </Link>
        ))}
      </div>
    </main>
  );
}
