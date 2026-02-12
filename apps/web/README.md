
# JobRecruita Web (Next.js)

## Overview

Enterprise-grade web frontend for JobRecruita, built with Next.js, TypeScript, and TailwindCSS. Features admin dashboard, analytics, compliance, and advanced monitoring.

## Features
- Admin dashboard, candidate/job management
- Analytics, integrations, notifications
- Responsive, dark/light mode, modular components
- SSO, accessibility, SEO, micro-interactions
- Sentry, LogRocket, Datadog RUM integration

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

Ready for Azure Web App deployment via GitHub Actions.

### Setup Steps
1. Create an Azure Web App for Node.js.
2. In Azure Portal, get the **Publish Profile** for your Web App.
3. In your GitHub repo, add these secrets:
   - `AZURE_WEBAPP_NAME`: Your Azure Web App name
   - `AZURE_WEBAPP_PUBLISH_PROFILE`: The XML content of your publish profile
4. Push to `master` branch. The workflow in `.github/workflows/azure-webapp.yml` will build and deploy automatically.

## Environment Variables

See `.env.example` for required variables (API URL, Sentry, LogRocket, Datadog, etc).

## Monitoring & Analytics

- **Sentry**: Error monitoring (set `NEXT_PUBLIC_SENTRY_DSN`)
- **LogRocket**: Session replay/logging (set `NEXT_PUBLIC_LOGROCKET_ID`)
- **Datadog RUM**: Real user monitoring (set `NEXT_PUBLIC_DD_APP_ID`, `NEXT_PUBLIC_DD_CLIENT_TOKEN`)

All tools are initialized automatically in production builds.

## CI/CD

GitHub Actions will lint, build, and deploy on every push to `master`.

## Troubleshooting

- Ensure backend API is running and accessible
- Check `.env` values for API and monitoring
- For deployment issues, check GitHub Actions logs and Azure Portal

---
For full-stack/local development, see the root README.md and backend/mobile README files for more details.
