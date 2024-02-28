// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5
// 5
// 5
// 5
// 5
//since the setTimeout is callback funcions. in the end of loop, the var i will become 5, so we print i 5 times,
// the result is 5 5 5 5 5

// // 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0
// 1
// 2
// 3
// 4
//we using let as our variable will create its own variable i, so setTimeout will refer to the specific i as 0, 1, 2,3, 4

// // 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0
// 1
// 2
// 3
// 4
// We using IIFE to closure the i, so i will be 0, 1,2,3,4 as the variable, so it will print 0, 1,2,3,4 

// // 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// I am fn
// setTimeout uses the original reference to 'fn' : console.log('I am fn'); even though we assign console.log('I am another fn') later.

// // 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//{ name: 'another obj' }
// setTimeout  will refer to the 'obj' when it executed,  we  modify the 'name' before the setTimeout.
