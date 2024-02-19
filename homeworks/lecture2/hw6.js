// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    if(list.length == 0) return undefined;
    var max = list[0];
    for(var i in list) {
        max = max(i, max);
    }
    return max;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    if(list.length == 0) return list;
    for(var i = 0; i < list.length / 2; i++) {
        var temp = list[i];
        list[i] = list[list.length  - 1- i];
        list[list.length  - 1- i] = temp;
    }
    return list;
}


// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    if(list.length <= 1) return true;
    var count = 0;
    for(var i in list) {
        if(list[i] == element) {
            count++;
        }
    }
    return count > 1;
}
