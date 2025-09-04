# Copilot Coding Agent Onboarding Instructions

## Project Summary

This is a Next.js web application for teaching and exploring Ogham and Runic symbols. The app provides interactive games and educational resources for users to learn about ancient alphabets, their meanings, and associated keywords, trees, and names.

## Tech Stack

- **Framework:** Next.js (v15.5.0)
- **Languages:** TypeScript, React (v19.1.0)
- **Styling:** Tailwind CSS (v4)
- **Linting:** ESLint (v9) with Next.js and TypeScript configs
- **Build Tools:** PostCSS
- **Package Manager:** npm (lockfile present)
- **Other:** No detected backend/server code; all logic is client-side.

## Project Structure

- `app/` — Main Next.js app directory, using the App Router. Contains:
  - `page.tsx`, `layout.tsx`, `globals.css`
  - Subfolders for games: `ogham/`, `runes/`, each with further subfolders for different game types (`letterGame`, `treeGame`, `keywordGame`, etc.)
  - Dynamic routes: `[symbol]/page.tsx` for symbol-specific pages
- `public/` — Static assets (images for each symbol, favicon, etc.)
- Root config files:
  - `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`
  - No detected scripts or custom CLI tools

## Coding Guidelines

- **TypeScript Strictness:** The project uses `"strict": true` in `tsconfig.json`. All code should be type-safe.
- **Linting:** Run `npm run lint` before committing. ESLint ignores build artifacts and type definitions.
- **File Naming:** Use PascalCase for React components, camelCase for functions/variables.
- **Component Structure:** Prefer functional components. Use hooks for state and effects.
- **Styling:** Use Tailwind CSS utility classes. Avoid inline styles.
- **Routing:** Use Next.js App Router conventions. Dynamic routes are used for symbol pages.
- **Assets:** Place all static images in `public/`. Reference them with `/filename.png`.

## Existing Tools & Resources

- **Scripts:**
  - `npm run dev` — Start development server
  - `npm run build` — Build for production
  - `npm run start` — Start production server
  - `npm run lint` — Run ESLint
- **Documentation:** See `README.md` for basic setup and Next.js links.
- **No CONTRIBUTING.md** or other onboarding docs detected.
- **No detected TODO/HACK/FIXME comments.**

## Setup & Build Instructions

1. **Install dependencies:**
   ```powershell
   npm install
   ```
2. **Start development server:**
   ```powershell
   npm run dev
   ```
   - App runs at [http://localhost:3000](http://localhost:3000)
3. **Build for production:**
   ```powershell
   npm run build
   ```
4. **Lint code:**
   ```powershell
   npm run lint
   ```
5. **No custom scripts or environment variables required.**

## Best Practices for Coding Agents

- **Always run `npm install` after changing dependencies.**
- **Use only documented scripts (`dev`, `build`, `start`, `lint`).**
- **Do not modify config files unless necessary.**
- **Follow TypeScript and ESLint rules to avoid build failures.**
- **Check for dynamic routes when adding new pages.**
- **Use Tailwind CSS for all styling.**
- **Reference images from `public/` using root-relative paths.**
- **No backend/server code; all logic is client-side.**

## Troubleshooting

- If build or lint fails, check `tsconfig.json` and `eslint.config.mjs` for strictness and ignored files.
- If new pages/components do not render, verify routing and file placement in `app/`.
- If assets do not load, confirm they are in `public/` and referenced correctly.
