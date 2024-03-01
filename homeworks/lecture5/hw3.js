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

// a c e d b
// setTimeout is a macrotask, executed after microtask, i.e Promise
// reject('f') is ignored since promise is already settled with resolve('d') 

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
// 1 start success 
// execution of promise logs 1
// after all synchronous tasks complete, execute resolve('success') and print it