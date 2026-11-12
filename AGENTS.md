# NEXORA AI architecture

NEXORA is a React 19 / TypeScript / TanStack Start application deployed through the Netlify Vite plugin. Read `PLAN.md` before continuing; milestone 1 is the visible product workspace and subsequent milestones connect the services.

## Key files

- `src/routes/index.tsx`: workspace shell, dashboard, welcome view, assistant preview, tool directory, planner, conversations, documents, and dialogs. Screen selection is client component state, not separate URLs.
- `src/data/fixtures.ts`: all realistic sample tool metadata, conversation summaries, initial tasks, and planned allowances. Replace these with authenticated data in a later milestone.
- `src/styles.css`: product styling, dark/light semantic variables, orbital infinity artwork, responsive breakpoints, and reduced-motion support.
- `src/routes/__root.tsx`: metadata and document shell.
- `src/components/ui`: scaffolded reusable Radix controls available for future features.
- `netlify.toml` and `vite.config.ts`: framework deployment configuration.

## Conventions and decisions

Use strict TypeScript, named components, Lucide icons, and `@/` imports. Keep brand colors in CSS variables and preserve keyboard focus, dialog escape/focus containment, mobile navigation, and reduced-motion behavior. The infinity illustration uses SVG and CSS so it needs no heavy image asset.

This milestone deliberately uses React state for disposable preview interactions only. Nothing is persisted. File attachments are browser object URLs and are not uploaded or analyzed. User questions receive an explicit preview disclosure, never a fabricated AI answer. The sample lesson is labeled as sample content. Daily progress and conversation history are fixtures. Allowance values are planned policy, not client-enforced quotas.

Do not present authentication, AI generation, payment, or private storage as operational until connected. Never introduce browser counters as an enforcement mechanism. Future structured persistence must use Netlify Database; private files use Netlify Blobs. The existing TanStack framework handles future request-driven backend code through framework server routes on Netlify. Keep AI credentials server-side and review the relevant Netlify skills before integration.

The $2 price is a proposed upgrade; cadence, entitlements, and introductory use count remain product decisions. Do not enable checkout without explicit terms. Continue the numbered roadmap in `PLAN.md`.

The deployment pipeline performs build validation. The initial implementation was reviewed by reading source files; no local build, server, or test command was run during creation.
