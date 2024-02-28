// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
let doubled = array.map((x) => x * 2);
// 2. Given an array of numbers, return an array of numbers that are even.
let even = array.filter((x) => x % 2 === 0);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
let reversedString = str
  .split("")
  .reduce((res, currentVal) => currentVal + res, "");
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

function flattenArray(arr, output = []) {
  for (let element of arr) {
    if (Array.isArray(element)) {
      flattenArray(element, output);
    } else {
      output.push(element);
    }
  }
  return output;
}

let array = [
  [0, 1],
  [2, 3],
  [4, 5],
];
console.log(flattenArray(array, []));
