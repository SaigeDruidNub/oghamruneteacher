"use client";
import { useState } from "react";
import Image from "next/image";

const runes = [
  { letter: "F", name: "Fehu" },
  { letter: "U", name: "Uruz" },
  { letter: "TH", name: "Thurisaz" },
  { letter: "A", name: "Ansuz" },
  { letter: "R", name: "Raido" },
  { letter: "K", name: "Kaunan" },
  { letter: "G", name: "Gebo" },
  { letter: "W", name: "Wunjo" },
  { letter: "H", name: "Hagaiaz" },
  { letter: "N", name: "Naughiz" },
  { letter: "I", name: "Isaz" },
  { letter: "J", name: "Jera" },
  { letter: "AE", name: "Eihwaz" },
  { letter: "P", name: "Perthro" },
  { letter: "Z", name: "Algiz" },
  { letter: "S", name: "Sowilo" },
  { letter: "T", name: "Tiwaz" },
  { letter: "B", name: "Berkanan" },
  { letter: "E", name: "Ehwaz" },
  { letter: "M", name: "Mannaz" },
  { letter: "L", name: "Laguz" },
  { letter: "NG", name: "Ingwaz" },
  { letter: "O", name: "Othalan" },
  { letter: "D", name: "Dagaz" },
];

function getRandomRune(runeList: typeof runes) {
  return runeList[Math.floor(Math.random() * runeList.length)];
}

function getOptions(correctLetter: string): string[] {
  const letters = runes.map((r) => r.letter);
  const options = [correctLetter];
  while (options.length < 4) {
    const candidate = letters[Math.floor(Math.random() * letters.length)];
    if (!options.includes(candidate)) options.push(candidate);
  }
  return options.sort(() => Math.random() - 0.5);
}

export default function RuneLetterGame() {
  const [remainingRunes, setRemainingRunes] = useState([...runes]);
  const [currentRune, setCurrentRune] = useState(getRandomRune(remainingRunes));
  const [options, setOptions] = useState(getOptions(currentRune.letter));
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  function nextRune() {
    if (remainingRunes.length === 1) {
      setCompleted(true);
      return;
    }
    const newRunes = remainingRunes.filter((r) => r !== currentRune);
    setRemainingRunes(newRunes);
    const rune = getRandomRune(newRunes);
    setCurrentRune(rune);
    setOptions(getOptions(rune.letter));
    setSelected(null);
    setResult(null);
  }

  function handleSelect(option: string) {
    setSelected(option);
    if (option === currentRune.letter) {
      setResult("Correct!");
      setScore((s) => s + 1);
    } else {
      setResult(`The correct answer is: ${currentRune.letter}`);
    }
  }

  function restartGame() {
    setRemainingRunes([...runes]);
    const rune = getRandomRune(runes);
    setCurrentRune(rune);
    setOptions(getOptions(rune.letter));
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
      <h2
        style={{
          color: "var(--primary)",
          fontWeight: 700,
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        Rune Letter Game
      </h2>
      <div
        style={{
          fontWeight: 600,
          fontSize: "1.1rem",
          marginBottom: "1rem",
          color: "var(--primary)",
        }}
      >
        Score: {score} / {runes.length}
      </div>
      {!completed ? (
        <>
          <Image
            src={`/${currentRune.letter} - ${currentRune.name}.png`}
            alt={currentRune.name}
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
              onClick={nextRune}
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
            Your score: {score} / {runes.length}
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
