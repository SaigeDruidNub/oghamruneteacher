import RuneKeywordGame from "../keywordGame";
import Link from "next/link";

export default function RuneKeywordGamePage() {
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <Link href="/runes" style={{
          padding: "0.5rem 1.25rem",
          background: "var(--primary)",
          color: "#fff",
          borderRadius: "0.75rem",
          fontWeight: 600,
          fontSize: "1rem",
          textDecoration: "none",
          boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.10)",
          transition: "background 0.2s, box-shadow 0.2s",
          display: "inline-block"
        }}>
          ← Back to Rune Page
        </Link>
      </div>
      <RuneKeywordGame />
    </>
  );
}
