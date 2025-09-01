"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const runeDetails = {
  F: {
    name: "Fehu",
    keyword: "Wealth",
    pronunciation: "FAY-hoo",
    description: "Fehu represents wealth, abundance, and prosperity. It is the rune of new beginnings and material success.",
    image: "/F - Fehu.png"
  },
  U: {
    name: "Uruz",
    keyword: "Strength",
    pronunciation: "OO-rooz",
    description: "Uruz symbolizes strength, endurance, and health. It is associated with raw power and vitality.",
    image: "/U - Uruz.png"
  },
  TH: {
    name: "Thurisaz",
    keyword: "Gateway",
    pronunciation: "THOO-ree-saz",
    description: "Thurisaz is the rune of gateways, protection, and challenges. It represents the power to overcome obstacles.",
    image: "/TH - Thurisaz.png"
  },
  A: {
    name: "Ansuz",
    keyword: "Signals",
    pronunciation: "AHN-sooz",
    description: "Ansuz stands for communication, wisdom, and divine inspiration. It is the rune of messages and insight.",
    image: "/A - Ansuz.png"
  },
  R: {
    name: "Raido",
    keyword: "Journey",
    pronunciation: "RYE-do",
    description: "Raido is the rune of journeys, travel, and movement. It signifies progress and life paths.",
    image: "/R - Raido.png"
  },
  K: {
    name: "Kaunan",
    keyword: "Fire",
    pronunciation: "KOW-nahn",
    description: "Kaunan represents fire, transformation, and creativity. It is the rune of change and passion.",
    image: "/K - Kaunan.png"
  },
  G: {
    name: "Gebo",
    keyword: "Gift",
    pronunciation: "GAY-bo",
    description: "Gebo is the rune of gifts, generosity, and partnerships. It symbolizes exchange and balance.",
    image: "/G - Gebo.png"
  },
  W: {
    name: "Wunjo",
    keyword: "Joy",
    pronunciation: "WOON-yo",
    description: "Wunjo stands for joy, harmony, and happiness. It is the rune of fulfillment and well-being.",
    image: "/W - Wunjo.png"
  },
  H: {
    name: "Hagaiaz",
    keyword: "Disruption",
    pronunciation: "HAH-gah-eez",
    description: "Hagaiaz represents disruption, change, and transformation. It is the rune of sudden events.",
    image: "/H - Hagaiaz.png"
  },
  N: {
    name: "Naughiz",
    keyword: "Constraint",
    pronunciation: "NOW-giz",
    description: "Naughiz is the rune of constraint, necessity, and resistance. It signifies endurance and patience.",
    image: "/N - Naughiz.png"
  },
  I: {
    name: "Isaz",
    keyword: "Ice",
    pronunciation: "EE-sahz",
    description: "Isaz symbolizes ice, stillness, and clarity. It is the rune of introspection and focus.",
    image: "/I - Isaz.png"
  },
  J: {
    name: "Jera",
    keyword: "Harvest",
    pronunciation: "YEH-rah",
    description: "Jera is the rune of harvest, cycles, and reward. It represents growth and fruition.",
    image: "/J - Jera.png"
  },
  AE: {
    name: "Eihwaz",
    keyword: "Defense",
    pronunciation: "AY-wahz",
    description: "Eihwaz stands for defense, protection, and resilience. It is the rune of endurance and stability.",
    image: "/AE - Eihwaz.png"
  },
  P: {
    name: "Perthro",
    keyword: "Mystery",
    pronunciation: "PERTH-roh",
    description: "Perthro is the rune of mystery, fate, and secrets. It signifies the unknown and hidden knowledge.",
    image: "/P - Perthro.png"
  },
  Z: {
    name: "Algiz",
    keyword: "Protection",
    pronunciation: "AL-geez",
    description: "Algiz represents protection, sanctuary, and spiritual connection. It is the rune of safety and guidance.",
    image: "/Z - Algiz.png"
  },
  S: {
    name: "Sowilo",
    keyword: "Sun",
    pronunciation: "SOH-wee-lo",
    description: "Sowilo is the rune of the sun, success, and vitality. It symbolizes energy and achievement.",
    image: "/S - Sowilo.png"
  },
  T: {
    name: "Tiwaz",
    keyword: "Warrior",
    pronunciation: "TEE-wahz",
    description: "Tiwaz stands for the warrior, justice, and leadership. It is the rune of courage and honor.",
    image: "/T - Tiwaz.png"
  },
  B: {
    name: "Berkanan",
    keyword: "Growth",
    pronunciation: "BERK-ah-nahn",
    description: "Berkanan is the rune of growth, fertility, and renewal. It represents nurturing and new life.",
    image: "/B - Berkanan.png"
  },
  E: {
    name: "Ehwaz",
    keyword: "Movement",
    pronunciation: "EH-wahz",
    description: "Ehwaz symbolizes movement, progress, and trust. It is the rune of teamwork and change.",
    image: "/E - Ehwaz.png"
  },
  M: {
    name: "Mannaz",
    keyword: "Self",
    pronunciation: "MAHN-nahz",
    description: "Mannaz is the rune of the self, humanity, and awareness. It signifies identity and cooperation.",
    image: "/M - Mannaz.png"
  },
  L: {
    name: "Laguz",
    keyword: "Flow",
    pronunciation: "LAH-gooz",
    description: "Laguz represents flow, water, and intuition. It is the rune of emotions and adaptability.",
    image: "/L - Laguz.png"
  },
  NG: {
    name: "Ingwaz",
    keyword: "Fertility",
    pronunciation: "ING-wahz",
    description: "Ingwaz is the rune of fertility, potential, and inner growth. It symbolizes new beginnings and energy.",
    image: "/NG - Ingwaz.png"
  },
  O: {
    name: "Othalan",
    keyword: "Inheritance",
    pronunciation: "OTH-ah-lahn",
    description: "Othalan stands for inheritance, heritage, and family. It is the rune of legacy and tradition.",
    image: "/O - Othalan.png"
  },
  D: {
    name: "Dagaz",
    keyword: "Breakthrough",
    pronunciation: "DAH-gahz",
    description: "Dagaz is the rune of breakthrough, transformation, and awakening. It represents clarity and new perspectives.",
    image: "/D - Dagaz.png"
  }
};

