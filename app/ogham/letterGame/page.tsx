'use client';
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";


// Ogham letters, images, tree names, and key words
const oghamData = [
  { letter: 'B', img: '/b.png', tree: 'Birch', keyWord: 'Adventure' },
  { letter: 'L', img: '/l.png', tree: 'Rowan', keyWord: 'Bright Light' },
  { letter: 'F', img: '/f.png', tree: 'Alder', keyWord: 'Unity' },
  { letter: 'S', img: '/s.png', tree: 'Willow', keyWord: 'Vision' },
  { letter: 'N', img: '/n.png', tree: 'Ash', keyWord: 'Key' },
  { letter: 'H', img: '/h.png', tree: 'Hawthorn', keyWord: 'Heart' },
  { letter: 'D', img: '/d.png', tree: 'Oak', keyWord: 'Strength' },
  { letter: 'T', img: '/t.png', tree: 'Holly', keyWord: 'Protection' },
  { letter: 'C', img: '/c.png', tree: 'Hazel', keyWord: 'Intuition' },
  { letter: 'Q', img: '/q.png', tree: 'Apple', keyWord: 'Generosity' },
  { letter: 'M', img: '/m.png', tree: 'Bramble', keyWord: 'Harvest' },
  { letter: 'G', img: '/g.png', tree: 'Ivy', keyWord: 'Flow' },
  { letter: 'NG', img: '/ng.png', tree: 'Fern', keyWord: 'Invisibility' },
  { letter: 'Z', img: '/z.png', tree: 'Blackthorn', keyWord: 'Challenge' },
  { letter: 'R', img: '/r.png', tree: 'Elder', keyWord: 'Wisdom' },
  { letter: 'A', img: '/a.png', tree: 'Pine', keyWord: 'Spirit' },
  { letter: 'O', img: '/o.png', tree: 'Gorse', keyWord: 'Hope' },
  { letter: 'U', img: '/u.png', tree: 'Heather', keyWord: 'Joy' },
  { letter: 'E', img: '/e.png', tree: 'Aspen', keyWord: 'Listening' },
  { letter: 'I', img: '/i.png', tree: 'Yew', keyWord: 'Ancestors' }
];

function getOptions(correctIdx: number): string[] {
  // Always include the correct answer, then pick 3 random others
  const options = [oghamData[correctIdx].letter];
  const indices = Array.from({length: oghamData.length}, (_, i) => i).filter(i => i !== correctIdx);
  while (options.length < 4) {
    const randIdx = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
    options.push(oghamData[randIdx].letter);
  }
  // Shuffle
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}


export default function LetterGame() {
  // Shuffle all indices for a session
  const [order, setOrder] = useState<number[]>(() => {
    const arr = Array.from({ length: oghamData.length }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  });
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [options, setOptions] = useState(() => getOptions(order[0]));
  const [score, setScore] = useState(0);

  const correctIdx = order[current];
  const symbol = oghamData[correctIdx];

  function handleSelect(option: string) {
    setSelected(option);
    setShowAnswer(true);
    if (option === symbol.letter) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    const next = current + 1;
    if (next < oghamData.length) {
      setCurrent(next);
      setShowAnswer(false);
      setSelected(null);
      setOptions(getOptions(order[next]));
    } else {
      // Reshuffle for a new session
      const arr = Array.from({ length: oghamData.length }, (_, i) => i);
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      setOrder(arr);
      setCurrent(0);
      setShowAnswer(false);
      setSelected(null);
      setOptions(getOptions(arr[0]));
      setScore(0);
    }
  }

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(--background)", color: "var(--foreground)" }}>
      <div style={{ background: "var(--card)", color: "var(--card-foreground)", borderRadius: "1.5rem", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", padding: "2rem", maxWidth: "32rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Link href="/ogham" passHref legacyBehavior>
          <a style={{ alignSelf: "flex-start", marginBottom: "0.5rem", color: "var(--primary)", fontWeight: 600, textDecoration: "underline", fontSize: "1rem" }}>&larr; Back to Ogham Main Page</a>
        </Link>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "var(--primary)", textAlign: "center" }}>Ogham Letter Game</h1>
        <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem", textAlign: "center", color: "var(--foreground)", opacity: 0.85 }}>
          Which letter matches this Ogham symbol?
        </p>
        <div style={{ marginBottom: "1rem", fontWeight: 600, color: "var(--primary)", fontSize: "1.1rem" }}>
          Score: {score} / {current}
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem", gap: "1.25rem" }}>
          <Image src={symbol.img} alt={symbol.letter} width={96} height={96} style={{ borderRadius: "0.5rem", boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)", background: "var(--card)", opacity: 0.95 }} />
          {showAnswer && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "1.5rem", marginBottom: "0.25rem" }}>{symbol.letter}</span>
              <span style={{ color: "var(--foreground)", fontWeight: 500, fontSize: "1.1rem" }}>{symbol.tree}</span>
              <span style={{ color: "var(--primary)", fontWeight: 500, fontSize: "1.05rem", marginTop: "0.25rem" }}>{symbol.keyWord}</span>
            </div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => !showAnswer && handleSelect(option)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "1rem",
                fontWeight: 700,
                fontSize: "1rem",
                background: showAnswer
                  ? option === symbol.letter
                    ? "var(--primary)"
                    : option === selected
                      ? "#e57373"
                      : "var(--card)"
                  : "var(--card)",
                color: showAnswer
                  ? option === symbol.letter
                    ? "var(--card)"
                    : option === selected
                      ? "var(--card)"
                      : "var(--primary)"
                  : "var(--primary)",
                border: "none",
                boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)",
                cursor: showAnswer ? "default" : "pointer",
                opacity: showAnswer && option !== symbol.letter && option !== selected ? 0.7 : 1,
                transition: "background 0.2s, color 0.2s",
              }}
              disabled={showAnswer}
            >
              {option}
            </button>
          ))}
        </div>
        {showAnswer && (
          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            {selected === symbol.letter ? (
              <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "1.1rem" }}>Correct!</span>
            ) : (
              <span style={{ color: "#e57373", fontWeight: 700, fontSize: "1.1rem" }}>
                Incorrect. The correct answer is <span style={{ color: "var(--primary)" }}>{symbol.letter}</span>.
              </span>
            )}
            <br />
            <button onClick={handleNext} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", borderRadius: "1rem", fontWeight: 700, background: "var(--primary)", color: "var(--card)", border: "none", boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)", cursor: "pointer" }}>
              Next Symbol
            </button>
          </div>
        )}
      </div>
    </main>
  );
}