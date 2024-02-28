// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, map = new WeakMap()) => {
    if (obj !== null && typeof obj === 'object') {
        if (map.has(obj)) {
            return map.get(obj);
        }

        const clonedObj = Array.isArray(obj) ? [] : {};

        map.set(obj, clonedObj);

        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                clonedObj[key] = cloneDeepWithLoop(obj[key], map);
            }
        }
        return clonedObj;
    }

    return obj;
};

