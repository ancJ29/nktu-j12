import { useNavigate } from 'react-router';

import { Box, Group, type MantineStyleProps, Title } from '@mantine/core';

import { useLogoAndTitle } from '@/hooks/useLogoAndTitle';


type AppLogoProps = {
  readonly c?: string;
  readonly fw?: MantineStyleProps['fw'];
  readonly link?: string;
  readonly noTitle?: boolean;
};

const logoUrl = '/icons/logo-white.svg';
export function AppLogo({ noTitle = false, c, fw, link = '/home' }: AppLogoProps) {
  const navigate = useNavigate();
  // logoUrl,
  const { title } = useLogoAndTitle();

  return (
    <Group gap="xs" style={{ cursor: 'pointer' }} onClick={() => navigate(link)}>
      {/* {isDevelopment ? <IconCubeSpark color='var(--app-shell-color)' />} */}
      <Box
        component="img"
        src={logoUrl}
        alt="Logo"
        fw={fw}
        style={{
          width: 30,
          height: 30,
        }}
      />
      {noTitle ? null : (
        <Title order={3} c={c}>
          {title}
        </Title>
      )}
    </Group>
  );
}
