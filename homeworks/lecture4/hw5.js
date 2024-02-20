// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;
const dict = {};

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    if (dict.hasOwnProperty(obj)) {
        return dict[obj];
    }
    const new_obj = {};
    dict[obj] = new_obj;
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            new_obj[key] = cloneDeepWithLoop(obj[key])
        } else {
            new_obj[key] = obj[key];
        }
    }
    return new_obj;
}