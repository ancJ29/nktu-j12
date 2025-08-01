import {useEffect, useState} from 'react';
import {Outlet, useNavigate} from 'react-router';
import {Center, Loader} from '@mantine/core';
import {useAppStore} from '@/stores/useAppStore';
import {PWAInstallPrompt} from '@/components/common';

export function ServiceLayout() {
  const [ready, setReady] = useState(false);
  const {checkAuth} = useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    run();
    async function run() {
      await checkAuth();
      setReady(true);
    }
  }, [checkAuth, navigate]);

  if (!ready) {
    return (
      <Center h="100vh">
        <Loader size="lg" />
      </Center>
    );
  }

  return (
    <>
      <Outlet />
      <PWAInstallPrompt />
    </>
  );
}
