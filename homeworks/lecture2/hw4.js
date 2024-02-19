// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}

// Output: 7

// 2. When executed, what value will be output? 
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// Output: 5

// 3. When executed, what value will be output?
function f() {
  a = 3; // assign a value to an undeclared variable inside a function => becomes global variable in non-strict mode
}
f();
console.log(a);

// Output: 3 (in strict mode, ReferenceError)

// 4.
var a = 5; // global variable 
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();

// Output: 6

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a); // Output : 7
}
console.log(a); // Output: 5


// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() { } // a() hoisted to the top of b(), so `a` refers to a(), not the global variable `a`, replace a() with number 10
}
b();
console.log(a); // Output: 1
