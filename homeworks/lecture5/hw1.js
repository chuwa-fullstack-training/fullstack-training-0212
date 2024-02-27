// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// it will output 5 times for "5", the reason is that i was declared by var which means after declared
// it will immediately share across each iteration of the loop, so by the time the setTimeout callback executes, 
// the loop has completed, and i has its final value (5 in this case), which is why 5 is printed each time.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// the output is "0, 1, 2, 3, 4" in sequence, because the i declared by let was block-scoping, which means
// its binding to each iteration when callback executes, so each callback sees the i value as it was during its particular iteration of the loop

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// the output will be "0, 1, 2, 3, 4" in sequence, because the function within for loop creates an 
// immediately invoked function expression (IIFE) which means creating a new scope for each loop
// thereby capturing the loop variable's current value for use in the asynchronous callback

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// it will output "I am fn", because after the function was defined and captured by the setTimeout,
// and the schedule and reference has already been pointed to the first function, even within the
// delayed 1000 millisecond, the function has been reassigned a new one, it doesnt change the schedule
// and reference created for the first function

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// it will output 'another obj', because after obj has been created and reference to an address by the 
// setTimeout, after the 1 milliseconds delay, the object has been changed to a new value, but the reference
// still there and unchanged, so when setTimeout was being executed, it will print out the new value