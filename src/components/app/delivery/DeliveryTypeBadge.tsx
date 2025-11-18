import { Badge } from '@mantine/core';

import { useTranslation } from '@/hooks/useTranslation';
import type { DeliveryRequestType } from '@/lib/api/schemas/deliveryRequest.schemas';

interface DeliveryTypeBadgeProps {
  readonly type: DeliveryRequestType;
  readonly size?: 'xs' | 'sm' | 'md' | 'lg';
}

const typeKeyMap = {
  DELIVERY: 'delivery.types.delivery',
  RECEIVE: 'delivery.types.receive',
  GOODS_RETURN: 'delivery.types.goodsReturn',
  ADDITIONAL_DELIVERY: 'delivery.types.additionalDelivery',
} as const;

const typeColorMap = {
  DELIVERY: 'orange',
  RECEIVE: 'cyan',
  GOODS_RETURN: 'red',
  ADDITIONAL_DELIVERY: 'teal',
} as const;

export function DeliveryTypeBadge({ type, size = 'sm' }: DeliveryTypeBadgeProps) {
  const { t } = useTranslation();
  const color = typeColorMap[type] || 'gray';

  return (
    <Badge color={color} size={size}>
      {t(typeKeyMap[type])}
    </Badge>
  );
}
