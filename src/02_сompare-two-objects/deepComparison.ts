import { testObj_one, testObj_two } from './deepComparison.test';

// example 1
export function deepEqual<Obj1, Obj2>(obj1: Obj1, obj2: Obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// example 2
Object.is(testObj_one, testObj_two);

// example 2
export function deepComparison(obj1: any, obj2: any): boolean {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key of Object.keys(obj1)) {
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
