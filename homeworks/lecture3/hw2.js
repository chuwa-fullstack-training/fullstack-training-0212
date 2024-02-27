/** write a function to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
  // implement here
  let first = arguments[0];
  if (arguments.length === 1) {
    return function inner() {
      return first + arguments[0];
    };
  } else {
    return first + arguments[1];
  }
}

console.log(sum(2)(3));
console.log(sum(2, 3));
