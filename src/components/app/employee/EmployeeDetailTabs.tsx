import {Box, Stack, ScrollArea} from '@mantine/core';
import {
  IconInfoCircle,
  IconClock,
  IconCurrencyDollar,
  IconShoppingCart,
} from '@tabler/icons-react';
import {EmployeeBasicInfoCard} from './EmployeeBasicInfoCard';
import {EmployeeDangerZone} from './EmployeeDangerZone';
import {Tabs, ComingSoonCard} from '@/components/common';
import useTranslation from '@/hooks/useTranslation';
import {type Employee, type Department} from '@/lib/api/schemas/hr.schemas';

type EmployeeDetailTabsProps = {
  readonly employee: Employee;
  readonly onEdit: () => void;
  readonly onActivate: () => void;
  readonly onDeactivate: () => void;
  readonly getDepartmentById: (id: string) => Department | undefined;
};

export function EmployeeDetailTabs({
  employee,
  onEdit,
  onActivate,
  onDeactivate,
  getDepartmentById,
}: EmployeeDetailTabsProps) {
  const {t} = useTranslation();

  return (
    <Tabs defaultValue="info">
      <ScrollArea offsetScrollbars scrollbarSize={4}>
        <Tabs.List>
          <Tabs.Tab value="info" leftSection={<IconInfoCircle size={16} />}>
            {t('employee.detailInformation')}
          </Tabs.Tab>
          <Tabs.Tab value="timesheet" leftSection={<IconClock size={16} />}>
            {t('employee.timesheet')}
          </Tabs.Tab>
          <Tabs.Tab
            value="salary"
            leftSection={<IconCurrencyDollar size={16} />}
          >
            {t('employee.salaryConfig')}
          </Tabs.Tab>
          <Tabs.Tab
            value="purchasing"
            leftSection={<IconShoppingCart size={16} />}
          >
            {t('employee.purchasingOrder')}
          </Tabs.Tab>
        </Tabs.List>
      </ScrollArea>

      <Tabs.Panel value="info" pt="xl">
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Box style={{maxWidth: '800px', width: '100%'}}>
            <Stack gap="xl">
              <EmployeeBasicInfoCard
                employee={employee}
                getDepartmentById={getDepartmentById}
                onEdit={onEdit}
              />
              <EmployeeDangerZone
                employee={employee}
                onActivate={onActivate}
                onDeactivate={onDeactivate}
              />
            </Stack>
          </Box>
        </Box>
      </Tabs.Panel>

      <Tabs.Panel value="timesheet" pt="xl">
        <ComingSoonCard
          icon={<IconClock size={48} color="var(--mantine-color-gray-5)" />}
          title={t('employee.timesheet')}
        />
      </Tabs.Panel>

      <Tabs.Panel value="salary" pt="xl">
        <ComingSoonCard
          icon={
            <IconCurrencyDollar size={48} color="var(--mantine-color-gray-5)" />
          }
          title={t('employee.salaryConfig')}
        />
      </Tabs.Panel>

      <Tabs.Panel value="purchasing" pt="xl">
        <ComingSoonCard
          icon={
            <IconShoppingCart size={48} color="var(--mantine-color-gray-5)" />
          }
          title={t('employee.purchasingOrder')}
        />
      </Tabs.Panel>
    </Tabs>
  );
}
