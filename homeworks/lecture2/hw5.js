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
// undefined
// 5
// 5
/*
 * explanation: The variable x is hoisted to the top of the function.
 * But the value of x is not initialized, so it is undefined.
 * Since x is undefined, the first if statement is true.
 * The variable y is hoisted to the top of the function, but not initialized.
 * So the value of y is undefined when it is logged.
 * var y = 5 initializes the value of y to 5.
 * var x = 3 initializes the value of x to 3.
 * The value of y is logged.
 * The value of x is logged.
 */

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
// 2
// 2
/*
 * explanation: The variable x is hoisted to the top of the function.
 * Then the value of x is initialized to 3.
 * The value of x is changed to 2 by the line var x = 2.
 * The value of x is still 2 when it is logged.
 */
