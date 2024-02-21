function counter() {
    // implement here
    let result=0;
    function count(value) {
        if (value === undefined) {
            return result;
        } else {
            result += value;
            return result;
        }
    }
    return count
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8