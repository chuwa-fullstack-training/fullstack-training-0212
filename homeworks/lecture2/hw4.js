// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
/*
7
cuz var a defined a as a function scope variable which is hoisted to the top of the function,
by if statement, it's greater than 5, so re-assigned to 7 
*/

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
/*
5
cuz var a defined a as a function scope variable which is hoisted to the top of the function,
by if statement, it's always true, so a assigned to 5
*/

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
/*
3
cuz a didn't given a keyword, making it as a global variable.
*/

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
/*
6
cuz a in function first () didn't given a keyword, making a as global variable covers original golbal a = 5
*/

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
/*
7
cuz console.log in the function, prints the function variable a = 7 
*/

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
/*
1
function a is hoisted to the top of function b as
function b() {
  function a() {}
  a = 10; 
  return;
}
a = 10 assigns 10 to the function name a
*/
