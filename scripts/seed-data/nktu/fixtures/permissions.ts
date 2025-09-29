import { generateDefaultPermissions, toTrue } from "../../helpers/index.ts";
import type { GetMeResponse } from "../../../../src/lib/api";

export const departmentPermissions = generateDepartmentPermissions()

export function generateDepartmentPermissions() {
  type Permissions = GetMeResponse['permissions'];
  return {
    manager: toTrue(generateDefaultPermissions()),
    sales: (() => {
      const permissions: Permissions = generateDefaultPermissions();
      permissions.purchaseOrder = toTrue(permissions.purchaseOrder) as Permissions['purchaseOrder'];
      {
        const query = permissions.purchaseOrder.query || {};
        query.canFilter = true;
        query.canViewAll = false;
        const actions = permissions.purchaseOrder.actions || {};
        actions.canProcess = false;
        actions.canMarkReady = false;
      }
      {
        permissions.deliveryRequest.canView = true;
        permissions.deliveryRequest.canEdit = true;
        const actions = permissions.deliveryRequest.actions || {};
        actions.canTakePhoto = true;
      }
      return permissions;
    })(),
    warehouse: (() => {
      const permissions: Permissions = generateDefaultPermissions();
      const query = permissions.purchaseOrder.query || {};
        query.canFilter = true;
        query.canViewAll = true;
      permissions.purchaseOrder = {
        ...permissions.purchaseOrder,
        canView: true,
        actions: toTrue(permissions.purchaseOrder.actions || {}) as Permissions['purchaseOrder']['actions'],
      }
      permissions.deliveryRequest.canView = true;
      permissions.deliveryRequest.actions = {
        ...permissions.deliveryRequest.actions,
        canTakePhoto: true,
      }
      return permissions;
    })(),
    accounting: (() => {
      const permissions: Permissions = generateDefaultPermissions();
      {
        const query = permissions.purchaseOrder.query || {};
        query.canFilter = true;
        query.canViewAll = true;
        const actions = (toTrue(permissions.purchaseOrder.actions || {}) as Permissions['purchaseOrder']['actions']) || {};
        actions.canProcess = false;
        actions.canMarkReady = false;
        permissions.purchaseOrder = {
          ...permissions.purchaseOrder,
          canView: true,
          actions,
        }
      }
      {
        permissions.deliveryRequest = toTrue(permissions.deliveryRequest) as Permissions['deliveryRequest'];
        const actions = permissions.deliveryRequest.actions || {};
        actions.canTakePhoto = false;
        actions.canComplete = false;
      }
      return permissions;
    })(),
    delivery: (() => {
      const permissions: Permissions = generateDefaultPermissions();
      permissions.deliveryRequest.canView = true;
      permissions.deliveryRequest.actions = {
        canUpdateDeliveryOrderInDay: true,
        canStartTransit: true,
        canTakePhoto: true,
        canDeletePhoto: false,
        canComplete: true,
      }
      return permissions;
    })(),
    default: generateDefaultPermissions(),
  };
}
