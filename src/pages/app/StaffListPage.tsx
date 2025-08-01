import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import {
  Container,
  Title,
  Stack,
  Group,
  Button,
  LoadingOverlay,
  Alert,
  Modal,
  Text,
  Flex,
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {notifications} from '@mantine/notifications';
import {
  IconPlus,
  IconAlertTriangle,
  IconCheck,
  IconUserMinus,
  IconUserCheck,
} from '@tabler/icons-react';
import useTranslation from '@/hooks/useTranslation';
import useIsDarkMode from '@/hooks/useIsDarkMode';
import {
  useStaffList,
  useStaffLoading,
  useStaffError,
  useStaffPagination,
  useStaffActions,
} from '@/stores/useStaffStore';
import {useCurrentStore, useStores} from '@/stores/useStoreConfigStore';
import {StoreSelector} from '@/components/store';
import {StaffList} from '@/components/staff';
import type {Staff} from '@/services/staff';
import {ErrorAlert} from '@/components/common';
import {ROUTERS, getStaffEditRoute} from '@/config/routeConfig';

export function StaffListPage() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const [deleteModalOpened, {open: openDeleteModal, close: closeDeleteModal}] =
    useDisclosure(false);
  const [staffToDelete, setStaffToDelete] = useState<Staff | undefined>(
    undefined,
  );
  const isDarkMode = useIsDarkMode();

  const staffs = useStaffList();
  const isLoading = useStaffLoading();
  const error = useStaffError();
  const pagination = useStaffPagination();
  const stores = useStores();
  const currentStore = useCurrentStore();

  const {loadStaff, deleteStaff, deactivateStaff, activateStaff, clearError} =
    useStaffActions();

  // Load staff when component mounts or store changes
  useEffect(() => {
    const load = async () => {
      if (currentStore) {
        try {
          await loadStaff(currentStore.id);
        } catch (error) {
          console.error(error);
        }
      }
    };

    void load();
  }, [loadStaff, currentStore]);

  const handleDeleteStaff = (staffMember: Staff) => {
    setStaffToDelete(staffMember);
    openDeleteModal();
  };

  const confirmDeleteStaff = async () => {
    if (!staffToDelete) return;

    try {
      if (!currentStore) throw new Error('No store selected');
      await deleteStaff(currentStore.id, staffToDelete.id);

      notifications.show({
        title: t('staff.deleteSuccess'),
        message: t('staff.deleteSuccessMessage', {
          name: staffToDelete.fullName,
        }),
        color: isDarkMode ? 'green.7' : 'green.9',
        icon: <IconCheck size={16} />,
      });

      closeDeleteModal();
      setStaffToDelete(undefined);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : t('staff.deleteFailedDefault');

      notifications.show({
        title: t('staff.deleteFailed'),
        message: errorMessage,
        color: 'red',
        icon: <IconAlertTriangle size={16} />,
      });
    }
  };

  const handleToggleStaffStatus = async (staffMember: Staff) => {
    try {
      if (staffMember.status === 'active') {
        await deactivateStaff(staffMember.id);
        notifications.show({
          title: t('staff.deactivateSuccess'),
          message: t('staff.deactivateSuccessMessage', {
            name: staffMember.fullName,
          }),
          color: 'orange',
          icon: <IconUserMinus size={16} />,
        });
      } else {
        await activateStaff(staffMember.id);
        notifications.show({
          title: t('staff.activateSuccess'),
          message: t('staff.activateSuccessMessage', {
            name: staffMember.fullName,
          }),
          color: isDarkMode ? 'green.7' : 'green.9',
          icon: <IconUserCheck size={16} />,
        });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : t('staff.updateStatusFailedDefault');

      notifications.show({
        title: t('staff.updateFailed'),
        message: errorMessage,
        color: 'red',
        icon: <IconAlertTriangle size={16} />,
      });
    }
  };

  const handleLoadMore = async (cursor?: string) => {
    if (currentStore) {
      await loadStaff(currentStore.id, cursor);
    }
  };

  const handleAddStaff = () => {
    if (!currentStore) {
      notifications.show({
        title: t('staff.noStoreSelected'),
        message: t('staff.selectStoreBeforeAdding'),
        color: 'orange',
        icon: <IconAlertTriangle size={16} />,
      });
      return;
    }

    navigate(ROUTERS.STAFF_ADD);
  };

  if (!currentStore && stores.length > 0) {
    return (
      <Container fluid px="xl" mt="xl">
        <Stack gap="xl">
          <Title order={1} ta="center">
            {t('staff.title')}
          </Title>

          <Alert
            icon={<IconAlertTriangle size={16} />}
            color="orange"
            variant="light"
          >
            <Stack gap="md">
              <Text>{t('staff.selectStoreToManage')}</Text>
              <StoreSelector />
            </Stack>
          </Alert>
        </Stack>
      </Container>
    );
  }

  if (!currentStore) {
    return (
      <Container fluid px="xl" mt="xl">
        <Stack gap="xl">
          <Title order={1} ta="center">
            {t('staff.title')}
          </Title>

          <Alert
            icon={<IconAlertTriangle size={16} />}
            color="orange"
            variant="light"
          >
            {t('staff.noStoresFound')}
          </Alert>
        </Stack>
      </Container>
    );
  }

  return (
    <>
      <Container fluid px="xl" mt="xl">
        <Stack gap="xl">
          <Group justify="space-between">
            <Title order={1} ta="center">
              {t('staff.titleWithStore', {storeName: currentStore.name})}
            </Title>
            <Group gap="md">
              <Button
                visibleFrom="md"
                leftSection={<IconPlus size={16} />}
                onClick={handleAddStaff}
              >
                {t('staff.addStaff')}
              </Button>
            </Group>
          </Group>
          <Group justify="end">
            <StoreSelector />
          </Group>

          <ErrorAlert error={error} clearError={clearError} />

          <div style={{position: 'relative'}}>
            <LoadingOverlay
              visible={isLoading}
              overlayProps={{blur: 2}}
              transitionProps={{duration: 300}}
            />

            <StaffList
              staffs={staffs}
              onEdit={(staffMember) =>
                navigate(getStaffEditRoute(staffMember.id))
              }
              onDelete={handleDeleteStaff}
              onToggleStatus={handleToggleStaffStatus}
            />
          </div>

          {/* Pagination */}
          {pagination && (pagination.hasNext || pagination.hasPrev) ? (
            <Group justify="center">
              <Button
                disabled={!pagination.hasPrev}
                variant="light"
                onClick={async () => handleLoadMore(pagination.prevCursor)}
              >
                {t('common.previous')}
              </Button>
              <Button
                disabled={!pagination.hasNext}
                variant="light"
                onClick={async () => handleLoadMore(pagination.nextCursor)}
              >
                {t('common.next')}
              </Button>
            </Group>
          ) : null}

          {/* Summary */}
          <Group justify="center">
            <Text size="sm" c="dimmed">
              {t('staff.showingCount', {
                current: staffs.length,
                total: staffs.length, // API doesn't provide total count
              })}
            </Text>
          </Group>
        </Stack>
      </Container>

      {/* Delete Confirmation Modal */}
      <Modal
        centered
        opened={deleteModalOpened}
        title={t('staff.deleteModalTitle')}
        onClose={closeDeleteModal}
      >
        <Stack gap="md">
          <Text>
            {t('staff.deleteConfirmation', {name: staffToDelete?.fullName})}{' '}
            {t('common.cannotBeUndone')}
          </Text>

          <Alert
            icon={<IconAlertTriangle size={16} />}
            color="red"
            variant="light"
          >
            {t('staff.deleteWarning')}
          </Alert>

          <Flex gap="sm" justify="flex-end">
            <Button variant="light" onClick={closeDeleteModal}>
              {t('common.cancel')}
            </Button>
            <Button color="red" onClick={confirmDeleteStaff}>
              {t('staff.deleteStaff')}
            </Button>
          </Flex>
        </Stack>
      </Modal>
    </>
  );
}
