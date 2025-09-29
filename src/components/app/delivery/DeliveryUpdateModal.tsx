import { useEffect, useMemo, useState } from 'react';

import {
  Button,
  Drawer,
  Group,
  Modal,
  Select,
  Stack,
  Switch,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { IconBuilding, IconCalendar, IconEdit, IconMapPin, IconUrgent } from '@tabler/icons-react';

import { DateInput, UrgentBadge } from '@/components/common';
import { useDeviceType } from '@/hooks/useDeviceType';
import { useTranslation } from '@/hooks/useTranslation';
import type { DeliveryRequest } from '@/services/sales';
import { useClientConfig, useEmployees } from '@/stores/useAppStore';
import { useCustomerMapByCustomerId } from '@/stores/useAppStore';
import { getCustomerNameByCustomerId } from '@/utils/overview';

type DeliveryUpdateModalProps = {
  readonly opened: boolean;
  readonly deliveryRequest?: DeliveryRequest;
  readonly onClose: () => void;
  readonly onConfirm: (data: {
    assignedTo: string;
    scheduledDate: string;
    notes: string;
    isUrgentDelivery?: boolean;
    vendorName?: string;
    receiveAddress?: {
      oneLineAddress: string;
      googleMapsUrl?: string;
    };
    deliveryAddress?: {
      oneLineAddress: string;
      googleMapsUrl?: string;
    };
  }) => Promise<void>;
};

export function DeliveryUpdateModal({
  opened,
  deliveryRequest,
  onClose,
  onConfirm,
}: DeliveryUpdateModalProps) {
  const { t } = useTranslation();
  const { isMobile } = useDeviceType();
  const employees = useEmployees();
  const clientConfig = useClientConfig();
  const customerMapByCustomerId = useCustomerMapByCustomerId();

  // Form state - initialize with existing values
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);
  const [scheduledDate, setScheduledDate] = useState<Date | undefined>(undefined);
  const [notes, setNotes] = useState('');
  const [isUrgentDelivery, setIsUrgentDelivery] = useState(false);
  const [vendorName, setVendorName] = useState('');
  const [oneLineAddress, setOneLineAddress] = useState('');
  const [googleMapsUrl, setGoogleMapsUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Employee options for select - filtered by assigneeIds from clientConfig
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

  // Initialize form with existing values when modal opens or deliveryRequest changes
  useEffect(() => {
    if (opened && deliveryRequest) {
      setSelectedEmployeeId(deliveryRequest.assignedTo || null);
      setScheduledDate(
        deliveryRequest.scheduledDate ? new Date(deliveryRequest.scheduledDate) : undefined,
      );
      setNotes(deliveryRequest.notes || '');
      setIsUrgentDelivery(deliveryRequest.isUrgentDelivery || false);

      // Set vendor name if RECEIVE type
      setVendorName(deliveryRequest.vendorName || '');

      // Set address based on type
      const address = deliveryRequest.isReceive
        ? deliveryRequest.receiveAddress
        : deliveryRequest.deliveryAddress;

      setOneLineAddress(address?.oneLineAddress || '');
      setGoogleMapsUrl(address?.googleMapsUrl || '');
    } else if (!opened) {
      // Reset form when modal closes
      setSelectedEmployeeId(null);
      setScheduledDate(undefined);
      setNotes('');
      setIsUrgentDelivery(false);
      setVendorName('');
      setOneLineAddress('');
      setGoogleMapsUrl('');
    }
  }, [opened, deliveryRequest]);

  // Handle form submission
  const handleSubmit = async () => {
    if (!selectedEmployeeId || !scheduledDate) {
      return;
    }

    // For RECEIVE type, address is required
    if (deliveryRequest?.isReceive && !oneLineAddress.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const data: Parameters<typeof onConfirm>[0] = {
        assignedTo: selectedEmployeeId,
        scheduledDate: scheduledDate.toISOString(),
        notes,
        isUrgentDelivery,
      };

      // Add vendor name for RECEIVE type
      if (deliveryRequest?.isReceive) {
        data.vendorName = vendorName.trim() || undefined;
        if (oneLineAddress.trim()) {
          data.receiveAddress = {
            oneLineAddress: oneLineAddress.trim(),
            googleMapsUrl: googleMapsUrl.trim() || undefined,
          };
        }
      } else if (deliveryRequest?.isDelivery && oneLineAddress.trim()) {
        data.deliveryAddress = {
          oneLineAddress: oneLineAddress.trim(),
          googleMapsUrl: googleMapsUrl.trim() || undefined,
        };
      }

      await onConfirm(data);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = (
    <Stack gap="md">
      {deliveryRequest && (
        <Stack gap="xs">
          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              {t('delivery.id')}:
            </Text>
            <Text size="sm" fw={500}>
              {deliveryRequest.deliveryRequestNumber}
            </Text>
          </Group>

          {/* Show customer only if available (DELIVERY type usually has customer) */}
          {deliveryRequest.customerId && (
            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                {t('common.customer')}:
              </Text>
              <Text size="sm" fw={500}>
                {getCustomerNameByCustomerId(customerMapByCustomerId, deliveryRequest.customerId)}
              </Text>
            </Group>
          )}

          {/* Show PO number only if available (DELIVERY type usually has PO) */}
          {deliveryRequest.purchaseOrderNumber && (
            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                {t('po.poNumber')}:
              </Text>
              <Text size="sm" fw={500}>
                {deliveryRequest.purchaseOrderNumber}
              </Text>
            </Group>
          )}
        </Stack>
      )}

      <Select
        label={t('delivery.assignedTo')}
        placeholder={t('delivery.form.selectAssignee')}
        data={employeeOptions}
        value={selectedEmployeeId}
        onChange={setSelectedEmployeeId}
        searchable
        required
        leftSection={<IconEdit size={16} />}
      />

      <DateInput
        label={t('delivery.scheduledDate')}
        placeholder={t('delivery.form.selectDate')}
        value={scheduledDate}
        onChange={(date) => setScheduledDate(date ? new Date(date) : undefined)}
        required
        minDate={new Date()}
        leftSection={<IconCalendar size={16} />}
      />

      {/* Show vendor name field for RECEIVE type */}
      {deliveryRequest?.isReceive && (
        <TextInput
          label={t('delivery.vendorName')}
          placeholder={t('delivery.vendorNamePlaceholder')}
          value={vendorName}
          onChange={(e) => setVendorName(e.currentTarget.value)}
          leftSection={<IconBuilding size={16} />}
        />
      )}

      {/* Address fields - show appropriate label based on type */}
      <TextInput
        label={
          deliveryRequest?.isReceive
            ? t('delivery.vendorPickupAddress')
            : t('customer.deliveryAddress')
        }
        placeholder={
          deliveryRequest?.isReceive
            ? t('delivery.vendorPickupAddressPlaceholder')
            : t('customer.deliveryAddressPlaceholder')
        }
        value={oneLineAddress}
        onChange={(e) => setOneLineAddress(e.currentTarget.value)}
        leftSection={<IconMapPin size={16} />}
        required={deliveryRequest?.isReceive}
      />

      <TextInput
        label={t('common.googleMapsUrl')}
        placeholder={t('common.googleMapsUrlPlaceholder')}
        value={googleMapsUrl}
        onChange={(e) => setGoogleMapsUrl(e.currentTarget.value)}
        leftSection={<IconMapPin size={16} />}
      />

      <Textarea
        label={t('common.notes')}
        placeholder={t('delivery.form.enterNotes')}
        value={notes}
        onChange={(e) => setNotes(e.currentTarget.value)}
        rows={3}
      />

      <Switch
        label={
          <Group gap="xs">
            {t('delivery.urgentDelivery')}
            {isUrgentDelivery && <UrgentBadge size="xs" withIcon={false} />}
          </Group>
        }
        description={t('delivery.form.urgentDeliveryDescription')}
        checked={isUrgentDelivery}
        onChange={(event) => setIsUrgentDelivery(event.currentTarget.checked)}
        size="md"
        color="red"
        thumbIcon={isUrgentDelivery ? <IconUrgent size={12} /> : undefined}
      />

      <Group justify="flex-end" gap="sm">
        <Button variant="light" onClick={onClose} disabled={isSubmitting}>
          {t('common.cancel')}
        </Button>
        <Button
          onClick={handleSubmit}
          loading={isSubmitting}
          disabled={
            !selectedEmployeeId ||
            !scheduledDate ||
            (deliveryRequest?.isReceive && !oneLineAddress.trim())
          }
          leftSection={<IconEdit size={16} />}
        >
          {t('common.form.update')}
        </Button>
      </Group>
    </Stack>
  );

  // Determine modal title based on type
  const modalTitle = deliveryRequest?.isReceive
    ? t('delivery.updateReceiveRequest')
    : t('delivery.updateDeliveryRequest');

  if (isMobile) {
    return (
      <Drawer
        opened={opened}
        onClose={onClose}
        title={modalTitle}
        position="bottom"
        size="auto"
        padding="md"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={modalTitle}
      centered
      size="md"
      trapFocus
      returnFocus
    >
      {content}
    </Modal>
  );
}