export default function RuneInfoPage() {
  const params = useParams();
  const symbol = params.symbol as keyof typeof runeDetails;
  const details = runeDetails[symbol];

  // Order of runes for navigation
  const runeOrder = [
    "F", "U", "TH", "A", "R", "K", "G", "W", "H", "N", "I", "J", "AE", "P", "Z", "S", "T", "B", "E", "M", "L", "NG", "O", "D"
  ];
  const currentIdx = runeOrder.indexOf(symbol);
  const prevSymbol = currentIdx > 0 ? runeOrder[currentIdx - 1] : null;
  const nextSymbol = currentIdx < runeOrder.length - 1 ? runeOrder[currentIdx + 1] : null;

  if (!details) {
    return (
      <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1>Rune not found</h1>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(--background)", color: "var(--foreground)" }}>
      <div style={{ background: "var(--card)", color: "var(--card-foreground)", borderRadius: "1.5rem", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", padding: "2rem", maxWidth: "28rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Link href="/runes" passHref legacyBehavior>
          <a style={{ alignSelf: "flex-start", marginBottom: "1rem", color: "var(--primary)", textDecoration: "underline", fontWeight: 500, fontSize: "1rem" }}>&larr; Back to Runes Landing Page</a>
        </Link>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "var(--primary)", textAlign: "center" }}>{symbol}</h1>
        <Image src={details.image} alt={symbol} width={96} height={96} style={{ borderRadius: "0.5rem", boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)", background: "var(--card)", opacity: 0.95, marginBottom: "1.5rem" }} />
  <div style={{ fontWeight: 600, color: "var(--primary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Name: {details.name}</div>
  <div style={{ fontWeight: 500, color: "var(--foreground)", fontSize: "1rem", marginBottom: "0.5rem" }}>Keyword: {details.keyword}</div>
  <div style={{ fontWeight: 500, color: "var(--primary)", fontSize: "1rem", marginBottom: "0.5rem" }}>Pronunciation: <span style={{ fontStyle: "italic" }}>{details.pronunciation}</span></div>
        <div style={{ fontWeight: 400, color: "var(--foreground)", fontSize: "0.95rem", marginBottom: "1rem", textAlign: "center" }}>{details.description}</div>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "1.5rem" }}>
          {prevSymbol ? (
            <Link href={`/runes/${prevSymbol}`} passHref legacyBehavior>
              <a style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600, fontSize: "1.2rem" }}>&larr; {prevSymbol}</a>
            </Link>
          ) : <span />}
          {nextSymbol ? (
            <Link href={`/runes/${nextSymbol}`} passHref legacyBehavior>
              <a style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600, fontSize: "1.2rem" }}>{nextSymbol} &rarr;</a>
            </Link>
          ) : <span />}
        </div>
        {/* Add more info here as needed */}
      </div>
    </main>
  );
}
