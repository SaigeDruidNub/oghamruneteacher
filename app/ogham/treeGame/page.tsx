"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const oghamData = [
  { symbol: "a.png", letter: "A", tree: "Pine", keyWord: "Spirit" },
  { symbol: "b.png", letter: "B", tree: "Birch", keyWord: "Adventure" },
  { symbol: "c.png", letter: "C", tree: "Hazel", keyWord: "Intuition" },
  { symbol: "d.png", letter: "D", tree: "Oak", keyWord: "Strength" },
  { symbol: "e.png", letter: "E", tree: "Aspen", keyWord: "Listening" },
  { symbol: "f.png", letter: "F", tree: "Alder", keyWord: "Unity" },
  { symbol: "g.png", letter: "G", tree: "Ivy", keyWord: "Flow" },
  { symbol: "h.png", letter: "H", tree: "Hawthorn", keyWord: "Heart" },
  { symbol: "i.png", letter: "I", tree: "Yew", keyWord: "Ancestors" },
  { symbol: "l.png", letter: "L", tree: "Rowan", keyWord: "Bright Light" },
  { symbol: "m.png", letter: "M", tree: "Bramble", keyWord: "Harvest" },
  { symbol: "n.png", letter: "N", tree: "Ash", keyWord: "Key" },
  { symbol: "o.png", letter: "O", tree: "Gorse", keyWord: "Hope" },
  { symbol: "q.png", letter: "Q", tree: "Apple", keyWord: "Generosity" },
  { symbol: "r.png", letter: "R", tree: "Elder", keyWord: "Wisdom" },
  { symbol: "s.png", letter: "S", tree: "Willow", keyWord: "Vision" },
  { symbol: "t.png", letter: "T", tree: "Holly", keyWord: "Protection" },
  { symbol: "u.png", letter: "U", tree: "Heather", keyWord: "Joy" },
  { symbol: "z.png", letter: "Z", tree: "Blackthorn", keyWord: "Challenge" },
  { symbol: "ng.png", letter: "NG", tree: "Fern", keyWord: "Invisibility" },
];

function getOptions(correctTree: string): string[] {
  const trees = oghamData.map((r) => r.tree);
  const options = [correctTree];
  while (options.length < 4) {
    const candidate = trees[Math.floor(Math.random() * trees.length)];
    if (!options.includes(candidate)) options.push(candidate);
  }
  return options.sort(() => Math.random() - 0.5);
}

export default function OghamTreeGame() {
  const [remaining, setRemaining] = useState([...oghamData]);
  const [current, setCurrent] = useState(
    remaining[Math.floor(Math.random() * remaining.length)]
  );
  const [options, setOptions] = useState(getOptions(current.tree));
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  function nextSymbol() {
    const newRemaining = remaining.filter((r) => r !== current);
    if (newRemaining.length === 0) {
      setCompleted(true);
      return;
    }
    const next = newRemaining[Math.floor(Math.random() * newRemaining.length)];
    setRemaining(newRemaining);
    setCurrent(next);
    setOptions(getOptions(next.tree));
    setSelected(null);
    setResult(null);
  }

  function handleSelect(option: string) {
    setSelected(option);
    if (option === current.tree) {
      setResult("Correct!");
      setScore((s) => s + 1);
    } else {
      setResult(`The correct answer is: ${current.tree}`);
    }
  }

  function restartGame() {
    setRemaining([...oghamData]);
    const next = oghamData[Math.floor(Math.random() * oghamData.length)];
    setCurrent(next);
    setOptions(getOptions(next.tree));
    setSelected(null);
    setResult(null);
    setScore(0);
    setCompleted(false);
  }

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
        Ogham Tree Game
      </h2>
      <div
        style={{
          fontWeight: 600,
          fontSize: "1.1rem",
          marginBottom: "1rem",
          color: "var(--primary)",
        }}
      >
        Score: {score} / {oghamData.length}
      </div>
      {!completed ? (
        <>
          <Image
            src={`/${current.symbol}`}
            alt={current.letter}
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
            Your score: {score} / {oghamData.length}
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
