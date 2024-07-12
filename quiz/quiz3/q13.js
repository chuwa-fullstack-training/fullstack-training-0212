/* Create a function named safelyTraverse which takes an object as the first parameter and an array of strings as the second parameter. 
The function should return the value found after treating each string as a key traversing the object. If the path does not exist, the function should return undefined.
For example:

safelyTraverse({ first: { second: 2 } }, ['first', 'second']) should return 2 safelyTraverse({}, ['a', 'b']) should return undefined */

const safelyTraverse = (obj, arr) => {
  if (obj === undefined) return undefined;
  if (!obj instanceof Object && arr.length > 0) {
    return undefined;
  } else if (arr.length === 0) {
    return obj;
  } else if (obj instanceof Object && arr.length > 0) {
    let key = arr.shift();
    if (!obj[key]) return undefined;
    return safelyTraverse(obj[key], arr);
  }
  return undefined;
};

/* const safelyTraverse = (obj, arr) => {
    for (let key of arr) {
      if (obj === undefined || obj === null || typeof obj !== 'object') {
        return undefined;
      }
      obj = obj[key];
    }
    return obj;
  }; */
