function counter() {
    // implement here
    let res = 0;
    return (num) => {
        if (num) {
            res += num;
        }
        return res;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8