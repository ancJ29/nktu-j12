import { IconIdentifiers } from '../../../src/utils/iconRegistry.ts';
import { RouteIdentifiers } from '../../../src/config/routeConfig.ts';
import process from 'node:process';

export type ClientCode = string

declare global {
  var host: string;
}

type RequestInit = {
  headers?: Record<string, string>
  method?: string
  body?: string;
}

type Config = {
  registerData: Record<ClientCode, {
    clientName?: string
    rootUserEmail?: string
    rootUserPassword?: string
    rootUserFirstName?: string
    rootUserLastName?: string
    clientConfig: any;
  }>
  features: {
    stores: boolean,
    employee: boolean,
  },
  totalStores?: Record<ClientCode, number>
}

export type DataStore = {
  tokens: Record<ClientCode, string>
  clientIds: Record<ClientCode, string>
  rootUserIds: Record<ClientCode, string>
  departmentIdByCode: Record<ClientCode, Record<string, string>>
  positionIdByCode: Record<ClientCode, Record<string, string>>
  roleIdByName: Record<ClientCode, Record<string, string>>
}

export const data: DataStore = {
  tokens: {},
  clientIds: {},
  rootUserIds: {},
  departmentIdByCode: {},
  positionIdByCode: {},
  roleIdByName: {},
}

const log = console.log

export const configs: Config = {
  registerData: {
    // Cspell:disable
    NKTU: {
      clientConfig: {
        navigation: [
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
            activePaths: [
              RouteIdentifiers.EMPLOYEE_MANAGEMENT,
              RouteIdentifiers.EMPLOYEES_ADD,
              RouteIdentifiers.EMPLOYEE_EDIT,
            ],
          },
          {
            id: 'nav-po-management',
            translationKey: 'common.pages.poManagement',
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
            id: 'nav-configuration',
            translationKey: 'common.pages.configuration',
            icon: IconIdentifiers.SETTINGS,
            order: 4,
            subs: [
              {
                id: 'nav-customer-config',
                translationKey: 'common.pages.customerConfig',
                icon: IconIdentifiers.ADDRESS_BOOK,
                path: RouteIdentifiers.CUSTOMER_CONFIG,
                order: 2,
              },
              {
                id: 'nav-product-config',
                translationKey: 'common.pages.productConfig',
                icon: IconIdentifiers.BOX,
                path: RouteIdentifiers.PRODUCT_CONFIG,
                order: 3,
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
        ],
      },
    },
    // Cspell:enable
  },
  features: {
    stores: false,
    employee: false,
  },
  totalStores: {
    NKTU: 0,
    BETA: 1,
    SIGMA: 10,
    ZETA: 3,
  },
};

const clientNameSuffixes = [
  'Inc.',
  'Ltd.',
  'Corp.',
  'Group',
  'LLC',
  'Co.',
  'Ltd',
];

export async function _call<T>(path: string, init?: RequestInit, option?: {
  ignoreResponseError?: boolean
  noAuth?: boolean
  clientCode?: string
  debug?: boolean
}) {
  console.log(`${init?.method ?? 'GET'}: ${path}`);
  const fetchData: RequestInit = {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    method: init?.method ?? 'GET',
  };
  if (fetchData.headers) {
    if (!option?.noAuth && data.tokens[option?.clientCode || '-']) {
      fetchData.headers['Authorization'] = `Bearer ${data.tokens[option?.clientCode || '-']}`;
    }
    if (option?.clientCode) {
      fetchData.headers['x-client-code'] = option.clientCode;
    }
    if (process.env.LOCAL_X_ADMIN_KEY && path.includes('admin')) {
      fetchData.headers['x-admin-key'] = process.env.LOCAL_X_ADMIN_KEY;
    }
  }
  const response = await fetch(`${global.host}${path}`, fetchData);
  if (!response.ok && !option?.ignoreResponseError) {
    log('', fetchData);
    throw new Error(
      `Failed to call ${path}: ${response.statusText}` +
        JSON.stringify({
          init,
          data: await response.json(),
        }),
    );
  }

  const responseData = await response.json();
  if (option?.debug) {
    log(JSON.stringify(responseData));
  }

  return (responseData.data ?? responseData) as T;
}

export async function clearCache() {
  await _call('/admin/cache/all', {method: 'DELETE'}, {ignoreResponseError: true});
  await _delay(100);
}

export async function _delay(timeout: number) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, timeout);
  });
}

export async function getDepartments(clientCode: ClientCode) {
  const {departments} = await _call<{
    departments: {
      code: string
      id: string
    }[]
  }>(
    '/api/hr/departments',
    {
      method: 'GET',
    },
    {clientCode},
  );
  data.departmentIdByCode[clientCode] = Object.fromEntries(
    departments.map((el) => [el.code, el.id]),
  );
}

export async function getPositions(clientCode: ClientCode) {
  const {positions} = await _call<{
    positions: {
      code: string
      id: string
    }[]
  }>(
    '/api/hr/positions',
    {
      method: 'GET',
    },
    {clientCode},
  );
  data.positionIdByCode[clientCode] = Object.fromEntries(
    positions.map((el) => [el.code, el.id]),
  );
}

