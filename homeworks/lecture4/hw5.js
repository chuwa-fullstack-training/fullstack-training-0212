// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    let res = {};
    for(let key in obj) {
        if(obj[key] === obj) {
            res[key] = res;
        } else {
            res[key] = obj[key];
        }
    }
    return res;
}
const data = {
    name: 'foo',
    child: null
}
data.child = data;

let testClone = cloneDeepWithLoop(data);
console.log(testClone === data);
console.log(testClone.name);
console.log(testClone.child === testClone);