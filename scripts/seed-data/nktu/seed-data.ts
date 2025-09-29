// cspell:disable
// RUN: node scripts/seed-data/nktu/seed-data.ts

global.host = 'https://cMngt-api-aztuk.consocia.in';
global.host = 'http://localhost:3000';

import {addClients, addCustomers, addDepartments, addEmployees, addProducts, clearCache, data, fetchClients, getDepartments } from "../helpers/index.ts";

import {data as customerData} from './fixtures/customers-data.ts';
import departmentData from './fixtures/department-data.json' with { type: 'json' };
import { load } from "./fixtures/load.ts";
import {data as productData} from './fixtures/product-data.ts';
import userData from './fixtures/user-data.json' with { type: 'json' };

import type {ClientCode} from '../helpers/index.ts';


async function updateForNKTU(clientCode: ClientCode) {
  await clearCache();
  await addCustomers(clientCode, customerData.map(el => {
    const {name, metadata} = el;
    return {
      name: name.trim(),
      metadata: {
        isActive: true,
        ...metadata,
      }
    }
  }))
  await addProducts(clientCode, productData.map((el) => {
    return {
      productCode: el.productCode.trim(),
      metadata: {
        name: el.metadata.name.trim(),
        unit: el.metadata.unit.trim(),
      }
    };
  }))
  await addDepartments(clientCode, departmentData)

  await clearCache();

  await getDepartments(clientCode);
  await clearCache();
  await getDepartments(clientCode);
  await clearCache();
  await addEmployees(
    clientCode,
    (userData as {
      name: string;
      userId: string;
      departmentCode: string;
      userSettings?: unknown;
      metadata: {
        positionName?: string;
        displayOrder: number;
      };
    }[]).map(({name, ...el}) => {
      const [lastName, ...firstName] = name.split(' ');
      if (name === 'Lê Duy Tân') {
        el.userId = data.rootUserIds[clientCode] ?? '';
      }
      if (name === 'Lê Hồng Kiều Oanh') {
        el.userSettings = {
          "navigationOverrides": {
            "granted": [
              "nav-master-data",
              "nav-product-config",
              "nav-customer-config"
            ],
            "denied": [
              "nav-delivery-management"
            ]
          },
          "permissions": {
            "customer": {
              "canView": true,
              "canCreate": true,
              "canEdit": true,
              "canDelete": false
            },
            "product": {
              "canView": true,
              "canCreate": true,
              "canEdit": true,
              "canDelete": false
            }
          }
        };
      }
      return {
        ...el,
        lastName,
        firstName: firstName.join(' ').trim(),
      };
    }),
  );
}

async function run() {
  load();
  await clearCache();
  await fetchClients();
  await addClients(['ACME']);
  await clearCache();
  // await addClients(['ACME', 'NKTU']);
  await updateForNKTU('ACME');
  // await updateForNKTU('NKTU');
}

run();
