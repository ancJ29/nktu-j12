import { useMemo } from 'react';

import { Button, Group, Popover, Select, Stack } from '@mantine/core';
import { IconAdjustments, IconCalendar } from '@tabler/icons-react';

import { DatePickerInput } from '@/components/common';
import { useTranslation } from '@/hooks/useTranslation';
import { useClientConfig, useEmployees, usePermissions } from '@/stores/useAppStore';
import { canViewAllDeliveryRequest } from '@/utils/permission.utils';

interface DeliveryAdvancedFiltersPopoverProps {
  readonly assignedTo?: string;
  readonly scheduledDateStart?: Date;
  readonly scheduledDateEnd?: Date;
  readonly onAssignedToChange: (assignedTo: string | undefined) => void;
  readonly onScheduledDateChange: (start: Date | undefined, end: Date | undefined) => void;
}

export function DeliveryAdvancedFiltersPopover({
  assignedTo,
  scheduledDateStart,
  scheduledDateEnd,
  onAssignedToChange,
  onScheduledDateChange,
}: DeliveryAdvancedFiltersPopoverProps) {
  const { t } = useTranslation();
  const permissions = usePermissions();
  const employees = useEmployees();
  const clientConfig = useClientConfig();
  const canViewAll = canViewAllDeliveryRequest(permissions);

  // Employee options for assignee filter - filtered by assigneeIds from clientConfig
  const employeeOptions = useMemo(() => {
    const assigneeIds = clientConfig.features?.deliveryRequest?.assigneeIds ?? [];

    // Filter employees based on assigneeIds if configured, otherwise show all
    const filteredEmployees =
      assigneeIds.length > 0
        ? employees.filter((employee) => assigneeIds.includes(employee.id))
        : employees;

    return filteredEmployees.map((employee) => ({
      value: employee.id,
      label: employee.fullName,
    }));
  }, [employees, clientConfig.features?.deliveryRequest]);

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
          {/* Assignee Filter - Only show if user has canViewAll permission */}
          {canViewAll && (
            <Select
              clearable
              searchable
              label={t('delivery.assignedTo')}
              placeholder={t('delivery.filters.selectAssignee')}
              data={employeeOptions}
              value={assignedTo ?? null}
              onChange={(value) => onAssignedToChange(value || undefined)}
            />
          )}

          {/* Scheduled Date Range */}
          <Stack gap="xs">
            <DatePickerInput
              label={t('delivery.scheduledDate')}
              placeholder={t('delivery.filters.selectScheduledDate')}
              value={[scheduledDateStart, scheduledDateEnd]}
              onChange={(dates) => {
                if (!dates) {
                  onScheduledDateChange(undefined, undefined);
                } else {
                  const [start, end] = dates;
                  const startDate = start ? new Date(start) : undefined;
                  const endDate = end ? new Date(end) : undefined;
                  onScheduledDateChange(startDate, endDate);
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
                  onScheduledDateChange(today, endOfToday);
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
                  onScheduledDateChange(startOfWeek, endOfWeek);
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
                  onScheduledDateChange(startOfNextWeek, endOfNextWeek);
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
