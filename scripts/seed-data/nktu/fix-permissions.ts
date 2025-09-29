// cspell:disable
// RUN: node scripts/seed-data/nktu/fix-permissions.ts

global.host = 'https://cMngt-api-aztuk.consocia.in';
global.host = 'http://localhost:3000';

import {configs, updateClientConfig} from '../helpers/index.ts';

import { load } from './fixtures/load.ts';


async function run() {
  load();
  await updateClientConfig('ACME', configs.registerData.ACME.clientConfig);
  // await updatePermissions('NKTU');
}

run();
