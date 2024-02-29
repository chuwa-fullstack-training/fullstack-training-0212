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
//a
//c
//e
//d
//b

// in the call stack, the console.log('a') and console.log('c') will be executed firstly, Then, in the callback queue, a promise is in Microtasks queue, a setTimeout() is in Macrotasks queue
//in promise, the console.log('e') will be executed in call stack. Then, promise is solved, it will not be rejected. The promise is send to then() and print out 'd'. then, setTimeout() is executed to print 'b'



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
//1
//start
// sucesss
// When the promise is created, the 1 will be printed. Then, a promise is put to callbackqueue. However, the"console.log('start');" in the call stack will be executed firstly. Lastly, the promise is sent to then() method. The "success" is print at then().