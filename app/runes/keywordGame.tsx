"use client";
import { useState } from "react";
import Image from "next/image";

const runes = [
  { letter: "F", name: "Fehu", keyword: "Wealth, Investment, Abundance" },
  { letter: "U", name: "Uruz", keyword: "Strength, Determination, Potential" },
  {
    letter: "TH",
    name: "Thurisaz",
    keyword: "Defense, Protection, Challenges",
  },
  { letter: "A", name: "Ansuz", keyword: "Communication, Insight, Wisdom" },
  { letter: "R", name: "Raido", keyword: "Journey, Travel, Movement" },
  {
    letter: "K",
    name: "Kaunan",
    keyword: "Vision, Enlightenment, Clear Seeing",
  },
  { letter: "G", name: "Gebo", keyword: "Gift, Exchange, Balance" },
  { letter: "W", name: "Wunjo", keyword: "Joy, Comfort, Pleasure" },
  { letter: "H", name: "Hagaiaz", keyword: "Chaos, Uncontrolled Forces" },
  { letter: "N", name: "Naughiz", keyword: "Constraint, Pain, Survival" },
  { letter: "I", name: "Isaz", keyword: "Ice, Delays, Inaction" },
  { letter: "J", name: "Jera", keyword: "Harvest, Celebration, Prosperity" },
  { letter: "AE", name: "Eihwaz", keyword: "Defense, Transformation, Renewal" },
  { letter: "P", name: "Perthro", keyword: "Mystery, Chance, Uncertainty" },
  { letter: "Z", name: "Algiz", keyword: "Protection, Defence, Guardian" },
  { letter: "S", name: "Sowilo", keyword: "Sun, Happiness, Celebration" },
  { letter: "T", name: "Tiwaz", keyword: "Warrior, Leadership, Action" },
  { letter: "B", name: "Berkanan", keyword: "Growth, Fertility, Empathy" },
  { letter: "E", name: "Ehwaz", keyword: "Progression, Teamwork, Change" },
  { letter: "M", name: "Mannaz", keyword: "Self, Development, Soul Searching" },
  { letter: "L", name: "Laguz", keyword: "Flow, Water, Dreams" },
  {
    letter: "NG",
    name: "Ingwaz",
    keyword: "Fertility, Potential, Inner Growth",
  },
  {
    letter: "O",
    name: "Othalan",
    keyword: "Inheritance, Tradition, Family Values",
  },
  { letter: "D", name: "Dagaz", keyword: "Breakthrough, Clarity, Truth" },
];

function getRandomRune(runeList: typeof runes) {
  return runeList[Math.floor(Math.random() * runeList.length)];
}

function getOptions(correctKeyword: string): string[] {
  const keywords = runes.map((r) => r.keyword);
  const options = [correctKeyword];
  while (options.length < 4) {
    const candidate = keywords[Math.floor(Math.random() * keywords.length)];
    if (!options.includes(candidate)) options.push(candidate);
  }
  return options.sort(() => Math.random() - 0.5);
}

export default function RuneKeywordGame() {
  const [remainingRunes, setRemainingRunes] = useState([...runes]);
  const [currentRune, setCurrentRune] = useState(getRandomRune(remainingRunes));
  const [options, setOptions] = useState(getOptions(currentRune.keyword));
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
    setOptions(getOptions(rune.keyword));
    setSelected(null);
    setResult(null);
  }

  function handleSelect(option: string) {
    setSelected(option);
    if (option === currentRune.keyword) {
      setResult("Correct!");
      setScore((s) => s + 1);
    } else {
      setResult(`The correct answer is: ${currentRune.keyword}`);
    }
  }

  function restartGame() {
    setRemainingRunes([...runes]);
    const rune = getRandomRune(runes);
    setCurrentRune(rune);
    setOptions(getOptions(rune.keyword));
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
        Rune Keyword Game
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
