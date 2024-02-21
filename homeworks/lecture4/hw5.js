// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;
function cloneDeepWithLoop(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const newObj = {};
  for (const key in obj) {
    newObj[key] = cloneDeepWithLoop(obj[key]);
  }
  return newObj;
}

const data = {
  name: "foo",
  child: null,
};
const clonedObj = cloneDeepWithLoop(data);
console.log(clonedObj);
