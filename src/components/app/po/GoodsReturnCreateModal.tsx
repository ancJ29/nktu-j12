import { useEffect, useState } from 'react';

import { Button, Drawer, Group, Modal, Select, Stack, Text, Textarea } from '@mantine/core';
import { IconCalendar, IconPackage, IconTruck } from '@tabler/icons-react';

import { DateInput } from '@/components/common';
import { useDeviceType } from '@/hooks/useDeviceType';
import { useTranslation } from '@/hooks/useTranslation';
import type { PurchaseOrder } from '@/services/sales/purchaseOrder';
import { useDeliveryAssigneeOptions } from '@/stores/useDeliveryRequestStore';
import { formatDate } from '@/utils/time';

type GoodsReturnCreateModalProps = {
  readonly opened: boolean;
  readonly purchaseOrder?: PurchaseOrder;
  readonly isLoading?: boolean;
  readonly onClose: () => void;
  readonly onConfirm: (data: {
    assignedTo: string;
    scheduledDate: string;
    notes: string;
  }) => Promise<void>;
};

export function GoodsReturnCreateModal({
  opened,
  purchaseOrder,
  isLoading = false,
  onClose,
  onConfirm,
}: GoodsReturnCreateModalProps) {
  const { t } = useTranslation();
  const { isMobile } = useDeviceType();
  const assigneeOptions = useDeliveryAssigneeOptions();

  // Form state
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);
  const [scheduledDate, setScheduledDate] = useState<Date | undefined>(undefined);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle modal lifecycle - reset form when closed, set default notes when opened
  useEffect(() => {
    if (!opened) {
      // Reset form when modal closes
      setSelectedEmployeeId(null);
      setScheduledDate(undefined);
      setNotes('');
    } else if (purchaseOrder && !notes) {
      // Only set default notes if empty (preserves user input)
      setNotes(purchaseOrder.poNumber);
    }
  }, [opened, purchaseOrder?.poNumber]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle form submission
  const handleSubmit = async () => {
    if (!selectedEmployeeId || !scheduledDate) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onConfirm({
        assignedTo: selectedEmployeeId,
        scheduledDate: scheduledDate.toISOString(),
        notes,
      });
      // Form will be reset by useEffect when modal closes
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = (
    <Stack gap="md">
      {purchaseOrder && (
        <Stack gap="xs">
          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              {t('po.poNumber')}:
            </Text>
            <Text size="sm" fw={500}>
              {purchaseOrder.poNumber}
              {purchaseOrder.customerPONumber && (
                <Text size="sm" ml="xs">
                  ({purchaseOrder.customerPONumber})
                </Text>
              )}
            </Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              {t('common.customer')}:
            </Text>
            <Text size="sm" fw={500}>
              {purchaseOrder.customerName}
            </Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              {t('po.orderDate')}:
            </Text>
            <Text size="sm" fw={500}>
              {formatDate(purchaseOrder.orderDate)}
            </Text>
          </Group>
        </Stack>
      )}

      <Select
        label={t('delivery.assignedTo')}
        placeholder={t('delivery.form.selectAssignee')}
        data={assigneeOptions}
        value={selectedEmployeeId}
        onChange={setSelectedEmployeeId}
        searchable
        required
        leftSection={<IconTruck size={16} />}
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

      <Textarea
        label={t('common.notes')}
        placeholder={t('delivery.form.enterNotes')}
        value={notes}
        onChange={(e) => setNotes(e.currentTarget.value)}
        rows={3}
      />

      <Group justify="flex-end" gap="sm">
        <Button variant="light" onClick={onClose} disabled={isSubmitting || isLoading}>
          {t('common.cancel')}
        </Button>
        <Button
          onClick={handleSubmit}
          loading={isSubmitting || isLoading}
          disabled={!selectedEmployeeId || !scheduledDate || isLoading}
          leftSection={<IconPackage size={16} />}
          color="red"
        >
          {t('delivery.createGoodsReturnRequest')}
        </Button>
      </Group>
    </Stack>
  );

  if (isMobile) {
    return (
      <Drawer
        opened={opened}
        onClose={onClose}
        title={t('delivery.createGoodsReturnRequest')}
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
      title={t('delivery.createGoodsReturnRequest')}
      centered
      size="md"
      trapFocus
      returnFocus
    >
      {content}
    </Modal>
  );
}
