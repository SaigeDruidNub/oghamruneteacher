"use client";
import Image from "next/image";
import Link from "next/link";

const oghamOrder = [
    "b","l","f","s","n",
    "h","d","t","c","q",
    "m","g","ng","z","r",
    "a","o","u","e","i"
];

const treeNames = [
    "Birch", "Rowan", "Alder", "Willow", "Ash",
    "Hawthorn", "Oak", "Holly", "Hazel", "Apple",
    "Bramble", "Ivy", "Fern", "Blackthorn", "Elder",
    "Pine", "Gorse", "Heather", "Aspen", "Yew"
];

const keyWords = [
    "Adventure", "Bright Light", "Unity", "Vision", "Key",
    "Heart", "Strength", "Protection", "Intuition", "Generosity",
    "Harvest", "Flow", "Invisibility", "Challenge", "Wisdom",
    "Spirit", "Hope", "Joy", "Listening", "Ancestors"
];

export function OghamCards() {
    return (
        <>
            <style>{`
                @media (max-width: 700px) {
                    .ogham-cards-root {
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        gap: 0.75rem !important;
                        max-width: 100vw !important;
                        margin-top: 1.5rem !important;
                    }
                    .ogham-symbol-card {
                        min-width: 0 !important;
                        width: 90vw !important;
                        max-width: 350px !important;
                        margin: 0 auto !important;
                        padding: 0.5rem 0.75rem !important;
                    }
                }
            `}</style>
            <div className="ogham-cards-root" style={{
                marginTop: "2.5rem",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "2rem",
                justifyContent: "center",
                maxWidth: "900px",
            }}>
                {oghamOrder.map((letter, treeIdx) => (
                    <Link
                        key={letter}
                        href={`/ogham/${letter}`}
                        className="ogham-symbol-card"
                        style={{
                            display: "block",
                            textDecoration: "none",
                            width: "100%",
                            minWidth: "16rem",
                            background: "var(--card)",
                            border: "2px solid var(--primary)",
                            borderRadius: "1rem",
                            boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.10)",
                            padding: "0.75rem 1.25rem",
                            cursor: "pointer",
                            transition: "box-shadow 0.2s, border 0.2s, transform 0.2s",
                            marginBottom: "0"
                        }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-1px)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", justifyContent: "flex-start" }}>
                            <span style={{ minWidth: "2rem", color: "var(--primary)", fontWeight: 600, fontSize: "1.1rem", textAlign: "right" }}>{letter.toUpperCase()}</span>
                            <Image
                                src={`/${letter}.png`}
                                alt={letter}
                                width={64}
                                height={64}
                                style={{
                                    borderRadius: "0.5rem",
                                    boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)",
                                    background: "var(--card)",
                                }}
                            />
                            <span style={{ minWidth: "5rem", color: "var(--primary)", fontWeight: 500, fontSize: "1rem", textAlign: "left" }}>{treeNames[treeIdx]}</span>
                        </div>
                        <span style={{ color: "var(--foreground)", fontWeight: 500, fontSize: "0.95rem", marginTop: "0.25rem", textAlign: "center", display: "block", width: "100%" }}>{keyWords[treeIdx]}</span>
                    </Link>
                ))}
            </div>
        </>
    );
}