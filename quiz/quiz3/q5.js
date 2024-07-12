// Create a function named addTwo which takes an array of integers as an argument and returns an array where each value has been incremented by two.
// For example:

// addTwo([1, 2, 3]) should return [3, 4, 5]

// addTwo([0, 0]) should return [2, 2]

/* const addTwo = (arr) =>{
    for(let i=0;i<arr.length;i++){
        arr[i]+=2;
    }
    return arr;
} */


    // create a new array
const addTwo = (arr) => {
    return arr.map(num => num + 2);
}
