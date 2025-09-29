import { RouteIdentifiers } from '../../../../src/config/routeConfig.ts';
import { IconIdentifiers } from '../../../../src/utils/iconRegistry.ts';

// cspell:disable
export const navigation = [
  {
    id: 'nav-home',
    translationKey: 'common.pages.home',
    icon: IconIdentifiers.DASHBOARD,
    path: RouteIdentifiers.HOME,
    order: 1,
  },
  {
    id: 'nav-employee-management',
    translationKey: 'common.pages.employeeManagement',
    icon: IconIdentifiers.USERS,
    path: RouteIdentifiers.EMPLOYEE_MANAGEMENT,
    order: 2,
    // roles: ['manager'],
    activePaths: [
      RouteIdentifiers.EMPLOYEE_MANAGEMENT,
      RouteIdentifiers.EMPLOYEES_ADD,
      RouteIdentifiers.EMPLOYEE_EDIT,
      RouteIdentifiers.EMPLOYEE_DETAIL,
    ],
  },
  {
    id: 'nav-sales-po-management',
    translationKey: 'common.pages.salesPoManagement',
    icon: IconIdentifiers.SHOPPING_CART,
    path: RouteIdentifiers.PO_MANAGEMENT,
    order: 3,
    activePaths: [
      RouteIdentifiers.PO_MANAGEMENT,
      RouteIdentifiers.PO_ADD,
      RouteIdentifiers.PO_DETAIL,
      RouteIdentifiers.PO_EDIT,
    ],
  },
  {
    id: 'nav-delivery-management',
    translationKey: 'common.pages.deliveryManagement',
    icon: IconIdentifiers.TRUCK,
    path: RouteIdentifiers.DELIVERY_MANAGEMENT,
    order: 5,
    activePaths: [
      RouteIdentifiers.DELIVERY_MANAGEMENT,
      RouteIdentifiers.DELIVERY_DETAIL,
    ],
  },
  {
    id: 'nav-master-data',
    translationKey: 'common.pages.masterData',
    icon: IconIdentifiers.DATABASE_COG,
    order: 6,
    subs: [
      {
        id: 'nav-product-config',
        translationKey: 'common.pages.productConfig',
        icon: IconIdentifiers.BOX,
        path: RouteIdentifiers.PRODUCT_CONFIG,
        order: 1,
        activePaths: [
          RouteIdentifiers.PRODUCT_CONFIG,
        ],
      },
      {
        id: 'nav-customer-config',
        translationKey: 'common.pages.customerConfig',
        icon: IconIdentifiers.ADDRESS_BOOK,
        path: RouteIdentifiers.CUSTOMER_CONFIG,
        order: 2,
        activePaths: [
          RouteIdentifiers.CUSTOMER_CONFIG,
        ],
      },
    ],
  },
  {
    id: 'nav-profile',
    translationKey: 'common.pages.profile',
    icon: IconIdentifiers.USER_CIRCLE,
    path: RouteIdentifiers.PROFILE,
    order: 99,
  },
]

export const mobileNavigation = [
  {
    id: 'mobile-nav-home',
    translationKey: 'common.pages.home',
    icon: IconIdentifiers.HOME,
    path: RouteIdentifiers.HOME,
    order: 1,
  },
  {
    id: 'mobile-nav-po',
    translationKey: 'common.pages.poManagementMobile',
    icon: IconIdentifiers.SHOPPING_CART,
    path: RouteIdentifiers.PO_MANAGEMENT,
    order: 2,
  },
  {
    id: 'mobile-nav-delivery',
    translationKey: 'common.pages.deliveryManagementMobile',
    icon: IconIdentifiers.TRUCK,
    path: RouteIdentifiers.DELIVERY_MANAGEMENT,
    order: 3,
  },
  {
    id: 'mobile-nav-more',
    translationKey: 'common.pages.more',
    icon: IconIdentifiers.DOTS,
    path: RouteIdentifiers.MORE,
    order: 4,
  },
]
