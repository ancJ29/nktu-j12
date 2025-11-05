import { useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router';

import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Collapse,
  Container,
  Group,
  Modal,
  Stack,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { IconChevronRight, IconX } from '@tabler/icons-react';

import { DeliveryStatusBadge } from '@/components/app/delivery/DeliveryStatusBadge';
import { DeliveryTypeBadge } from '@/components/app/delivery/DeliveryTypeBadge';
import { POStatusBadge } from '@/components/app/po/POStatusBadge';
import {
  AppDesktopLayout,
  AppMobileLayout,
  NewMessageBadge,
  UrgentBadge,
} from '@/components/common';
import { getDeliveryDetailRoute, getPODetailRoute, ROUTERS } from '@/config/routeConfig';
import { useDeviceType } from '@/hooks/useDeviceType';
import { useTranslation } from '@/hooks/useTranslation';
import type { DeliveryRequest, PurchaseOrder } from '@/services/sales';
import { homeService } from '@/services/sales';
import { useMe, usePermissions } from '@/stores/useAppStore';
import {
  canViewAllDeliveryRequest,
  canViewAllPurchaseOrder,
  canViewDeliveryRequest,
  canViewPurchaseOrder,
} from '@/utils/permission.utils';

export function HomePage() {
  const { isMobile } = useDeviceType();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const permissions = usePermissions();
  const currentUser = useMe();

  // Permission checks
  const {
    canViewPO,
    canViewDR,
    canViewWarehouse,
    canViewAllPO,
    canViewAllDR,
    canViewMyPO,
    canViewMyDR,
  } = useMemo(() => {
    const canViewAllDR = canViewAllDeliveryRequest(permissions);
    const canViewMyDR = canViewDeliveryRequest(permissions);
    const canViewAllPO = canViewAllPurchaseOrder(permissions);
    const canViewMyPO = canViewPurchaseOrder(permissions);
    return {
      canViewPO: canViewAllPO || canViewMyPO,
      canViewDR: canViewAllDR || canViewMyDR,
      canViewWarehouse: canViewAllPO || canViewMyPO,
      canViewAllPO,
      canViewAllDR,
      canViewMyDR,
      canViewMyPO,
    };
  }, [permissions]);

  // Collapsible state for mobile sections
  const [open, setOpen] = useState<'none' | 'sales' | 'delivery' | 'warehouse'>('sales');

  // Fullscreen modal state
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'sales' | 'delivery' | 'warehouse'>('sales');

  useEffect(() => {
    if (canViewPO) {
      setOpen('sales');
    }
    if (canViewDR && !canViewPO) {
      setOpen('delivery');
    }
  }, [canViewPO, canViewDR]);

  // Data state
  const [activePOs, setActivePOs] = useState<PurchaseOrder[]>([]);
  const [todayDeliveries, setTodayDeliveries] = useState<DeliveryRequest[]>([]);
  const [processingQueue, setProcessingQueue] = useState<PurchaseOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        setError(undefined);
        const activePOsData = await homeService.getActivePurchaseOrders();
        const todayDeliveriesData = await homeService.getTodayDeliveryRequests();
        const processingQueueData = await homeService.getProcessingQueue();
        setActivePOs(activePOsData);
        setTodayDeliveries(todayDeliveriesData);
        setProcessingQueue(processingQueueData);
      } catch (error_) {
        setError(error_ instanceof Error ? error_.message : 'Failed to load dashboard data');
      } finally {
        setIsLoading(false);
      }
    };

    void fetchDashboardData();
  }, []);

  // Filtered data based on permissions
  const filteredActivePOs = useMemo(() => {
    if (canViewAllPO) {
      return activePOs;
    }
    if (canViewMyPO && currentUser?.employee?.id) {
      return activePOs.filter((po) => po.salesId === currentUser.employee?.id);
    }
    return [];
  }, [activePOs, canViewAllPO, canViewMyPO, currentUser?.employee?.id]);

  const filteredTodayDeliveries = useMemo(() => {
    if (canViewAllDR) {
      return todayDeliveries;
    }
    if (canViewMyDR && currentUser?.employee?.id) {
      return todayDeliveries.filter(
        (deliveryRequest) => deliveryRequest.assignedTo === currentUser.employee?.id,
      );
    }
    return [];
  }, [todayDeliveries, canViewAllDR, canViewMyDR, currentUser?.employee?.id]);

  const filteredProcessingQueue = useMemo(() => {
    if (canViewAllPO) {
      return processingQueue;
    }
    if (canViewMyPO && currentUser?.employee?.id) {
      return processingQueue.filter((po) => po.salesId === currentUser.employee?.id);
    }
    return [];
  }, [processingQueue, canViewAllPO, canViewMyPO, currentUser?.employee?.id]);

  const clearError = () => {
    setError(undefined);
  };

  // Navigation handlers
  const handlePOClick = (poId: string) => {
    navigate(getPODetailRoute(poId));
  };

  const handleDRClick = (drId: string) => {
    navigate(getDeliveryDetailRoute(drId));
  };

  const closeFullscreen = () => {
    setFullscreenOpen(false);
  };

  const openFullscreen = (section: 'sales' | 'delivery' | 'warehouse') => {
    setActiveSection(section);
    setFullscreenOpen(true);
    setOpen('none');
  };

  if (isMobile) {
    return (
      <AppMobileLayout isLoading={isLoading} error={error} clearError={clearError}>
        <Container fluid m="xs" px={0}>
          <Stack gap="xs">
            {/* Sales Section */}
            {canViewPO && (
              <Card shadow="sm" padding="sm">
                <Group
                  justify="space-between"
                  mb={open === 'sales' ? 'sm' : 0}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setOpen(open === 'sales' ? 'none' : 'sales');
                  }}
                >
                  <Group gap="xs">
                    <Title order={5}>{t('home.sales.sectionTitle')}</Title>
                    {(canViewAllPO || canViewMyPO) && (
                      <Badge color="blue" variant="filled">
                        {filteredActivePOs.length}
                      </Badge>
                    )}
                  </Group>
                  <ActionIcon
                    variant="subtle"
                    color="blue"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(ROUTERS.PO_MANAGEMENT);
                    }}
                  >
                    <IconChevronRight size={20} />
                  </ActionIcon>
                </Group>
                <Collapse in={open === 'sales'}>
                  <Box p="xs" style={{ maxHeight: 300, overflow: 'auto' }}>
                    <Stack gap="xs">
                      {!(canViewAllPO || canViewMyPO) ? (
                        <Text c="dimmed" size="sm">
                          -
                        </Text>
                      ) : filteredActivePOs.length === 0 ? (
                        <Text c="dimmed" size="sm">
                          {t('po.noPOsFound')}
                        </Text>
                      ) : (
                        filteredActivePOs.map((po) => (
                          <POCard
                            key={po.id}
                            po={po}
                            onClick={() => {
                              handlePOClick(po.id);
                              closeFullscreen();
                            }}
                          />
                        ))
                      )}
                    </Stack>
                  </Box>
                </Collapse>
                {open === 'sales' && filteredActivePOs.length > 3 ? (
                  <Button
                    mt="sm"
                    variant="subtle"
                    color="blue"
                    onClick={() => {
                      openFullscreen('sales');
                    }}
                  >
                    {t('common.viewInFullScreen')}
                  </Button>
                ) : null}
              </Card>
            )}

            {/* Delivery Section */}
            {canViewDR && (
              <Card shadow="sm" padding="sm">
                <Group
                  justify="space-between"
                  mb={open === 'delivery' ? 'sm' : 0}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setOpen(open === 'delivery' ? 'none' : 'delivery');
                  }}
                >
                  <Group gap="xs">
                    <Title order={5}>{t('home.delivery.sectionTitle')}</Title>
                    {(canViewAllDR || canViewMyDR) && (
                      <Badge color="orange" variant="filled">
                        {filteredTodayDeliveries.length}
                      </Badge>
                    )}
                  </Group>
                  <ActionIcon
                    variant="subtle"
                    color="orange"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(ROUTERS.DELIVERY_MANAGEMENT);
                    }}
                  >
                    <IconChevronRight size={20} />
                  </ActionIcon>
                </Group>
                <Collapse in={open === 'delivery'}>
                  <Box style={{ maxHeight: 300, overflow: 'auto' }}>
                    <Stack gap="xs">
                      {!(canViewAllDR || canViewMyDR) ? (
                        <Text c="dimmed" size="sm">
                          -
                        </Text>
                      ) : filteredTodayDeliveries.length === 0 ? (
                        <Text c="dimmed" size="sm">
                          {t('delivery.noDeliveryRequestsFound')}
                        </Text>
                      ) : (
                        filteredTodayDeliveries.map((deliveryRequest) => (
                          <DRCard
                            key={deliveryRequest.id}
                            deliveryRequest={deliveryRequest}
                            onClick={() => {
                              handleDRClick(deliveryRequest.id);
                              closeFullscreen();
                            }}
                          />
                        ))
                      )}
                    </Stack>
                  </Box>
                </Collapse>
                {open === 'delivery' && filteredTodayDeliveries.length > 3 ? (
                  <Button
                    mt="sm"
                    variant="subtle"
                    color="blue"
                    onClick={(e) => {
                      e.stopPropagation();
                      openFullscreen('delivery');
                    }}
                  >
                    {t('common.viewInFullScreen')}
                  </Button>
                ) : null}
              </Card>
            )}

            {/* Warehouse Section */}
            {canViewWarehouse && (
              <Card shadow="sm" padding="sm">
                <Group
                  justify="space-between"
                  mb={open === 'warehouse' ? 'sm' : 0}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setOpen(open === 'warehouse' ? 'none' : 'warehouse');
                  }}
                >
                  <Group gap="xs">
                    <Title order={5}>{t('home.warehouse.sectionTitle')}</Title>
                    {(canViewAllPO || canViewMyPO) && (
                      <Badge color="teal" variant="filled">
                        {filteredProcessingQueue.length}
                      </Badge>
                    )}
                  </Group>
                  <ActionIcon
                    variant="subtle"
                    color="teal"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(ROUTERS.PO_MANAGEMENT);
                    }}
                  >
                    <IconChevronRight size={20} />
                  </ActionIcon>
                </Group>
                <Collapse in={open === 'warehouse'}>
                  <Box style={{ maxHeight: 300, overflow: 'auto' }}>
                    <Stack gap="xs">
                      {!(canViewAllPO || canViewMyPO) ? (
                        <Text c="dimmed" size="sm">
                          -
                        </Text>
                      ) : filteredProcessingQueue.length === 0 ? (
                        <Text c="dimmed" size="sm">
                          {t('po.noPOsFound')}
                        </Text>
                      ) : (
                        filteredProcessingQueue.map((po) => (
                          <POCard
                            key={po.id}
                            po={po}
                            onClick={() => {
                              handlePOClick(po.id);
                              closeFullscreen();
                            }}
                          />
                        ))
                      )}
                    </Stack>
                  </Box>
                </Collapse>
                {open === 'warehouse' && filteredProcessingQueue.length > 3 ? (
                  <Button
                    mt="sm"
                    variant="subtle"
                    color="blue"
                    onClick={(e) => {
                      e.stopPropagation();
                      openFullscreen('warehouse');
                    }}
                  >
                    {t('common.viewInFullScreen')}
                  </Button>
                ) : null}
              </Card>
            )}
          </Stack>
        </Container>

        {/* Fullscreen Modal */}
        <Modal
          opened={fullscreenOpen}
          onClose={closeFullscreen}
          fullScreen
          padding={0}
          withCloseButton={false}
          transitionProps={{ transition: 'slide-up', duration: 300 }}
        >
          <Stack gap={0} h="100vh">
            {/* Modal Header with Tabs */}
            <Box
              style={{
                borderBottom: '1px solid var(--mantine-color-gray-3)',
                backgroundColor: 'var(--mantine-color-body)',
              }}
            >
              <Group justify="space-between" p="md" pb={0}>
                <Title order={4}>{t('home.title')}</Title>
                <ActionIcon variant="subtle" color="gray" onClick={closeFullscreen} size="lg">
                  <IconX size={20} />
                </ActionIcon>
              </Group>
            </Box>

            {/* Modal Content */}
            <Box style={{ flex: 1, overflow: 'auto' }} p="xs">
              {/* Sales Panel */}
              {activeSection === 'sales' && (
                <Stack gap="xs">
                  {!(canViewAllPO || canViewMyPO) ? (
                    <Text c="dimmed" size="sm">
                      -
                    </Text>
                  ) : filteredActivePOs.length === 0 ? (
                    <Text c="dimmed" size="sm">
                      {t('po.noPOsFound')}
                    </Text>
                  ) : (
                    filteredActivePOs.map((po) => (
                      <POCard
                        key={po.id}
                        po={po}
                        onClick={() => {
                          handlePOClick(po.id);
                          closeFullscreen();
                        }}
                      />
                    ))
                  )}
                </Stack>
              )}

              {/* Delivery Panel */}
              {activeSection === 'delivery' && (
                <Stack gap="xs">
                  {!(canViewAllDR || canViewMyDR) ? (
                    <Text c="dimmed" size="sm">
                      -
                    </Text>
                  ) : filteredTodayDeliveries.length === 0 ? (
                    <Text c="dimmed" size="sm">
                      {t('delivery.noDeliveryRequestsFound')}
                    </Text>
                  ) : (
                    filteredTodayDeliveries.map((deliveryRequest) => (
                      <DRCard
                        key={deliveryRequest.id}
                        deliveryRequest={deliveryRequest}
                        onClick={() => {
                          handleDRClick(deliveryRequest.id);
                          closeFullscreen();
                        }}
                      />
                    ))
                  )}
                </Stack>
              )}

              {/* Warehouse Panel */}
              {activeSection === 'warehouse' && (
                <Stack gap="xs">
                  {!(canViewAllPO || canViewMyPO) ? (
                    <Text c="dimmed" size="sm">
                      -
                    </Text>
                  ) : filteredProcessingQueue.length === 0 ? (
                    <Text c="dimmed" size="sm">
                      {t('po.noPOsFound')}
                    </Text>
                  ) : (
                    filteredProcessingQueue.map((po) => (
                      <POCard
                        key={po.id}
                        po={po}
                        onClick={() => {
                          handlePOClick(po.id);
                          closeFullscreen();
                        }}
                      />
                    ))
                  )}
                </Stack>
              )}
            </Box>
          </Stack>
        </Modal>
      </AppMobileLayout>
    );
  }

  return (
    <AppDesktopLayout isLoading={isLoading} error={error} clearError={clearError}>
      <Container fluid px="xl">
        <Stack gap="xl">
          {/* Sales Section */}
          {canViewPO && (
            <Card shadow="sm" padding="lg">
              <Group justify="space-between" mb="md">
                <Group gap="xs">
                  <Title order={4}>{t('home.sales.sectionTitle')}</Title>
                  {(canViewAllPO || canViewMyPO) && (
                    <Badge ml="lg" color="blue" variant="filled" size="sm">
                      {filteredActivePOs.length}
                    </Badge>
                  )}
                </Group>
                <ActionIcon
                  variant="subtle"
                  color="blue"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(ROUTERS.PO_MANAGEMENT);
                  }}
                >
                  <IconChevronRight size={20} />
                </ActionIcon>
              </Group>
              <Box style={{ maxHeight: 400, overflow: 'auto' }}>
                <Table highlightOnHover>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>{t('home.sales.columns.poNumber')}</Table.Th>
                      <Table.Th>{t('home.sales.columns.customer')}</Table.Th>
                      <Table.Th>{t('po.salesPerson')}</Table.Th>
                      <Table.Th>{t('home.sales.columns.status')}</Table.Th>
                      <Table.Th>{t('home.sales.columns.orderDate')}</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {!(canViewAllPO || canViewMyPO) ? (
                      <Table.Tr>
                        <Table.Td colSpan={4}>
                          <Text c="dimmed" ta="center">
                            {t('common.noPermission')}
                          </Text>
                        </Table.Td>
                      </Table.Tr>
                    ) : filteredActivePOs.length === 0 ? (
                      <Table.Tr>
                        <Table.Td colSpan={4}>
                          <Text c="dimmed" ta="center">
                            {t('po.noPOsFound')}
                          </Text>
                        </Table.Td>
                      </Table.Tr>
                    ) : (
                      filteredActivePOs.map((po) => (
                        <Table.Tr
                          key={po.id}
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            handlePOClick(po.id);
                          }}
                        >
                          <Table.Td>
                            <PONumber po={po} />
                          </Table.Td>
                          <Table.Td>{po.customerName ?? '-'}</Table.Td>
                          <Table.Td>{po.salesPerson ?? '-'}</Table.Td>
                          <Table.Td>
                            <POStatusBadge status={po.status} />
                          </Table.Td>
                          <Table.Td>{new Date(po.orderDate).toLocaleDateString()}</Table.Td>
                        </Table.Tr>
                      ))
                    )}
                  </Table.Tbody>
                </Table>
              </Box>
            </Card>
          )}

          {/* Delivery Section */}
          {canViewDR && (
            <Card shadow="sm" padding="lg">
              <Group justify="space-between" mb="md">
                <Group gap="xs">
                  <Title order={4}>{t('home.delivery.sectionTitle')}</Title>
                  {(canViewAllDR || canViewMyDR) && (
                    <Badge ml="lg" color="orange" variant="filled" size="sm">
                      {filteredTodayDeliveries.length}
                    </Badge>
                  )}
                </Group>
                <ActionIcon
                  variant="subtle"
                  color="orange"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(ROUTERS.DELIVERY_MANAGEMENT);
                  }}
                >
                  <IconChevronRight size={20} />
                </ActionIcon>
              </Group>
              <Box style={{ maxHeight: 400, overflow: 'auto' }}>
                <Table highlightOnHover>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>{t('home.delivery.columns.drNumber')}</Table.Th>
                      <Table.Th>{t('home.delivery.columns.customer')}</Table.Th>
                      <Table.Th>{t('delivery.assignedTo')}</Table.Th>
                      <Table.Th>{t('home.delivery.columns.status')}</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {!(canViewAllDR || canViewMyDR) ? (
                      <Table.Tr>
                        <Table.Td colSpan={4}>
                          <Text c="dimmed" ta="center">
                            {t('common.noPermission')}
                          </Text>
                        </Table.Td>
                      </Table.Tr>
                    ) : filteredTodayDeliveries.length === 0 ? (
                      <Table.Tr>
                        <Table.Td colSpan={4}>
                          <Text c="dimmed" ta="center">
                            {t('delivery.noDeliveryRequestsFound')}
                          </Text>
                        </Table.Td>
                      </Table.Tr>
                    ) : (
                      filteredTodayDeliveries.map((deliveryRequest) => (
                        <Table.Tr
                          key={deliveryRequest.id}
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            handleDRClick(deliveryRequest.id);
                          }}
                        >
                          <Table.Td>
                            <Group gap="xs">
                              <Text fw={500}>
                                {deliveryRequest.deliveryRequestNumber}
                                <NewMessageBadge hasNewMessage={deliveryRequest.hasNewMessage} />
                              </Text>
                            </Group>
                          </Table.Td>
                          <Table.Td>
                            <Text fw={400}>
                              {deliveryRequest.customerName || deliveryRequest.vendorName}
                            </Text>
                          </Table.Td>
                          <Table.Td>{deliveryRequest.deliveryPerson ?? '-'}</Table.Td>
                          <Table.Td>
                            <Group gap="xs">
                              {deliveryRequest.isUrgentDelivery && <UrgentBadge size="xs" />}
                              <DeliveryTypeBadge type={deliveryRequest.type} size="xs" />
                              <DeliveryStatusBadge status={deliveryRequest.status} />
                            </Group>
                          </Table.Td>
                        </Table.Tr>
                      ))
                    )}
                  </Table.Tbody>
                </Table>
              </Box>
            </Card>
          )}

          {/* Warehouse Section */}
          {canViewWarehouse && (
            <Card shadow="sm" padding="lg">
              <Group justify="space-between" mb="md">
                <Group gap="xs">
                  <Title order={4}>{t('home.warehouse.sectionTitle')}</Title>
                  {(canViewAllPO || canViewMyPO) && (
                    <Badge ml="lg" color="teal" variant="filled" size="sm">
                      {filteredProcessingQueue.length}
                    </Badge>
                  )}
                </Group>
                <ActionIcon
                  variant="subtle"
                  color="teal"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(ROUTERS.PO_MANAGEMENT);
                  }}
                >
                  <IconChevronRight size={20} />
                </ActionIcon>
              </Group>
              <Box style={{ maxHeight: 400, overflow: 'auto' }}>
                <Table highlightOnHover>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>{t('po.poNumber')}</Table.Th>
                      <Table.Th>{t('home.warehouse.columns.customer')}</Table.Th>
                      <Table.Th>{t('po.salesPerson')}</Table.Th>
                      <Table.Th>{t('po.poStatus')}</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {!(canViewAllPO || canViewMyPO) ? (
                      <Table.Tr>
                        <Table.Td colSpan={4}>
                          <Text c="dimmed" ta="center">
                            {t('common.noPermission')}
                          </Text>
                        </Table.Td>
                      </Table.Tr>
                    ) : filteredProcessingQueue.length === 0 ? (
                      <Table.Tr>
                        <Table.Td colSpan={4}>
                          <Text c="dimmed" ta="center">
                            {t('po.noPOsFound')}
                          </Text>
                        </Table.Td>
                      </Table.Tr>
                    ) : (
                      filteredProcessingQueue.map((po) => (
                        <Table.Tr
                          key={po.id}
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            handlePOClick(po.id);
                          }}
                        >
                          <Table.Td>
                            <PONumber po={po} />
                          </Table.Td>
                          <Table.Td>{po.customerName ?? '-'}</Table.Td>
                          <Table.Td>{po.salesPerson ?? '-'}</Table.Td>
                          <Table.Td>
                            <POStatusBadge status={po.status} />
                          </Table.Td>
                        </Table.Tr>
                      ))
                    )}
                  </Table.Tbody>
                </Table>
              </Box>
            </Card>
          )}
        </Stack>
      </Container>
    </AppDesktopLayout>
  );
}

