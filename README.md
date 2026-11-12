# NEXORA AI

Your Intelligence. Your Possibilities.

NEXORA is a student learning workspace with a premium midnight interface and an optional light theme. The first milestone includes an interactive dashboard, welcome page, study assistant preview, learning tool directory, conversations, study planner, and document empty state.

The assistant includes a sample educational explanation, question drafting, local file/image previews, and a camera file-picker affordance where supported. Tasks can be added, completed, and removed during the current page session. Tool cards open a prefilled workspace. AI generation, authentication, persistent storage, voice input, uploads, and payments are clearly marked as coming soon. Demo data does not represent real student activity or usage. No uploads leave the browser.

Built with React 19, TypeScript, TanStack Start/Router, Vite, CSS, and Lucide icons. Deployment uses the Netlify TanStack Start plugin. No secrets are required for this preview. Fonts are loaded from Google Fonts with local fallbacks.

## Local development

Install dependencies with `pnpm install`. Run `netlify dev --port 8889` to use Netlify's local development environment. The framework's development target is port 3000. The deployment pipeline runs the production build configured in `netlify.toml`.

## Next milestones

See [PLAN.md](PLAN.md) for the full roadmap: student accounts and private persistence, connected AI with server-enforced daily limits, private uploads and image recognition, educational generators, the $2 upgrade, and the lecture/audio experience. The billing period and one-or-two-use introduction require product decisions before payment integration.
