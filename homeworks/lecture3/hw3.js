function counter() {
  var x = 0;
  return function(y) {
    if(y != null) {
       x += y;
    }
    return x;
  }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8
