// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const arr = [1, 2, 3, 4];
const doubled = arr.map((val) => val*2);
console.log(doubled);

// 2. Given an array of numbers, return an array of numbers that are even.
const even = arr.filter((val) => val % 2 === 0);
console.log(even);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
let str = "Hello World";
const reverse = str.split('').reduce((res, curCh) => curCh+res);
console.log(reverse);
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
arr.reduce
function flattenArr (nestedArr){
    return nestedArr.reduce((flattened, cur) => {
        if(Array.isArray(cur)) {
            cur = flattenArr(cur);
        }
        return flattened.concat(cur);
    }, []);
}
const nestedArr = [[0, 1], [2, 3], [4, 5]];
const nestedArr2 = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(flattenArr(nestedArr));
console.log(flattenArr(nestedArr2));