import { STORAGE_KEYS } from '@/utils/storageKeys';

export const isProduction = Boolean(import.meta.env.PROD ?? false);
export const isDevelopment = Boolean(import.meta.env.DEV ?? false);
export const isDebug = Boolean('Sxk7g9MDjfCE' === localStorage.getItem(STORAGE_KEYS.DEBUG.MODE));
// export const isProduction = true;
// export const isDevelopment = false;


export function getClientCodeFromHost() {
  const host = window.location.host.toLowerCase();
  if (host.includes('sigma')) {
    return 'SIGMA';
  }
  // cspell:words nktu
  return 'NKTU';
}
