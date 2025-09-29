// cspell:disable
// RUN: node scripts/seed-data/seed-minimal-data.ts

global.host = 'https://cMngt-api-aztuk.consocia.in';
global.host = 'http://localhost:3000';

import {clearCache, addClient, getClientRootUserId, addEmployees, login, updateClientConfig, toTrue, generateDefaultPermissions, updateUserSettings} from "./helpers/index.ts";
import { navigation, mobileNavigation } from "./helpers/fixtures/navigation-data.ts";
async function run() {
  const clientCode = 'ACME';
  await clearCache();
  await addClient(clientCode);
  const rootUserId = await getClientRootUserId(clientCode);
  await clearCache();
  await login(clientCode);
  await addEmployees(clientCode, [{
    firstName: 'An',
    lastName: 'Nguyễn',
    userId: rootUserId
  }]);
  if (rootUserId) {
    await updateUserSettings(clientCode, rootUserId ?? '', {
      permissions: toTrue(generateDefaultPermissions()),
      navigationOverrides: {
        granted: [],
        denied: [],
      },
    });
  }
  await updateClientConfig(clientCode, {
    navigation,
    mobileNavigation,
  });
  await clearCache();
}

run();
