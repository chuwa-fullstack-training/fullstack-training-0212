// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const arr = [1,2,3,4,5];
const a1 = arr.map(item=>item + item);
console.log(a1);

// 2. Given an array of numbers, return an array of numbers that are even.
const a2 = arr.filter(item=>item % 2 === 0);
console.log(a2);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reverseStr = (str)=>{
    return str.split('').reduce((currStr, currChar)=> currChar + currStr,'');
}
console.log(reverseStr('Hello World'));
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const flattenFunc = (arr) => {
    return arr.reduce((currArr, currVal)=>Array.isArray(currVal) ? currArr.concat(flattenFunc(currVal)) : currArr.concat(currVal),[]);
}

console.log(flattenFunc([[0,1],[2,3],[4,[5,6]]]));
