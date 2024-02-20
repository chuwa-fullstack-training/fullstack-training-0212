/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    if (b != undefined) {
        return a + b;
    } else {
        return function (b) {
            return a + b;
        }
    }
}
