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
// the output is "a c e d b", the first a will be output immediately, and the setTimeout function put the
// b into the callback queue which has lower priority than the following c, so c will be output secondly
// and the promises will create a microtask queue which has higher priority than callback queue but will be
// put in the result part where right after e is being output, because the promise only execute either 
// resolve or reject, so the f will be ignored. Lastly, print out the c from the callback queue

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
// the output is "1 start success", because within the promise function, the 1 will be output immediately as
// part of the Promise's executor function, then the resolve will be put into the then function which creates
// a microtask queue, notably, the microtask will executed after the current call stack is cleared, therefore,
// after the start has been output, the success will be output then.
