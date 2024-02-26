// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
let newArray = array.map(number=> number*2);
// 2. Given an array of numbers, return an array of numbers that are even.
let newArray = array.filter(number=>number%2===0);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
let reverse= inputString.split('').reduce((accumulator,currentChar)=>currentChar+accumulator,'');
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
let flattenArray= array.reduce((accumulator,currentArray)=>accumulator.concat(currentArray),'')