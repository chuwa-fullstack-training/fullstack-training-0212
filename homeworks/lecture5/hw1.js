// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 * 5 5 5 5 5
 * setTimeout() is called for each iteration, creating asynchronouse callbacks,
 * and these callbacks are scheduled to execute after 1 second.
 * But the callback function(console.log(i)) is in arrow function, when executing, it
 * looks up the value `i` to its lexical scope, which is the scope of the `for` loop.
 * However, by the time executing the callback function after 1 second, the for loop 
 * has already finished. And the value `i` has become 5. And since i is declared as
 * `var`, so it's function-scoped, meaning there is only one `i` variable shared 
 * across all iterations of the loop. 
 */
// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 * 0 1 2 3 4
 * Same as above, except that `i` is declared using `let`, which means it's block-scoped,
 * creating a new binding for `i` in each iteration of the loop. So it would be 0-4.
 */

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
/**
 * 0 1 2 3 4
 * this time, the outer scope of `console.log(i)` is(function(i){...})(i), and the IIFE
 * creates a new scope for each iteration of the loop, the variable `i` is passed in as
 * an argument to the IIFE, which effectively captures the current value of `i` in each
 * iteration. Then the value `i` is preserved for each setTimeout callback, which is 0-4
 */

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
/**
 * `I am fn`
 * Because even though you reassigned fn after the setTimeout, in the callback 
 * funciton of setTimeout, it still preserves the reference to the orignal fn, 
 * not the newly assigned one.
 */
// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/**
 * name: 'another obj'
 * because the reference in the callback function of setTimeout is to the object,
 * and the `name` variable stores in the object is a primitive variable, 
 * it would change directly with this sentence `obj.name = 'another obj'`, however
 * the callback function `console.log(obj)` would execute only after all the code 
 * are executed, so the name was already changed to `another obj` by then.
 */