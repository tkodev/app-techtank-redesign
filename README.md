# TechTank TO — Website Redesign

A Next.js (App Router) implementation of [techtankto.com](https://www.techtankto.com/),
Toronto's volunteer-run tech community website. The redesign moves away from a
flat "link-tree" layout toward a conversion-oriented onboarding hub that funnels
visitors into specific roles — attendee, speaker, host, sponsor, or volunteer.

Specs live in [`prd/`](./prd/PRD.md); application code lives in [`app/`](./app).
The initial UI scaffold was generated from the PRD via v0 —
[original prompt and generation](https://v0.app/chat/website-generation-from-prd-eLek8w4RJMh).

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Radix UI primitives](https://www.radix-ui.com/) (via `@radix-ui/react-slot`)
- [lucide-react](https://lucide.dev/) for icons
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

The tree below doubles as a route map — each directory under `app/` is a
route, annotated with its purpose.

```
.
├── app/                            # Next.js App Router routes
│   ├── layout.tsx                  # Root layout (header, footer, fonts, SEO)
│   ├── page.tsx                    # /                    Social-proof-driven home
│   ├── about/                      # /about               Values & community manifesto
│   ├── events/                     # /events              Upcoming (Luma) + past event timeline
│   ├── get-involved/               # /get-involved        Onboarding hub (shared layout)
│   │   ├── speaker/                #   /speaker           Speaker intake
│   │   ├── host/                   #   /host              Host intake
│   │   ├── sponsor/                #   /sponsor           Sponsor intake
│   │   └── volunteer/              #   /volunteer         Volunteer intake
│   ├── legal/                      # /legal               Legal documents (shared layout)
│   │   ├── terms-of-service/       #   /terms-of-service
│   │   ├── privacy-policy/         #   /privacy-policy
│   │   └── code-of-conduct/        #   /code-of-conduct
│   ├── press-kit/                  # /press-kit           Brand assets + fast facts
│   ├── design-system/              # /design-system       Brand guidelines — design tokens & component reference
│   └── globals.css
├── components/
│   ├── layout/                     # Header, Footer
│   └── ui/                         # Reusable UI (buttons, cards, sections, etc.)
├── constants/                      # Structured data (events, sponsors, social links)
├── prd/                            # Product requirements documents (specs)
├── public/                         # Static assets (images, downloads, social media dumps)
├── next.config.ts
└── tsconfig.json
```

See [`prd/PRD.md`](./prd/PRD.md) for the full route map, shared-layout
conventions, and per-page content requirements.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for contribution guidelines.

1. Read [`prd/PRD.md`](./prd/PRD.md) before making structural changes — it
   defines the IA, brand, and content conventions.
   - **AI agents only:** also read [`CLAUDE.md`](./CLAUDE.md) for agent-specific
     working conventions and constraints.
2. When adding or renaming a route, update both the route table in
   `prd/PRD.md` §2.1 and the corresponding spec in `prd/pages/`.
3. Keep one dominant CTA per page. Role pages under `/get-involved/*` must end
   in an intake action (email us).

## License

[MIT](./LICENSE.md) — see the file for details.
