// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

let cloned = new Map();
const cloneDeepWithLoop = (obj) => {
  // Implement the function here
  if (cloned.has(obj)) {
    return cloned.get(obj);
  }
  let newObj = {};
  cloned.set(obj, newObj);
  for (let key in obj) {
    if (obj[key] === null) {
      newObj[key] = null;
    } else if (typeof obj[key] === "object") {
      newObj[key] = cloneDeepWithLoop(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

