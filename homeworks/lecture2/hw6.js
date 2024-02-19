// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    if (list.length === 0) {
        return undefined;
    }
    // return Math.max(...list);
    let largest = list[0];
    for (const val of list) {
        if (val > largest) {
            largest = val;
        }
    }
    return largest;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    let n = list.length;
    if (n === 0) {
        return undefined;
    }

    // return list.reverse(); 
    // return [...list].reverse(); 
    let start = 0;
    let end = n - 1;

    while (start < end) {
        let temp = list[start];
        list[start] = list[end];
        list[end] = temp;

        start++;
        end--;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    let count = 0;
    for (const val of list) {
        if (val === element) {
            count++;
        }
        if (count === 2) {
            return true;
        }
    }
    return false;
}