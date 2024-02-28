// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
  const stack = [];
  const clonedMap = new WeakMap();

  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const rootClone = Array.isArray(obj) ? [] : {};
  stack.push({ original: obj, clone: rootClone });

  while (stack.length > 0) {
    const { original, clone } = stack.pop();

    if (clonedMap.has(original)) {
      continue;
    }

    clonedMap.set(original, clone);

    for (const key in original) {
      if (original.hasOwnProperty(key)) {
        const originalChild = original[key];
        if (originalChild === null || typeof originalChild !== 'object') {
          clone[key] = originalChild;
        } else {
          if (clonedMap.has(originalChild)) {
            clone[key] = clonedMap.get(originalChild);
          } else {
            const childClone = Array.isArray(originalChild) ? [] : {};
            clone[key] = childClone;
            stack.push({ original: originalChild, clone: childClone });
          }
        }
      }
    }
  }

  return rootClone;
};

