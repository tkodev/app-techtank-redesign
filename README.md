# TechTank TO — Website Redesign

A Next.js (App Router) implementation of [techtankto.com](https://www.techtankto.com/),
Toronto's volunteer-run tech community website. The redesign moves away from a
flat "link-tree" layout toward a conversion-oriented onboarding hub that funnels
visitors into specific roles — attendee, speaker, host, sponsor, or volunteer.

Specs live in [`prd/`](./prd/PRD.md); application code lives in [`app/`](./app).

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Radix UI primitives](https://www.radix-ui.com/) (via `@radix-ui/react-slot`)
- [lucide-react](https://lucide.dev/) and [@icons-pack/react-simple-icons](https://github.com/icons-pack/react-simple-icons) for icons
- Inter + Space Grotesk via `next/font`
- pnpm 10 for package management

## Getting started

Requirements: Node.js 20+ and [pnpm](https://pnpm.io/) 10.

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:3000>.

### Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Start the dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run Next.js' linter |

## Project structure

```
.
├── app/                      # Next.js App Router routes
│   ├── layout.tsx            # Root layout (header, footer, fonts, SEO)
│   ├── page.tsx              # /
│   ├── about/
│   ├── events/
│   ├── how-it-works/         # Shared layout + role sub-pages
│   │   ├── speaker/
│   │   ├── host/
│   │   ├── sponsor/
│   │   └── volunteer/
│   ├── legal/                # Shared layout for legal documents
│   │   ├── terms-of-service/
│   │   ├── privacy-policy/
│   │   └── code-of-conduct/
│   ├── press-kit/
│   └── globals.css
├── components/
│   ├── layout/               # Header, Footer
│   └── ui/                   # Reusable UI (buttons, cards, sections, etc.)
├── constants/                # Structured data (events, sponsors, social links)
├── prd/                      # Product requirements documents (specs)
├── public/images/            # Static imagery
├── next.config.ts
└── tsconfig.json
```

## Information architecture

| Path | Purpose |
|---|---|
| `/` | Social-proof-driven home |
| `/about` | Values & community manifesto |
| `/how-it-works` | Onboarding hub |
| `/how-it-works/speaker` | Speaker intake |
| `/how-it-works/host` | Host intake |
| `/how-it-works/sponsor` | Sponsor intake |
| `/how-it-works/volunteer` | Volunteer intake |
| `/events` | Upcoming events (Luma) + past event timeline |
| `/press-kit` | Brand assets + fast facts |
| `/legal/terms-of-service` | Terms of Service |
| `/legal/privacy-policy` | Privacy Policy |
| `/legal/code-of-conduct` | Code of Conduct |

See [`prd/PRD.md`](./prd/PRD.md) for the full route map, shared-layout
conventions, and per-page content requirements.

## Contributing

1. Read [`CLAUDE.md`](./CLAUDE.md) and [`prd/PRD.md`](./prd/PRD.md) before making
   structural changes — they define the IA, brand, and content conventions.
2. When adding or renaming a route, update both the route table in
   `prd/PRD.md` §2.1 and the corresponding spec in `prd/pages/`.
3. Keep one dominant CTA per page. Role pages under `/how-it-works/*` must end
   in a Google Form intake.

## Contact

<techtankto@gmail.com>

## External platforms

- Meetup — <https://www.meetup.com/techtank-to/>
- Luma — <https://luma.com/techtank>
- LinkedIn — <https://ca.linkedin.com/company/techtank-to>
- Instagram — <https://www.instagram.com/techtankto/>
- YouTube — <https://www.youtube.com/@TechTankTo>
- GitHub — <https://github.com/tech-tankorg>
