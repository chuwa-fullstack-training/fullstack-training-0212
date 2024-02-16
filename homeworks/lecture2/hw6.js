// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    
    // implement your code here
    let currentLargest = list[0]
    for (const element of list)
    {
        if(currentLargest < element)
        {
            currentLargest = element;
        }
    }

    return currentLargest
    
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here

    for(let head = 0, tail = list.length - 1; head < tail ; head++, tail--)
    {
        let temp = list[head];
        list[head] = list[tail];
        list[tail] = temp
    }
}



// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0
    for(const value of list)
    {
        if(value === element)
        {
            count++;
        }
    }
    return count > 1
}

