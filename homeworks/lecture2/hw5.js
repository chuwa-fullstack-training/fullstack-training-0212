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
//undefined
//5
//5
/* 
x is global declared at the beginning but undefined, so it's !== 3
first console.log(y), y is declared but not assigned to a value yet.
next line declares y with value 5, hoisting to the top of the block
now y is 5 and assign glocal variable x with value 3
now print out y is 5
as now x is 3, print out y is 5 again
*/

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
//2
//2
/* declares global x and assigns x with value 3
 x is 3, so x reassigned to 2 by if statement
 first console.log prints out the inner x, now is 2
 second console.log prints the global x now is 2
 */
