import Link from "next/link";
import { GameButtons } from "./GameButtons";
import { OghamCards } from "./OghamCards";

// ...existing code...

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
				<Link href="/" passHref legacyBehavior>
					<a style={{ alignSelf: "flex-start", marginBottom: "1rem", color: "var(--primary)", textDecoration: "underline", fontWeight: 500, fontSize: "1rem" }}>&larr; Back to Home</a>
				</Link>
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
