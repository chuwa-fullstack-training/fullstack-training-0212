// ONLY use map, filter, reduce to solve the following problems:

let array = [1,2,3,4,5,6,7,8]

console.log("Input Array for Quesion 1&2:", array)

// 1. Given an array of numbers, return an array of numbers that are doubled.
console.log("Quesion 1: ", array.map(x => x*2))

// 2. Given an array of numbers, return an array of numbers that are even.
console.log("Question 2: ", array.filter(x => x%2===0))

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
let Str = "Hello World"
console.log("Input String:", Str)
console.log("Question 3: ", Str.split('').reduce((res,val)=>val+res),'')

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const arr1 = [[0, 1], [2, 3], [4, 5]];
const arr2 = [[0, 1], [2, 3], [4, [5, 6]]]

const flatten = (arr) => {
    return arr.reduce((res, val) => {
      return res.concat(Array.isArray(val) ? flatten(val) : val);
    }, [])
  };
  console.log("Question 4 :")
  console.log("When Input is ", arr1, "result is", flatten(arr1))
  console.log("When Input is ", arr2, "result is", flatten(arr2))
