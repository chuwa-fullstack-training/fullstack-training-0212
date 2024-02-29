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
/**
 * a c e d b
 * the callback function was put to callback queue so would be execute last, which is 'b'.
 * so a -> c -> e, both resolve and reject are called, but there is only a `then()` 
 * to catch the resolve response, so it must print `d`.
 * eventually pop from callback queue, we got `b`.
 */
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
/**
 * 1 start success
 * print `1` first without doubt. And resolve is called, meaning the promise is resolved
 * with value 'success'. And `then()` is called, which means the promise is resolved, and
 * the callback inside then will be executed asynchronously after the current execution
 * context is done. So `start` is logged to the console, and eventually the callback 
 * is executed, logging `success`.
 */