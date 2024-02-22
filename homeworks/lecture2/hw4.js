// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
// output 7, a is reassigned.
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}

// 2. When executed, what value will be output?
// output 5, a is defined by var will have function scope
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output?
// output 3, a has a global scope
function f() {
  a = 3;
}
f();
console.log(a);

// 4.
// output 6, a has a global scope
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();

// 5.
// output 7, a is reassigned inside the function.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

// 6.
// output 1, a() is a function inside the function b(), but the var a is outside the function b()
// and will not change
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
