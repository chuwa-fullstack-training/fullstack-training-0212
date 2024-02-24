// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, clonedObjects = new Map()) => {
    // Handle non-object types
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Check if the object is already cloned to avoid circular references
    if (clonedObjects.has(obj)) {
        return clonedObjects.get(obj);
    }

    // Create a new object or array based on the type of the original object
    const clone = Array.isArray(obj) ? [] : {};

    // Store the clone in the map to handle circular references
    clonedObjects.set(obj, clone);

    // Iterate over the keys of the original object
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // Recursively clone each property, including nested objects
            clone[key] = cloneDeepWithLoop(obj[key], clonedObjects);
        }
    }

    return clone;
};