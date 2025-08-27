import Image from "next/image";
import { Buttons } from "./Buttons";

export default function Home() {
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
				<Image
					src="/moon-and-stars.png"
					alt="Moon and Star Logo"
					width={120}
					height={120}
					style={{ marginBottom: "1rem", filter: "drop-shadow(0 0 9px var(--primary))" }}
				/>
				<h1
					style={{
						fontSize: "2.5rem",
						fontWeight: 800,
						marginBottom: "0.5rem",
						color: "var(--primary)",
						textAlign: "center",
					}}
				>
					The Ogham and Rune Teacher
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
					Unlock the secrets of ancient alphabets!<br />
					Learn, practice, and master Ogham and Runic scripts with interactive games.
				</p>
				<Buttons />
			</div>
			<div
				style={{
					marginTop: "2.5rem",
					display: "flex",
					flexWrap: "wrap",
					gap: "1rem",
					justifyContent: "center",
				}}
			>
				{["a","b","c","d","e","f","g","h","i","l","m","n","ng","o","q","r","s","t","u","z"].map((letter) => (
					<Image
						key={letter}
						src={`/${letter}.png`}
						alt={"the ogham symbol for " + letter}
						width={48}
						height={48}
						style={{
							borderRadius: "0.5rem",
							boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)",
							background: "var(--card)",
							opacity: 0.9,
						}}
					/>
				))}
			</div>
		</main>
	);
}
