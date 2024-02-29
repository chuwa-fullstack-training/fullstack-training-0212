// what is the output of the following code? and explain why?

// 1
// output: 5 5 5 5 5
// i declared with var hoisted to function scope, the value of i will reach 5
// until executing the the asynchronous task;
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2
// output: 0, 1, 2, 3, 4
// i declared with let hoisted to block scope, the value will not be override;
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3
// output: 0 1 2 3 4
// this is the IIFE function and will execute immediately and create a new scope
// for each iteration;
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4
// output: I am fn
// Once the function is defined and captured by the setTimeout, the reference
// will not change even through the it is reassigned to another function;
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000);
fn = () => {
  console.log("I am another fn");
};

// 5
// output: { name: 'another obj' }
// the reference of obj never changed, but the value is changed within 1000ms
// and will print out the new value;
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";
