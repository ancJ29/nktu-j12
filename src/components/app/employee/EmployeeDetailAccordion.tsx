import {Accordion, Stack, Box, Text} from '@mantine/core';
import {
  IconInfoCircle,
  IconClock,
  IconCurrencyDollar,
  IconShoppingCart,
} from '@tabler/icons-react';
import {EmployeeBasicInfoCard} from './EmployeeBasicInfoCard';
import {EmployeeDangerZone} from './EmployeeDangerZone';
import {ComingSoonCard} from '@/components/common/ui/ComingSoonCard';
import useTranslation from '@/hooks/useTranslation';
import {type Employee, type Department} from '@/lib/api/schemas/hr.schemas';

type EmployeeDetailAccordionProps = {
  readonly employee: Employee;
  readonly onActivate: () => void;
  readonly onDeactivate: () => void;
  readonly getDepartmentById: (id: string) => Department | undefined;
};

export function EmployeeDetailAccordion({
  employee,
  onActivate,
  onDeactivate,
  getDepartmentById,
}: EmployeeDetailAccordionProps) {
  const {t} = useTranslation();

  return (
    <Accordion defaultValue="info" chevronPosition="right" p={0}>
      <Accordion.Item value="info">
        <Accordion.Control icon={<IconInfoCircle size={20} />}>
          <Text fw={600}>{t('employee.detailInformation')}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="xl" pt="md">
            <EmployeeBasicInfoCard
              employee={employee}
              getDepartmentById={getDepartmentById}
            />
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="timesheet">
        <Accordion.Control icon={<IconClock size={20} />}>
          <Text fw={600}>{t('employee.timesheet')}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <Box pt="md">
            <ComingSoonCard
              icon={<IconClock size={48} color="var(--mantine-color-gray-5)" />}
              title={t('employee.timesheet')}
            />
          </Box>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="salary">
        <Accordion.Control icon={<IconCurrencyDollar size={20} />}>
          <Text fw={600}>{t('employee.salaryConfig')}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <Box pt="md">
            <ComingSoonCard
              icon={
                <IconCurrencyDollar
                  size={48}
                  color="var(--mantine-color-gray-5)"
                />
              }
              title={t('employee.salaryConfig')}
            />
          </Box>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="purchasing">
        <Accordion.Control icon={<IconShoppingCart size={20} />}>
          <Text fw={600}>{t('employee.purchasingOrder')}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <Box pt="md">
            <ComingSoonCard
              icon={
                <IconShoppingCart
                  size={48}
                  color="var(--mantine-color-gray-5)"
                />
              }
              title={t('employee.purchasingOrder')}
            />
          </Box>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="danger-zone">
        <Accordion.Control icon={<IconInfoCircle size={20} />}>
          <Text fw={600}>{t('common.dangerZone')}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="xl" pt="md">
            <EmployeeDangerZone
              employee={employee}
              onActivate={onActivate}
              onDeactivate={onDeactivate}
            />
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
