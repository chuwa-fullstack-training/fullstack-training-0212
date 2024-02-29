// what is the output in order? and explain why?

// 1
// output: a c e d b
// Promise is microtask in javascript and setTimeout is macrotask,the callback queue
// will process microtask first. Since the promise is resolved, it will print out
// the resolved value; Other console.log statements will be printed out in order;
console.log("a");
setTimeout(() => console.log("b"), 0);
console.log("c");
new Promise((resolve, reject) => {
  resolve("d");
  console.log("e");
  reject("f");
}).then((result) => console.log(result));

// 2
// output: 1 start success
// 1 will be printed first when executing fn, the resolve callback will put
// into the callback queue, then "start" will be printed since it is in the
// call stack and will be executed before the callback task;
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

fn().then((res) => {
  console.log(res);
});

console.log("start");
