import { useNavigate } from 'react-router';

import { Anchor, Group, Stack, Text } from '@mantine/core';
import { IconCalendar, IconTruckDelivery, IconUser } from '@tabler/icons-react';

import { getDeliveryDetailRoute } from '@/config/routeConfig';
import { useTranslation } from '@/hooks/useTranslation';
import type { PurchaseOrder } from '@/services/sales/purchaseOrder';
import { formatDate } from '@/utils/time';

import { DeliveryStatusBadge } from '../delivery/DeliveryStatusBadge';

type PODeliverySectionProps = {
  readonly purchaseOrder: PurchaseOrder;
};

export function POAdditionalDeliverySection({ purchaseOrder }: PODeliverySectionProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleViewDeliveryRequest = (additionalDeliveryRequestId: string) => {
    navigate(getDeliveryDetailRoute(additionalDeliveryRequestId));
  };

  // Conditional render instead of early return
  if (!purchaseOrder.additionalDeliveryRequest) return null;

  return (
    <div>
      <Text size="sm" fw={500} c="teal" mb="xs">
        <IconTruckDelivery size={14} style={{ verticalAlign: 'middle' }} />{' '}
        {t('common.entity.additionalDeliveryRequest')}
      </Text>
      <Stack gap="xs">
        <Group gap="xs">
          <Text size="xs" c="dimmed">
            {t('delivery.id')}:
          </Text>
          <Anchor
            size="sm"
            c="teal"
            fw="bold"
            onClick={() =>
              handleViewDeliveryRequest(
                purchaseOrder.additionalDeliveryRequest?.additionalDeliveryRequestId || '-',
              )
            }
          >
            {purchaseOrder.additionalDeliveryRequest.additionalDeliveryRequestNumber}
          </Anchor>
        </Group>
        <Group gap="xs">
          <Text size="xs" c="dimmed">
            {t('delivery.status')}:
          </Text>
          <DeliveryStatusBadge status={purchaseOrder.additionalDeliveryRequest.status} />
        </Group>
        <Group gap="xs">
          <Text size="xs" c="dimmed">
            {t('delivery.assignedTo')}:
          </Text>
          <Group gap={4}>
            <IconUser size={14} color="var(--mantine-color-gray-6)" />
            <Text size="sm">{purchaseOrder.additionalDeliveryRequest.assignedTo || '-'}</Text>
          </Group>
        </Group>
        <Group gap="xs">
          <Text size="xs" c="dimmed">
            {t('delivery.scheduledDate')}:
          </Text>
          <Group gap={4}>
            <IconCalendar size={14} color="var(--mantine-color-gray-6)" />
            <Text size="sm">
              {formatDate(purchaseOrder.additionalDeliveryRequest.scheduledDate)}
            </Text>
          </Group>
        </Group>
      </Stack>
    </div>
  );
}
