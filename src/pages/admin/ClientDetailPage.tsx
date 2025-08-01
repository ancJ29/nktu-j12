import {useState} from 'react';
import {useNavigate, useParams} from 'react-router';
import {
  Container,
  Title,
  Stack,
  Card,
  Group,
  Box,
  Alert,
  Divider,
  Tabs,
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {notifications} from '@mantine/notifications';
import {
  IconAlertCircle,
  IconBan,
  IconTrash,
  IconCheck,
  IconAlertTriangle,
  IconInfoCircle,
  IconLock,
  IconFlag,
  IconUsers,
} from '@tabler/icons-react';
import useTranslation from '@/hooks/useTranslation';
import useIsDarkMode from '@/hooks/useIsDarkMode';
import {useClientDetail} from '@/hooks/useClientDetail';
import {useClientActions} from '@/stores/useClientStore';
import {GoBack} from '@/components/common';
import {TabErrorBoundary} from '@/components/admin/TabErrorBoundary';
import {
  ClientBasicInfo,
  RootUserInfo,
  ClientActionModal,
  ClientActionMenu,
  ClientRolesSection,
  ClientFeatureFlagsSection,
  ClientUsersSection,
} from '@/components/admin/ClientManagementComponents';
import {ROUTERS} from '@/config/routeConfig';

export function ClientDetailPage() {
  const {clientCode} = useParams<{clientCode: string}>();
  const navigate = useNavigate();
  const {t} = useTranslation();
  const isDarkMode = useIsDarkMode();
  const {client, isLoading, error, reload} = useClientDetail(clientCode);
  const [deleteConfirmCode, setDeleteConfirmCode] = useState('');
  const [deleteReason, setDeleteReason] = useState('');
  const [suspendReason, setSuspendReason] = useState('');
  const [actionType, setActionType] = useState<
    'suspend' | 'reactivate' | 'delete' | undefined
  >();

  const [modalOpened, {open: openModal, close: closeModal}] =
    useDisclosure(false);
  const {suspendClient, reactivateClient, hardDeleteClient} =
    useClientActions();

  const handleSuspend = () => {
    setActionType('suspend');
    setSuspendReason('');
    openModal();
  };

  const handleReactivate = () => {
    setActionType('reactivate');
    openModal();
  };

  const handleDelete = () => {
    setActionType('delete');
    setDeleteConfirmCode('');
    setDeleteReason('');
    openModal();
  };

  const confirmAction = async () => {
    if (!client || !clientCode || !actionType) return;

    try {
      switch (actionType) {
        case 'suspend': {
          if (!suspendReason.trim()) {
            notifications.show({
              title: t('validation.error'),
              message: t('admin.clients.validation.suspendReasonRequired'),
              color: 'red',
              icon: <IconAlertCircle size={16} />,
            });
            return;
          }

          await suspendClient(clientCode, suspendReason);
          await reload(false);

          notifications.show({
            title: t('admin.clients.clientSuspended'),
            message: t('admin.clients.clientSuspendedMessage', {
              name: client.clientName,
            }),
            color: isDarkMode ? 'yellow.7' : 'yellow.9',
            icon: <IconBan size={16} />,
          });

          break;
        }

        case 'reactivate': {
          await reactivateClient(clientCode);
          await reload(false);

          notifications.show({
            title: t('admin.clients.clientActivated'),
            message: t('admin.clients.clientActivatedMessage', {
              name: client.clientName,
            }),
            color: isDarkMode ? 'green.7' : 'green.9',
            icon: <IconCheck size={16} />,
          });

          break;
        }

        case 'delete': {
          if (deleteConfirmCode !== clientCode) {
            notifications.show({
              title: t('validation.error'),
              message: t('admin.clients.validation.confirmCodeMismatch'),
              color: 'red',
              icon: <IconAlertCircle size={16} />,
            });
            return;
          }

          if (!deleteReason.trim()) {
            notifications.show({
              title: t('validation.error'),
              message: t('admin.clients.validation.deleteReasonRequired'),
              color: 'red',
              icon: <IconAlertCircle size={16} />,
            });
            return;
          }

          await hardDeleteClient(clientCode, deleteConfirmCode, deleteReason);

          notifications.show({
            title: t('admin.clients.clientDeleted'),
            message: t('admin.clients.clientDeletedMessage', {
              name: client.clientName,
            }),
            color: 'red',
            icon: <IconTrash size={16} />,
          });

          navigate(ROUTERS.ADMIN_CLIENTS);

          break;
        }

        // No default needed - actionType is checked above
      }

      closeModal();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : t('errors.failedToUpdateClient');
      notifications.show({
        title: t('admin.clients.updateFailed'),
        message: errorMessage,
        color: 'red',
        icon: <IconAlertTriangle size={16} />,
      });
    }
  };

  if (error && !isLoading) {
    return (
      <Container fluid mt="xl">
        <Stack gap="xl">
          <Container fluid px="md">
            <GoBack />
          </Container>

          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              padding: '0 16px',
            }}
          >
            <Alert
              icon={<IconAlertCircle size={16} />}
              color="red"
              variant="light"
              style={{maxWidth: '600px', width: '100%'}}
            >
              {error}
            </Alert>
          </Box>
        </Stack>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Stack gap="xl">
        <Container fluid>
          <Group justify="space-between" w="80vw">
            <GoBack />
            {client ? (
              <ClientActionMenu
                client={client}
                size="lg"
                onSuspend={handleSuspend}
                onReactivate={handleReactivate}
                onDelete={handleDelete}
              />
            ) : null}
          </Group>
        </Container>

        <Title order={1} ta="center">
          {t('admin.clients.clientDetails')}
        </Title>

        <Container fluid px="xl" w="80vw">
          {client ? (
            <Tabs defaultValue="info">
              <Tabs.List grow fw="bold" ta="left">
                <Tabs.Tab
                  value="info"
                  leftSection={<IconInfoCircle size={16} />}
                >
                  {t('admin.clients.information')}
                </Tabs.Tab>
                <Tabs.Tab value="roles" leftSection={<IconLock size={16} />}>
                  {t('admin.clients.roles')} ({client.roles.length})
                </Tabs.Tab>
                <Tabs.Tab value="features" leftSection={<IconFlag size={16} />}>
                  {t('admin.clients.featureFlags')} (
                  {client.dynamicFeatureFlags.length})
                </Tabs.Tab>
                <Tabs.Tab value="users" leftSection={<IconUsers size={16} />}>
                  {t('admin.clients.users')} ({client.users.length})
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="info" pt="xl">
                <TabErrorBoundary tabName={t('admin.clients.information')}>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <Box style={{maxWidth: '80vw', width: '100%'}}>
                      <Card shadow="sm" padding="xl" radius="md">
                        <Stack gap="lg">
                          <ClientBasicInfo client={client} />
                          <Divider />
                          <RootUserInfo rootUser={client.rootUser} />
                        </Stack>
                      </Card>
                    </Box>
                  </Box>
                </TabErrorBoundary>
              </Tabs.Panel>

              <Tabs.Panel value="roles" pt="xl">
                <TabErrorBoundary tabName={t('admin.clients.roles')}>
                  <Card shadow="sm" padding="xl" radius="md">
                    <ClientRolesSection roles={client.roles} />
                  </Card>
                </TabErrorBoundary>
              </Tabs.Panel>

              <Tabs.Panel value="features" pt="xl">
                <TabErrorBoundary tabName={t('admin.clients.featureFlags')}>
                  <Card shadow="sm" padding="xl" radius="md">
                    <ClientFeatureFlagsSection
                      featureFlags={client.dynamicFeatureFlags}
                      clientId={client.id}
                      onUpdate={async () => reload(false)}
                    />
                  </Card>
                </TabErrorBoundary>
              </Tabs.Panel>

              <Tabs.Panel value="users" pt="xl">
                <TabErrorBoundary tabName={t('admin.clients.users')}>
                  <Card shadow="sm" padding="xl" radius="md">
                    <ClientUsersSection users={client.users} />
                  </Card>
                </TabErrorBoundary>
              </Tabs.Panel>
            </Tabs>
          ) : null}
        </Container>
      </Stack>

      {/* Action Confirmation Modal */}
      {actionType && client ? (
        <ClientActionModal
          opened={modalOpened}
          actionType={actionType}
          clientName={client.clientName}
          clientCode={client.clientCode}
          suspendReason={suspendReason}
          deleteConfirmCode={deleteConfirmCode}
          deleteReason={deleteReason}
          onClose={closeModal}
          onSuspendReasonChange={setSuspendReason}
          onDeleteConfirmCodeChange={setDeleteConfirmCode}
          onDeleteReasonChange={setDeleteReason}
          onConfirm={confirmAction}
        />
      ) : null}
    </Container>
  );
}
