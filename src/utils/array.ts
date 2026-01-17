export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function skipEmpty<T>(array: T[]): T[] {
  return array.filter(Boolean);
}

export function uniqueBy<T>(array: T[], key: keyof T): T[] {
  return [...new Map(array.map(item => [item[key], item])).values()];
}
