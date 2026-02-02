# JobRecruita Backend (NestJS)

## Getting Started

1. Install dependencies:
	```sh
	npm install
	```
2. Copy `.env.example` to `.env` and fill in required values.
3. Run locally:
	```sh
	npm run start:dev
	```

## Azure Deployment

This app is ready for deployment to Azure Web App using GitHub Actions.

### Setup Steps
1. Create an Azure Web App for Node.js (or container if using Docker).
2. In Azure Portal, get the **Publish Profile** for your Web App.
3. In your GitHub repo, add these secrets:
	- `AZURE_BACKEND_NAME`: Your Azure Web App name
	- `AZURE_BACKEND_PUBLISH_PROFILE`: The XML content of your publish profile
4. Push to `master` branch. The workflow in `.github/workflows/azure-backend.yml` will build and deploy automatically.

## Environment Variables

See `.env.example` for required variables.

## CI/CD

GitHub Actions will lint, build, and deploy on every push to `master`.

---
For full-stack/local development, see the root README.md and web/mobile README files for more details.
# JobRecruita Backend

NestJS + TypeScript + PostgreSQL + Prisma

## Features
- REST + GraphQL API
- Modular services, AI engine, integrations
- JWT + OAuth, queue system, logging

## Getting Started
1. Install dependencies: `yarn install` or `npm install`
2. Setup database: `npx prisma migrate dev`
3. Start backend: `npm run dev:backend`
