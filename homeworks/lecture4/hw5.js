// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;


const cloneDeepWithLoop = (obj,set = new Set()) => {
    // Implement the function here
    set.add(obj)
    var result = {}
    for(const key in obj)
    {
        if(typeof obj[key] === "object")
        { 
            if(set.has(obj[key]))
            {
                result[key] = obj[key]
            }
            else
            {
                result[key] = cloneDeepWithLoop(obj[key],set)
            }
        }
        else
        {
            result[key] = obj[key]
        }
      
    }
    return result
}
const data = {
    name: 'foo',
    child: null
}

/*Test*/
data.child = data
const dataDeepCopy = cloneDeepWithLoop(data)
console.log(dataDeepCopy)