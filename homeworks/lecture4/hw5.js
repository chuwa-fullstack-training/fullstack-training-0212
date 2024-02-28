// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, map = new Map()) => {
  // Implement the function here
  if (typeof obj != "object" || obj === null) {
    return obj;
  }
  if (map.has(obj)) {
    return cloned.get(obj);
  }
  const clone = {};
  map.set(obj, clone);
  for (let key in obj) {
    clone[key] = cloneDeepWithLoop(obj[key], map);
  }
  return clone;
};
