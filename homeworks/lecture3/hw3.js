function counter() {
    let total = 0;
    return function (...nums) {
        if (nums.length > 0) {
            total += nums.reduce((cur_total, num) => cur_total + num, 0);
        }
        return total;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8