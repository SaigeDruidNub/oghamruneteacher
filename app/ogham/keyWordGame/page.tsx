"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const oghamOrder = [
  "b",
  "l",
  "f",
  "s",
  "n",
  "h",
  "d",
  "t",
  "c",
  "q",
  "m",
  "g",
  "ng",
  "z",
  "r",
  "a",
  "o",
  "u",
  "e",
  "i",
];

const keyWords = [
  "Adventure",
  "Bright Light",
  "Unity",
  "Vision",
  "Key",
  "Heart",
  "Strength",
  "Protection",
  "Intuition",
  "Generosity",
  "Harvest",
  "Flow",
  "Invisibility",
  "Challenge",
  "Wisdom",
  "Spirit",
  "Hope",
  "Joy",
  "Listening",
  "Ancestors",
];

// Mapping for each symbol: letter and tree name
const oghamDetails = [
  { letter: "B", tree: "Birch" },
  { letter: "L", tree: "Rowan" },
  { letter: "F", tree: "Alder" },
  { letter: "S", tree: "Willow" },
  { letter: "N", tree: "Ash" },
  { letter: "H", tree: "Hawthorn" },
  { letter: "D", tree: "Oak" },
  { letter: "T", tree: "Holly" },
  { letter: "C", tree: "Hazel" },
  { letter: "Q", tree: "Apple" },
  { letter: "M", tree: "Bramble" },
  { letter: "G", tree: "Ivy" },
  { letter: "NG", tree: "Fern" },
  { letter: "Z", tree: "Blackthorn" },
  { letter: "R", tree: "Elder" },
  { letter: "A", tree: "Pine" },
  { letter: "O", tree: "Gorse" },
  { letter: "U", tree: "Heather" },
  { letter: "E", tree: "Aspen" },
  { letter: "I", tree: "Yew" },
];

function getOptions(correctIdx: number): string[] {
  // Always include the correct answer, then pick 3 random others
  const options = [keyWords[correctIdx]];
  const indices = Array.from({ length: keyWords.length }, (_, i) => i).filter(
    (i) => i !== correctIdx
  );
  while (options.length < 4) {
    const randIdx = indices.splice(
      Math.floor(Math.random() * indices.length),
      1
    )[0];
    options.push(keyWords[randIdx]);
  }
  // Shuffle
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

export default function OghamKeyWordGame() {
  const [remaining, setRemaining] = useState([
    ...Array(oghamOrder.length).keys(),
  ]);
  const [currentIdx, setCurrentIdx] = useState(
    remaining[Math.floor(Math.random() * remaining.length)]
  );
  const [options, setOptions] = useState(getOptions(currentIdx));
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  function nextSymbol() {
    const newRemaining = remaining.filter((i) => i !== currentIdx);
    if (newRemaining.length === 0) {
      setCompleted(true);
      return;
    }
    const next = newRemaining[Math.floor(Math.random() * newRemaining.length)];
    setRemaining(newRemaining);
    setCurrentIdx(next);
    setOptions(getOptions(next));
    setSelected(null);
    setResult(null);
  }

  function handleSelect(option: string) {
    setSelected(option);
    if (option === keyWords[currentIdx]) {
      setResult("Correct!");
      setScore((s) => s + 1);
    } else {
      setResult(`The correct answer is: ${keyWords[currentIdx]}`);
    }
  }

  function restartGame() {
    setRemaining([...Array(oghamOrder.length).keys()]);
    const next = Math.floor(Math.random() * oghamOrder.length);
    setCurrentIdx(next);
    setOptions(getOptions(next));
    setSelected(null);
    setResult(null);
    setScore(0);
    setCompleted(false);
  }

  const symbol = oghamOrder[currentIdx];
  const details = oghamDetails[currentIdx];

  return (
    <div
      style={{
        background: "var(--card)",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
        padding: "2rem",
        maxWidth: "28rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem auto",
      }}
    >
      <Link href="/ogham" passHref legacyBehavior>
        <a
          style={{
            alignSelf: "flex-start",
            marginBottom: "0.5rem",
            color: "var(--primary)",
            fontWeight: 600,
            textDecoration: "underline",
            fontSize: "1rem",
          }}
        >
          &larr; Back to Ogham Main Page
        </a>
      </Link>
      <h2
        style={{
          color: "var(--primary)",
          fontWeight: 700,
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        Ogham Key Word Game
      </h2>
      <div
        style={{
          fontWeight: 600,
          fontSize: "1.1rem",
          marginBottom: "1rem",
          color: "var(--primary)",
        }}
      >
        Score: {score} / {oghamOrder.length}
      </div>
      {!completed ? (
        <>
          <Image
            src={`/${symbol}.png`}
            alt={symbol}
            width={96}
            height={96}
            style={{
              marginBottom: "1.5rem",
              borderRadius: "0.5rem",
              background: "var(--card)",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
            }}
          >
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                disabled={!!selected}
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "0.75rem",
                  border:
                    selected === option
                      ? "2px solid var(--primary)"
                      : "2px solid var(--border)",
                  background:
                    selected === option
                      ? "var(--primary)"
                      : "var(--background)",
                  color: selected === option ? "#fff" : "var(--foreground)",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  cursor: selected ? "default" : "pointer",
                  transition: "all 0.2s",
                }}
              >
                {option}
              </button>
            ))}
          </div>
          {result && (
            <div
              style={{
                marginTop: "1.5rem",
                fontWeight: 600,
                fontSize: "1.2rem",
                color:
                  result === "Correct!" ? "var(--primary)" : "var(--danger)",
              }}
            >
              {result}
            </div>
          )}
          {selected && (
            <button
              onClick={nextSymbol}
              style={{
                marginTop: "1.5rem",
                padding: "0.5rem 1.25rem",
                borderRadius: "0.75rem",
                border: "none",
                background: "var(--primary)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          )}
        </>
      ) : (
        <>
          <div
            style={{
              margin: "2rem 0",
              fontWeight: 700,
              fontSize: "1.3rem",
              color: "var(--primary)",
              textAlign: "center",
            }}
          >
            Game complete!
            <br />
            Your score: {score} / {oghamOrder.length}
          </div>
          <button
            onClick={restartGame}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              border: "none",
              background: "var(--primary)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            Restart
          </button>
        </>
      )}
    </div>
  );
}
