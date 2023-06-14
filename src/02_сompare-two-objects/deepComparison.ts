export function deepComparison(obj1: unknown, obj2: unknown): boolean {
  if (
    typeof obj1 !== 'object' ||
    obj1 === null ||
    Array.isArray(obj1) ||
    typeof obj2 !== 'object' ||
    obj2 === null ||
    Array.isArray(obj2)
  ) {
    return false;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  const objKeys = <T extends Record<string, any>>(obj: T): Array<keyof T> => Object.keys(obj);

  for (let key of objKeys(obj1)) {
    const isObjects = typeof obj1[key] === 'object' && typeof obj2[key] === 'object';

    if (!obj2.hasOwnProperty(key)) {
      return false;
    }

    if (
      (!isObjects && obj1[key] !== obj2[key]) ||
      (isObjects && !deepComparison(obj1[key], obj2[key]))
    ) {
      return false;
    }
  }

  return true;
}
