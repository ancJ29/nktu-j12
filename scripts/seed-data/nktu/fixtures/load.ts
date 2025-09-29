// cspell:disable
// RUN: node scripts/seed-data/nktu/seed-data.ts

global.host = 'https://cMngt-api-aztuk.consocia.in';
global.host = 'http://localhost:3000';

import {configs } from "../../helpers/index.ts";

import { features } from './features.ts';
import { mobileNavigation, navigation } from './navigation.ts' with { type: 'json' };
import { departmentPermissions } from "./permissions.ts";
import translation from './translation.json' with { type: 'json' };

export function load() {
  configs.registerData.ACME.clientConfig.translations = translation
  configs.registerData.ACME.clientConfig.navigation = navigation
  configs.registerData.ACME.clientConfig.mobileNavigation = mobileNavigation
  configs.registerData.ACME.clientConfig.features = features
  configs.registerData.ACME.clientConfig.departmentPermissions = departmentPermissions
  delete configs.registerData.ACME.clientConfig.departmentPermissions.default

  configs.registerData.NKTU = {
    clientName: `NGŨ KIM TÂN UYÊN`,
    rootUserEmail: 'congtytanuyen@gmail.com',
    rootUserFirstName: 'Duy Tân',
    rootUserLastName: 'Lê',
    clientConfig: {
      clientName: `NGŨ KIM TÂN UYÊN`,
      logoUrl: '/clients/NKTU/NKTU.png',
      ...configs.registerData.ACME.clientConfig,
    }
  }
}
