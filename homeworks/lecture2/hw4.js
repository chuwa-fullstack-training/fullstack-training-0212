// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// Output 7
// var a is changed inside function

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// Output 5
// var a has function scope

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// Output 3
// a is global scope

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
// Output 6
// a is global scope

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// Output 7
// a inside function is printed

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// Output 1
// a inside b() is a function, different from var a outside of function
