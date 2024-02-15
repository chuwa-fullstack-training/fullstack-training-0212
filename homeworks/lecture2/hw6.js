// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let max = Number.NEGATIVE_INFINITY;
    for(let i = 0;i < list.length;i++){
        if(list[i] > max) max = list[i];
    }
    return max;
}
// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let len = list.length;
    let i = 0, j = len - 1;
    while(i < j){
        let tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
        i++;
        j--;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let cnt = 0;
    for(let i = 0;i < list.length;i++){
        if(list[i] === element){
            cnt++;
            if(cnt >= 2) return true;
        }
    }
    return false;
}