// Datadog RUM initialization for Next.js (web)
import { datadogRum } from '@datadog/browser-rum';

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_DD_CLIENT_TOKEN) {
  datadogRum.init({
    applicationId: process.env.NEXT_PUBLIC_DD_APP_ID!,
    clientToken: process.env.NEXT_PUBLIC_DD_CLIENT_TOKEN!,
    site: 'datadoghq.com',
    service: 'jobrecruita-web',
    env: process.env.NODE_ENV,
    sampleRate: 100,
    trackInteractions: true,
  });
  datadogRum.startSessionReplayRecording();
}
