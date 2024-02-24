// what is the output in order? and explain why?

// 1
console.log("a");
setTimeout(() => console.log("b"), 0);
console.log("c");
new Promise((resolve, reject) => {
  resolve("d");
  console.log("e");
  reject("f");
}).then((result) => console.log(result));
// output: a c e d b
// explain: a will be printed first, then the setTimeout will be added to the callback queue,
// then c will be printed, then the promise will be executed, e will be printed, then resolve will be called,

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

fn().then((res) => {
  console.log(res);
});

console.log("start");
// output: start 1 success
// explain: start will be printed first, then the fn will be executed, 1 will be printed, then resolve will be called
