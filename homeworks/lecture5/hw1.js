// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//5
//5
//5
//5
//5
//because the "setTimeout(() => console.log(i), 1000)" will  be put into callback queue. It will be executed after the loop. Then, the function scope variable i is 5 for all iteration.


// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//0
//1
//2
//3
//4
// "let" creates different block scope variable i at every iteration. so i will display as 0 to 4.


// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//0
//1
//2
//3
//4
// the above funtion is a IIFE funtion. In every interation, the IIFE will create a new function scope variable i in the IIFE scope. Then, the result will be from 0 to 4.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// I am fn
//in "setTimeout", it captures the reference to the function at the time of scheduling.So the original fn function will be executed.


// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//{name: 'another obj'}
//the change of name will be executed before the log(obj). The JavaSript use reference for the object. Then, the change of object name will be diaplay at setTimeout();