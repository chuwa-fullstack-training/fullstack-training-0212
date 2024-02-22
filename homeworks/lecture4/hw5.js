// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloned = new Map(); 
const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (cloned.has(obj)) {
        return cloned.get(obj);
    }
    const clone = {};
    cloned.set(obj, clone)
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = cloneDeepWithLoop(obj[key])
        }
    }
    return clone;
}
