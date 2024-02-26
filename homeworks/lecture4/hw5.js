// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    let clonedObjects = new WeakMap();

    let cloneObject = (originalObj) => {
        if (originalObj === null || typeof originalObj !== 'object') {
            return originalObj;
        }

        if (clonedObjects.has(originalObj)) {
            return clonedObjects.get(originalObj);
        }

        let clonedObj;

        if (Array.isArray(originalObj)) {
            clonedObj = [];
        } else {
            clonedObj = {};
        }

        clonedObjects.set(originalObj, clonedObj);

        for (let key in originalObj) {// applied recursion to deepcopy the project
            if (originalObj.hasOwnProperty(key)) {
                clonedObj[key] = cloneObject(originalObj[key]);
            }
        }

        return clonedObj;
    };

    return cloneObject(obj);
}