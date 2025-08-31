'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const oghamOrder = [
    "b","l","f","s","n",
    "h","d","t","c","q",
    "m","g","ng","z","r",
    "a","o","u","e","i"
];

const keyWords = [
    "Adventure", "Bright Light", "Unity", "Vision", "Key",
    "Heart", "Strength", "Protection", "Intuition", "Generosity",
    "Harvest", "Flow", "Invisibility", "Challenge", "Wisdom",
    "Spirit", "Hope", "Joy", "Listening", "Ancestors"
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
    { letter: "I", tree: "Yew" }
];

function getOptions(correctIdx: number): string[] {
    // Always include the correct answer, then pick 3 random others
    const options = [keyWords[correctIdx]];
    const indices = Array.from({length: keyWords.length}, (_, i) => i).filter(i => i !== correctIdx);
    while (options.length < 4) {
        const randIdx = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
        options.push(keyWords[randIdx]);
    }
    // Shuffle
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}

export default function KeyWordGame() {
    // Create a shuffled array of indices for the session
    const [order, setOrder] = useState<number[]>(() => {
        const arr = Array.from({ length: oghamOrder.length }, (_, i) => i);
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
    const [correctCount, setCorrectCount] = useState(0);

    const correctIdx = order[current];
    const correct = keyWords[correctIdx];
    const symbol = oghamOrder[correctIdx];
    const details = oghamDetails[correctIdx];

    function handleSelect(option: string) {
        setSelected(option);
        setShowAnswer(true);
        if (option === correct) {
            setCorrectCount((prev) => prev + 1);
        }
    }

    function handleNext() {
        const next = current + 1;
        if (next < oghamOrder.length) {
            setCurrent(next);
            setShowAnswer(false);
            setSelected(null);
            setOptions(getOptions(order[next]));
        } else {
            // Reshuffle for a new session
            const arr = Array.from({ length: oghamOrder.length }, (_, i) => i);
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            setOrder(arr);
            setCurrent(0);
            setShowAnswer(false);
            setSelected(null);
            setOptions(getOptions(arr[0]));
            setCorrectCount(0);
        }
    }

    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(--background)", color: "var(--foreground)" }}>
            <div style={{ background: "var(--card)", color: "var(--card-foreground)", borderRadius: "1.5rem", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", padding: "2rem", maxWidth: "32rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Use Next.js Link for navigation */}
                <Link href="/ogham" passHref legacyBehavior>
                    <a style={{ alignSelf: "flex-start", marginBottom: "0.5rem", color: "var(--primary)", fontWeight: 600, textDecoration: "underline", fontSize: "1rem" }}>&larr; Back to Ogham Main Page</a>
                </Link>
                <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "var(--primary)", textAlign: "center" }}>Ogham Key Word Game</h1>
                <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem", textAlign: "center", color: "var(--foreground)", opacity: 0.85 }}>
                    Which key word matches this Ogham symbol?
                </p>
                <div style={{ marginBottom: "1rem", fontWeight: 600, color: "var(--primary)", fontSize: "1.1rem" }}>
                    Correct answers: {correctCount} / {current}
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem", gap: "1.25rem" }}>
                    <Image src={`/${symbol}.png`} alt={symbol} width={96} height={96} style={{ borderRadius: "0.5rem", boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)", background: "var(--card)", opacity: 0.95 }} />
                    {showAnswer && (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "1.5rem", marginBottom: "0.25rem" }}>{details.letter}</span>
                            <span style={{ color: "var(--foreground)", fontWeight: 500, fontSize: "1.1rem" }}>{details.tree}</span>
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
                                    ? option === correct
                                        ? "var(--primary)"
                                        : option === selected
                                            ? "#e57373"
                                            : "var(--card)"
                                    : "var(--card)",
                                color: showAnswer
                                    ? option === correct
                                        ? "var(--card)"
                                        : option === selected
                                            ? "var(--card)"
                                            : "var(--primary)"
                                    : "var(--primary)",
                                border: "none",
                                boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)",
                                cursor: showAnswer ? "default" : "pointer",
                                opacity: showAnswer && option !== correct && option !== selected ? 0.7 : 1,
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
                        {selected === correct ? (
                            <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "1.1rem" }}>Correct!</span>
                        ) : (
                            <span style={{ color: "#e57373", fontWeight: 700, fontSize: "1.1rem" }}>
                                Incorrect. The correct answer is <span style={{ color: "var(--primary)" }}>{correct}</span>.
                            </span>
                        )}
                        <div style={{ marginTop: "1rem", fontSize: "1.05rem", color: "var(--foreground)", background: "var(--card)", borderRadius: "1rem", padding: "1rem", display: "inline-block" }}>
                            <Image src={`/${symbol}.png`} alt={symbol} width={64} height={64} style={{ verticalAlign: "middle", marginRight: "1rem", borderRadius: "0.5rem", background: "var(--card)", boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.10)" }} />
                            <span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "1.1rem" }}>{details.letter}</span>
                            <span style={{ marginLeft: "0.75rem", color: "var(--foreground)", fontWeight: 500 }}>{details.tree}</span>
                        </div>
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
