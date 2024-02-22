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
// the output will be "undefined", 5, 5, because there is no declaration of y before console.log(y)
// and after the y declared and assigned a value 5, it will output 5, also, the x has been assigned a
// value of 5 within the if statement, so it will output 5

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
// the output will be 2, 2, because after x has been assigned a value 3, it is changed to 2 within the
// if statement, so the first output will be 2, as of JavaScript, the variable x is already changed so
// it will be the new value outside of the function

