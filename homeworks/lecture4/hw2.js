// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubledNumbers = numbers.map(num => num * 2); 

// 2. Given an array of numbers, return an array of numbers that are even.
const evenNumbers = numbers.filter(num => num % 2 === 0);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
greet = 'Hello World';
const reverseWords = Array.from(greet).reduce(function(accumulator, current) {
    return current + accumulator;
}, '');

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flatten(arr) {
    return arr.reduce(function(accumulator, current) {
        return accumulator.concat(Array.isArray(current)? flatten(current):current);
    }, [])   
}
