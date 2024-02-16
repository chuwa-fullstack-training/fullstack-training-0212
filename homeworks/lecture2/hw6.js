// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if (!list || list.length === 0) {
        return null;
    }
    let res = Number.NEGATIVE_INFINITY
    for (let i = 0; i < list.length; i++){
        res = list[i] > res ? list[i] : res
    }

    return res
}
// Q1 Test
var L = [1,2,5,-8,-1]
console.log("Input list:", L)
const ansQ1 = largestElement(L)
console.log("result is:", ansQ1)
console.log('--------------------------------------------')

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    if (!list || list.length === 0) {
        return list;
    } 
    for (i = 0; i< list.length/2; i++){
        [list[i], list[list.length-i-1]] = [list[list.length-i-1], list[i]]
    }
    return list
}
// Q2 Test
var L = [1,2,5,-8,-1]
console.log("Input list:", L)
const ansQ2 = reverseList(L)
console.log("result is:", ansQ2)
console.log('--------------------------------------------')



// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    if (!list || list.length === 0) {
        return false;
    }
    var count = 0
    for (let i = 0; i< list.length; i++){
        if (list[i]== element){
            count++
        }
    }
    
    return count >=2
}

// Q2 Test
var L = [1,2,5,-8,1,2,9,9,9,0]
console.log("Input list:", L, )
let ansQ3 = checkTwice(L,1)
console.log("check 1, result is:", ansQ3)
ansQ3 = checkTwice(L,0)
console.log("check 0, result is:", ansQ3)
ansQ3 = checkTwice(L,5)
console.log("check 5, result is:", ansQ3)
ansQ3 = checkTwice(L,9)
console.log("check 9, result is:", ansQ3)
console.log('--------------------------------------------')

