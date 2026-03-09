import { Button, Group, Popover, Stack } from '@mantine/core';
import { IconAdjustments, IconCalendar } from '@tabler/icons-react';

import { DatePickerInput } from '@/components/common';
import { useTranslation } from '@/hooks/useTranslation';

interface POAdvancedFiltersPopoverProps {
  readonly orderDateStart?: Date;
  readonly orderDateEnd?: Date;
  readonly deliveryDateStart?: Date;
  readonly deliveryDateEnd?: Date;
  readonly onOrderDateChange: (start: Date | undefined, end: Date | undefined) => void;
  readonly onDeliveryDateChange: (start: Date | undefined, end: Date | undefined) => void;
}

export function POAdvancedFiltersPopover({
  orderDateStart,
  orderDateEnd,
  deliveryDateStart,
  deliveryDateEnd,
  onOrderDateChange,
  onDeliveryDateChange,
}: POAdvancedFiltersPopoverProps) {
  const { t } = useTranslation();

  return (
    <Popover
      position="bottom-start"
      shadow="md"
      withArrow
      closeOnClickOutside={false}
      trapFocus={false}
    >
      <Popover.Target>
        <Button variant="light" leftSection={<IconAdjustments size={16} />}>
          {t('po.moreFilters')}
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack gap="md" style={{ minWidth: 300 }}>
          {/* Order Date Range */}
          <Stack gap="xs">
            <DatePickerInput
              label={t('po.orderDate')}
              placeholder={t('po.selectDateRange')}
              value={[orderDateStart, orderDateEnd]}
              onChange={(dates) => {
                if (!dates) {
                  onOrderDateChange(undefined, undefined);
                } else {
                  const [start, end] = dates;
                  const startDate = start ? new Date(start) : undefined;
                  const endDate = end ? new Date(end) : undefined;
                  onOrderDateChange(startDate, endDate);
                }
              }}
            />
            <Group gap="xs">
              <Button
                size="xs"
                variant="light"
                leftSection={<IconCalendar size={14} />}
                onClick={() => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const endOfToday = new Date();
                  endOfToday.setHours(23, 59, 59, 999);
                  onOrderDateChange(today, endOfToday);
                }}
              >
                {t('delivery.quickActions.today')}
              </Button>
              <Button
                size="xs"
                variant="light"
                leftSection={<IconCalendar size={14} />}
                onClick={() => {
                  const today = new Date();
                  const dayOfWeek = today.getDay();
                  const startOfWeek = new Date(today);
                  startOfWeek.setDate(today.getDate() - dayOfWeek);
                  startOfWeek.setHours(0, 0, 0, 0);
                  const endOfWeek = new Date(startOfWeek);
                  endOfWeek.setDate(startOfWeek.getDate() + 6);
                  endOfWeek.setHours(23, 59, 59, 999);
                  onOrderDateChange(startOfWeek, endOfWeek);
                }}
              >
                {t('delivery.quickActions.thisWeek')}
              </Button>
              <Button
                size="xs"
                variant="light"
                leftSection={<IconCalendar size={14} />}
                onClick={() => {
                  const today = new Date();
                  const dayOfWeek = today.getDay();
                  const startOfNextWeek = new Date(today);
                  startOfNextWeek.setDate(today.getDate() - dayOfWeek + 7);
                  startOfNextWeek.setHours(0, 0, 0, 0);
                  const endOfNextWeek = new Date(startOfNextWeek);
                  endOfNextWeek.setDate(startOfNextWeek.getDate() + 6);
                  endOfNextWeek.setHours(23, 59, 59, 999);
                  onOrderDateChange(startOfNextWeek, endOfNextWeek);
                }}
              >
                {t('delivery.quickActions.nextWeek')}
              </Button>
            </Group>
          </Stack>

          {/* Delivery Date Range */}
          <Stack gap="xs">
            <DatePickerInput
              label={t('po.deliveryDate')}
              placeholder={t('po.selectDateRange')}
              value={[deliveryDateStart, deliveryDateEnd]}
              onChange={(dates) => {
                if (!dates) {
                  onDeliveryDateChange(undefined, undefined);
                } else {
                  const [start, end] = dates;
                  const startDate = start ? new Date(start) : undefined;
                  const endDate = end ? new Date(end) : undefined;
                  onDeliveryDateChange(startDate, endDate);
                }
              }}
            />
            <Group gap="xs">
              <Button
                size="xs"
                variant="light"
                leftSection={<IconCalendar size={14} />}
                onClick={() => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const endOfToday = new Date();
                  endOfToday.setHours(23, 59, 59, 999);
                  onDeliveryDateChange(today, endOfToday);
                }}
              >
                {t('delivery.quickActions.today')}
              </Button>
              <Button
                size="xs"
                variant="light"
                leftSection={<IconCalendar size={14} />}
                onClick={() => {
                  const today = new Date();
                  const dayOfWeek = today.getDay();
                  const startOfWeek = new Date(today);
                  startOfWeek.setDate(today.getDate() - dayOfWeek);
                  startOfWeek.setHours(0, 0, 0, 0);
                  const endOfWeek = new Date(startOfWeek);
                  endOfWeek.setDate(startOfWeek.getDate() + 6);
                  endOfWeek.setHours(23, 59, 59, 999);
                  onDeliveryDateChange(startOfWeek, endOfWeek);
                }}
              >
                {t('delivery.quickActions.thisWeek')}
              </Button>
              <Button
                size="xs"
                variant="light"
                leftSection={<IconCalendar size={14} />}
                onClick={() => {
                  const today = new Date();
                  const dayOfWeek = today.getDay();
                  const startOfNextWeek = new Date(today);
                  startOfNextWeek.setDate(today.getDate() - dayOfWeek + 7);
                  startOfNextWeek.setHours(0, 0, 0, 0);
                  const endOfNextWeek = new Date(startOfNextWeek);
                  endOfNextWeek.setDate(startOfNextWeek.getDate() + 6);
                  endOfNextWeek.setHours(23, 59, 59, 999);
                  onDeliveryDateChange(startOfNextWeek, endOfNextWeek);
                }}
              >
                {t('delivery.quickActions.nextWeek')}
              </Button>
            </Group>
          </Stack>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
