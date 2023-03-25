export const testObj_one = {
  email: 'test_email_1@mail.com',
  password: 'qwerty_1',
};

export const testObj_two = {
  email: 'test_email_2@mail.com',
  password: 'qwerty_2',
};

// example 1
function deepEqual<Obj1, Obj2>(obj1: Obj1, obj2: Obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// example 2
function deepComparison(obj1: typeof Object, obj2: typeof Object) {
  /* Checking if the types and values of the two arguments are the same. */
  if (obj1 === obj2) return true;

  /* Checking if any arguments are null */
  if (obj1 === null || obj2 === null) return false;

  /* Checking if any argument is none object */
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

  /* Using Object.getOwnPropertyNames() method to return the list of the objects’ properties */
  let obj1_keys = Object.getOwnPropertyNames(obj1);

  let obj2_keys = Object.getOwnPropertyNames(obj2);

  /* Checking if the objects' length are same*/
  if (obj1_keys.length !== obj2_keys.length) return false;

  /* Iterating through all the properties of the obj1 object with the for of method*/
  for (let key of obj1_keys) {
    /* Making sure that every property in the obj1 object also exists in obj2 object. */
    if (!Object.hasOwn(obj2, key)) return false;

    /* Using the deepComparison function recursively (calling itself) and passing the values of each property into it to check if they are equal. */
    if (deepComparison(obj1[key], obj2[key]) === false) return false;
  }

  /* if no case matches, returning true */
  return true;
}
