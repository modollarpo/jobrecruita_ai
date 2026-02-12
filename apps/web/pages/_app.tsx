import React from 'react';
import '../assets/globals.css';
import '../sentry.client.config';
import '../logrocket.config';
import '../datadog.config';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../components/ThemeProvider';
import { ErrorBoundary } from '../components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
