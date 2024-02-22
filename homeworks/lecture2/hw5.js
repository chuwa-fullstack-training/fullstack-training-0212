// Hoisting

// 1.
// output : undefined 5 5
//
var x;

if (x !== 3) {
  // undefined, only the declaration is hoisted, not the assigned value
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  // y is declared and assigned 5
  console.log(y);
}
if (x === 3) {
  // y is not changed
  console.log(y);
}

// 2. output: 2 2
var x = 3;
if (x === 3) {
  var x = 2;
  // x is reassigned to 2
  console.log(x);
}
// x is still 2
console.log(x);
