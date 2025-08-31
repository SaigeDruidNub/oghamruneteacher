"use client";
import React from "react";
import Link from "next/link";

export function Buttons() {
    return (
        <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
            <Link href="/ogham" passHref legacyBehavior>
                <a
                    style={{
                        padding: "0.75rem 1.5rem",
                        borderRadius: "9999px",
                        background: "var(--primary)",
                        color: "var(--background)",
                        fontWeight: "bold",
                        boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.25)",
                        textDecoration: "none",
                        transition: "transform 0.2s",
                        display: "inline-block",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-1px)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                >
                    Learn Ogham
                </a>
            </Link>
            <Link href="/runes" passHref legacyBehavior>
                <a
                    style={{
                        padding: "0.75rem 1.5rem",
                        borderRadius: "9999px",
                        background: "var(--primary)",
                        color: "var(--background)",
                        fontWeight: "bold",
                        boxShadow: "0 2px 8px 0 rgba(19, 100, 138, 0.25)",
                        textDecoration: "none",
                        transition: "transform 0.2s",
                        display: "inline-block",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-1px)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                >
                    Learn Runes
                </a>
            </Link>
        </div>
    );
}