/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
  // implement here
  if (arguments.length === 1) {
    return function (b) {
      return arguments[0] + b;
    };
  } else {
    return arguments[0] + arguments[1];
  }
}
