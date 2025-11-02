import type { ReactNode } from 'react';

import { type MantineSize, Modal, rem, Text } from '@mantine/core';

import { Drawer } from '@/components/common/ui';
import { useDeviceType } from '@/hooks/useDeviceType';

type ModalOrDrawerProps = {
  readonly opened: boolean;
  readonly title: string;
  readonly modalSize?: number | MantineSize | (string & {}) | undefined;
  readonly drawerSize?: number | MantineSize | (string & {}) | undefined;
  readonly children: ReactNode;
  readonly onClose: () => void;
};
export function ModalOrDrawer({
  title,
  modalSize,
  drawerSize,
  opened,
  onClose,
  children,
}: ModalOrDrawerProps) {
  const { isDesktop } = useDeviceType();
  if (isDesktop) {
    return (
      <Modal
        centered
        opened={opened}
        title={<Text fw={700}>{title}</Text>}
        size={modalSize}
        onClose={onClose}
      >
        {children}
      </Modal>
    );
  }

  return (
    <Drawer
      opened={opened}
      title={<Text fw={600}>{title}</Text>}
      position="bottom"
      size={drawerSize ?? '50vh'}
      transitionProps={{
        transition: 'slide-up',
        duration: 250,
        timingFunction: 'ease',
      }}
      styles={{
        content: {
          borderTopLeftRadius: rem(16),
          borderTopRightRadius: rem(16),
        },
        header: {
          borderTopLeftRadius: rem(16),
          borderTopRightRadius: rem(16),
        },
      }}
      onClose={onClose}
    >
      {children}
    </Drawer>
  );
}
