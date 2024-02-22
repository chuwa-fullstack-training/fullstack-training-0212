// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// the result is 7

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// the result is 5

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// the result is 3

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();
// the output is 6, because in the first function, the global variable a has been changed to 6 and it 
// will be passed on to the next function 

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// the output will be 7, because the variable has been changed in the function f

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// the output will be 1, because the function a() will be lifted to the top of function b() because of
// the hoisting mechanism of JavaScript, then the variable a is a local value that reference to 10, the
// global variable a outside of function keeps unchanged.
