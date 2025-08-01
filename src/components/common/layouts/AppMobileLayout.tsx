import {AppShell, Group, LoadingOverlay} from '@mantine/core';
import {CommonMobileHeader, CommonMobileFooter} from '../ui';
import {AppLogo, GoBack} from '../navigation';
import {ErrorAlert} from '../feedback';
import classes from './AppLayoutMobile.module.css';

type AppMobileLayoutProps = {
  readonly header?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly isLoading?: boolean;
  readonly footer?: React.ReactNode;
  readonly withLogo?: boolean;
  readonly withGoBack?: boolean;
  readonly noFooter?: boolean;
  readonly noHeader?: boolean;
  readonly error?: string;
  readonly clearError?: () => void;
};
export function AppMobileLayout({
  children,
  header,
  footer,
  error,
  clearError,
  withGoBack = false,
  isLoading = false,
  withLogo = false,
  noHeader = false,
  noFooter = false,
}: AppMobileLayoutProps) {
  return (
    <AppShell
      header={{height: 60}}
      footer={{height: 60}}
      padding={0}
      className={classes.mobileLayout}
    >
      {noHeader ? null : (
        <AppShell.Header className={classes.header}>
          <Group my="auto" h="100%" px="sm">
            {withGoBack ? <GoBack variant="mobile-header" /> : null}
            {withLogo ? <AppLogo noTitle /> : null}
            {header ?? <CommonMobileHeader />}
          </Group>
        </AppShell.Header>
      )}

      <AppShell.Main className={classes.main} my="sm">
        <LoadingOverlay
          visible={isLoading}
          overlayProps={{blur: 2}}
          transitionProps={{duration: 300}}
        />
        <ErrorAlert error={error} clearError={clearError} />
        {children}
      </AppShell.Main>
      {noFooter ? null : (
        <AppShell.Footer className={classes.footer}>
          {footer ?? <CommonMobileFooter />}
        </AppShell.Footer>
      )}
    </AppShell>
  );
}
