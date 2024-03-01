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
// b is inside setTimeout whcih will be called last becaused setTimeout will be placed in to the Event queue.
// resolve('d'); will pass d into the then, log('d') after log('e');

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

// 1
// start
// success
// .then is placed into the event queue.
