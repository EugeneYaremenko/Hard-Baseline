export function convertIdToStringInArr<T extends { id: string | number }>(arr: T[]): T[] {
  return arr.map(obj => ({ ...obj, id: obj.id.toString() }));
}

const testArr = [{ id: '1' }, { id: '2' }, { id: 3 }];

const testResult = convertIdToStringInArr(testArr);

console.log('🚀 ~ file: convert.ts:8 ~ testResult:', testResult);
