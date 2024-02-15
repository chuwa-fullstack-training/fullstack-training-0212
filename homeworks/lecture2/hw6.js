// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    let res = Number.MIN_VALUE;
    for (let num of list) {
        res = Math.max(res, num);
    }
    return res;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    let left = 0, right = list.length - 1;
    while (left < right) {
        let temp = list[left];
        list[left] = list[right];
        list[right] = temp;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    let count = 0;
    for (let num of list) {
        if (num === element) {
            count++;
        }
    }
    return count >= 2;
}