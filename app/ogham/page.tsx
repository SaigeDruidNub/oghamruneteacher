import Image from "next/image";
import Link from "next/link";
import { GameButtons } from "./GameButtons";
import { OghamCards } from "./OghamCards";

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
]

export default function OghamLanding() {
	return (
		<main
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: "var(--background)",
				color: "var(--foreground)",
			}}
		>
			<div
				style={{
					background: "var(--card)",
					color: "var(--card-foreground)",
					borderRadius: "1.5rem",
					boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
					padding: "2rem",
					maxWidth: "32rem",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<a href="/" style={{ alignSelf: "flex-start", marginBottom: "1rem", color: "var(--primary)", textDecoration: "underline", fontWeight: 500, fontSize: "1rem" }}>&larr; Back to Home</a>
				<h1
					style={{
						fontSize: "2.5rem",
						fontWeight: 800,
						marginBottom: "0.5rem",
						color: "var(--primary)",
						textAlign: "center",
					}}
				>
					Ogham Alphabet
				</h1>
				<p
					style={{
						fontSize: "1.125rem",
						marginBottom: "1.5rem",
						textAlign: "center",
						color: "var(--foreground)",
						opacity: 0.85,
					}}
				>
					Explore all Ogham symbols below:
				</p>
				<GameButtons />
			</div>
			<OghamCards />
		</main>
	);
}
