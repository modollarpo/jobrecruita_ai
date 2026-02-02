# JobRecruita – AI-Powered Recruitment Platform

## Monorepo Structure

- `apps/web` – Next.js frontend (Azure Web App)
- `apps/backend` – NestJS API backend (Azure Web App)
- `apps/mobile` – Expo React Native app (Azure App Center/EAS)
- `apps/shared` – Shared UI, types, and utilities

## Quick Start

1. Clone the repo:
	```sh
	git clone https://github.com/modollarpo/jobrecruita_ai.git
	cd jobrecruita_ai
	```
2. Install dependencies:
	```sh
	npm install
	```
3. Copy `.env.example` files in each app to `.env` and fill in values.
4. Start apps locally (in separate terminals):
	- Web: `cd apps/web && npm run dev`
	- Backend: `cd apps/backend && npm run start:dev`
	- Mobile: `cd apps/mobile && npx expo start`

## Azure Deployment

### Web & Backend
- Both apps are ready for Azure Web App deployment via GitHub Actions.
- Add your Azure Publish Profile secrets to GitHub as described in each app's README.
- Push to `master` to trigger CI/CD and deploy.

### Mobile
- Use Expo EAS or Azure App Center for mobile CI/CD and distribution.

## Environment Variables

- See `.env.example` in each app for required variables.
- Never commit real secrets to the repo.

## CI/CD

- GitHub Actions workflows for web and backend are in `.github/workflows/`.
- Add badges and monitor deployments from the Actions tab.

---
For more, see each app's README.md.
# JobRecruita

Enterprise-grade AI-powered recruitment platform. Modular, scalable, and production-ready.

## Apps
- **Mobile:** Expo + TypeScript + Expo Router
- **Web:** Next.js + TypeScript + TailwindCSS
- **Backend:** Node.js + TypeScript + NestJS + PostgreSQL
- **AI Engine:** Modular TypeScript services

## Getting Started
- See `/apps/backend/README.md`, `/apps/web/README.md`, `/apps/mobile/README.md` for setup instructions.
