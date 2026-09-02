import { StrictMode, Suspense } from 'react';

import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { createRoot } from 'react-dom/client';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import './index.css';
import { AppLoader, ErrorModal } from '@/components/common';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import registerGlobalErrorCatcher from '@/utils/errorCatcher';
import { registerLogger } from '@/utils/logger';
import { initializeOrientationLock } from '@/utils/screenOrientation';

import App from './App.tsx';
import i18n from './lib/i18n';

// Initialize i18n
void i18n;

// Register global error catcher
const unregisterErrorCatcher = registerGlobalErrorCatcher();

// Cleanup on unload (optional)
window.addEventListener('unload', () => {
  unregisterErrorCatcher();
});

registerLogger();

// Initialize screen orientation lock for PWA
initializeOrientationLock();

// TODO: remove this later
const redirectConfigs: Record<string, string> = {
  // 'try-credo.internal.cr3do.dev': 'https://use-credo.cr3do.dev/',
  'nktu-j17.vercel.app': 'https://nktu.cr3do.dev/',
  'nktu-j12.vercel.app': 'https://nktu.cr3do.dev/',
};

if (redirectConfigs[window.location.host]) {
  window.location.href = redirectConfigs[window.location.host];
} else {
  createRoot(document.querySelector('#root')!).render(
    <StrictMode>
      <ThemeProvider>
        <Suspense fallback={<AppLoader />}>
          <Notifications />
          <ModalsProvider>
            <ErrorModal />
            <App />
          </ModalsProvider>
        </Suspense>
      </ThemeProvider>
    </StrictMode>,
  );
}
