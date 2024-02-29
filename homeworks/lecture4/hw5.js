// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    const seen = new Map();
  
    function clone(obj) {
      if (seen.has(obj)) {
        return seen.get(obj);
      }
  
      const copy = {};
      seen.set(obj, copy);
  
      for (const key in obj) {
        copy[key] = clone(obj[key]);
      }
  
      return copy;
    }
  
    return clone(obj);
  }