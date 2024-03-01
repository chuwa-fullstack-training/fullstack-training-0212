// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5 5 5 5 5
// var i has function scope
// the loop will be finished before the execution of setTimeout callback function
// and i equals 5

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0 1 2 3 4
// let i has block scope
// a new i is created for each iteration


// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0 1 2 3 4
// (function(){})() IIFE - Immediately Invoked Function Expression 
// created a new scope capturing the current value of i at the moment of iteration 

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// 'I am fn'
// setTimeout function captures the reference to function at the time it is called

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

// {name: 'another obj'}
// setTimeout function captures the reference of the object
// but the change to the value of the object has reflected