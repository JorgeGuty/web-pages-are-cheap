@AGENTS.md

# web-pages-are-cheap

A minimal Next.js app that demonstrates web pages are cheap to build. Single Hello World endpoint, clean architecture, Tailwind + shadcn/ui.

## Dev commands

```bash
npm run dev       # start dev server (http://localhost:3000)
npm run build     # production build
npm run lint      # ESLint
npx tsc --noEmit  # type check (no typecheck script in package.json)
```

## Tech stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- **shadcn/ui** — components go in `src/components/ui/` (auto-generated via `npx shadcn add <name>`)

## Folder conventions

```
src/
  app/            # Glue layer — routing, layouts, pages, API routes
    api/          # Route handlers (Next.js server)
    layout.tsx
    page.tsx
  components/     # UI components
    ui/           # shadcn primitives (do not edit manually)
    [feature]/    # Feature-scoped composite components
  lib/            # Utilities, helpers, shared logic
    utils.ts      # cn() from shadcn
  types/          # TypeScript interfaces and domain types
```

**Rules:**
- `src/app/` is glue only — no business logic, no raw HTML styling. It wires components together.
- `src/components/ui/` is shadcn-managed — add components via CLI, never edit by hand.
- Feature components live in `src/components/[feature]/`, not in `app/`.
- Types shared across layers go in `src/types/`.

## API conventions

- Route handlers live at `src/app/api/[resource]/route.ts`.
- Return plain JSON. Use Next.js `NextResponse.json()`.
- No auth for this demo.

## Dev-team evidence storage

Verifier video artifacts are committed to `evidence/` at the repo root. Each slice gets its own subdirectory: `evidence/slice-N/`.
