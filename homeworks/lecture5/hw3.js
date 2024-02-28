// what is the output in order? and explain why?

// 1
// console.log('a');
// setTimeout(() => console.log('b'), 0);
// console.log('c');
// new Promise((resolve, reject) => {
//   resolve('d');
//   console.log('e');
//   reject('f');
// }).then(result => console.log(result));
// a 
// c  
// e 
// d 
// b
// The code first outputs 'a' and 'c' to the console, then creates a Promise object, resolves the Promise in
//  its executable function by resolving it, and outputs 'e' in the process. Due to the use of setTimeout, the callback 
//  function outputs 'b' after the current call stack has finished executing. Finally, with the then method, 
//  the Promise resolves and outputs 'd'. Therefore, the final output order is 'a', 'c', 'e', 'd', 'b'.





2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
// 1
// start
// success
//In the Promise's execute function, output '1' and resolve the Promise to 'success' 
// using the resolve method. Then, the result of the Promise is processed by calling 
// fn() with the then method, and the result is output to the console after the Promise is resolved.
