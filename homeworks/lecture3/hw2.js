/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    } else {
        return (y) => {
            var x = arguments[0];
            return x + y;
        }
    }
}
