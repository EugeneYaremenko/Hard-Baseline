type ConvertIdType<ObjType, IdType = string> = ObjType & { id: IdType };

export function convertIdToStringInArr<ObjType>(
  arr: ConvertIdType<ObjType, string | number>[],
): ConvertIdType<ObjType>[] {
  return arr.map(obj => ({
    ...obj,
    id: obj.id.toString(),
  }));
}

const testArr = [{ id: '1', mail: 'test@mail.com' }, { id: '2', startDate: new Date() }, { id: 3 }];

const testResult = convertIdToStringInArr(testArr);

console.log('🚀 ~ file: convert.ts:8 ~ testResult:', testResult[1].id);
