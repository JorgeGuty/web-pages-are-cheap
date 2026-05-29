# CONTEXT — web-pages-are-cheap

## Purpose

A demonstration project. The thesis: spinning up a polished, production-shaped web page is cheap — fast to scaffold, fast to iterate. This repo is the evidence.

## Domain language

| Term | Meaning |
|------|---------|
| **greeting endpoint** | The single API route (`GET /api/hello`) that returns `{ message: "Hello, World!" }`. |
| **hero section** | A single shadcn `Card` centered on the page displaying the greeting message. Minimal — no headline, no sub-copy. Clean typography only. |
| **glue layer** | `src/app/` — Next.js routing scaffolding that connects components and routes. No logic here. |
| **UI layer** | `src/components/` — presentational components, shadcn primitives, feature composites. |
| **lib layer** | `src/lib/` — utilities and shared logic with no framework dependency. |

## Architecture decisions

### ADR-001 — App Router over Pages Router
**Date:** 2026-05-28  
**Decision:** Use Next.js App Router (`src/app/`).  
**Reason:** App Router is the current standard, supports React Server Components, and is what Next.js 15 defaults to.

### ADR-002 — shadcn/ui over a headless or raw Tailwind component library
**Date:** 2026-05-28  
**Decision:** Use shadcn/ui for UI primitives.  
**Reason:** shadcn gives us copy-owned components (no runtime dependency), works natively with Tailwind v4, and looks polished out of the box — perfect for a "cheap pages" demo.

### ADR-003 — Folder boundary: glue / components / lib / types
**Date:** 2026-05-28  
**Decision:** Strict separation of `app/` (glue), `components/` (UI), `lib/` (logic), `types/` (interfaces).  
**Reason:** Even for a small demo, the shape matters. The goal is to show that you can start cheap AND start clean.

### ADR-005 — Server Component fetch over client-side fetch
**Date:** 2026-05-28  
**Decision:** `page.tsx` is an async React Server Component that fetches `GET /api/hello` at render time and passes the message as a prop to a presentational client component.  
**Reason:** The goal is a real Next.js backend — the route handler exists and is exercised. The fetch being server-to-server is fine; what matters is the API boundary is real, not where the caller lives.

### ADR-006 — Testing: Vitest unit + Playwright E2E
**Date:** 2026-05-28  
**Decision:** Unit tests via Vitest (route handler), E2E via Playwright.  
**Reason:** Vitest handles ESM/TypeScript natively in Next.js 15 without babel transforms. Playwright covers the full browser stack. Both are needed: unit for fast feedback on the API contract, E2E for confidence the page wires up end-to-end.

### ADR-004 — Evidence committed to `evidence/` directory
**Date:** 2026-05-28  
**Decision:** Verifier video and screenshot artifacts are committed to `evidence/slice-N/` inside the repo.  
**Reason:** Keeps evidence co-located with the code, no external artifact store needed for a demo repo.

## Out of scope (for this demo)

- Authentication / authorization
- Database / persistence
- Deployment pipeline
- Multiple pages beyond the home page
