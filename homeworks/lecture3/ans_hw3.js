function counter() {
    // implement here
    let ans = 0;

    return function(add){
        if(typeof add === 'number'){
            ans += add;
        }
        return ans;
    };
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8