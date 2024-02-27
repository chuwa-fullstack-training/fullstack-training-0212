// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

// prints a c e d b
// a is logged to the console
// b is set to be logged to the console after 0ms, the callback function is added to callback queue
// however it will be scheduled to execute when the call stack is empty 
// c is logged to the console
// d resolves the promise and prints on line 11
// e is logged to the console
// f rejects the promise but the promise has already been resolved, no-op

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');

// prints 1 start success on separate lines
// console.log(1) prints first
// success will is in a callback and will run after call stack is empty
// start prints second, and then success prints
