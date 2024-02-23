// what is the output in order? and explain why?

// 1
console.log('a');
// executes immediately, so "a" is the first otuput
setTimeout(() => console.log('b'), 0);
// output "b" will be hold due to setTimeout, it will be put into macrotask queue, 
// and will execute after microtask queue get empty
console.log('c');
// execute sequentially after 'a'

new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  // execute immdiately as Promise is defined
  // output here is : a c e 
  reject('f');
}).then(result => console.log(result));
// .then for promise will return resolve result, which is 'd', 
// but it will be put inot microtask queue for processing now 

// After immeidate job done, a c e prints out, microtasks will execute first, which 'd' prints out
// After all microtasks finished, macrotask will be processed, b will be prints out finally
// therefore, the final output is : a c e d b

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    // This console will print immediately when fn function is excuted. 
    resolve('success');
    // The resolve callback will be put into microtask queue
  });

fn().then(res => {
  console.log(res);
});
// fn function execute, '1' prints out immediately

console.log('start');
// executes right after fn is executed
// microtasks will execute after this console. 

// Output : a start success