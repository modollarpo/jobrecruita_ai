
# JobRecruita Mobile (Expo)

## Overview

Enterprise-grade mobile app for JobRecruita, built with Expo, React Native, and TypeScript. Features onboarding, swipe-to-match, push notifications, and offline support.

## Features
- Onboarding, Login/Register
- Dashboard, Candidates, Jobs, Matches
- Swipe-to-match, AI scoring, CV upload
- Animations, skeleton loaders, push notifications
- Dark/light mode, accessibility, offline support

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in required values.
3. Run locally:
   ```sh
   npx expo start
   ```

## Azure Deployment

For production, build the Expo app and deploy to the App Store/Play Store. You can use Azure App Center or Expo EAS for CI/CD and distribution.

## Environment Variables

See `.env.example` for required variables (API URL, app name, etc).

## Monitoring & Analytics

- Mobile monitoring (Sentry, Datadog, etc.) can be added using Expo plugins or native SDKs. See Expo and provider docs for setup.

## CI/CD

Set up Expo Application Services (EAS) or Azure App Center for automated builds and deployment.

## Troubleshooting

- Ensure backend API is running and accessible
- Check `.env` values for API
- For build/deployment issues, check EAS/App Center logs

---
For full-stack/local development, see the root README.md and web/backend README files for more details.
