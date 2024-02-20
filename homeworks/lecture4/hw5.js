// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const map = new Map();
const cloneDeepWithLoop = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (map.has(obj)) {
        return map.get(obj);
    }
    const clone = Array.isArray(obj) ? [] : {};
    map.set(obj, clone);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = cloneDeepWithLoop(obj[key], map);
        }
    }
    return clone;
};

const data = {
    name: 'foo',
    child: null
};
data.child = data;

const clonedData = cloneDeepWithLoop(data);
console.log(clonedData);