export async function fetchClients() {
  const response = await _call<{ total: number, clients: {
    clientCode: ClientCode
    id: string
  }[] }>('/admin/clients');
  if (response.total > 1) {
    throw new Error("Don't need to seed data");
  }

  for (const client of response.clients) {
    data.clientIds[client.clientCode] = client.id;
    await login(client.clientCode);
  }
}

export async function addClients(codes: ClientCode[]) {
  for (const code of codes) {
    const existed = data.clientIds[code];
    if (existed) {
      log('client existed', code);
      continue;
    }

    const client = {
      clientCode: code.toUpperCase(),
      ...configs.registerData[code],
    };

    if (!client.clientName) {
      client.clientName = `${code} ${clientNameSuffixes[Math.floor(Math.random() * clientNameSuffixes.length)]}`;
    }

    if (!client.rootUserEmail) client.rootUserEmail = `admin@${code.toLowerCase()}.com`
    if (!client.rootUserPassword) client.rootUserPassword = 's5cureP@s5w0rd123!!!'
    if (!client.rootUserFirstName) client.rootUserFirstName = code
    if (!client.rootUserLastName) client.rootUserLastName = 'Admin'

    delete client.clientConfig;
    const response = await _call<{ clientId: string }>('/admin/clients/register', {
      method: 'POST',
      body: JSON.stringify(client),
    });

    if (configs.registerData[code]?.clientConfig) {
      await _call(`/admin/clients/${code}/config`, {
        method: 'PATCH',
        body: JSON.stringify(configs.registerData[code]?.clientConfig),
      });
    }

    data.clientIds[client.clientCode] = response.clientId;
    await clearCache();
    await login(client.clientCode);
  }
}

export async function login(clientCode: ClientCode) {
  const response = await _call<{ accessToken: string }>(
    '/auth/login',
    {
      method: 'POST',
      body: JSON.stringify({
        clientCode,
        identifier: 'admin',
        password: 's5cureP@s5w0rd123!!!',
      }),
    },
    {noAuth: true, clientCode},
  );
  const payload = decodeJWT(response.accessToken);
  data.rootUserIds[clientCode] = payload?.sub || '';
  data.tokens[clientCode] = response.accessToken;
}

export async function addDepartments(clientCode: ClientCode, departments: unknown[]) {
  for (const department of departments) {
    await _call(
      '/api/hr/departments',
      {
        method: 'POST',
        body: JSON.stringify(department),
      },
      {clientCode},
    );
  }
}

export async function addPositions(clientCode: ClientCode, positions: {
  departmentCode: string
  title: string;
  code: string;
}[]) {
  const departmentIdByCode = data.departmentIdByCode[clientCode] || {};
  for (const {departmentCode, ...position} of positions) {
    await _call(
      `/api/hr/positions`,
      {
        method: 'POST',
        body: JSON.stringify({
          ...position,
          departmentId: departmentIdByCode[departmentCode],
        }),
      },
      {clientCode},
    );
  }
}

export async function addEmployees(clientCode: ClientCode, employees: {
  name?: string;
  gender?: string
  positionCode?: string
  departmentCode: string
  metadata?: {
    displayOrder: number
  }
}[]) {
  const departmentIdByCode = data.departmentIdByCode[clientCode] || {};
  const positionIdByCode = data.positionIdByCode[clientCode] || {};
  for (const {
    positionCode,
    departmentCode,
    ...employee
  } of employees) {
    delete employee.name
    delete employee.gender
    await _call<{userId: string}>(
      `/api/hr/employees`,
      {
        method: 'POST',
        body: JSON.stringify({
          ...employee,
          positionId: positionCode ? positionIdByCode[positionCode] : undefined,
          departmentId: departmentIdByCode[departmentCode],
        }),
      },
      {clientCode},
    );
  }
}

export async function addCustomers (clientCode: ClientCode, customers: unknown[]) {
  for (const customer of customers) {
    await _call(
      `/api/sales/customers`,
      {
        method: 'POST',
        body: JSON.stringify(customer),
      },
      {clientCode},
    );
  }
}

export async function addProducts (clientCode: ClientCode, customers: unknown[]) {
  for (const customer of customers) {
    await _call(
      `/api/sales/products`,
      {
        method: 'POST',
        body: JSON.stringify(customer),
      },
      {clientCode},
    );
  }
}

function decodeJWT(token: string): { sub: string } | undefined {
  const parts = token.split('.');
    if (parts.length !== 3) {
      return undefined;
    }

    const payload = parts[1];
    const decoded = base64UrlDecode(payload);
    const parsed = JSON.parse(decoded) as unknown;

    // Validate the JWT payload structure
    return parsed as { sub: string };
}

function base64UrlDecode(str: string): string {
  // Base64url to base64
  const base64 = str.replaceAll('-', '+').replaceAll('_', '/');
  // Pad with = if needed
  const padded = base64 + '=='.slice(0, (4 - (base64.length % 4)) % 4);

  // Convert base64 to string
  const binaryString = globalThis.atob(padded);
  return binaryString;
}
