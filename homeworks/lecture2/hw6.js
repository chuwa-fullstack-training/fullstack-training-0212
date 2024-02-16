// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if (list.length === 0) {
        return null;
    }
    let largest = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < list.length; i++) {
        if (list[i] > largest) {
            largest = list[i];
        }
    }
    return largest;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let l = 0;
    let r = list.length - 1;
    while (l < r) {
        let temp = list[r];
        list[r] = list[l];
        list[l] = temp;
        l ++;
        r --;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let cnt = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element) {
            cnt ++;
            if (cnt >= 2) {
                return true;
            }
        }
    }
    return false;
}
