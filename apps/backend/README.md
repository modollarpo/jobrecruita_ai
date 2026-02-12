
# JobRecruita Backend (NestJS)

## Overview

Enterprise-grade API backend for JobRecruita, built with NestJS, Prisma, and PostgreSQL. Features modular services, AI engine, audit logging, and advanced security.

## Features
- REST + GraphQL API
- Modular services, AI engine, integrations
- JWT + OAuth, queue system, audit logging
- Input validation, rate limiting, helmet, CORS, compression
- Winston logging, correlation IDs, daily log rotation

## Getting Started

1. Install dependencies:
	```sh
	npm install
	```
2. Copy `.env.example` to `.env` and fill in required values.
3. Setup database:
	```sh
	npx prisma migrate dev
	```
4. Run locally:
	```sh
	npm run start:dev
	```

## Azure Deployment

Ready for Azure Web App deployment via GitHub Actions.

### Setup Steps
1. Create an Azure Web App for Node.js (or container).
2. In Azure Portal, get the **Publish Profile** for your Web App.
3. In your GitHub repo, add these secrets:
	- `AZURE_BACKEND_NAME`: Your Azure Web App name
	- `AZURE_BACKEND_PUBLISH_PROFILE`: The XML content of your publish profile
4. Push to `master` branch. The workflow in `.github/workflows/azure-backend.yml` will build and deploy automatically.

## Environment Variables

See `.env.example` for required variables (DB, JWT, Azure, CORS, etc).

## Monitoring & Logging

- Winston logger with daily rotation (see `middlewares/winston-logger.middleware.ts`)
- Correlation IDs for traceability
- Audit logs for sensitive actions

## CI/CD

GitHub Actions will lint, build, and deploy on every push to `master`.

## Troubleshooting

- Ensure PostgreSQL is running and accessible
- Check `.env` values for DB and JWT
- Logs are output to console and `logs/` directory
- For deployment issues, check GitHub Actions logs and Azure Portal

---
For full-stack/local development, see the root README.md and web/mobile README files for more details.
