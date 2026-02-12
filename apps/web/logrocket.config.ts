// LogRocket initialization for Next.js (web)
import LogRocket from 'logrocket';

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_LOGROCKET_ID) {
  LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_ID);
}
