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
/*1 */
let array = [1,2,3,4,5]
let mapResult = array.map((num,index,array)=> num * 2 )

/*2 */
let filterResult = array.filter((num,index,array)=> num % 2 != 0)

/*3 */
let reverseResult = array.reduce((accumulator,num,index,array) => 
{
    accumulator.unshift(num)
    return accumulator
},[])

/*4 */
let nestedArray = [[0, [4,4,[5]]], [2, 3,[9,9]], [4, 5,[3,5]]]
let level1Flat = (array,result)=>
{
    return array.reduce((accumulator, element, index, array) =>
    {
        if(Array.isArray(element))
        {
         
            level1Flat(element,accumulator)
       
        }
        else
        {
            accumulator.push(element)
        }
        
        return accumulator
    },result);
}
/*Test*/
console.log("Original: " + array + " after double: " + mapResult)
console.log("Original: " + array + " after filter even number: " + filterResult)
console.log("Original: " + array + " after reverse: " + reverseResult)
let flatResult = level1Flat(nestedArray,[])
console.log("Original: " + nestedArray.toString() + " after flatten: " + flatResult)