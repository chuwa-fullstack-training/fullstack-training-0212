function counter() {
  // implement here
  var res = 0;
  return function inner() {
    if (!arguments[0]) {
      return res;
    }
    return res += arguments[0];
  };
}

let count = counter();
console.log(count(3)); // Output: 3
console.log(count(5)); // Output: 8 (3 + 5)
console.log(count()); // Output: 8
