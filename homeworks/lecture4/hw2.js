// ONLY use map, filter, reduce to solve the following problems:

let arr = [1,2,3,4,5,6,7,8,9];

// 1. Given an array of numbers, return an array of numbers that are doubled.
let doubled_arr = arr.map((num) => { return num * 2; });

// 2. Given an array of numbers, return an array of numbers that are even.
let even_arr = arr.filter((num) => { return num % 2 == 0; });

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
let str = "Hello World";
let reversed_str = str.split('').reduce((acc, curr) => { return curr + acc; }, "");

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

let arr1 = [[0, 1], [2, 3], [4, 5]];
let arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
let flatten_arr = (arr) => { 
    return arr.reduce((acc, curr) => { 
        if (Array.isArray(curr)) {
            return acc.concat(flatten_arr(curr));
        } else {
            return acc.concat(curr);
        }
    }, []);
};
let flattened_arr1 = flatten_arr(arr1);
let flattened_arr2 = flatten_arr(arr2);

