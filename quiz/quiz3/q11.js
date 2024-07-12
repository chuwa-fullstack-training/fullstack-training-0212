/* Create a function named join which takes two arrays as argument and returns a single array consisting of all the values of those two arrays.
For example:

join([0, 1], [1, 2]) should return [0, 1, 1, 2]

join(['a', 'b'], ['c']) should return ['a', 'b', 'c'] */

const join = (arr1,arr2) =>{
    return arr1.concat(arr2);
}