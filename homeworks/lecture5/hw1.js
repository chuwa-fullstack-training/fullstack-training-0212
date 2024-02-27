// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// prints 5 five times after 1000ms
// var has function scope, only one i is created, call stack is only empty after the end of for loop.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// prints 0,1,2,3,4 separated by 1000ms
// let has block scope, i is created each time, callback can be executed 5 times

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// prints 0,1,2,3,4 separated by 1000ms
// IIFE creates a new scope for each iteration, callback can be executed 5 times

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// prints I am another fn after 1000ms
// fn is reassigned before callback is executed

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// prints another obj
// obj.name is overwritten by the setter before the execution of the callback