function POCard({ po, onClick }: { readonly po: PurchaseOrder; readonly onClick: () => void }) {
  return (
    <Card padding="sm" withBorder style={{ cursor: 'pointer' }} onClick={onClick}>
      <Group justify="space-between">
        <Stack gap={4} style={{ position: 'relative' }}>
          <PONumber po={po} />
          <Text size="sm">{po.customerName ?? '-'}</Text>
          <Group gap="xs">
            <Text size="sm">{po.salesPerson ?? '-'}</Text>
            <Text size="sm" c="dimmed">
              {new Date(po.orderDate).toLocaleDateString()}
            </Text>
          </Group>
        </Stack>
        <Box style={{ position: 'absolute', top: 5, right: 5 }}>
          <POStatusBadge status={po.status} />
        </Box>
      </Group>
    </Card>
  );
}

function PONumber({ po }: { readonly po: PurchaseOrder }) {
  return (
    <Text size="sm" fw={500}>
      {po.poNumber}
      <NewMessageBadge hasNewMessage={po.hasNewMessage} />
      {po.customerPONumber && (
        <Text size="sm" ml="xs">
          ({po.customerPONumber})
        </Text>
      )}
    </Text>
  );
}

function DRCard({
  deliveryRequest,
  onClick,
}: {
  readonly deliveryRequest: DeliveryRequest;
  readonly onClick: () => void;
}) {
  const { t } = useTranslation();
  return (
    <Card padding="sm" withBorder style={{ cursor: 'pointer' }} onClick={onClick}>
      <Group justify="space-between">
        <Stack gap={4}>
          <Group gap="xs">
            <Text fw={500}>
              {deliveryRequest.deliveryRequestNumber}
              <NewMessageBadge hasNewMessage={deliveryRequest.hasNewMessage} />
            </Text>
          </Group>
          <Group gap="xs">
            <Text size="sm" c="dimmed">
              {deliveryRequest.customerName ? t('common.customer') : t('common.vendor')}:
            </Text>
            <Text size="sm">
              {deliveryRequest.customerName || deliveryRequest.vendorName || '-'}
            </Text>
          </Group>
          <Group gap="xs">
            <Text size="sm" c="dimmed">
              {t('delivery.assignedTo')}:
            </Text>
            <Text size="sm">{deliveryRequest.deliveryPerson ?? '-'}</Text>
          </Group>
        </Stack>
        <Group gap="xs">
          {deliveryRequest.isUrgentDelivery && <UrgentBadge size="xs" />}
          <DeliveryStatusBadge status={deliveryRequest.status} />
          <DeliveryTypeBadge type={deliveryRequest.type} size="xs" />
        </Group>
      </Group>
    </Card>
  );
}
