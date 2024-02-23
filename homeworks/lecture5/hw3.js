// what is the output in order? and explain why?

// 1
// a > c > e > d > b
// the f won't print because there is a resolve already inside, the b will be in the queue wait for the call stack to be empty
// the new Promise run immediately
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

// 2
// 1  > start > success
// the success will be printed when the call stack is empty
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
