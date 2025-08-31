
'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


// Ogham symbols, letters, tree names, and key words
const oghamData = [
	{ symbol: "a.png", letter: "A", tree: "Pine", keyWord: "Spirit" },
	{ symbol: "b.png", letter: "B", tree: "Birch", keyWord: "Adventure" },
	{ symbol: "c.png", letter: "C", tree: "Hazel", keyWord: "Intuition" },
	{ symbol: "d.png", letter: "D", tree: "Oak", keyWord: "Strength" },
	{ symbol: "e.png", letter: "E", tree: "Rowan", keyWord: "Listening" },
	{ symbol: "f.png", letter: "F", tree: "Alder", keyWord: "Unity" },
	{ symbol: "g.png", letter: "G", tree: "Willow", keyWord: "Flow" },
	{ symbol: "h.png", letter: "H", tree: "Hawthorn", keyWord: "Heart" },
	{ symbol: "i.png", letter: "I", tree: "Yew", keyWord: "Ancestors" },
	{ symbol: "l.png", letter: "L", tree: "Rowan", keyWord: "Bright Light" },
	{ symbol: "m.png", letter: "M", tree: "Bramble", keyWord: "Harvest" },
	{ symbol: "n.png", letter: "N", tree: "Ash", keyWord: "Key" },
	{ symbol: "o.png", letter: "O", tree: "Gorse", keyWord: "Hope" },
	{ symbol: "q.png", letter: "Q", tree: "Apple", keyWord: "Generosity" },
	{ symbol: "r.png", letter: "R", tree: "Elder", keyWord: "Wisdom" },
	{ symbol: "s.png", letter: "S", tree: "Blackthorn", keyWord: "Vision" },
	{ symbol: "t.png", letter: "T", tree: "Holly", keyWord: "Protection" },
	{ symbol: "u.png", letter: "U", tree: "Heather", keyWord: "Joy" },
	{ symbol: "z.png", letter: "Z", tree: "Ivy", keyWord: "Challenge" },
];


function getOptions(correctIdx: number): string[] {
	// Always include the correct answer, then pick 3 random others
	const correctTree = oghamData[correctIdx].tree;
	const trees = oghamData.map((item) => item.tree).filter((tree) => tree !== correctTree);
	const options: string[] = [correctTree];
	while (options.length < 4) {
		const idx = Math.floor(Math.random() * trees.length);
		const tree = trees[idx];
		if (!options.includes(tree)) {
			options.push(tree);
		}
	}
	// Shuffle
	for (let i = options.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[options[i], options[j]] = [options[j], options[i]];
	}
	return options;
}


const TreeGame: React.FC = () => {
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

	function handleSelect(tree: string) {
		setSelected(tree);
		setShowAnswer(true);
		if (tree === symbol.tree) {
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
				<h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "var(--primary)", textAlign: "center" }}>Ogham Tree Game</h1>
				<p style={{ fontSize: "1.125rem", marginBottom: "1.5rem", textAlign: "center", color: "var(--foreground)", opacity: 0.85 }}>
					Which tree matches this Ogham symbol?
				</p>
				<div style={{ marginBottom: "1rem", fontWeight: 600, color: "var(--primary)", fontSize: "1.1rem" }}>
					Score: {score} / {current}
				</div>
				<div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem", gap: "1.25rem" }}>
					<Image src={`/${symbol.symbol}`} alt={symbol.letter} width={96} height={96} style={{ borderRadius: "0.5rem", boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)", background: "var(--card)", opacity: 0.95 }} />
					{showAnswer && (
						<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
							<span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "1.5rem", marginBottom: "0.25rem" }}>{symbol.letter}</span>
							<span style={{ color: "var(--foreground)", fontWeight: 500, fontSize: "1.1rem" }}>{symbol.tree}</span>
							<span style={{ color: "var(--primary)", fontWeight: 500, fontSize: "1.05rem", marginTop: "0.25rem" }}>{symbol.keyWord}</span>
						</div>
					)}
				</div>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
					{options.map((tree) => (
						<button
							key={tree}
							onClick={() => !showAnswer && handleSelect(tree)}
							style={{
								padding: "0.75rem 1.5rem",
								borderRadius: "1rem",
								fontWeight: 700,
								fontSize: "1rem",
								background: showAnswer
									? tree === symbol.tree
										? "var(--primary)"
										: tree === selected
											? "#e57373"
											: "var(--card)"
									: "var(--card)",
								color: showAnswer
									? tree === symbol.tree
										? "var(--card)"
										: tree === selected
											? "var(--card)"
											: "var(--primary)"
									: "var(--primary)",
								border: "none",
								boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)",
								cursor: showAnswer ? "default" : "pointer",
								opacity: showAnswer && tree !== symbol.tree && tree !== selected ? 0.7 : 1,
								transition: "background 0.2s, color 0.2s",
							}}
							disabled={showAnswer}
						>
							{tree}
						</button>
					))}
				</div>
				{showAnswer && (
					<div style={{ marginTop: "1.5rem", textAlign: "center" }}>
						{selected === symbol.tree ? (
							<span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "1.1rem" }}>Correct!</span>
						) : (
							<span style={{ color: "#e57373", fontWeight: 700, fontSize: "1.1rem" }}>
								Incorrect. The correct answer is <span style={{ color: "var(--primary)" }}>{symbol.tree}</span>.
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
};


const Page = () => <TreeGame />;
export default Page;
