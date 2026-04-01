/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo } from 'react';

import { Button, Group, Select, Stack } from '@mantine/core';
import { IconCalendar, IconChevronDown, IconClearAll, IconUser } from '@tabler/icons-react';

import type { DeliveryStatusType } from '@/constants/deliveryRequest';
import { useTranslation } from '@/hooks/useTranslation';
import { useCustomerOptions, useEmployees, usePermissions, useVendorOptions } from '@/stores/useAppStore';
import { canFilterDeliveryRequest } from '@/utils/permission.utils';

interface DeliveryFilterBarMobileProps {
  readonly selectedStatuses: DeliveryStatusType[];
  readonly assignedTo?: string;
  readonly customerId?: string;
  readonly vendorId?: string;
  readonly hasDateFilter: boolean;
  readonly quickAction?: string;
  readonly hasActiveFilters: boolean;
  readonly onQuickActionsClick: () => void;
  readonly onStatusClick: () => void;
  readonly onEmployeeClick: () => void;
  readonly onCustomerChange: (customerId: string | undefined) => void;
  readonly onVendorChange: (vendorId: string | undefined) => void;
  readonly onClearFilters: () => void;
}

export function DeliveryFilterBarMobile({
  selectedStatuses,
  assignedTo,
  customerId,
  vendorId,
  hasDateFilter,
  quickAction,
  hasActiveFilters,
  onQuickActionsClick,
  onStatusClick,
  onEmployeeClick,
  onCustomerChange,
  onVendorChange,
  onClearFilters,
}: DeliveryFilterBarMobileProps) {
  const { t } = useTranslation();
  const permissions = usePermissions();
  const employees = useEmployees();
  const customerOptions = useCustomerOptions();
  const vendorOptions = useVendorOptions();

  const canFilter = useMemo(() => canFilterDeliveryRequest(permissions), [permissions]);

  const getStatusLabel = useCallback(() => {
    if (selectedStatuses.length === 0) {
      return t('common.filters.allStatus');
    }
    if (selectedStatuses.length === 1) {
      const statusKey = `delivery.statuses.${selectedStatuses[0].toLowerCase()}` as any;
      return t(statusKey);
    }
    return `${t('delivery.status')} (${selectedStatuses.length})`;
  }, [selectedStatuses, t]);

  const getQuickActionLabel = useCallback(() => {
    if (quickAction) {
      return quickAction;
    }
    return hasDateFilter
      ? `${t('delivery.quickActions.title')} (1)`
      : t('delivery.quickActions.title');
  }, [quickAction, hasDateFilter, t]);

  const getEmployeeLabel = useCallback((): string => {
    if (!assignedTo) {
      return t('delivery.filters.allEmployees');
    }
    const employee = employees.find((emp) => emp.id === assignedTo);
    return employee?.fullName ?? t('delivery.filters.allEmployees');
  }, [assignedTo, employees, t]);

  if (!canFilter) {
    return null;
  }

  return (
    <Stack p="sm" gap="sm" style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
      {/* Customer & Vendor Select */}
      <Group gap="xs" grow>
        <Select
          clearable
          searchable
          placeholder={t('delivery.filters.selectCustomer')}
          data={customerOptions}
          value={customerId ?? null}
          onChange={(value) => onCustomerChange(value || undefined)}
          size="sm"
        />
        <Select
          clearable
          searchable
          placeholder={t('common.filters.selectVendor')}
          data={vendorOptions}
          value={vendorId ?? null}
          onChange={(value) => onVendorChange(value || undefined)}
          size="sm"
        />
      </Group>

      {/* Filter Buttons */}
      <Group gap="xs">
        <Button
          size="xs"
          variant={hasDateFilter || quickAction ? 'filled' : 'light'}
          rightSection={<IconCalendar size={16} />}
          onClick={onQuickActionsClick}
          style={{ flex: 1 }}
        >
          {getQuickActionLabel()}
        </Button>

        <Button
          size="xs"
          variant={assignedTo ? 'filled' : 'light'}
          rightSection={<IconUser size={16} />}
          onClick={onEmployeeClick}
          style={{ flex: 1 }}
        >
          {getEmployeeLabel()}
        </Button>

        <Button
          size="xs"
          variant={selectedStatuses.length > 0 ? 'filled' : 'light'}
          rightSection={<IconChevronDown size={16} />}
          onClick={onStatusClick}
          style={{ flex: 1 }}
        >
          {getStatusLabel()}
        </Button>

        <Button
          size="xs"
          variant="subtle"
          color="red"
          disabled={!hasActiveFilters}
          onClick={onClearFilters}
          leftSection={<IconClearAll size={16} color="var(--mantine-color-red-6)" />}
        >
          {t('common.clear')}
        </Button>
      </Group>
    </Stack>
  );
}
