"use client";
import React from "react";

export function GameButtons() {
    return (
        <div style={{ display: "flex", gap: "2rem", marginBottom: "1.5rem", justifyContent: "center", textAlign: "center" }}>
            <a
                href="/ogham/letterGame"
                style={{
                    background: "var(--primary)",
                    color: "var(--card)",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "1rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)",
                    transition: "background 0.2s, transform 0.2s",
                    display: "inline-block",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-1px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
            >
                Letter Game
            </a>
            <a
                href="/ogham/treeGame"
                style={{
                    background: "var(--primary)",
                    color: "var(--card)",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "1rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)",
                    transition: "background 0.2s, transform 0.2s",
                    display: "inline-block",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-1px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
            >
                Tree Game
            </a>
            <a
                href="/ogham/keyWordGame"
                style={{
                    background: "var(--primary)",
                    color: "var(--card)",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "1rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)",
                    transition: "background 0.2s, transform 0.2s",
                    display: "inline-block",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-1px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
            >
                Key Word Game
            </a>
        </div>
    );
}