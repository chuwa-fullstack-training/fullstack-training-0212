// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const array = [1, 2, 3, 4];
const doubled = array.map( number => number*2);
const doubled_2 = array.reduce((acc, current) => {
    acc.push(current * 2);
    return acc;
}, []);

// 2. Given an array of numbers, return an array of numbers that are even.
const filter_even = array.filter(number => number%2 === 0);
const filter_even_2 = array.reduce((acc, current) => {
    if(current%2 === 0){
        acc.push(current);
    }
    return acc;
}, []);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reversed = str.split(' ').reduce((acc, character) => {
    character + acc;
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

const arr = [[0, 1], [2, 3], [4, 5]];
const flattened = arr.reduce((acc, element) => acc.concat(element), []);