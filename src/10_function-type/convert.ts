export function convertIdToStringInArr<T extends { id: string | number }>(arr: T[]) {
  return arr.map<{ id: string; [keys: string]: any }>(obj => ({
    ...obj,
    id: obj.id.toString(),
  }));
}

const testArr = [{ id: '1', mail: 'test@mail.com' }, { id: '2' }, { id: 3 }];

const testResult = convertIdToStringInArr(testArr);

console.log('🚀 ~ file: convert.ts:8 ~ testResult:', testResult);
