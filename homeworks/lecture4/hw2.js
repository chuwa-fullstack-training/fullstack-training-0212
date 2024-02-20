// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.

// 2. Given an array of numbers, return an array of numbers that are even.

// 3. Reverse the string: "Hello World" -> "dlroW olleH"

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
let double = (arr) => arr.map((value, index, array) => value * 2);
let even = (arr) => arr.filter((value, index, array) => value % 2 === 0);
let reverse = (str) =>
  str.reduce((acc, value, index, array) => value + acc, "");

function flatten(arr) {
  return arr.reduce((acc, value, index, array) => {
    if (Array.isArray(value)) {
      return acc.concat(flatten(value));
    } else {
      return acc.concat(value);
    }
  }, []);
}
