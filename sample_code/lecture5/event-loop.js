console.log('start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('promise1');
  })
  .then(() => {
    console.log('promise2');
  });

console.log('end');


// output:
// start
// end
// promise1
// promise2
// setTimeout