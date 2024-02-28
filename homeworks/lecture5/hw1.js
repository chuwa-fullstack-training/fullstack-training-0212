// what is the output of the following code? and explain why?

// 1: all 5
// explain: var is function-scoped and is hoisted to the top of their containing function scope
// This means that there is only one i variable shared across all iterations of the loop.
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2: 0, 1, 2, 3, 4
// explain: let is block-scoped
//  This means that a new i is created for each iteration of the loop, 
// and its scope is limited to the current iteration
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3: 0, 1, 2, 3, 4
// explain: Inside the loop, we have an immediately-invoked function expression, 
// which captures the current value of i in each iteration.
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4: I am fn
// explain: The function passed to setTimeout is the reference of the first fn
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// 5: {name: 'another obj'}
// explain: The obj passed to setTimeout is the reference, however the obj is changed
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';