# AGENTS.md — Portfolio (Musaddiq Rafi)

## Commands
- `npm run dev` — Next.js dev server
- `npm run build` — production build
- `npm run start` — start production server
- No test, lint, or typecheck scripts exist.

## Architecture
- **Next.js 15 App Router**, single-page portfolio at `/app/page.tsx` (root path only).
- All sections (Navbar, Header, About, Skills, Projects, Experience, Education, Awards, Contact, Footer, Dock) render on one page as a list of components.
- Every component except `layout.tsx` and `page.tsx` is `"use client"`.
- Path alias `@/*` → root (`./*`). Import components via `@/components/...`, utils via `@/lib/utils`.
- Static hero image: `public/musadiq_rafi_hero_section.png`.
- No `error.tsx`, `loading.tsx`, or `not-found.tsx`.

## Theming
- **Custom** `ThemeProvider` + `useTheme` hook in `components/ThemeProvider.tsx` — **not** `next-themes`.
- Theme key in `localStorage`: `"theme"`. Values: `"dark"` | `"light"`.
- CSS variables defined in `globals.css` under `[data-theme="dark"]` and `[data-theme="light"]`.
- Use CSS variable references like `var(--bg)`, `var(--text)`, `var(--accent)` — **do not** use Tailwind's `dark:` prefix.
- `<html>` has `suppressHydrationWarning` (required due to client-side theme init).

## Styling
- Tailwind CSS 3.4 + `postcss` (no plugins). No ESLint, Prettier, or other formatters.
- Custom colors in `tailwind.config.ts`: `bg`, `surface`, `accent`, `accent-dim`.
- Utility function `cn(...)` from `clsx` + `tailwind-merge` in `lib/utils.ts`.
- Font: Poppins from `next/font/google`, applied via CSS variable `--font-poppins`.

## API
- `POST /api/send` — contact form. Expects `{ name, email, message }` JSON body.
- Sends two emails via Nodemailer: auto-reply to sender + notification to owner.
- Requires env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (Gmail App Password recommended). Copy `.env.example` to `.env.local`.

## Analytics
- `@vercel/analytics` installed. `<Analytics />` component already in root layout. Works automatically on Vercel deployment.

## Dependencies
| Package | Purpose |
|---|---|
| `next`, `react`, `react-dom` | Framework |
| `framer-motion` | Animations |
| `lucide-react` | Icons |
| `clsx`, `tailwind-merge` | Class name merging (`cn()`) |
| `nodemailer`, `@types/nodemailer` | Contact form email |
| `@vercel/analytics` | Vercel Analytics |
| `tailwindcss`, `postcss`, `typescript` | Dev tooling |

## Commit style
- Lowercase conventional commits: `fix: ...`, `update: ...`, `feat: ...`, `chore: ...`

## Deployment
- Target: Vercel. Project lives at `https://musaddiq-rafi.vercel.app/`.
- `.env.example` documents required SMTP environment variables.
