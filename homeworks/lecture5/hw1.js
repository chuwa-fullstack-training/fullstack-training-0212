// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output: 5 5 5 5 5
// explain: the var i will be hoisted to the top of the function,
// i will be extended to the global scope, so the value of i will be 5 after the loop.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output: 0 1 2 3 4
// explain: the let i will be block-scoped, so the value of i will be the value of i in each iteration.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// output: 0 1 2 3 4
// explain: the value of i in each iteration will be passed to the function as an argument.
// so the value of i in function will be the value of i in each iteration.

// 4
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000);
fn = () => {
  console.log("I am another fn");
};
// output: I am fn
// explain: the setTimeout will take the value of fn(the function body) at the time of calling setTimeout.

// 5
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";
// output: { name: 'another obj' }
// explain: the obj was passed by reference, when the callback fucntion is called, the value of obj has been changed.

