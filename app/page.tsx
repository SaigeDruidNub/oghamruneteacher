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
			<style>{`
				@media (max-width: 700px) {
					.home-flex-row {
						flex-direction: column !important;
						gap: 0 !important;
					}
					.hide-on-mobile {
						display: none !important;
					}
				}
			`}</style>
			<div
				className="home-flex-row"
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "stretch",
					gap: "2rem",
				}}
			>
				{/* Ogham images in 4 columns of 5 */}
				<div className="hide-on-mobile"
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(4, 1fr)",
						gap: "1rem",
						justifyItems: "center",
						alignItems: "center",
						width: "max-content",
					}}
				>
					{(() => {
						const oghamLetters = [
							"b","h","m","a",
							"l","d","g","o",
							"f","t","ng","u",
							"s","c","z","e",
							"n","q","r","i"];
						return oghamLetters.map((letter, idx) => (
							<Image
								key={letter}
								src={`/${letter}.png`}
								alt={"the ogham symbol for " + letter}
								width={40}
								height={40}
								style={{
									borderRadius: "0.5rem",
									boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)",
									background: "var(--card)",
									opacity: 0.9,
								}}
							/>
						));
					})()}
				</div>

				{/* Card in the center */}
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

				{/* Rune images in 4 columns of 6 */}
				<div className="hide-on-mobile"
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(4, 1fr)",
						gap: "1rem",
						justifyItems: "center",
						alignItems: "center",
						width: "max-content",
					}}
				>
					{(() => {
						const runeSymbols = [
							"F - Fehu","U - Uruz","TH - Thurisaz","A - Ansuz","R - Raido","K - Kaunan",
							"G - Gebo","W - Wunjo","H - Hagaiaz","N - Naughiz","I - Isaz","J - Jera",
							"AE - Eihwaz","P - Perthro","S - Sowilo","T - Tiwaz","B - Berkanan","E - Ehwaz",
							"M - Mannaz","L - Laguz","NG - Ingwaz","O - Othalan","D - Dagaz","Z - Algiz"
						];
						return runeSymbols.map((rune, idx) => (
							<Image
								key={rune}
								src={`/${rune}.png`}
								alt={"the rune symbol for " + rune}
								width={40}
								height={40}
								style={{
									borderRadius: "0.5rem",
									boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)",
									background: "var(--card)",
									opacity: 0.9,
								}}
							/>
						));
					})()}
				</div>
			</div>
		</main>
	);
}
