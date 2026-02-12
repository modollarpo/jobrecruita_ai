
# JobRecruita – Enterprise AI Recruitment Platform

![CI](https://github.com/modollarpo/jobrecruita_ai/actions/workflows/ci.yml/badge.svg)
![Backend Deploy](https://github.com/modollarpo/jobrecruita_ai/actions/workflows/azure-backend.yml/badge.svg)
![Web Deploy](https://github.com/modollarpo/jobrecruita_ai/actions/workflows/azure-webapp.yml/badge.svg)
![CodeQL](https://github.com/modollarpo/jobrecruita_ai/actions/workflows/codeql.yml/badge.svg)

---

## Overview

JobRecruita is an enterprise-grade, AI-powered recruitment platform designed for modern hiring teams. It features:

- Modular monorepo (web, backend, mobile, shared)
- AI-driven candidate/job matching, auto-apply, and analytics
- Compliance, audit logging, and advanced security
- Real-time monitoring, error tracking, and CI/CD automation
- Scalable, cloud-native architecture (Azure-ready)

## Architecture

```mermaid
graph TD
  A[Web (Next.js)] --API--> B[Backend (NestJS)]
  B --DB--> C[(PostgreSQL)]
  B --AI--> D[AI Engine]
  A --API--> B
  E[Mobile (Expo/React Native)] --API--> B
  B --Queue--> F[Async Workers]
  A --Monitoring--> G[Sentry/LogRocket/Datadog]
  B --Monitoring--> G
```

## Features

- **Web**: Next.js, TailwindCSS, admin dashboard, analytics, compliance widgets, SSO, dark/light mode
- **Backend**: NestJS, Prisma, PostgreSQL, JWT/OAuth, modular services, audit logging, rate limiting, validation
- **Mobile**: Expo, React Native, onboarding, swipe-to-match, push notifications, offline support
- **AI Engine**: Modular TypeScript, explainable AI matching, auto-apply, analytics
- **DevOps**: GitHub Actions CI/CD, Azure deployment, .env management, Sentry/LogRocket/Datadog

## Quick Start

1. **Clone the repo:**
   ```sh
   git clone https://github.com/modollarpo/jobrecruita_ai.git
   cd jobrecruita_ai
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Setup environment:**
   - Copy `.env.example` in each app to `.env` and fill in values
4. **Run apps locally:**
   - Web: `npm run dev:web`
   - Backend: `npm run dev:backend`
   - Mobile: `npm run dev:mobile`

## Local Full-stack Flow

1. Start backend API: `npm run dev:backend`
2. Start web frontend: `npm run dev:web`
3. Start mobile app: `npm run dev:mobile` (or `npx expo start` in `apps/mobile`)
4. Ensure PostgreSQL is running and Prisma migrations are applied

## CI/CD & Deployment

- **Web & Backend:**
  - Azure Web App deploy via GitHub Actions
  - Add Azure Publish Profile secrets to GitHub
  - Push to `master` to trigger build/deploy
- **Mobile:**
  - Use Expo EAS or Azure App Center for CI/CD and distribution

## Monitoring & Analytics

- **Web:** Sentry, LogRocket, Datadog RUM (see `apps/web/README.md`)
- **Backend:** Winston logging, correlation IDs, audit logs
- **Mobile:** Ready for Sentry/Datadog via Expo plugins

## Environment Variables

- See `.env.example` in each app for required variables
- Never commit real secrets to the repo

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Documentation

- [Web README](apps/web/README.md)
- [Backend README](apps/backend/README.md)
- [Mobile README](apps/mobile/README.md)
- [Shared/Types/Utils](apps/shared/)

---
For more, see each app's README.md and the `.github/copilot-instructions.md` for development best practices.
