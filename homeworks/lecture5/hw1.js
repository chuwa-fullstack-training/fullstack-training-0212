// what is the output of the following code? and explain why?

// 1
// print 5 for 5 times, because the i is declared with var, by the call back time out function run ,the loop already done.
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2
// print 0,1,2,3,4, each setTimeout refer to a specific i
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3
// print 0,1,2,3,4, IIFE, the function declare with different i, and run immediately
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4
// print "I am fn". change the function afterwards won't affect the function that already in the setTimeout
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// 5
// print "{name:'another obj'}", the callback function in the setTimeout only point at the address of the object.
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';