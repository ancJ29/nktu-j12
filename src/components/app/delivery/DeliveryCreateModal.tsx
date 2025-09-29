import { useEffect, useMemo, useState } from 'react';

import {
  Alert,
  Button,
  Group,
  LoadingOverlay,
  ScrollArea,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import {
  IconCalendar,
  IconEdit,
  IconMapPin,
  IconPackage,
  IconTruck,
  IconX,
} from '@tabler/icons-react';

import { DateInput, ModalOrDrawer } from '@/components/common';
import { useTranslation } from '@/hooks/useTranslation';
import { useClientConfig, useEmployees } from '@/stores/useAppStore';

type DeliveryCreateModalProps = {
  readonly opened: boolean;
  readonly onClose: () => void;
  readonly onConfirm: (data: {
    type: 'RECEIVE';
    assignedTo: string;
    scheduledDate: string;
    notes?: string;
    isUrgentDelivery?: boolean;
    vendorName: string;
    receiveAddress: {
      oneLineAddress: string;
      googleMapsUrl?: string;
    };
  }) => Promise<void>;
  readonly isLoading?: boolean;
};

export function DeliveryCreateModal({
  opened,
  onClose,
  onConfirm,
  isLoading = false,
}: DeliveryCreateModalProps) {
  const { t } = useTranslation();
  const employees = useEmployees();
  const clientConfig = useClientConfig();

  // Form state
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);
  const [vendorName, setVendorName] = useState('');
  const [scheduledDate, setScheduledDate] = useState<Date | undefined>(undefined);
  const [notes, setNotes] = useState('');
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

  // Reset form when modal closes
  useEffect(() => {
    if (!opened) {
      setSelectedEmployeeId(null);
      setScheduledDate(undefined);
      setNotes('');
      setOneLineAddress('');
      setGoogleMapsUrl('');
      setIsSubmitting(false);
    }
  }, [opened]);

  // Handle form submission
  const handleSubmit = async () => {
    if (!selectedEmployeeId || !scheduledDate || !oneLineAddress.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onConfirm({
        type: 'RECEIVE',
        assignedTo: selectedEmployeeId,
        scheduledDate: scheduledDate.toISOString(),
        notes: notes.trim() || undefined,
        isUrgentDelivery: false,
        vendorName: vendorName.trim(),
        receiveAddress: {
          oneLineAddress: oneLineAddress.trim(),
          googleMapsUrl: googleMapsUrl.trim() || undefined,
        },
      });
      onClose();
    } catch {
      // Error handling is done by the parent component
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = Boolean(
    selectedEmployeeId && scheduledDate && oneLineAddress.trim() && vendorName.trim(),
  );

  return (
    <ModalOrDrawer
      title={t('delivery.createReceiveRequest')}
      opened={opened}
      onClose={onClose}
      drawerSize="lg"
    >
      <Stack gap="md" style={{ position: 'relative' }}>
        <LoadingOverlay
          visible={isLoading || isSubmitting}
          overlayProps={{ blur: 2 }}
          transitionProps={{ duration: 300 }}
        />

        {/* Info Alert */}
        <Alert
          icon={<IconPackage size={20} />}
          title={t('delivery.receiveRequestInfo')}
          color="blue"
          variant="light"
        >
          <Text size="sm">{t('delivery.receiveRequestDescription')}</Text>
        </Alert>

        <ScrollArea style={{ maxHeight: '90vh' }}>
          <Stack gap="md">
            {/* Type Badge */}
            <Group gap="xs">
              <Text size="sm" fw={500}>
                {t('delivery.requestType')}:
              </Text>
              <Group gap={4}>
                <IconTruck size={16} />
                <Text size="sm" c="blue" fw={600}>
                  {t('delivery.receiveType')}
                </Text>
              </Group>
            </Group>
            {/* Vendor Name */}
            <TextInput
              required
              label={t('delivery.vendorName')}
              placeholder={t('delivery.vendorNamePlaceholder')}
              value={vendorName}
              onChange={(e) => setVendorName(e.currentTarget.value)}
              leftSection={<IconMapPin size={16} />}
              disabled={isLoading || isSubmitting}
            />

            {/* Vendor Pickup Address */}
            <TextInput
              required
              label={t('delivery.vendorPickupAddress')}
              placeholder={t('delivery.vendorPickupAddressPlaceholder')}
              value={oneLineAddress}
              onChange={(e) => setOneLineAddress(e.currentTarget.value)}
              leftSection={<IconMapPin size={16} />}
              disabled={isLoading || isSubmitting}
            />

            <TextInput
              label={t('common.googleMapsUrl')}
              placeholder={t('common.googleMapsUrlPlaceholder')}
              value={googleMapsUrl}
              onChange={(e) => setGoogleMapsUrl(e.currentTarget.value)}
              leftSection={<IconMapPin size={16} />}
              disabled={isLoading || isSubmitting}
            />

            {/* Assigned Driver */}
            <Select
              required
              label={t('delivery.assignedTo')}
              placeholder={t('delivery.form.selectDriver')}
              data={employeeOptions}
              value={selectedEmployeeId}
              onChange={setSelectedEmployeeId}
              searchable
              leftSection={<IconEdit size={16} />}
              disabled={isLoading || isSubmitting}
            />

            {/* Scheduled Date */}
            <DateInput
              required
              label={t('delivery.scheduledDate')}
              placeholder={t('delivery.form.selectDate')}
              value={scheduledDate}
              onChange={(date) => setScheduledDate(date ? new Date(date) : undefined)}
              minDate={new Date()}
              leftSection={<IconCalendar size={16} />}
              disabled={isLoading || isSubmitting}
            />

            {/* Notes */}
            <Textarea
              label={t('common.notes')}
              placeholder={t('delivery.form.enterNotes')}
              value={notes}
              onChange={(e) => setNotes(e.currentTarget.value)}
              rows={3}
              disabled={isLoading || isSubmitting}
            />
          </Stack>
        </ScrollArea>

        {/* Action Buttons */}
        <Group justify="flex-end" gap="sm" mt="md">
          <Button
            variant="light"
            onClick={onClose}
            disabled={isSubmitting}
            leftSection={<IconX size={16} />}
          >
            {t('common.cancel')}
          </Button>
          <Button
            onClick={handleSubmit}
            loading={isSubmitting}
            disabled={!isFormValid || isLoading}
            leftSection={<IconPackage size={16} />}
          >
            {t('common.add')}
          </Button>
        </Group>
      </Stack>
    </ModalOrDrawer>
  );
}
