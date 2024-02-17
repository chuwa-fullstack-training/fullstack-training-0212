// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let max_num = Number.MIN_VALUE_VALUE;
    for (let num of list) {
        if (num > max_num) {
            max_num = num;
        }
        return max_num;
    }
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    if (list.length === 0){
        return undefined;
    }
    let end  = list.length - 1;
    let start = 0
    while (end > start) {
        const temp = list[start]
        list[start] = list[end]
        list[end] = temp
        start++;
        end--;
    } 
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0
    for (let i of list) {
        if (i === element && count == 1){
            return true;
        }
        if (i === element && count == 0){
            count ++;
        }
    }
    return false;
}