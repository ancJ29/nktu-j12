import { STORAGE_KEYS } from '@/utils/storageKeys';

export const isProduction = Boolean(import.meta.env.PROD ?? false);
export const isDevelopment = Boolean(import.meta.env.DEV ?? false);
export const isDebug = Boolean('Sxk7g9MDjfCE' === localStorage.getItem(STORAGE_KEYS.DEBUG.MODE));
// export const isProduction = true;
// export const isDevelopment = false;


export function getClientCodeFromHost() {
  const host = window.location.host.toLowerCase();
  if (host.includes('sigma')) {
    localStorage.setItem('__CUSTOM_MANTINE_THEME__', 'elegant');
    return 'SIGMA';
  }
  // cspell:words kimtri
  if (host.includes('kimtri')) {
    localStorage.setItem('__CUSTOM_MANTINE_THEME__', 'forest');
    return 'KIMTRI';
  }
  // cspell:words nktu
  localStorage.setItem('__CUSTOM_MANTINE_THEME__', 'elegant');
  return 'NKTU';
}
