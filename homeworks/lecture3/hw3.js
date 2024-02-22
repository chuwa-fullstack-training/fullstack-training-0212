function counter() {
    // implement here
    var cur = 0;
 
    return function(b) {
        if (arguments.length === 1) {
            cur += b;
        }
        return cur;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8