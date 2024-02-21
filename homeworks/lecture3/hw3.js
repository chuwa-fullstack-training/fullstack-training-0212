function counter() {
    // implement here
    let sum = 0;
    for(let arg of arguments) {
        sum += arg;
    }
    return function() {
        for(let num of arguments) {
            sum += num;
        }
        return sum;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8