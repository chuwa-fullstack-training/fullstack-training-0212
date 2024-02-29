// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
let arr = [1, 2, 3, 4, 5];
let doubles = arr.map(num => num*2);
console.log(arr);                   // returns [1,2,3,4,5]
console.log("doubles: ", doubles);  // returns [2,4,6,8,10]

// 2. Given an array of numbers, return an array of numbers that are even.
let evens = arr.filter(num => num%2 == 0);
console.log("evens:",evens);   // returns [2,4]

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
let str = "Hello World";
let strReversed = str.split('').reduce((acc, ch) => ch + acc, '');
console.log("str:",str);
console.log("strReversed:",strReversed);

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const flattenArray = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
const arr1 = [[0, 1], [2, 3], [4, 5]];
console.log(flattenArray(arr1)); // [0, 1, 2, 3, 4, 5]

const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(flattenArray(arr2)); // [0, 1, 2, 3, 4, 5, 6]
