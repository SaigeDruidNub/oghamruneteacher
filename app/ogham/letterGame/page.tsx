"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Ogham letters, images, tree names, and key words
const oghamData = [
  { letter: "B", img: "/b.png", tree: "Birch", keyWord: "Adventure" },
  { letter: "L", img: "/l.png", tree: "Rowan", keyWord: "Bright Light" },
  { letter: "F", img: "/f.png", tree: "Alder", keyWord: "Unity" },
  { letter: "S", img: "/s.png", tree: "Willow", keyWord: "Vision" },
  { letter: "N", img: "/n.png", tree: "Ash", keyWord: "Key" },
  { letter: "H", img: "/h.png", tree: "Hawthorn", keyWord: "Heart" },
  { letter: "D", img: "/d.png", tree: "Oak", keyWord: "Strength" },
  { letter: "T", img: "/t.png", tree: "Holly", keyWord: "Protection" },
  { letter: "C", img: "/c.png", tree: "Hazel", keyWord: "Intuition" },
  { letter: "Q", img: "/q.png", tree: "Apple", keyWord: "Generosity" },
  { letter: "M", img: "/m.png", tree: "Bramble", keyWord: "Harvest" },
  { letter: "G", img: "/g.png", tree: "Ivy", keyWord: "Flow" },
  { letter: "NG", img: "/ng.png", tree: "Fern", keyWord: "Invisibility" },
  { letter: "Z", img: "/z.png", tree: "Blackthorn", keyWord: "Challenge" },
  { letter: "R", img: "/r.png", tree: "Elder", keyWord: "Wisdom" },
  { letter: "A", img: "/a.png", tree: "Pine", keyWord: "Spirit" },
  { letter: "O", img: "/o.png", tree: "Gorse", keyWord: "Hope" },
  { letter: "U", img: "/u.png", tree: "Heather", keyWord: "Joy" },
  { letter: "E", img: "/e.png", tree: "Aspen", keyWord: "Listening" },
  { letter: "I", img: "/i.png", tree: "Yew", keyWord: "Ancestors" },
];

function getOptions(correctIdx: number): string[] {
  // Always include the correct answer, then pick 3 random others
  const options = [oghamData[correctIdx].letter];
  const indices = Array.from({ length: oghamData.length }, (_, i) => i).filter(
    (i) => i !== correctIdx
  );
  while (options.length < 4) {
    const randIdx = indices.splice(
      Math.floor(Math.random() * indices.length),
      1
    )[0];
    options.push(oghamData[randIdx].letter);
  }
  // Shuffle
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

export default function OghamLetterGame() {
  const [remaining, setRemaining] = useState([...oghamData]);
  const [current, setCurrent] = useState(
    remaining[Math.floor(Math.random() * remaining.length)]
  );
  const [options, setOptions] = useState(
    getOptions(oghamData.findIndex((o) => o.letter === current.letter))
  );
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
    setOptions(
      getOptions(oghamData.findIndex((o) => o.letter === next.letter))
    );
    setSelected(null);
    setResult(null);
  }

  function handleSelect(option: string) {
    setSelected(option);
    if (option === current.letter) {
      setResult("Correct!");
      setScore((s) => s + 1);
    } else {
      setResult(`The correct answer is: ${current.letter}`);
    }
  }

  function restartGame() {
    setRemaining([...oghamData]);
    const next = oghamData[Math.floor(Math.random() * oghamData.length)];
    setCurrent(next);
    setOptions(
      getOptions(oghamData.findIndex((o) => o.letter === next.letter))
    );
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
        Ogham Letter Game
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
            src={current.img}
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
