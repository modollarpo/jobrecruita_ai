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
2. Install dependencies (from the repo root):
	```sh
	npm install
	```
3. Copy `.env.example` files in each app to `.env` and fill in values.
4. Start apps locally (from the repo root, separate terminals recommended):
	- Web: `npm run dev:web`
	- Backend: `npm run dev:backend`
	- Mobile: `npm run dev:mobile`

## Top-level Commands

From the repository root you can control all apps:

- Development
	- `npm run dev:web` – Next.js web frontend
	- `npm run dev:backend` – NestJS API backend
	- `npm run dev:mobile` – Expo mobile app

- Build
	- `npm run build:web` – Production build for web
	- `npm run build:backend` – Production build for backend
	- `npm run build` – Build web and backend together

- Quality
	- `npm run lint` – Lint web + backend
	- `npm run typecheck` – Type-check web + backend

## Local Full-stack Flow

To exercise the full platform locally:

1. In one terminal, start the backend API (NestJS + Prisma):
	```sh
	npm run dev:backend
	```
2. In another terminal, start the web frontend (Next.js):
	```sh
	npm run dev:web
	```
3. The web app will call its `/api/*` routes, which in turn talk to the backend on `http://localhost:3001` for auth and AI match endpoints as configured in the Next.js API handlers.

Before running in earnest, ensure your Postgres instance is up and Prisma migrations have been applied from `apps/backend`.

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
