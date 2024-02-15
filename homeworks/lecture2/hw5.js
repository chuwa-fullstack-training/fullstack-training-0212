// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}
// undefined 5 5
// y was not defined when called the first time
// x is defined to 3 in the function

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
// 2 3
// log inside if is executed because x = 3 and then x is reassigned a new value of 2

