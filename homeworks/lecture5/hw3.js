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
// a, c, e, d, b
//1.stack firstly solves main function and executes console.log(), prints a
//2.setTimeout() called and pushed into macroqueue before main stack prints c
//3.then stack empty, microqueue stores the created promise and prints e
//4.Since promise is first resolved, the resolve('d') pushed into microqueue
//5.stack is empty, microqueue pushes resolve('d') into stack and get a promise
//with value 'd', which printed out by .then()
//6.now both stack and microqueue are empty, macroqueue pushes setTimeout()
//into stack and stack prints out 'b' after 0s, immediately

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
// 1, start, success
//1.fn create a new promise, and prints 1 inside the promise
//2.stack solves the main fuction first, prints 'start'
//3.stack creates promise and pushes resolve() into microqueue, since the promise is resolve, meaning fullfilled,
//4.stack empty and now it prints the res of last promise which is resolve() with val 'success' from microqueue 
