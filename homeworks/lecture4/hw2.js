// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubleMap = (nums) => nums.map((num) => num * 2)

// 2. Given an array of numbers, return an array of numbers that are even.
const evenFilter = (nums) => nums.filter((num) => num % 2 ===0);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reverseString = (str) => str.split('').reduce((reversed, char) => char + reversed, '');

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const ans = (arr) => arr.reduce((list,ele) => {
  return list.concat(Array.isArray(ele) ? ans(ele) : ele);
},[])
const arr = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(ans(arr));
