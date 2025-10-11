import { useMemo } from 'react';

import { Button, Group, Popover, Select, Stack } from '@mantine/core';
import { IconAdjustments, IconCalendar } from '@tabler/icons-react';

import { DatePickerInput } from '@/components/common';
import { useTranslation } from '@/hooks/useTranslation';
import { useEmployees, usePermissions } from '@/stores/useAppStore';
import { canViewAllPurchaseOrder } from '@/utils/permission.utils';

interface POAdvancedFiltersPopoverProps {
  readonly salesId?: string;
  readonly orderDateStart?: Date;
  readonly orderDateEnd?: Date;
  readonly deliveryDateStart?: Date;
  readonly deliveryDateEnd?: Date;
  readonly onSalesIdChange: (salesId: string | undefined) => void;
  readonly onOrderDateChange: (start: Date | undefined, end: Date | undefined) => void;
  readonly onDeliveryDateChange: (start: Date | undefined, end: Date | undefined) => void;
}

export function POAdvancedFiltersPopover({
  salesId,
  orderDateStart,
  orderDateEnd,
  deliveryDateStart,
  deliveryDateEnd,
  onSalesIdChange,
  onOrderDateChange,
  onDeliveryDateChange,
}: POAdvancedFiltersPopoverProps) {
  const { t } = useTranslation();
  const permissions = usePermissions();
  const employees = useEmployees();
  const canViewAll = canViewAllPurchaseOrder(permissions);

  // Employee options for sales filter
  const employeeOptions = useMemo(() => {
    return employees.map((e) => ({
      value: e.id,
      label: e.fullName,
    }));
  }, [employees]);

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
          {/* Sales Representative Filter - Only show if user has canViewAll permission */}
          {canViewAll && (
            <Select
              clearable
              searchable
              label={t('po.salesPerson')}
              placeholder={t('po.selectSalesPerson')}
              data={employeeOptions}
              value={salesId || ''}
              onChange={(value) => onSalesIdChange(value || undefined)}
            />
          )}

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
