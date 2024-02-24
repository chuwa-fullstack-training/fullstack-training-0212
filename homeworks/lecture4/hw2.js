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
// answer one
function doubleNumbers(numbers) {
    return numbers.map(function(value, index, array) {
        value = value * 2;
    });
}
//answer two
function evenNumbers(numbers) {
    return numbers.filter(num => num %2 == 0);
}
//answer three
function reverseStirng(text) {
    return text.split('').reverse().join();
}
//answer four 
function flattenArray(arr) {
    return arr.reduce((flatArray, current) => {
        return flatArray.concat(Array.isArray(current) ? flattenArray(current) : current);
    },[]);
}