// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Output: 5 5 5 5 5
//As var initialize ii in function score, the setTimeout funciton will execute after the for loop ends. 
// After the for loop ends, i = 5


// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);

}
// Output: 0 1 2 3 4
// The code 'let i = 0' will initiate i in block scope. For each of the loop, we will have a new
// block and we cannot access the 'i' in last loop block. Hence, in each loop block, all the 'i's
// are pointing to different value, from 0 to 4. 
// When the main code is finished, the 'i's in 'console.log(i)' of each block will take different
// values from 0 to 4 and output them.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// Output: 0 1 2 3 4
// In each for loop, the IIFE will create a new scope and the parameter will point to the value (reference)
// that current 'i' in for loop scope points to. Every 'i' will point to next value in next loop scope. The 
// parameter 'i' in last for loop scope will not change as these 'i''s are acctually different variables.
// Hence, the 'console.log(i)' will access 'i''s points to different reference from 0 to 4, and the output 
// will be 0 to 4.


// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// Output: I am fn
// The function passed to "setTimeout" is the reference that console 'I am fn'.
// The reassignment below only make fn point to a new function reference. 
// The one that in the "setTimeout" does not changed.

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// Output: {name: 'another obj'}
// the setTimeout will put the console.log in callback queue after 1000ms
//  at that time, the obj.name has aleady be changed to 'annother obj' 
