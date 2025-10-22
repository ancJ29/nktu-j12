import { ActionIcon } from '@mantine/core';
import { IconMessageCircle } from '@tabler/icons-react';

type NewMessageBadgeProps = {
  readonly hasNewMessage?: boolean;
};

export function NewMessageBadge({ hasNewMessage }: NewMessageBadgeProps) {
  if (!hasNewMessage) {
    return null;
  }
  return (
    <ActionIcon variant="transparent" c="red.5" fw="800">
      <IconMessageCircle fill="var(--mantine-color-red-5)" size={16} aria-hidden="true" />
    </ActionIcon>
  );
}
