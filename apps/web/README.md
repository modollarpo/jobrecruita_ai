# JobRecruita Web (Next.js)

## Getting Started

1. Install dependencies:
	```sh
	npm install
	```
2. Copy `.env.example` to `.env` and fill in required values.
3. Run locally:
	```sh
	npm run dev
	```

## Azure Deployment

This app is ready for deployment to Azure Web App using GitHub Actions.

### Setup Steps
1. Create an Azure Web App for Node.js.
2. In Azure Portal, get the **Publish Profile** for your Web App.
3. In your GitHub repo, add these secrets:
	- `AZURE_WEBAPP_NAME`: Your Azure Web App name
	- `AZURE_WEBAPP_PUBLISH_PROFILE`: The XML content of your publish profile
4. Push to `master` branch. The workflow in `.github/workflows/azure-webapp.yml` will build and deploy automatically.

## Environment Variables

See `.env.example` for required variables.

## CI/CD

GitHub Actions will lint, build, and deploy on every push to `master`.

---
For full-stack/local development, see the root README.md and backend/mobile README files for more details.
# JobRecruita Web

Next.js + TypeScript + TailwindCSS + shadcn

## Features
- Admin dashboard, candidate/job management
- Analytics, integrations, notifications
- Responsive, dark/light mode, modular components

## Getting Started
1. Install dependencies: `yarn install` or `npm install`
2. Start Next.js: `npm run dev:web`
