// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// 7
// explanation: the variable a is changed to 7 by the if statement.

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// 5
// explanation: the variable declared with var is function-scoped, not block-scoped.

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// 3
// explanation: The expression a = 3 creates a global variable a.

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
// 6
// explanation: The global variable a is changed to 6 by the function first().

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// 7
// explanation: The local variable a in the function f() has the value 7.

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// 1
/*
 * explanation:
 * The function a() is hoisted to the top of the function b().
 * So, the function b() becomes:
 * function b() {
 *  function a() {}
 *  a = 10;
 *  return;
 *  }
 *  The expression a = 10 changes the value of the local variable a in the function b() to 10.
 *  instead of the global variable a.
 */
