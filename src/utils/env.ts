import { STORAGE_KEYS } from '@/utils/storageKeys';

export const isProduction = Boolean(import.meta.env.PROD ?? false);
export const isDevelopment = Boolean(import.meta.env.DEV ?? false);
export const isDebug = Boolean('Sxk7g9MDjfCE' === localStorage.getItem(STORAGE_KEYS.DEBUG.MODE));
// export const isProduction = true;
// export const isDevelopment = false;

// cspell:words kimtri gom-va-hoa artemis nktu
export function getClientCodeFromHost() {
  localStorage.setItem('__CUSTOM_MANTINE_THEME__', 'elegant');
  const host = window.location.host.toLowerCase();

  if (host.includes('sigma')) {
    return 'SIGMA';
  }
  if (host.includes('kimtri')) {
    localStorage.setItem('__CUSTOM_MANTINE_THEME__', 'forest');
    return 'KIMTRI';
  }
  if (host.includes('gom-va-hoa')) {
    // gom-va-hoa.cr3do.dev
    return 'GOM_VA_HOA';
  }
  // artemis.cr3do.dev
  if (host.includes('artemis')) {
    return 'ARTEMIS';
  }
  if (host.includes('nktu')) {
    localStorage.setItem('__CUSTOM_MANTINE_THEME__', 'nktu');
    return 'NKTU';
  }

  localStorage.setItem('__CUSTOM_MANTINE_THEME__', 'nktu');
  return 'NKTU';
}


export const isNKTU = getClientCodeFromHost() === 'NKTU';
