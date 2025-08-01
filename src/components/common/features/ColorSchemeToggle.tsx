import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from '@mantine/core';
import {IconSun, IconMoon} from '@tabler/icons-react';
import {useAppStore} from '@/stores/useAppStore';
import {isDevelopment} from '@/utils/env';

export function ColorSchemeToggle() {
  const {publicClientConfig} = useAppStore();
  const {setColorScheme} = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  if (!publicClientConfig?.features?.darkMode && !isDevelopment) {
    return null;
  }

  return (
    <ActionIcon
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
      onClick={() =>
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
      }
    >
      {computedColorScheme === 'light' ? (
        <IconMoon stroke={1.5} />
      ) : (
        <IconSun stroke={1.5} />
      )}
    </ActionIcon>
  );
}
