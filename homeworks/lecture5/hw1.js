// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/*Answer: will print "5" 5 times, because the hoisting will move i to the top of the scope which makes it the only i refence
these tasks back the i referece they can find after return to the call stack, at this point the value of i is 5 because it was incremented 5 times 

*/
// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/*Answer: will print "0,1,2,3,4", whichout hoisting the i will be limited to the blocked scope
*/
// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
/*Answer: will print "0,1,2,3,4", var i will be limited to the each function scope
*/
// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
/*Answer: will print "I am fn",Pass by value for fn */
// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/*Answer: will print "another obj",Pass by value for obj but obj is a pointer so the changes will be made to the object */