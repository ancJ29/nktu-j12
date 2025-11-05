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

export function POGoodReturnSection({ purchaseOrder }: PODeliverySectionProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleViewDeliveryRequest = (goodsReturnRequestId: string) => {
    navigate(getDeliveryDetailRoute(goodsReturnRequestId));
  };

  // Conditional render instead of early return
  if (!purchaseOrder.goodsReturnRequest) return null;

  return (
    <div>
      <Text size="sm" fw={500} c="red" mb="xs">
        <IconTruckDelivery size={14} style={{ verticalAlign: 'middle' }} />{' '}
        {t('common.entity.deliveryRequest')}
      </Text>
      <Stack gap="xs">
        <Group gap="xs">
          <Text size="xs" c="dimmed">
            {t('delivery.id')}:
          </Text>
          <Anchor
            size="sm"
            c="red"
            fw="bold"
            onClick={() =>
              handleViewDeliveryRequest(
                purchaseOrder.goodsReturnRequest?.goodsReturnRequestId || '-',
              )
            }
          >
            {purchaseOrder.goodsReturnRequest.goodsReturnRequestNumber}
          </Anchor>
        </Group>
        <Group gap="xs">
          <Text size="xs" c="dimmed">
            {t('delivery.status')}:
          </Text>
          <DeliveryStatusBadge status={purchaseOrder.goodsReturnRequest.status} />
        </Group>
        <Group gap="xs">
          <Text size="xs" c="dimmed">
            {t('delivery.assignedTo')}:
          </Text>
          <Group gap={4}>
            <IconUser size={14} color="var(--mantine-color-gray-6)" />
            <Text size="sm">{purchaseOrder.goodsReturnRequest.assignedTo || '-'}</Text>
          </Group>
        </Group>
        <Group gap="xs">
          <Text size="xs" c="dimmed">
            {t('delivery.scheduledDate')}:
          </Text>
          <Group gap={4}>
            <IconCalendar size={14} color="var(--mantine-color-gray-6)" />
            <Text size="sm">{formatDate(purchaseOrder.goodsReturnRequest.scheduledDate)}</Text>
          </Group>
        </Group>
      </Stack>
    </div>
  );
}
