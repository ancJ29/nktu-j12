import { Alert, Button, Flex, Stack, Text } from '@mantine/core';

import { ModalOrDrawer } from '@/components/common';
import { useTranslation } from '@/hooks/useTranslation';
import type { Employee } from '@/services/hr/employee';
import { getIcon, IconIdentifiers } from '@/utils/iconRegistry';
import { renderFullName } from '@/utils/string';

const IconAlertTriangle = getIcon(IconIdentifiers.ALERT_TRIANGLE);

type EmployeeDeleteModalProps = {
  readonly opened: boolean;
  readonly onClose: () => void;
  readonly employee: Employee | undefined;
  readonly onConfirm: () => void;
};

export function EmployeeDeleteModal({
  opened,
  onClose,
  employee,
  onConfirm,
}: EmployeeDeleteModalProps) {
  const { t } = useTranslation();

  return (
    <ModalOrDrawer
      title={t('employee.confirmDeleteTitle')}
      drawerSize="350px"
      opened={opened}
      onClose={onClose}
    >
      <Stack gap="md">
        <Text>
          {t('employee.confirmDeleteMessage', {
            name: employee ? renderFullName(employee) : '',
          })}
        </Text>

        <Alert
          icon={<IconAlertTriangle size={16} />}
          color="var(--app-danger-color)"
          variant="light"
        >
          {t('employee.deleteWarning')}
        </Alert>

        <Flex gap="sm" justify="flex-end">
          <Button variant="light" onClick={onClose}>
            {t('common.cancel')}
          </Button>
          <Button color="var(--app-danger-color)" onClick={onConfirm}>
            {t('employee.deleteEmployee')}
          </Button>
        </Flex>
      </Stack>
    </ModalOrDrawer>
  );
}
