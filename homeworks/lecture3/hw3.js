function counter() {
    // implement here
    let sum = 0;
    return function(num = 0){
        return sum += num;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8