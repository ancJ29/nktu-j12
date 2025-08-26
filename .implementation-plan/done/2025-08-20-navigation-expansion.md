# Navigation Expansion for Procurement & Delivery

**Status**: Todo  
**Created**: 2025-08-20  
**Priority**: Medium

## Objective
Add procurement and delivery management modules to navigation system.

## Tasks
- [ ] Update icon registry with CLIPBOARD and TRUCK icons (15m)
- [ ] Add route definitions for procurement module (30m)
- [ ] Add route definitions for delivery module (30m)
- [ ] Update translation files (en.json, vi.json) (15m)
- [ ] Create placeholder pages for new routes (1h)
- [ ] Test navigation with new menu items (30m)

## Implementation Details

### 1. Icon Registry Updates
**File**: `src/utils/iconRegistry.ts`
```ts
// Add imports
import { IconClipboardList, IconTruck } from '@tabler/icons-react';

// Add to IconIdentifiers
CLIPBOARD: 'clipboard',
TRUCK: 'truck',

// Add to iconRegistry
[IconIdentifiers.CLIPBOARD]: IconClipboardList,
[IconIdentifiers.TRUCK]: IconTruck,
```

### 2. Route Configuration Updates
**File**: `src/config/routeConfig.ts`
```ts
// Procurement routes
PROCUREMENT_MANAGEMENT: { id: 'procurement-management', path: '/procurement-management' },
PROCUREMENT_REQUESTS: { id: 'procurement-requests', path: '/procurement-requests' },
PROCUREMENT_ADD: { id: 'procurement-add', path: '/procurement/add' },
PROCUREMENT_DETAIL: { id: 'procurement-detail', path: '/procurement/:requestId' },
PROCUREMENT_EDIT: { id: 'procurement-edit', path: '/procurement/edit/:requestId' },

// Delivery routes
DELIVERY_MANAGEMENT: { id: 'delivery-management', path: '/delivery-management' },
DELIVERY_SCHEDULE: { id: 'delivery-schedule', path: '/delivery-schedule' },
DELIVERY_TRACKING: { id: 'delivery-tracking', path: '/delivery-tracking' },
DELIVERY_DETAIL: { id: 'delivery-detail', path: '/delivery/:deliveryId' },
```

### 3. Translation Keys
**Files**: `src/locales/en.json`, `src/locales/vi.json`

English:
```json
"common.pages.salesPoManagement": "Sales & Purchase Orders",
"common.pages.procurementManagement": "Procurement Requests",
"common.pages.deliveryManagement": "Delivery Management"
```

Vietnamese:
```json
"common.pages.salesPoManagement": "Bán hàng & Đơn mua hàng",
"common.pages.procurementManagement": "Yêu cầu mua sắm",
"common.pages.deliveryManagement": "Quản lý giao hàng"
```

## Dependencies
- Existing navigation architecture
- Icon library (@tabler/icons-react)
- React Router configuration

## Notes
- Follow existing patterns from PO and Employee modules
- Ensure role-based access control is properly configured
- Mobile navigation can show these in "More" menu initially