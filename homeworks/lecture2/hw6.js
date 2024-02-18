// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    var max= Number.NEGATIVE_INFINITY;
    for(let ele of list){
        if(ele>max){
            max=ele;
        }
    }
    return ele;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    for(let index=0;index<Math.floor(list.length/2); index++){
        let temp= list[index];
        list[index]=list[list.length-index-1];
        list[list.length-index-1]=temp;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    var times=0;
    for(let el of list){
        if(el===element){
            times++;
        }
    }
    if(times>=2) return true;
    return false;
}