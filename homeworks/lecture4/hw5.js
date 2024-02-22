// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, map = new Map()) => {
    if(obj === null || typeof obj !== 'object' ){
        return obj;
    }

    if(map.has(obj)){
        return map.get(obj);
    }

    const clone = Array.isArray(obj)?[]: {};
    map.set(obj, clone);

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = cloneDeepWithLoop(obj[key], map);
        }
    }

    return clone;
};