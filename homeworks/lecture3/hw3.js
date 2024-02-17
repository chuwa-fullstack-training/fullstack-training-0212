function counter() {
  // implement here
  let cnt = 0;
  // This inner function is returned by counter
  return function (num) {
    if (arguments.length === 0) {
      return cnt;
    }
    cnt += num;
    return cnt;
  };
}

let count = counter();
console.log(count(3)); // Output: 3
console.log(count(5)); // Output: 8 (3 + 5)
console.log(count()); // Output: 8
