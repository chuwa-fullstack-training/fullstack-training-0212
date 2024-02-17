// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if(list.length === 0) return "No elements in the list."
    let max = list[0];
    for(const val of list) {
        if (val > max) {
            max = val;
        }
    }
    return max;
}
// let list = [1, 2, 3];
// console.log(largestElement(list));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let l = 0;
    let r = list.length - 1;
    while(l < r) {
        var temp = list[l];
        list[l] = list[r];
        list[r] = temp;
        l++;
        r--;
    }
}
// const list = [1, 2, 3, 4];
// reverseList(list)
// console.log(list);

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let cnt = 0;
    for(const val of list) {
        if(val === element) {
            cnt++;
        }
    }
    return cnt >= 2;
}
// let list = [1, 2, 3];
// let element = 3;
// console.log(checkTwice(list, element));